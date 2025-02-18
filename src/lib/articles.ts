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
    
    // 确保提取所有必需的字段
    return {
      title: data.title,    // 必须存在
      slug: data.slug,      // 必须存在
      date: new Date(data.date).toISOString().split('T')[0],
      timestamp: new Date(data.date).getTime()
    }
  }).sort((a, b) => b.timestamp - a.timestamp) // 按时间戳降序排列
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