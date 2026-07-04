import { motion } from "motion/react";
import { TOOLS } from "@/src/constants";
import { Wrench } from "lucide-react";

export function Tools() {
  return (
    <section id="tools" className="py-24 bg-background">
      <div className="container mx-auto px-4">
         <div className="mb-16 flex items-center gap-4">
          <div className="size-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
            <Wrench className="text-blue-500 size-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Tools & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl glass hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6 group-hover:text-primary transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 rounded-lg bg-muted text-xs font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
