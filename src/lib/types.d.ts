declare module '@/content/articles/*.md' {
  import { type MDXRemoteProps } from 'next-mdx-remote/rsc'
  
  export const frontmatter: {
    title: string
    date: string
    slug: string
  }
  export const content: MDXRemoteProps
} 

interface Article {
  title: string
  date: string
  slug: string
  content?: string
}

interface ArticleWithContent extends Article {
  content: string
} 