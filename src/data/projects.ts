export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Name',
    description: 'A minimal tool for maximalist thinking',
    image: '/projects/project1.jpg',
    year: '2024',
    link: '/projects/project-1'
  },
  {
    id: 'project-2',
    title: 'Another Project',
    description: 'Description of another fascinating project',
    image: '/projects/project2.jpg',
    year: '2023',
    link: '/projects/project-2'
  },
  // 添加更多项目...
]; 