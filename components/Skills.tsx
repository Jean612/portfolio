"use client";

import { motion } from "framer-motion";
import { Server, Database, Code2, Smartphone } from "lucide-react";

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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Tech Stack & Arsenal</h2>
                    <p className="text-muted-foreground">The tools and technologies I use to build scalable solutions.</p>
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
                            {['Ruby', 'Ruby on Rails 7', 'GraphQL', 'Node.js', 'RSpec', 'Sidekiq'].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* 2. DATA & INFRA (Lo que te hace Senior) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white p-8 rounded-xl shadow-sm border border-border"
                    >
                        <h3 className="font-bold text-xl mb-6 flex items-center gap-3 text-foreground">
                            <Database className="text-accent" /> Data & Infra
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['PostgreSQL', 'Redis', 'ElasticSearch', 'AWS Lambda', 'Docker', 'Serverless'].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* 3. FRONTEND (Tu lado Full Stack) */}
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
                            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. MOBILE (Tu nueva habilidad) */}
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
                            {['React Native', 'Expo Router', 'React Navigation', 'Redux Toolkit'].map(tech => (
                                <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium">
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
