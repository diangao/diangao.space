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
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'furwell',
    title: 'FurWell: Your 24/7 AI Pet Health Assistant',
    description: 'AI-powered pet health guidance system with veterinary-grade data integration',
    image: '/images/projects/Get-FurWell-Today.png',
    year: '2025',
    link: 'https://devpost.com/software/furwell-your-24-7-ai-pet-health-assistant',
    category: 'engineering',
    emoji: '🐾',
    oneliner: 'Worried about your pet\'s sudden symptoms but can\'t reach a vet? FurWell delivers instant, AI-powered health guidance backed by authoritative data',
    tags: [
      'End-to-end RAG pipeline',
      'RAG evaluation framework',
      'Backend scalability',
      'Mistral-large-2',
      'Snowflake Cortex',
      'LangChain integration'
    ]
  },
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
    tags: [
      'End-to-end RAG pipeline',
      'RAG evaluation framework',
      'Backend scalability',
      'Mistral-large-2',
      'Snowflake Cortex',
      'LangChain integration'
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
    tags: [
      'End-to-end RAG pipeline',
      'RAG evaluation framework',
      'Backend scalability',
      'Mistral-large-2',
      'Snowflake Cortex',
      'LangChain integration'
    ]
  },
  // 添加更多项目...
]; 