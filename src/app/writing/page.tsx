import { getAllArticles } from '@/lib/articles'
import WritingContent from './WritingContent'

export default function Writing() {
  const articles = getAllArticles()
  return <WritingContent articles={articles} />
} 