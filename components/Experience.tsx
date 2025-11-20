"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "ComunidadFeliz",
        role: "Software Engineer II",
        period: "March 2023 - Present",
        description: "Developing web and mobile applications for condominium management using Ruby on Rails, GraphQL, and PostgreSQL. Architecting serverless solutions with Ruby on Jets for high-volume email and push notification delivery.",
        tags: ["Ruby on Rails", "GraphQL", "PostgreSQL", "Serverless", "Ruby on Jets"],
    },
    {
        company: "GoJom (YC W22)",
        role: "Full Stack Developer",
        period: "March 2022 - February 2023",
        description: "Developed an online platform for property sales and rentals. Implemented advanced search capabilities using ElasticSearch and built robust backend services with Ruby on Rails and PostgreSQL.",
        tags: ["Ruby on Rails", "ElasticSearch", "PostgreSQL", "JavaScript"],
    },
    {
        company: "Le Wagon",
        role: "Teacher Assistant",
        period: "July 2022 - December 2022",
        description: "Mentored students in Full Stack development, covering Ruby, Databases, HTML, CSS, JavaScript, and Ruby on Rails.",
        tags: ["Mentoring", "Ruby", "Web Development"],
    },
];

/**
 * The Experience component displays a timeline or list of professional work experience.
 *
 * It maps through a list of experience objects and renders them with:
 * - Company name, role, and duration.
 * - A description of responsibilities and achievements.
 * - Tags for technologies used in each role.
 * - Scroll-triggered animations for each entry.
 *
 * @returns A React functional component for the experience section.
 */
export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Work Experience</h2>
                    <p className="text-muted-foreground">My professional journey in the tech industry.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-border flex flex-col md:flex-row gap-6"
                        >
                            <div className="md:w-1/3">
                                <h3 className="text-xl font-bold text-primary mb-2">{exp.company}</h3>
                                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                    <Briefcase size={16} />
                                    <span>{exp.role}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                    <Calendar size={16} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
