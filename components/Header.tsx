export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#start" aria-label="MV Studio — strona główna">
        MV<span>•</span>STUDIO
      </a>
      <nav className="desktop-nav" aria-label="Główna nawigacja">
        <a href="#o-nas">O nas</a>
        <a href="#uslugi">Usługi</a>
        <a href="#projekty">Projekty</a>
      </nav>
      <a className="header-contact" href="#kontakt">
        Porozmawiajmy <span aria-hidden="true">↘</span>
      </a>
    </header>
  );
}
