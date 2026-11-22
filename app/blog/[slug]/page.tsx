import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Clock3 } from 'lucide-react'
import { articles } from '@/src/data/articles'
import { ArticleBody } from '@/components/site-sections'

type ArticlePageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((entry) => entry.slug === slug)
  if (!article) return { title: 'Artículo no encontrado' }
  return { title: article.title, description: article.excerpt }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = articles.find((entry) => entry.slug === slug)
  if (!article) notFound()

  return (
    <main className="article-page">
      <div className="container article-container">
        <Link className="back-link" href="/blog"><ArrowLeft size={16} aria-hidden="true" />Volver a Ideas</Link>
        <article>
          <header className="article-header">
            <span className="article-category">{article.category}</span>
            <h1>{article.title}</h1>
            <p className="article-dek">{article.excerpt}</p>
            <div className="article-meta"><span>{article.author}</span><span className="article-meta-dot" /><time>{article.date}</time><span className="article-meta-dot" /><span className="article-read-time"><Clock3 size={15} aria-hidden="true" />{article.readTime}</span></div>
          </header>
          <div className="article-cover" aria-hidden="true"><span className="article-cover-orbit" /><span className="article-cover-mark">{article.category.split(' ')[0].slice(0, 2).toUpperCase()}</span><span className="article-cover-caption">Guayas IA · Notas prácticas</span></div>
          <ArticleBody paragraphs={article.paragraphs} />
        </article>
        <aside className="article-end-card"><div><span className="eyebrow">¿Te gustaría conversarlo?</span><h2>Una buena pregunta puede abrir el siguiente paso.</h2></div><Link href="/contacto" aria-label="Conversar con Guayas IA Consultores"><ArrowUpRight size={20} aria-hidden="true" /></Link></aside>
      </div>
    </main>
  )
}
