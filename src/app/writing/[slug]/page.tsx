import { getArticleBySlug, getAllArticles } from '@/lib/articles'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Metadata } from 'next'
import { GenerateStaticParams } from 'next'

export const generateStaticParams: GenerateStaticParams = () => {
  return getAllArticles().map(article => ({ 
    slug: article.slug 
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = getArticleBySlug(params.slug);
  
  return {
    title: frontmatter.title,
    description: `Article published on ${frontmatter.date}`
  };
}

export default function Page({ params }: { params: ReturnType<typeof generateStaticParams>[number] }) {
  const { content, frontmatter } = getArticleBySlug(params.slug)
  
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <article className="prose dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl">{frontmatter.title}</h1>
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  )
} 