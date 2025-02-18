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
    year: '2024',
    link: 'https://drive.google.com/drive/u/0/folders/1KFuj7jzjkqYZItDCJi9DMayl2xoJnKz6',
    category: 'engineering',
    emoji: '🎭',
    oneliner: 'Preserve your stories, relive past moments, and let your AI clone keep your voice alive. Clonely transforms diary entries into an interactive chatbot that speaks in your voice, making memories timeless.',
    tags: [
      'ElevenLabs TTS',
      'GPT-4 Turbo',
      'OpenAI Whisper ASR',
      'Appwrite Backend',
      'React Native',
      'Senior UX Design'
    ]
  },
  // 添加更多项目...
]; 