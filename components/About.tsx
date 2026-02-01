"use client";

import { motion } from "framer-motion";

/**
 * The About component renders the "About Me" section.
 *
 * It provides a summary of the developer's background, key skills, and professional focus.
 * The content is animated to fade in when scrolled into view.
 *
 * @returns A React functional component for the about section.
 */
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a passionate Full Stack Developer with a heavy focus on{" "}
            <strong className="text-primary">Backend Engineering</strong> and{" "}
            <strong className="text-primary">DevOps</strong>. My journey
            involves architecting robust APIs using{" "}
            <strong className="text-primary">Ruby on Rails</strong> and
            deploying them to production environments using{" "}
            <strong className="text-primary">Docker</strong> and{" "}
            <strong className="text-primary">CI/CD pipelines</strong>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Specialized in solving{" "}
            <strong className="text-primary">performance bottlenecks</strong>{" "}
            (N+1 queries), designing scalable{" "}
            <strong className="text-primary">GraphQL schemas</strong>, and
            managing <strong className="text-primary">Linux VPS</strong>{" "}
            infrastructure. I balance this technical depth with modern frontend
            skills in <strong className="text-primary">Next.js</strong> and
            cross-platform mobile development with{" "}
            <strong className="text-primary">React Native</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
