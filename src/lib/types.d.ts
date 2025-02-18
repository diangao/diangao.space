declare module '@/content/articles/*.md' {
  import { type MDXRemoteProps } from 'next-mdx-remote/rsc'
  
  export const frontmatter: {
    title: string
    date: string
    slug: string
  }
  export const content: MDXRemoteProps
} 

export interface Article {
  title: string
  date: string
  slug: string
  timestamp: number
  content?: string
}

interface ArticleWithContent extends Article {
  content: string
} 

interface Project {
  // ... 其他字段 ...
  tags?: string[];
} 