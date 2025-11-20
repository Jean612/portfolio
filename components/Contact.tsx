"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Get In Touch</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <a
                        href="mailto:hello@example.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                    >
                        <Mail size={20} /> Say Hello
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
