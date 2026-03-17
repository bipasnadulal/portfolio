export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  metrics?: string;
  github?: string;
  demo?: string;
  category: "AI" | "Web" | "Design";
  featured: boolean;
  image?: string;
}

export const projectsData: Project[] = [
  {
    id: "bird-feather",
    title: "Bird Feather Color Classification System",
    description:
      "Image classification project using a CNN to identify bird feather colors.",
    longDescription:
      "Built a convolutional neural network to classify bird feather images into 12 color categories. The project involved dataset preparation, image augmentation, model training, and evaluation. A simple web interface was added to allow users to test the model with custom images.",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "Albumentations",
      "Gradio",
    ],
    metrics: "12 classes • ~2,400 images ",
    github: "https://github.com/bipasnadulal/BirdFeatherClassification",
    demo: "#",
    category: "AI",
    featured: true,
    image: "birdFeatherCollection.png",
  },
  {
    id: "janta-ko-aawaj",
    title:
      "Janta Ko Aawaj – C2G2C E-Governance Complaint System (Final Year Project)",
    description:
      "Final-year project focused on civic engagement and complaint validation using ML.",
    longDescription:
      "Developing a full-stack e-governance platform where citizens can post complaints as polls and vote to validate issues. Machine learning models are used to filter spam complaints, and threshold-based alerts notify authorities as engagement increases.",
    techStack: [
      "Next.js",
      "Django",
      "Python",
      "SQLite",
      "Naive Bayes",
      "Logistic Regression",
      "SVM",
    ],
    metrics:
      "ML-based spam filtering • Threshold alerts (25%, 50%, 75%) • Civic engagement",
    github: "https://github.com/bipasnadulal/JantaKoAwaj-FYP",
    demo: "#",
    category: "AI",
    featured: true,
    image: "jantaKoAwaj.png",
  },
  {
    id: "smart-calculator",
    title: "Smart Calculator – Handwritten Expression Recognition",
    description:
      "Web application that recognizes handwritten mathematical expressions.",
    longDescription:
      "Developed an AI-powered calculator capable of recognizing handwritten mathematical expressions using computer vision techniques. The system includes a React-based canvas interface and a FastAPI backend for real-time processing and evaluation.",
    techStack: [
      "React",
      "FastAPI",
      "Python",
      "TensorFlow",
      "Canvas API",
      "Computer Vision",
    ],
    metrics: "Handwritten input • Real-time processing • Multiple operations",
    github: "https://github.com/bipasnadulal/SmartCalculator",
    demo: "#",
    category: "AI",
    featured: true,
  },
  {
    id: "anu-kitchen",
    title: "Anu Kitchen – Mobile App UI/UX Design",
    description: "UI/UX design project for a restaurant ordering application.",
    longDescription:
      "Designed a high-fidelity mobile application for restaurant ordering. The project included user research, user flow creation, wireframing, and building a consistent UI component system in Figma.",
    techStack: ["Figma", "UI/UX Design", "User Research", "Prototyping"],
    metrics: "User research driven • High-fidelity design system",
    github: "https://github.com/bipasnadulal/Anu-Kitchen",
    demo: "#",
    category: "Design",
    featured: false,
    image: "AnuKitchen.jpg",
  },
];
