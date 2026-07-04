import * as React from "react";
import { motion } from "motion/react";
import { EXPERIENCE } from "@/src/constants";
import { Briefcase, Calendar, Building2, ChevronRight, BarChart3, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
              <Briefcase className="text-primary size-6 animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
          </div>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            My journey in Data Analytics and Machine Learning through internships and real-world projects.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mt-20">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-border to-primary/50 -translate-x-1/2 pointer-events-none">
            <motion.div 
              className="w-full h-24 bg-gradient-to-b from-transparent via-primary to-transparent"
              animate={{
                y: ["0%", "400%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="space-y-16">
            {EXPERIENCE.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={`${exp.company}-${exp.role}`}
                  className="relative flex flex-col md:flex-row items-stretch justify-between"
                >
                  <div className={`hidden md:block md:w-[45%] ${isEven ? 'order-1' : 'order-3'}`} />

                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-10 size-8 rounded-full bg-slate-950 border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.4)] order-2">
                    <motion.div 
                      className="size-2 rounded-full bg-primary"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'order-3' : 'order-1'}`}
                  >
                    <div className="p-6 md:p-8 rounded-3xl glass border-border/50 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden flex flex-col h-full bg-slate-950/40 backdrop-blur-md">
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-3 select-none">
                            Internship
                          </span>
                          <h3 className="text-xl font-black leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                            {exp.role}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-mono font-bold uppercase bg-muted/30 px-3 py-1.5 rounded-xl border border-border">
                          <Calendar className="size-3.5 text-primary" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-foreground/90 font-bold text-sm mb-6 bg-slate-900/60 w-fit px-3py-1 px-3 py-1.5 rounded-lg border border-border/40">
                        <Building2 className="size-4 text-primary shrink-0" />
                        <span>{exp.company}</span>
                      </div>

                      <div className="space-y-3 mb-6 flex-grow">
                        {exp.highlights.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground hover:text-foreground transition-colors duration-200">
                            <ChevronRight className="size-4 text-primary shrink-0 mt-1" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mb-6 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-muted-foreground mb-3">
                          <BarChart3 className="size-3.5 text-primary" />
                          <span>Key Metrics & Achievements</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {exp.metrics.map((metric, mIdx) => (
                            <div 
                              key={mIdx}
                              className="p-3 rounded-2xl bg-slate-900/40 border border-border/60 hover:bg-slate-900/80 hover:border-primary/20 transition-all duration-300 text-center flex flex-col justify-center min-h-[72px]"
                            >
                              <div className="text-base font-black text-primary font-mono select-none">
                                {metric.value}
                              </div>
                              <div className="text-[10px] text-muted-foreground font-semibold leading-tight mt-1">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-4 border-t border-border/50">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-[10px] uppercase font-bold tracking-tight bg-slate-900/50 hover:bg-primary/10 hover:text-primary hover:border-primary/40 border-border/60 text-muted-foreground py-0.5 px-2.5 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
