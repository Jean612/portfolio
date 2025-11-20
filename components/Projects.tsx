"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Project One",
        description: "A full-stack application built with Ruby on Rails and React. Features user authentication and real-time updates.",
        tags: ["Rails", "React", "PostgreSQL"],
        github: "https://github.com/Jean612",
        demo: "#",
    },
    {
        title: "Project Two",
        description: "Mobile application for community management using React Native and Expo.",
        tags: ["React Native", "Expo", "Firebase"],
        github: "https://github.com/Jean612",
        demo: "#",
    },
    {
        title: "Project Three",
        description: "E-commerce platform with Next.js and Stripe integration.",
        tags: ["Next.js", "TypeScript", "Stripe"],
        github: "https://github.com/Jean612",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
                    <p className="text-muted-foreground">A selection of my recent work.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <div className="h-48 bg-secondary/50 flex items-center justify-center">
                                <span className="text-secondary-foreground/50 font-medium">Project Screenshot</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        <ExternalLink size={16} /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
