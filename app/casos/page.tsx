import type { Metadata } from 'next'
import { ArrowRight, Lightbulb, MessageCircle, Target } from 'lucide-react'
import { cases, illustrativeCasesNotice } from '@/src/data/cases'
import { CallToAction, PageIntro } from '@/components/site-sections'

export const metadata: Metadata = {
  title: 'Casos ilustrativos de uso de IA',
  description: 'Ejemplos académicos de cómo comercios, empresas de logística y negocios turísticos podrían aplicar soluciones de inteligencia artificial.',
}

const icons = [MessageCircle, Target, Lightbulb]

export default function CasesPage() {
  return (
    <main>
      <PageIntro eyebrow="Casos ilustrativos" title="La IA cobra sentido cuando responde a una necesidad." description="Estos ejemplos ficticios muestran cómo un reto operativo puede transformarse en un piloto acotado, con personas involucradas en cada decisión." />
      <section className="section-block cases-page-section">
        <div className="container">
          <div className="notice-banner"><span className="notice-mark">i</span><p><strong>{illustrativeCasesNotice}.</strong> Los casos, organizaciones y resultados descritos son inventados. No representan clientes ni resultados reales.</p></div>
          <div className="case-study-list">
            {cases.map((item, index) => {
              const Icon = icons[index]
              return <article className="case-study" key={item.id}>
                <div className={`case-study-aside case-visual-${item.id}`}><span className="case-study-num">0{index + 1}</span><span className="case-study-icon"><Icon size={25} strokeWidth={1.6} aria-hidden="true" /></span><span className="case-study-sector">{item.sector}</span></div>
                <div className="case-study-content">
                  <span className="eyebrow">Ejemplo · {item.sector}</span><h2>{item.title}</h2>
                  <div className="case-study-columns">
                    <div><h3>El reto</h3><p>{item.challenge}</p></div>
                    <div><h3>La solución explorada</h3><p>{item.solution}</p></div>
                    <div><h3>Resultado cualitativo</h3><p>{item.result}</p></div>
                  </div>
                </div>
              </article>
            })}
          </div>
        </div>
      </section>
      <CallToAction title="Cada empresa tiene un contexto distinto." description="Podemos ayudarte a encontrar una oportunidad que encaje con las necesidades de tu equipo." buttonLabel="Conversemos" />
    </main>
  )
}
