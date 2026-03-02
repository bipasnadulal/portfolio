export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  metrics?: string;
  github?: string;
  demo?: string;
  category: 'AI' | 'Web' | 'Design';
  featured: boolean;
  image?: string;
}

export const projectsData: Project[] = [
  {
    id: 'bird-feather',
    title: 'Bird Feather Color Classification System',
    description: 'CNN-based image classification system with 99.5% accuracy across 12 bird species classes',
    longDescription: 'Deep learning model using Convolutional Neural Networks to classify bird feathers by color patterns. Implemented advanced image augmentation techniques and achieved state-of-the-art accuracy.',
    techStack: ['TensorFlow', 'Keras', 'Python', 'CNN', 'Albumentations', 'Gradio'],
    metrics: '99.5% accuracy • 12 classes • 2400+ images',
    github: '#',
    demo: '#',
    category: 'AI',
    featured: true,
  },
  {
    id: 'janta-ko-aawaj',
    title: 'Janta Ko Aawaj – AI-powered E-Governance System',
    description: 'Full-stack civic engagement platform with ML-based spam detection and threshold alert automation',
    longDescription: 'E-governance system integrating machine learning for spam detection using Naive Bayes, Logistic Regression, and SVM. Features automated threshold alerts at 25%, 50%, and 75% complaint volumes.',
    techStack: ['Next.js', 'Django', 'Python', 'ML', 'Naive Bayes', 'Logistic Regression', 'SVM'],
    metrics: 'Multi-model spam detection • Real-time alerts • Civic engagement',
    github: '#',
    demo: '#',
    category: 'AI',
    featured: true,
  },
  {
    id: 'smart-calculator',
    title: 'Smart Calculator – Handwritten AI Recognition',
    description: 'AI-powered calculator that recognizes handwritten mathematical expressions in real-time',
    longDescription: 'Machine learning application that processes handwritten math expressions using computer vision and provides instant calculations. Built with React canvas frontend and FastAPI ML backend.',
    techStack: ['React', 'FastAPI', 'Python', 'TensorFlow', 'Canvas API', 'Computer Vision'],
    metrics: 'Real-time recognition • Multi-operation support',
    github: '#',
    demo: '#',
    category: 'AI',
    featured: true,
  },
  {
    id: 'anu-kitchen',
    title: 'Anu Kitchen – UI/UX Design System',
    description: 'Complete UI/UX design system based on extensive user research and testing',
    longDescription: 'High-fidelity design system for a restaurant platform. Includes comprehensive user research, persona development, user flows, and a complete component library.',
    techStack: ['Figma', 'UI/UX Design', 'User Research', 'Prototyping'],
    metrics: 'User research driven • Complete design system',
    demo: '#',
    category: 'Design',
    featured: false,
  },
];
