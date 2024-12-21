import { Experience } from '../types/experience';

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    role: "Senior Software Developer",
    type: "Full-time",
    startDate: "2021-01-01",
    endDate: "present",
    location: "New York",
    responsibilities: [
      "Lead development of cloud-native applications",
      "Mentor junior developers",
      "Implement CI/CD pipelines",
      "Design system architecture"
    ]
  },
  {
    id: 2,
    company: "StartUp Labs",
    role: "Full Stack Developer",
    type: "Full-time",
    startDate: "2019-03-01",
    endDate: "2020-12-31",
    location: "Remote",
    responsibilities: [
      "Developed scalable web applications",
      "Implemented RESTful APIs",
      "Managed database architecture",
      "Led agile development teams"
    ]
  },
  {
    id: 3,
    company: "Digital Innovations",
    role: "Junior Developer",
    type: "Internship",
    startDate: "2018-06-01",
    endDate: "2019-02-28",
    location: "Boston",
    responsibilities: [
      "Frontend development using React",
      "Backend development with Node.js",
      "Database management",
      "Code review and testing"
    ]
  }
];