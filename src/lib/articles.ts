import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { promises as fs } from 'fs'

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
  const path = join(process.cwd(), 'src/content/articles', `${slug}.md`)
  const { data, content } = matter(readFileSync(path, 'utf8'))
  
  return {
    frontmatter: {
      title: data.title || slug,
      date: data.date || new Date().toISOString().split('T')[0]
    },
    content: content || ''
  }
} 