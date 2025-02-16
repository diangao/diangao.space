export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
  link: string;
  category: 'engineering' | 'tools' | 'expression';
  emoji: string;
  oneliner: string;
  impact?: {
    metric: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Name',
    description: 'A minimal tool for maximalist thinking',
    image: '/projects/project1.jpg',
    year: '2024',
    link: '/projects/project-1',
    category: 'engineering',
    emoji: '⚙️',
    oneliner: 'Optimized AI training efficiency with modular pipeline',
    impact: [
      { metric: 'Cost Reduction', value: '-20%' },
      { metric: 'Speed', value: '+30%' }
    ]
  },
  {
    id: 'project-2',
    title: 'Another Project',
    description: 'Description of another fascinating project',
    image: '/projects/project2.jpg',
    year: '2023',
    link: '/projects/project-2',
    category: 'tools',
    emoji: '🔨',
    oneliner: 'Description of another fascinating project',
    impact: [
      { metric: 'Impact Metric 3', value: 'Impact Value 3' },
      { metric: 'Impact Metric 4', value: 'Impact Value 4' }
    ]
  },
  // 添加更多项目...
]; 