'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, BrainCircuit, Menu, X } from 'lucide-react'
import { brand, navigation } from '@/src/data/site'

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-lockup" href="/" aria-label={`${brand.name}, ir al inicio`} onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><BrainCircuit size={21} strokeWidth={1.8} /></span>
          <span className="brand-name">{brand.name}<small>Consultoría práctica en IA</small></span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegación principal">
          {navigation.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? 'nav-link is-active' : 'nav-link'}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
          <Link className="header-cta" href="/contacto" onClick={() => setMenuOpen(false)}>
            Hablemos <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
