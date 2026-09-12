import { serviceOffers } from "@/data/services";

export function ServiceOfferGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`offer-grid${compact ? " offer-grid--compact" : ""}`}>
      {serviceOffers.map((service) => (
        <article className="offer-card" id={service.slug} key={service.slug} data-reveal>
          <div className="offer-card-heading">
            <span>{service.number}</span>
            <p>{service.eyebrow}</p>
          </div>
          <h3>{service.title}</h3>
          <p className="offer-summary">{service.summary}</p>
          {!compact ? (
            <>
              <ul>
                {service.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <p className="offer-best-for"><strong>Dobry wybór:</strong> {service.bestFor}</p>
            </>
          ) : null}
        </article>
      ))}
    </div>
  );
}
