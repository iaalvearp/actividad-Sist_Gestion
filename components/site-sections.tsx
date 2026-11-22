import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Compass,
  MessageCircle,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Workflow,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Service, ServiceIcon } from '@/src/data/services'
import type { CaseStudy } from '@/src/data/cases'
import type { Article } from '@/src/data/articles'
import { processSteps } from '@/src/data/process'

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  scan: ScanSearch,
  target: Target,
  workflow: Workflow,
  messages: MessageCircle,
  book: BookOpen,
}

const benefitIcons: Record<string, LucideIcon> = {
  compass: Compass,
  users: UsersRound,
  shield: ShieldCheck,
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro">
      <div className="container page-intro-inner">
        <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}

export function BenefitsRow({ items, title, eyebrow }: { items: { icon: string; title: string; description: string }[]; title: string; eyebrow: string }) {
  return (
    <section className="benefits-section" aria-labelledby="benefits-title">
      <div className="container">
        <div className="benefits-heading"><span className="eyebrow">{eyebrow}</span><h2 id="benefits-title">{title}</h2></div>
        <div className="benefits-grid">
          {items.map((item, index) => {
            const Icon = benefitIcons[item.icon]
            return <article className="benefit-item" key={item.title}>
              <span className="benefit-icon">{Icon && <Icon size={20} strokeWidth={1.8} aria-hidden="true" />}</span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
              <span className="benefit-index">0{index + 1}</span>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  const Icon = serviceIcons[service.icon]
  return (
    <article className="service-card">
      <div className="card-topline"><span className="service-icon"><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></span><span className="card-index">{String((index ?? 0) + 1).padStart(2, '0')}</span></div>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link className="text-link" href="/contacto">Conversemos <ArrowRight size={15} aria-hidden="true" /></Link>
    </article>
  )
}

export function ProcessPreview() {
  return (
    <div className="process-preview-grid">
      {processSteps.map((step) => <article className="process-preview-item" key={step.number}>
        <span className="process-number">{step.number}</span>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </article>)}
    </div>
  )
}

export function CaseCard({ item, index }: { item: CaseStudy; index?: number }) {
  return (
    <article className="case-card">
      <div className={`case-visual case-visual-${item.id}`} aria-hidden="true">
        <span className="case-orbit case-orbit-one" /><span className="case-orbit case-orbit-two" />
        <span className="case-monogram">{item.initials}</span>
        <span className="case-visual-label">{item.sector}</span>
      </div>
      <div className="case-card-body">
        <span className="case-sector">Caso ilustrativo · {item.sector}</span>
        <h3>{item.title}</h3>
        <p>{item.result}</p>
        {index !== undefined && <span className="case-number">CASO 0{index + 1}</span>}
      </div>
    </article>
  )
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <div className="article-card-top"><span className="article-category">{article.category}</span><span>{article.readTime}</span></div>
      <h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2>
      <p>{article.excerpt}</p>
      <div className="article-card-bottom"><span>{article.date} · {article.author}</span><Link href={`/blog/${article.slug}`} aria-label={`Leer artículo: ${article.title}`}><ArrowUpRight size={19} aria-hidden="true" /></Link></div>
    </article>
  )
}

export function CallToAction({ title, description, buttonLabel = 'Agenda un diagnóstico' }: { title: string; description: string; buttonLabel?: string }) {
  return (
    <section className="cta-section">
      <div className="container cta-panel">
        <span className="cta-spark" aria-hidden="true"><Sparkles size={23} strokeWidth={1.5} /></span>
        <div className="cta-copy"><span className="eyebrow eyebrow-light">Una conversación puede ser el primer paso</span><h2>{title}</h2><p>{description}</p></div>
        <Link className="button button-light" href="/contacto">{buttonLabel}<ArrowUpRight size={17} aria-hidden="true" /></Link>
        <span className="cta-decoration" aria-hidden="true"><span /><span /><span /></span>
      </div>
    </section>
  )
}

export function ArticleBody({ paragraphs }: { paragraphs: string[] }) {
  return <div className="article-body">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
}

export function OutcomeList({ items }: { items: string[] }) {
  return <ul className="outcome-list">{items.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>
}
