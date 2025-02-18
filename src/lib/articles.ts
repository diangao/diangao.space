import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const articlesDir = join(process.cwd(), 'src/content/articles')

export function getAllArticles() {
  const files = readdirSync(articlesDir)
  
  return files.map(fileName => {
    const fullPath = join(articlesDir, fileName)
    const { data } = matter(readFileSync(fullPath, 'utf8'))
    
    // 确保日期格式正确
    const rawDate = new Date(data.date)
    const isoDate = rawDate.toISOString().split('T')[0] // 标准化为 YYYY-MM-DD
    
    return {
      ...data,
      date: isoDate,
      // 添加时间戳用于精确排序
      timestamp: rawDate.getTime()
    }
  }).sort((a, b) => b.timestamp - a.timestamp) // 按时间戳降序排列
}

export function getArticleBySlug(slug: string) {
  const fullPath = join(process.cwd(), 'src/content/articles', `${slug}.md`)
  const fileContents = readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    frontmatter: {
      ...data,
      date: new Date(data.date).toISOString().split('T')[0]
    },
    content
  }
} 