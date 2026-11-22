'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <CheckCircle2 size={30} aria-hidden="true" />
        <h2>Gracias por escribirnos.</h2>
        <p>Tu mensaje se confirmó en esta demostración. No se envió ni guardó en un servidor.</p>
        <button className="text-link form-reset" type="button" onClick={() => setSubmitted(false)}>Enviar otro mensaje <ArrowRight size={15} aria-hidden="true" /></button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Nombre</label>
        <input id="name" name="name" autoComplete="name" placeholder="Tu nombre" required />
      </div>
      <div className="form-field">
        <label htmlFor="company">Empresa</label>
        <input id="company" name="company" autoComplete="organization" placeholder="Nombre de tu empresa" required />
      </div>
      <div className="form-field form-field-full">
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="nombre@empresa.com" required />
      </div>
      <div className="form-field form-field-full">
        <label htmlFor="message">¿Qué te gustaría mejorar?</label>
        <textarea id="message" name="message" rows={5} placeholder="Cuéntanos un poco sobre tu reto o idea…" required minLength={10} />
        <span className="field-hint">Comparte solo información general; evita incluir datos personales o confidenciales.</span>
      </div>
      <div className="form-actions form-field-full">
        <button className="button button-primary" type="submit">Enviar mensaje <ArrowRight size={17} aria-hidden="true" /></button>
        <p>Este formulario es demostrativo. El envío solo muestra una confirmación en esta página.</p>
      </div>
    </form>
  )
}
