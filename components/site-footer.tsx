import Link from 'next/link'
import { ArrowUpRight, BrainCircuit, MapPin, Mail, Phone } from 'lucide-react'
import { brand, contactDetails, navigation } from '@/src/data/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand-lockup footer-lockup" href="/" aria-label={`${brand.name}, ir al inicio`}>
            <span className="brand-mark" aria-hidden="true"><BrainCircuit size={21} strokeWidth={1.8} /></span>
            <span className="brand-name">{brand.name}<small>Consultoría práctica en IA</small></span>
          </Link>
          <p>{brand.descriptor}. Estrategia clara y acompañamiento cercano para negocios de Guayaquil.</p>
          <p className="fictional-note">{contactDetails.note}</p>
        </div>
        <div className="footer-column">
          <h2>Explora</h2>
          {navigation.slice(1, 5).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div className="footer-column footer-contact">
          <h2>Conversemos</h2>
          <a href={`mailto:${contactDetails.email}`}><Mail size={16} aria-hidden="true" />{contactDetails.email}</a>
          <a href={`tel:${contactDetails.phone.replaceAll(' ', '')}`}><Phone size={16} aria-hidden="true" />{contactDetails.phone}</a>
          <span><MapPin size={16} aria-hidden="true" />{contactDetails.location}</span>
          <Link className="footer-contact-link" href="/contacto">Agenda una conversación <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} {brand.name}</span>
          <span>Hecho con criterio, en Guayaquil.</span>
        </div>
      </div>
    </footer>
  )
}
