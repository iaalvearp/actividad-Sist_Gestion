import { ArrowDown, Check, Circle, ShieldCheck } from 'lucide-react'
import { homeMosaic } from '@/src/data/site'

export function HeroMosaic() {
  return (
    <aside className="hero-mosaic" aria-label="Ejemplos de procesos que pueden abordarse con inteligencia artificial">
      <article className="mosaic-card mosaic-workflow">
        <div className="mosaic-card-top">
          <span className="mosaic-label">{homeMosaic.workflowLabel}</span>
          <span className="mosaic-status"><span />{homeMosaic.workflowStatus}</span>
        </div>
        <h2>{homeMosaic.workflowTitle}</h2>
        <p className="mosaic-description">{homeMosaic.workflowDescription}</p>
        <ol className="mosaic-flow-list">
          {homeMosaic.flow.map((step, index) => (
            <li key={step.title}>
              <span className="mosaic-step-number">0{index + 1}</span>
              <span className="mosaic-step-copy"><strong>{step.title}</strong><small>{step.description}</small></span>
              {index < homeMosaic.flow.length - 1 && <ArrowDown className="mosaic-step-arrow" size={14} aria-hidden="true" />}
            </li>
          ))}
        </ol>
        <div className="mosaic-workflow-footer"><span className="mosaic-check"><Check size={13} aria-hidden="true" /></span>{homeMosaic.workflowFooter}</div>
      </article>

      <article className="mosaic-card mosaic-control">
        <div className="mosaic-control-top"><span className="mosaic-control-icon"><ShieldCheck size={20} strokeWidth={1.7} aria-hidden="true" /></span><span className="mosaic-label">{homeMosaic.controlLabel}</span></div>
        <h3>{homeMosaic.controlTitle}</h3>
        <p>{homeMosaic.controlDescription}</p>
        <span className="mosaic-control-orbit" aria-hidden="true" />
      </article>

      <article className="mosaic-card mosaic-principle">
        <div className="mosaic-principle-top"><span className="mosaic-label">{homeMosaic.principleLabel}</span><span className="mosaic-principle-symbol" aria-hidden="true"><Circle size={19} /><Circle size={19} /><Circle size={19} /></span></div>
        <h3>{homeMosaic.principleTitle}</h3>
        <div className="mosaic-principle-flow">
          {homeMosaic.principleSteps.map((step, index) => <span key={step}><i>0{index + 1}</i>{step}</span>)}
        </div>
      </article>
    </aside>
  )
}
