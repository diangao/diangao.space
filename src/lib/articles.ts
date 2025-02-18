import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const articlesDir = join(process.cwd(), 'src/content/articles')

export function getAllArticles() {
  const files = readdirSync(articlesDir)
  
  return files.map(fileName => {
    const fullPath = join(articlesDir, fileName)
    const fileContents = readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    // 如果没有日期，使用文件创建时间
    const dateStr = data.date || new Date().toISOString()
    const date = new Date(dateStr)
    
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid date in ${fileName}: ${dateStr}`)
    }

    return {
      title: data.title || fileName.replace(/\.md$/, ''), // 如果没有标题，使用文件名
      slug: fileName.replace(/\.md$/, ''),
      date: date.toISOString().split('T')[0],
      timestamp: date.getTime()
    }
  }).sort((a, b) => b.timestamp - a.timestamp)
}

export function getArticleBySlug(slug: string) {
  const fullPath = join(process.cwd(), 'src/content/articles', `${slug}.md`)
  const fileContents = readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    frontmatter: {
      title: data.title,
      date: new Date(data.date).toISOString().split('T')[0],
      slug: data.slug
    },
    content
  }
} 