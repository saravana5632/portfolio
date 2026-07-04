import { motion } from "motion/react";
import { PROJECTS } from "@/src/constants";
import { Github, ExternalLink, Blocks } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex items-center gap-4">
          <div className="size-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
            <Blocks className="text-indigo-500 size-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden group flex flex-col">
                <CardHeader className="pb-4 relative">
                  <div className="absolute top-4 right-4 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity">
                    <Blocks className="size-16" />
                  </div>
                  <div className="flex gap-2 flex-wrap mb-3">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[10px] uppercase font-bold tracking-tighter bg-primary/10 text-primary border-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-0 justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                  >
                    <Github className="size-4" />
                    Source Code
                  </a>
                  {project.demo ? (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] animate-pulse hover:animate-none"
                    >
                      <ExternalLink className="size-3" />
                      Live Demo
                    </a>
                  ) : (
                    <div className="size-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ExternalLink className="size-4" />
                    </div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
