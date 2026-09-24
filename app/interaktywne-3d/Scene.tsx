"use client";

import { Component, useEffect, useRef, useState, useSyncExternalStore, type ReactNode, type RefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MathUtils, type Group } from "three";
import { variants, type Motion } from "./Showroom";
import styles from "./showroom.module.css";

function subscribeMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 760px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function getSimpleMode() { return window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 760px)").matches; }

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

function Lamp({ variant, motion, still }: { variant: number; motion: RefObject<Motion>; still: boolean }) {
  const group = useRef<Group>(null);
  const time = useRef(0);
  const width = useThree((state) => state.viewport.width);
  const material = variants[variant];
  useFrame((_, delta) => {
    if (!group.current || still) return;
    time.current += Math.min(delta, 0.05);
    const weight = 1 - Math.exp(-delta * 5);
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, -0.35 + motion.current.rotation + motion.current.x + Math.sin(time.current * 0.22) * 0.16, weight);
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, motion.current.tilt + motion.current.y, weight);
  });
  const surface = <meshStandardMaterial color={material.color} roughness={material.roughness} metalness={material.metalness} />;
  return <group ref={group} scale={Math.min(1, width / 2.9)} rotation={[0, -0.35, 0]} position={[0, -0.2, 0]}>
    <mesh position={[0, -1.55, 0]}><cylinderGeometry args={[0.82, 0.9, 0.16, 48]} />{surface}</mesh>
    <mesh position={[0, -1.47, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.73, 0.016, 8, 48]} /><meshStandardMaterial color="#82ff1f" emissive="#82ff1f" emissiveIntensity={0.5} /></mesh>
    <mesh position={[0, -0.66, 0]}><cylinderGeometry args={[0.065, 0.1, 1.6, 20]} />{surface}</mesh>
    <group position={[0, 0.72, 0]} rotation={[0.12, 0, -0.22]}>
      <mesh><torusGeometry args={[1.08, 0.14, 16, 80]} />{surface}</mesh>
      <mesh position={[0, 0, 0.135]}><torusGeometry args={[1.06, 0.025, 8, 80]} /><meshStandardMaterial color="#82ff1f" emissive="#82ff1f" emissiveIntensity={1.3} toneMapped={false} /></mesh>
      <mesh position={[0, 0, -0.135]}><torusGeometry args={[1.06, 0.025, 8, 80]} /><meshStandardMaterial color="#82ff1f" emissive="#82ff1f" emissiveIntensity={1.3} toneMapped={false} /></mesh>
    </group>
  </group>;
}

export default function Scene({ variant, motion, paused }: { variant: number; motion: RefObject<Motion>; paused: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  const [lost, setLost] = useState(false);
  const simple = useSyncExternalStore(subscribeMotion, getSimpleMode, () => true);
  useEffect(() => {
    let visible = true;
    const update = () => setActive(visible && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    if (host.current) observer.observe(host.current);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);
  useEffect(() => {
    const element = host.current;
    const onLost = (event: Event) => { event.preventDefault(); setLost(true); };
    element?.addEventListener("webglcontextlost", onLost, true);
    return () => element?.removeEventListener("webglcontextlost", onLost, true);
  }, []);
  return <div ref={host} className={styles.canvas} aria-hidden="true">
    {!lost && <SceneBoundary><Canvas
      camera={{ position: [0, 0.6, 6.6], fov: 39 }}
      dpr={simple ? 1 : [1, 1.5]}
      frameloop={simple || paused || !active ? "demand" : "always"}
      gl={{ antialias: !simple, alpha: false, powerPreference: "low-power" }}
      fallback={<span className={styles.fallbackLabel}>Podgląd statyczny · WebGL niedostępny</span>}
    >
      <color attach="background" args={["#101210"]} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 5, 4]} intensity={4} color="#fff4dd" />
      <directionalLight position={[-4, 2, -3]} intensity={5} color="#c4dacf" />
      <Lamp variant={variant} motion={motion} still={simple || paused} />
    </Canvas></SceneBoundary>}
  </div>;
}
