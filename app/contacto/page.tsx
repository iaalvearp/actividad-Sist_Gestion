import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Clock3, ArrowUpRight } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { faqs } from '@/src/data/faq'
import { contactDetails } from '@/src/data/site'
import { PageIntro } from '@/components/site-sections'

export const metadata: Metadata = {
  title: 'Contacto y diagnóstico inicial',
  description: 'Conversemos sobre los procesos de tu pyme y exploremos si una iniciativa de inteligencia artificial puede aportar valor.',
}

export default function ContactPage() {
  return (
    <main>
      <PageIntro eyebrow="Contacto" title="Empecemos con una conversación." description="Cuéntanos qué te gustaría mejorar. Revisaremos el contexto contigo y hablaremos de posibles primeros pasos, sin compromiso." />
      <section className="section-block contact-main-section">
        <div className="container contact-grid">
          <div className="contact-form-panel">
            <div className="contact-panel-heading"><span className="eyebrow">Cuéntanos tu idea</span><h2>¿Qué está pasando en tu empresa?</h2><p>Completa los campos y verás una confirmación de demostración en esta página.</p></div>
            <ContactForm />
          </div>
          <aside className="contact-aside">
            <div className="contact-aside-top"><span className="contact-aside-icon"><ArrowUpRight size={19} aria-hidden="true" /></span><span className="eyebrow eyebrow-light">Estamos en Guayaquil</span><h2>Un buen proyecto empieza escuchando.</h2><p>Conversemos sobre tus objetivos, tu equipo y los procesos que quisieras hacer más simples.</p></div>
            <div className="contact-detail-list">
              <a href={`mailto:${contactDetails.email}`}><Mail size={17} aria-hidden="true" /><span><small>Correo</small>{contactDetails.email}</span></a>
              <a href={`tel:${contactDetails.phone.replaceAll(' ', '')}`}><Phone size={17} aria-hidden="true" /><span><small>Teléfono</small>{contactDetails.phone}</span></a>
              <div><MapPin size={17} aria-hidden="true" /><span><small>Ubicación</small>{contactDetails.location}</span></div>
              <div><Clock3 size={17} aria-hidden="true" /><span><small>Horario de atención</small>{contactDetails.hours}</span></div>
            </div>
            <p className="contact-fictional-note">{contactDetails.note}</p>
          </aside>
        </div>
      </section>
      <section className="section-block faq-section" aria-labelledby="faq-heading">
        <div className="container faq-grid">
          <div className="faq-intro"><span className="eyebrow">Preguntas frecuentes</span><h2 id="faq-heading">Lo que quizá te preguntas.</h2><p>Si necesitas más contexto, podemos conversar sobre tu caso particular.</p></div>
          <div className="faq-list">{faqs.map((faq, index) => <details className="faq-item" key={faq.question} open={index === 0}><summary><span>{faq.question}</span><span className="faq-plus" aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>
    </main>
  )
}
