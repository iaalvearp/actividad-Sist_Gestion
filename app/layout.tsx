import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { AmbientGrid } from '@/components/ambient-grid'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Guayas IA Consultores | Inteligencia artificial para pymes',
    template: '%s | Guayas IA Consultores',
  },
  description:
    'Consultoría práctica en inteligencia artificial para pequeñas y medianas empresas de Guayaquil. Diagnóstico, pilotos y acompañamiento responsable.',
  applicationName: 'Guayas IA Consultores',
  generator: 'Next.js',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f7f4',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-EC">
      <body className="antialiased">
        <a className="skip-link" href="#main-content">Saltar al contenido</a>
        <div className="site-layer">
          <AmbientGrid />
          <SiteHeader />
          <div id="main-content">{children}</div>
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
