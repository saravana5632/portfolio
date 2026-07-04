import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { User, GraduationCap, MapPin, Search } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <User className="text-primary size-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I’m <span className="text-foreground font-semibold">SaravanaKumar G</span>, a B.Tech student in Computer Science and Business Systems at 
              <span className="text-foreground"> Panimalar Engineering College</span>. My journey is fueled by a deep curiosity for how data shapes our digital landscape.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I enjoy exploring diverse Machine Learning models, understanding their underlying mechanics, and crafting data-driven solutions for real-world challenges. 
              Whether it's predicting outcomes from complex datasets or building interactive visualization dashboards, I'm always eager to learn and experiment.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl glass flex items-center gap-4">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="text-primary size-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Education</div>
                  <div className="text-sm font-semibold">B.Tech CSBS</div>
                </div>
              </div>
              <div className="p-4 rounded-xl glass flex items-center gap-4">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="text-primary size-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Location</div>
                  <div className="text-sm font-semibold">Chennai, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-1 relative z-10">
               <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center">
                 <div className="text-center p-8">
                    <Search className="size-16 text-primary/40 mx-auto mb-6" />
                    <div className="text-2xl font-black text-foreground mb-4">"Data is the new oil, but intelligence is the refinery."</div>
                    <div className="text-sm text-muted-foreground italic">— Exploring the frontiers of AI</div>
                 </div>
               </div>
            </div>
            
            <div className="absolute -top-6 -right-6 size-24 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl" />
            <div className="absolute -bottom-6 -left-6 size-24 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
