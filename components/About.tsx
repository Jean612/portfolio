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
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">About Me</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        I am a passionate Full Stack Developer with a strong foundation in both backend and frontend technologies.
                        My journey involves building robust applications using <strong className="text-primary">Ruby on Rails</strong> and crafting dynamic user interfaces with <strong className="text-primary">React</strong> and <strong className="text-primary">Next.js</strong>.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Specialized in solving <strong className="text-primary">N+1 queries</strong>, designing scalable <strong className="text-primary">GraphQL schemas</strong>, and building <strong className="text-primary">serverless architectures</strong>.
                        Recently, I&apos;ve expanded my skillset to mobile development with <strong className="text-primary">React Native</strong>, allowing me to deliver cross-platform solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
