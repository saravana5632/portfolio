import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react";
import { WorkflowAnimation } from "./WorkflowAnimation";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden neural-bg">
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-12 lg:gap-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Data Analyst & ML Internships
            </div>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-foreground leading-[1.1] tracking-tighter mb-6">
              Architecting <span className="text-primary">Intelligence</span> <br />
              Through <span className="text-muted-foreground italic font-light">Data</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl font-light">
              I'm <span className="text-foreground font-semibold">Saravanakumar G</span>, an Aspiring ML Engineer and Data Scientist
              transforming raw information into actionable insights at <span className="text-foreground font-medium underline decoration-primary/50">Panimalar Engineering College</span>.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg" className="h-14 px-8 text-base font-black bg-primary text-primary-foreground hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all group rounded-2xl" asChild>
                <a href="#projects">
                  Explore Projects
                  <ChevronRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-black border-border bg-transparent hover:bg-muted/50 rounded-2xl" asChild>
                <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Saravanakumar_Resume.pdf">
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-12">
              <a
                href="https://github.com/saravana5632"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-xl hover:bg-primary/10"
              >
                <Github className="size-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/saravana5632"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-xl hover:bg-primary/10"
              >
                <Linkedin className="size-6" />
              </a>
              <a
                href="mailto:oatktg.saravana5632@gmail.com"
                aria-label="Send email"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-xl hover:bg-primary/10"
              >
                <Mail className="size-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:block flex items-center justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full opacity-30 pointer-events-none" />
            <WorkflowAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
