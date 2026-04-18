export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "ComunidadFeliz",
    role: "Software Engineer III",
    period: "March 2023 - Present",
    description:
      "Developing web and mobile applications for condominium management using Ruby on Rails, GraphQL, and PostgreSQL. Architecting serverless solutions with Ruby on Jets for high-volume email and push notification delivery.",
    tags: [
      "Ruby on Rails",
      "GraphQL",
      "PostgreSQL",
      "Serverless",
      "Ruby on Jets",
      "Docker",
      "Sidekiq",
    ],
  },
  {
    company: "GoJom (YC W22)",
    role: "Full Stack Developer",
    period: "March 2022 - February 2023",
    description:
      "Developed an online platform for property sales and rentals. Implemented advanced search capabilities using ElasticSearch and built robust backend services with Ruby on Rails and PostgreSQL.",
    tags: ["Ruby on Rails", "ElasticSearch", "PostgreSQL", "JavaScript"],
  },
  {
    company: "Le Wagon",
    role: "Teacher Assistant",
    period: "July 2022 - December 2022",
    description:
      "Mentored students in Full Stack development, covering Ruby, Databases, HTML, CSS, JavaScript, and Ruby on Rails.",
    tags: ["Mentoring", "Ruby", "Web Development"],
  },
];
