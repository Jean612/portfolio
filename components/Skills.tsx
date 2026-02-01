"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Code2, Smartphone, Cpu } from "lucide-react";

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
          {/* 1. BACKEND (Tu Fuerte) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-border"
          >
            <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-foreground">
              <Server className="text-primary" /> Backend Core
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Ruby",
                "Ruby on Rails 7",
                "GraphQL",
                "Node.js",
                "RSpec",
                "Sidekiq",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 2. DEVOPS & INFRA (¡Actualizado con tus nuevos poderes!) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-border"
          >
            <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-foreground">
              <Cloud className="text-accent" /> DevOps & Infra
            </h3>
            <div className="flex flex-wrap gap-2">
              {/* Agregamos Nginx, GitHub Actions, Linux y SSL aquí */}
              {[
                "Docker",
                "Nginx",
                "GitHub Actions",
                "Linux/VPS",
                "PostgreSQL",
                "Redis",
                "AWS Lambda",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 3. FRONTEND */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-border"
          >
            <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-foreground">
              <Code2 className="text-green-500" /> Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* 4. MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-border"
          >
            <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-foreground">
              <Smartphone className="text-orange-500" /> Mobile
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React Native",
                "Expo Router",
                "React Navigation",
                "Redux Toolkit",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 5. AI & WORKFLOW */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-border md:col-span-2"
          >
            <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-foreground">
              <Cpu className="text-pink-600" /> AI & Workflow
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Windsurf IDE",
                "Claude Code",
                "Gemini 2.0 Flash",
                "Cursor",
                "Vim",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
