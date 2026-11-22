import type { Metadata } from 'next'
import { ArrowDown, Check } from 'lucide-react'
import { processSteps } from '@/src/data/process'
import { CallToAction, PageIntro } from '@/components/site-sections'

export const metadata: Metadata = {
  title: 'Nuestro proceso de implementación de IA',
  description: 'Cuatro etapas para diagnosticar, priorizar, probar y medir una solución de inteligencia artificial junto a tu equipo.',
}

export default function ProcessPage() {
  return (
    <main>
      <PageIntro eyebrow="Nuestro proceso" title="Un camino claro, construido en equipo." description="Cada proyecto parte de escuchar y entender. De ahí, avanzamos con objetivos compartidos y decisiones que tu organización puede revisar." />
      <section className="section-block process-page-section">
        <div className="container">
          <div className="process-timeline">
            {processSteps.map((step, index) => <article className="timeline-step" key={step.number}>
              <div className="timeline-marker"><span>{step.number}</span>{index < processSteps.length - 1 && <span className="timeline-line" aria-hidden="true" />}</div>
              <div className="timeline-content">
                <span className="timeline-label">Etapa {step.number}</span>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
                <div className="timeline-outcome"><Check size={17} aria-hidden="true" /><span><strong>Al cerrar esta etapa</strong>{step.outcome}</span></div>
              </div>
              <span className="timeline-arrow" aria-hidden="true">{index < processSteps.length - 1 ? <ArrowDown size={19} /> : null}</span>
            </article>)}
          </div>
          <div className="process-note"><span className="process-note-mark">i</span><p>El alcance y el orden pueden adaptarse a tu contexto. Si un piloto no aporta valor, revisamos juntos qué aprendimos antes de seguir.</p></div>
        </div>
      </section>
      <CallToAction title="El primer paso es entender el reto." description="Cuéntanos qué proceso te gustaría mejorar y te ayudaremos a explorar opciones realistas." />
    </main>
  )
}
