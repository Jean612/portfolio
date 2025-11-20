"use client";

import { motion } from "framer-motion";

const skills = [
    { category: "Backend", items: ["Ruby", "Ruby on Rails", "PostgreSQL", "SQL"] },
    { category: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Mobile", items: ["React Native", "Expo"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Tech Stack</h2>
                    <p className="text-muted-foreground">The technologies I use to bring ideas to life.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="text-muted-foreground flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
