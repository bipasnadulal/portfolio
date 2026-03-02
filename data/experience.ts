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
    role: 'UI/UX Design Intern | Figma',
    company: 'Fusemachines',
    location: 'Kathmandu, Nepal',
    period: 'Sept 2025 - Dec 2025',
    description: 'Worked on designing and optimizing user interfaces for AI-powered HR systems, focusing on workflow efficiency and user experience.',
    highlights: [
      'Designed key workflows for job management, candidate pipeline, user roles, and activity tracking.',
      'Created low & high-fidelity wireframes, mood boards, user flows, and reusable component systems.',
      'Enhanced usability of candidate movement, interview stages, and error handling.',
      'Collaborated with developers, QA, and mentors to deliver practical, implementation-ready designs.'
    ],
    current: false,
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export const educationData: Education[] = [
  {
    id: 'nccs',
    degree: 'BSc Computer Science and Information Technology',
    institution: 'Tribhuvan University (NCCS)',
    location: 'Kathmandu, Nepal',
    period: '2021 - Present',
    
  },
];
