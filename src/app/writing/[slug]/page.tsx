import { getArticleBySlug, getAllArticles } from '@/lib/articles'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Metadata } from 'next'

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

interface PageProps {
  params: { slug: string }
  searchParams: Record<string, string | string[] | undefined>
}

export default function ArticlePage(props: PageProps) {
  const { frontmatter, content } = getArticleBySlug(props.params.slug)
  
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <article className="prose dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl font-normal leading-snug tracking-tight mb-4">
            {frontmatter.title}
          </h1>
          <time className="text-sm text-gray-500">
            {frontmatter.date}
          </time>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ node, ...props }) => (
                <a {...props} className="text-blue-600 hover:text-blue-800 transition-colors" />
              ),
              code: ({ node, inline, className, children, ...props }: {
                node?: any
                inline?: boolean
                className?: string
                children?: React.ReactNode
              }) => (
                inline ? 
                  <code className="bg-gray-100 dark:bg-gray-800 rounded px-1" {...props} /> :
                  <code className="block bg-gray-100 dark:bg-gray-800 rounded p-4" {...props} />
              ),
              h1: ({ node, ...props }) => (
                <h1 {...props} className="text-2xl font-normal mt-8" />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  )
} 