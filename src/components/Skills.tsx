import { motion } from "motion/react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { SKILLS } from "@/src/constants";
import { Brain, Code2, Database } from "lucide-react";

export function Skills() {
  const chartData = SKILLS.map(s => ({ subject: s.name, full: 100, A: s.level }));

  return (
    <section id="skills" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Technical Proficiency</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              Quantifying expertise across core Machine Learning components and programming languages.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="h-[400px] w-full glass rounded-3xl p-8 flex items-center justify-center bg-background/50 select-none pointer-events-none"
          >
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Radar
                  name="Skill Level"
                  dataKey="A"
                  stroke="#38bdf8"
                  fill="#38bdf8"
                  fillOpacity={0.6}
                  style={{ pointerEvents: 'none' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="space-y-6">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold tracking-widest uppercase text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
