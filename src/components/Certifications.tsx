import { motion } from "motion/react";
import { CERTIFICATIONS } from "@/src/constants";
import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex items-center gap-4">
          <div className="size-12 rounded-2xl bg-amber-500/10 flex items-center justify-center">
            <Award className="text-amber-500 size-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl glass border-border/50 flex flex-col group transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
            >
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="aspect-[4/3] rounded-2xl mb-6 overflow-hidden bg-muted flex items-center justify-center relative shadow-sm transition-all duration-500 cursor-pointer block"
              >
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background" />
                    <div className="absolute inset-0 opacity-10 neural-bg" />
                    <Award className="size-20 text-muted-foreground/20 transition-colors duration-500" />
                  </>
                )}
              </a>

              <div className="flex-grow">
                <h3 className="text-lg font-bold mb-2 transition-colors group-hover:text-primary">{cert.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>{cert.issuer}</span>
                  <span className="font-mono">{cert.date}</span>
                </div>
                {cert.credentialId && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider hover:text-primary transition-colors cursor-pointer"
                  >
                    ID: {cert.credentialId}
                  </a>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <Button
                  variant="outline"
                  className="w-full rounded-2xl border-primary/20 hover:border-primary hover:bg-primary/5 text-primary gap-2 font-bold uppercase tracking-widest text-[10px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] active:scale-95 group/btn"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center justify-center">
                    Verify Certificate
                    <ExternalLink className="size-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
