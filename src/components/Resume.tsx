import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Smartphone, ExternalLink } from "lucide-react";
export function Resume() {
  const resumePath = `${import.meta.env.BASE_URL}resume.pdf`;
  const resumeImg = "public/images/resume_preview_1777100875837.png";

  return (
    <section id="resume" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden glass relative group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 relative z-10">
            <div className="p-12 flex flex-col justify-center">
               <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <FileText className="text-primary size-7" />
              </div>
              <h2 className="text-4xl font-black mb-6 tracking-tight leading-tight">Professional <br/><span className="text-primary">Curriculum Vitae</span></h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
                Explore my technical background, academic achievements, and the projects I've spearheaded in the ML and Data Analytics domain.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                   size="lg" 
                   className="h-14 px-8 rounded-2xl bg-primary text-primary-foreground font-bold hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
                   asChild
                >
                  <a href={resumePath} download="">
                    <Download className="mr-2 size-5" />
                    Download PDF
                  </a>
                </Button>
                <Button 
                   size="lg" 
                   variant="outline" 
                   className="h-14 px-8 rounded-2xl border-border hover:bg-muted font-bold"
                   asChild
                >
                  <a href={resumePath} target="_blank" rel="noopener noreferrer">
                    View Fullscreen
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-muted/30 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
               <motion.a 
                 href={resumePath}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ y: -20 }}
                 transition={{ type: "spring", stiffness: 300 }}
                 className="w-full max-w-sm aspect-[1/1.41] bg-background rounded-xl shadow-2xl overflow-hidden border border-border/50 relative z-10 select-none cursor-pointer block"
               >
                  <img 
                    src={resumeImg} 
                    alt="Resume Preview" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                     <div className="bg-secondary text-secondary-foreground font-bold backdrop-blur-md px-6 py-2.5 rounded-lg flex items-center gap-2">
                        <ExternalLink className="size-4" />
                        Quick Preview
                     </div>
                  </div>
               </motion.a>

               <div className="absolute top-10 right-10 opacity-20 rotate-12"><Smartphone size={40} /></div>
               <div className="absolute bottom-10 left-10 opacity-20 -rotate-12 font-mono text-4xl">{"{ }"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
