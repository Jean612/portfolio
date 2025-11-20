"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/50 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
                        Backend-Heavy Full Stack
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground">
                        Hi, I'm <span className="text-primary">Jean Chavez</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        Building modern web experiences with Ruby on Rails, React, and Next.js.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                        >
                            View My Work <ArrowRight size={18} />
                        </a>
                        <div className="flex items-center gap-4 mt-4 md:mt-0">
                            <a
                                href="https://github.com/Jean612"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-muted text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jeanchavezd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-muted text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
