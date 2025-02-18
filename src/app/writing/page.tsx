import { getAllArticles } from '@/lib/articles'
import WritingContent from './WritingContent'

export default async function Writing() {
  const articles = getAllArticles()
  return <WritingContent articles={articles} />
} 