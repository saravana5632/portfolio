import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Tools } from "./components/Tools";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Resume } from "./components/Resume";
import { Contact, Footer } from "./components/Contact";
import { ScrollToTop } from "./components/ScrollToTop";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Tools />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <Resume />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />

        <div className="fixed inset-0 pointer-events-none opacity-[0.03] neural-bg z-[-1]" />
      </div>
    </TooltipProvider>
  );
}
