import type { Metadata } from 'next'
import { ArrowDownRight } from 'lucide-react'
import { articles } from '@/src/data/articles'
import { ArticleCard, PageIntro } from '@/components/site-sections'

export const metadata: Metadata = {
  title: 'Ideas prácticas sobre inteligencia artificial',
  description: 'Artículos breves para entender cómo empezar con IA en una pyme, elegir procesos, cuidar los datos y aprender de cada implementación.',
}

export default function BlogPage() {
  return (
    <main>
      <PageIntro eyebrow="Ideas para avanzar" title="Conversaciones claras sobre IA y negocios." description="Lecturas breves para tomar mejores decisiones, conversar con tu equipo y llevar las ideas a la práctica con responsabilidad." />
      <section className="section-block blog-listing-section">
        <div className="container">
          <div className="blog-featured">
            <div><span className="eyebrow">Una nota para empezar</span><h2>{articles[0].title}</h2><p>{articles[0].excerpt}</p></div>
            <a className="featured-link" href={`/blog/${articles[0].slug}`} aria-label={`Leer: ${articles[0].title}`}><ArrowDownRight size={22} aria-hidden="true" /></a>
          </div>
          <div className="article-grid">{articles.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
        </div>
      </section>
    </main>
  )
}
