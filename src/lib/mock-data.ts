
import { Education } from '@/components/education/EducationCard';
import { Project } from '@/components/projects/ProjectCard';
import { Certification } from '@/components/certifications/CertificationCard';

// Mock Education Data
export const mockEducations: Education[] = [
  {
    id: '1',
    institution: 'Stanford University',
    degree: 'Master of Science',
    field: 'Computer Science',
    startDate: '2020-09-01T00:00:00Z',
    endDate: '2022-06-30T00:00:00Z',
    gpa: '3.9/4.0',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Conducted research on natural language processing models.',
    isOngoing: false,
  },
  {
    id: '2',
    institution: 'University of California, Berkeley',
    degree: 'Bachelor of Science',
    field: 'Computer Engineering',
    startDate: '2016-09-01T00:00:00Z',
    endDate: '2020-05-30T00:00:00Z',
    gpa: '3.8/4.0',
    description: 'Dean\'s List all semesters. Participated in ACM programming competitions.',
    isOngoing: false,
  },
];

// Mock Project Data
export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Image Recognition App',
    description: 'Developed a mobile application that uses machine learning to identify objects in images with high accuracy.',
    technologies: ['React Native', 'TensorFlow', 'Python', 'Firebase'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    githubUrl: 'https://github.com/example/ai-image-app',
    liveUrl: 'https://ai-image-app.example.com',
    startDate: '2021-03-01T00:00:00Z',
    endDate: '2021-08-15T00:00:00Z',
    isOngoing: false,
  },
  {
    id: '2',
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a responsive portfolio website to showcase my projects and skills.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop',
    githubUrl: 'https://github.com/example/portfolio',
    liveUrl: 'https://portfolio.example.com',
    startDate: '2021-01-01T00:00:00Z',
    endDate: '2021-02-28T00:00:00Z',
    isOngoing: false,
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    description: 'Building a full-featured e-commerce platform with inventory management, payment processing, and analytics.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    startDate: '2022-06-01T00:00:00Z',
    isOngoing: true,
  },
];

// Mock Certification Data
export const mockCertifications: Certification[] = [
  {
    id: '1',
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issueDate: '2022-03-15T00:00:00Z',
    expiryDate: '2025-03-15T00:00:00Z',
    credentialId: 'AWS-ASA-12345',
    credentialUrl: 'https://aws.amazon.com/verification',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Google Professional Data Engineer',
    issuer: 'Google Cloud',
    issueDate: '2021-11-10T00:00:00Z',
    expiryDate: '2023-11-10T00:00:00Z',
    credentialId: 'GCP-PDE-67890',
    credentialUrl: 'https://google.com/verification',
    thumbnailUrl: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=2070&auto=format&fit=crop',
  },
];
