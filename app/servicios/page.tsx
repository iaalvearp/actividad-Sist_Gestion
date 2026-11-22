import type { Metadata } from 'next'
import { ArrowRight, Check } from 'lucide-react'
import { services } from '@/src/data/services'
import { CallToAction, PageIntro } from '@/components/site-sections'

export const metadata: Metadata = {
  title: 'Servicios de inteligencia artificial para pymes',
  description: 'Conoce nuestros servicios de diagnóstico, identificación de casos de uso, automatización, asistentes y capacitación responsable en IA.',
}

export default function ServicesPage() {
  return (
    <main>
      <PageIntro eyebrow="Servicios" title="IA útil para los retos de tu empresa." description="Acompañamos a pequeñas y medianas empresas a pasar de una inquietud a una solución concreta, con el alcance y el ritmo adecuados." />
      <section className="section-block services-page-section">
        <div className="container service-detail-list">
          {services.map((service, index) => <article className="service-detail" key={service.id}>
            <div className="service-detail-index"><span>{String(index + 1).padStart(2, '0')}</span><span className="service-detail-rule" /></div>
            <div className="service-detail-content">
              <span className="eyebrow">{service.id.replaceAll('-', ' ')}</span>
              <h2>{service.title}</h2>
              <p className="service-detail-summary">{service.summary}</p>
              <div className="service-detail-meta">
                <div><h3>¿Para quién es?</h3><p>{service.audience}</p></div>
                <div><h3>¿Qué incluye?</h3><p><Check size={16} aria-hidden="true" />{service.deliverable}</p></div>
              </div>
              <a className="text-link" href="/contacto">Hablemos de este servicio <ArrowRight size={15} aria-hidden="true" /></a>
            </div>
          </article>)}
        </div>
      </section>
      <CallToAction title="No hace falta tener todo resuelto para empezar." description="Conversemos sobre tu situación y definamos si existe un primer paso que tenga sentido para tu equipo." />
    </main>
  )
}
