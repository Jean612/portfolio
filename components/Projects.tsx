"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
    {
        title: "Modern Pokédex App",
        description: "Mobile application developed with React Native and Expo Router. Implements infinite scrolling for performance, real-time search, dark mode, and strict TypeScript for secure typing.",
        tags: ['React Native', 'Expo', 'TypeScript', 'PokeAPI', 'Infinite Scroll'],
        github: "https://github.com/Jean612/pokemon-app",
        demo: "https://github.com/Jean612/pokemon-app",
        image: "/pokedex-preview.png",
    },
    {
        title: "High-Performance URL Shortener",
        description: "Optimized GraphQL API for URL shortening. Designed for scalability with Base62 encoding algorithm and deployed on Render.",
        tags: ['Ruby on Rails', 'GraphQL', 'PostgreSQL', 'Base62 Algorithm'],
        github: "https://github.com/Jean612/url_shortener",
        demo: "https://url-shortener-u7yc.onrender.com",
        image: null,
    },
    {
        title: "Backend Architecture & APIs",
        description: "Collection of robust backend services and APIs demonstrating scalable architecture patterns, GraphQL implementations, and serverless functions.",
        tags: ["Ruby on Rails", "GraphQL", "Serverless"],
        github: "https://github.com/Jean612",
        demo: "#",
        image: null,
    },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
        >
            <div className="h-48 bg-secondary/50 relative overflow-hidden">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-secondary-foreground/50 font-medium">Project Screenshot</span>
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className={`text-muted-foreground mb-4 flex-grow ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {project.description}
                </p>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-primary text-sm font-medium mb-4 self-start hover:underline focus:outline-none"
                >
                    {isExpanded ? "Show less" : "Read more"}
                </button>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                        <ExternalLink size={16} /> Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

/**
 * The Projects component displays a selection of personal or side projects.
 *
 * Each project is presented as a card containing:
 * - A placeholder for a project screenshot.
 * - The project title and description.
 * - Tags for the technologies used.
 * - Links to the source code (GitHub) and live demo.
 *
 * @returns A React functional component for the projects section.
 */
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Side Projects</h2>
                    <p className="text-muted-foreground">Personal projects and experiments.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
