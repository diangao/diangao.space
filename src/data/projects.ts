export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  year: string;
  link: string;
  category: string;
  emoji: string;
  oneliner: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'state-representation-learning',
    title: 'State Representation Learning for Long-Term Multi-Agent Interactions',
    description: 'Research project exploring memory architectures for multi-agent systems',
    image: '/images/projects/agent-state-compressed.webp', // 添加压缩后的图片
    year: '2025',
    link: 'https://github.com/diangao/CSE-598-Research',
    category: 'research',
    emoji: '🧠',
    oneliner: 'A research project exploring different memory architectures for multi-agent systems, comparing GraphDB, VectorDB, and Semantic Memory approaches in both discrete and continuous environments.',
    tags: [
      'Multi-Agent Systems',
      'State Representation',
      'GraphDB',
      'VectorDB',
      'Semantic Memory',
      'CoALA Architecture',
      'τ-bench Metrics'
    ]
  },
  {
    id: 'furwell',
    title: 'FurWell: Your 24/7 AI Pet Health Assistant',
    description: 'AI-powered pet health guidance system with veterinary-grade data integration',
    image: '/images/projects/furwell-compressed.webp',
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
    id: 'clonely',
    title: 'Clonely: Your AI-Powered Memory Keeper',
    description: 'Personal AI companion that preserves your stories and voice',
    image: '/images/projects/clonely-compressed.webp',
    year: '2025',
    link: 'https://drive.google.com/drive/folders/1KFuj7jzjkqYZItDCJi9DMayl2xoJnKz6?usp=drive_link',
    category: 'engineering',
    emoji: '🎭',
    oneliner: 'Preserve your stories, relive past moments, and let your AI clone keep your voice alive. Clonely transforms diary entries into an interactive chatbot that speaks in your voice, making memories timeless.',
    tags: [
      'ElevenLabs TTS',
      'GPT-4 Turbo',
      'Whisper ASR',
      'Appwrite Backend',
      'React Native',
      'Senior UX Design'
    ]
  }
]; 