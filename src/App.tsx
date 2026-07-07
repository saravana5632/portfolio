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
import { ScrollProgress } from "./components/ScrollProgress";
import { SectionReveal } from "./components/SectionReveal";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
        <ScrollProgress />
        <Navbar />
        <main>
          <SectionReveal><Hero /></SectionReveal>
          <SectionReveal><About /></SectionReveal>
          <SectionReveal><Skills /></SectionReveal>
          <SectionReveal><Tools /></SectionReveal>
          <SectionReveal><Projects /></SectionReveal>
          <SectionReveal><Experience /></SectionReveal>
          <SectionReveal><Certifications /></SectionReveal>
          <SectionReveal><Education /></SectionReveal>
          <SectionReveal><Resume /></SectionReveal>
          <SectionReveal><Contact /></SectionReveal>
        </main>
        <Footer />
        <ScrollToTop />

        <div className="fixed inset-0 pointer-events-none opacity-[0.03] neural-bg z-[-1]" />
      </div>
    </TooltipProvider>
  );
}
