"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Code2, Smartphone, Cpu } from "lucide-react";

/**
 * The SKILL_CATEGORIES constant contains the data for each technical domain category.
 */
const SKILL_CATEGORIES = [
  {
    title: "Backend Core",
    icon: Server,
    iconColor: "text-primary",
    skills: ["Ruby", "Ruby on Rails 7", "GraphQL", "Node.js", "RSpec", "Sidekiq"],
    x: -20,
    delay: 0,
  },
  {
    title: "DevOps & Infra",
    icon: Cloud,
    iconColor: "text-accent",
    skills: [
      "Docker",
      "Nginx",
      "GitHub Actions",
      "Linux/VPS",
      "PostgreSQL",
      "Redis",
      "AWS Lambda",
    ],
    x: 20,
    delay: 0.1,
  },
  {
    title: "Frontend",
    icon: Code2,
    iconColor: "text-green-500",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    x: -20,
    delay: 0.2,
  },
  {
    title: "Mobile",
    icon: Smartphone,
    iconColor: "text-orange-500",
    skills: ["React Native", "Expo Router", "React Navigation", "Redux Toolkit"],
    x: 20,
    delay: 0.3,
  },
  {
    title: "AI & Workflow",
    icon: Cpu,
    iconColor: "text-pink-600",
    skills: [
      "Windsurf IDE",
      "Claude Code",
      "Gemini 3 Advanced",
      "jules",
      "Antigravity",
    ],
    x: 20,
    delay: 0.3,
    className: "md:col-span-2",
  },
] as const;

/**
 * The Skills component showcases the developer's technical skills categorized by domain.
 *
 * Categories include Backend, Frontend, Mobile, and Tools.
 * Each category is displayed in a card with a list of specific technologies.
 * The cards animate into view when the user scrolls to the section.
 *
 * @returns A React functional component for the skills section.
 */
export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Tech Stack & Arsenal
          </h2>
          <p className="text-muted-foreground">
            The tools and technologies I use to build scalable solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: category.x }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: category.delay }}
              className={`bg-white p-8 rounded-xl shadow-sm border border-border ${category.className ?? ""}`.trim()}
            >
              <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-foreground">
                <category.icon className={category.iconColor} /> {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
