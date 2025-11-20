import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * The main Home page component.
 *
 * It assembles the various sections of the personal portfolio into a single page.
 * The sections included are:
 * - Navbar
 * - Hero
 * - About
 * - Experience
 * - Skills
 * - Projects
 * - Contact
 * - Footer
 *
 * @returns A React functional component representing the home page.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
