import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { benefits, homeCopy } from '@/src/data/site'
import { services } from '@/src/data/services'
import { cases } from '@/src/data/cases'
import { BenefitsRow, CallToAction, CaseCard, ProcessPreview, ServiceCard } from '@/components/site-sections'
import { HeroMosaic } from '@/components/hero-mosaic'

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">{homeCopy.eyebrow}</p>
            <h1>{homeCopy.title}</h1>
            <p className="hero-description">{homeCopy.description}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacto">{homeCopy.primaryAction}<ArrowUpRight size={17} aria-hidden="true" /></Link>
              <Link className="button button-outline" href="/servicios">{homeCopy.secondaryAction}<ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="hero-note"><span className="hero-note-check"><Check size={13} aria-hidden="true" /></span>{homeCopy.heroNote}</div>
          </div>
          <HeroMosaic />
        </div>
        <div className="hero-bottomline"><div className="container hero-bottomline-inner"><span>Guayaquil · Ecuador</span><span>Personas primero, tecnología después</span></div></div>
      </section>

      <BenefitsRow items={benefits} title={homeCopy.benefitsTitle} eyebrow={homeCopy.benefitsEyebrow} />

      <section className="section-block services-home" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-heading-row"><div><span className="eyebrow">{homeCopy.servicesEyebrow}</span><h2 id="services-heading">{homeCopy.servicesTitle}</h2><p>{homeCopy.servicesDescription}</p></div><Link className="section-link" href="/servicios">{homeCopy.servicesLink} <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
          <div className="services-grid">{services.slice(0, 4).map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}</div>
        </div>
      </section>

      <section className="section-block process-home" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-heading-row"><div><span className="eyebrow">{homeCopy.processEyebrow}</span><h2 id="process-heading">{homeCopy.processTitle}</h2><p>{homeCopy.processDescription}</p></div><Link className="section-link" href="/proceso">{homeCopy.processLink} <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
          <ProcessPreview />
          <div className="process-caption"><span className="caption-line" />{homeCopy.processNote}</div>
        </div>
      </section>

      <section className="section-block cases-home" aria-labelledby="cases-heading">
        <div className="container">
          <div className="section-heading-row"><div><span className="eyebrow">{homeCopy.casesEyebrow}</span><h2 id="cases-heading">{homeCopy.casesTitle}</h2><p>{homeCopy.casesDescription}</p></div><Link className="section-link" href="/casos">{homeCopy.casesLink} <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
          <div className="cases-grid">{cases.slice(0, 2).map((item, index) => <CaseCard key={item.id} item={item} index={index} />)}</div>
          <p className="illustrative-note"><span />{homeCopy.casesNote}</p>
        </div>
      </section>

      <CallToAction title={homeCopy.finalTitle} description={homeCopy.finalDescription} />
    </main>
  )
}
