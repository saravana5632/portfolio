import { motion } from "motion/react";
import { EDUCATION } from "@/src/constants";
import { GraduationCap, Calendar, Circle } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex items-center gap-4">
          <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
            <GraduationCap className="text-emerald-500 size-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Academic Journey</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:left-4 md:before:left-1/2 before:top-4 before:bottom-4 before:w-0.5 before:bg-border before:-translate-x-1/2">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Center Icon */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 size-8 rounded-full bg-background border-4 border-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-[45%] ml-12 md:ml-0 p-8 rounded-3xl glass border-border/50 hover:border-emerald-500/50 transition-all duration-300 group`}>
                <div className="flex items-center gap-3 text-emerald-500 mb-4">
                  <Calendar className="size-4" />
                  <span className="text-xs font-mono font-bold tracking-widest uppercase">{edu.period}</span>
                </div>
                <h3 className="text-xl font-black mb-2 leading-tight group-hover:text-emerald-400 transition-colors">
                  {edu.institution}
                </h3>
                <div className="text-sm font-medium text-foreground/80 mb-4">{edu.degree}</div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
