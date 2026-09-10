import { frequentlyAskedQuestions } from "@/data/site-content";

export function FaqList() {
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="section-heading" data-reveal>
        <span className="eyebrow">Najczęstsze pytania</span>
        <h2 id="faq-title">Krótko i konkretnie.</h2>
      </div>
      <div className="faq-list">
        {frequentlyAskedQuestions.map((item, index) => (
          <details key={item.question} data-reveal>
            <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
