export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  current: boolean;
}

export const experienceData: Experience[] = [
  {
    id: 'fusemachines',
    role: 'UI/UX Design Intern',
    company: 'Fusemachines',
    location: 'Kathmandu, Nepal',
    period: '2025',
    description: 'Designed and optimized user interfaces for AI-powered HR systems, focusing on workflow efficiency and user experience.',
    highlights: [
      'Designed comprehensive HR system workflows',
      'Created candidate pipeline management interface',
      'Developed user roles and activity logging systems',
      'Collaborated with developers for seamless implementation',
      'Applied UX principles to AI-powered features',
    ],
    current: true,
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export const educationData: Education[] = [
  {
    id: 'nccs',
    degree: 'BSc Computer Science and Information Technology',
    institution: 'Tribhuvan University (NCCS)',
    location: 'Kathmandu, Nepal',
    period: '2021 - Present',
    description: 'Specialized in AI/ML, Deep Learning, and software engineering. Focus on building intelligent systems and integrating machine learning into real-world applications.',
  },
];
