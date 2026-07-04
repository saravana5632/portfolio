import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Database, 
  Filter, 
  Cpu, 
  LineChart, 
  LayoutDashboard,
  ArrowRight,
  Sparkles
} from "lucide-react";

const stages = [
  {
    id: "collection",
    title: "Data Collection",
    icon: Database,
    tools: ["APIs", "Web Scraping"],
    color: "from-blue-500/20 to-blue-600/20",
    glow: "shadow-blue-500/50"
  },
  {
    id: "cleaning",
    title: "Data Cleaning",
    icon: Filter,
    tools: ["Pandas", "NumPy", "Regex"],
    color: "from-cyan-500/20 to-cyan-600/20",
    glow: "shadow-cyan-500/50"
  },
  {
    id: "building",
    title: "Model Building",
    icon: Cpu,
    tools: ["Scikit-learn", "TensorFlow", "PyTorch"],
    color: "from-purple-500/20 to-purple-600/20",
    glow: "shadow-purple-500/50"
  },
  {
    id: "evaluation",
    title: "Evaluation",
    icon: LineChart,
    tools: ["Metrics", "Cross-validation", "GridSearch"],
    color: "from-indigo-500/20 to-indigo-600/20",
    glow: "shadow-indigo-500/50"
  },
  {
    id: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
    tools: ["Power BI", "Tableau", "Streamlit"],
    color: "from-sky-500/20 to-sky-600/20",
    glow: "shadow-sky-500/50"
  }
];

export function WorkflowAnimation() {
  const [activeStage, setActiveStage] = React.useState(0);
  const [isMoving, setIsMoving] = React.useState(false);
  const [isResetting, setIsResetting] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [animationKey, setAnimationKey] = React.useState(0);
  
  const startedRef = React.useRef(false);
  const isRunningRef = React.useRef(false);

  // Strictly controlled sequential animation sequence
  React.useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const runWorkflow = async () => {
      if (isRunningRef.current) return;
      isRunningRef.current = true;

      while (true) {
        for (let i = 0; i < stages.length - 1; i++) {
          // 1. Set current active stage
          setActiveStage(i);
          setIsMoving(false);
          setIsResetting(false);
          
          await delay(600); // Initial pause at node

          // 2. Trigger transition animation
          setIsMoving(true);
          setAnimationKey(prev => prev + 1);
          
          // 3. Wait for animation duration (800ms)
          await delay(800); 
          
          // 4. Pause before next step
          await delay(600);
        }

        // Final node: Dashboard
        setActiveStage(stages.length - 1);
        setIsMoving(false);
        await delay(1500); // Wait on Dashboard

        // START RESET PHASE
        setIsResetting(true);
        await delay(800); // Duration for reset (can be used for fade/scale out)

        // Reset to first node after animation
        setActiveStage(0);
        setIsResetting(false);
        await delay(500); // Short buffer before restarting the cycle
      }
    };

    runWorkflow();
  }, []);

  return (
    <div className="relative w-full max-w-sm ml-auto py-4 overflow-visible">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      {/* Global Reset Animation Particle */}
      <AnimatePresence>
        {isResetting && (
          <motion.div
            key="reset-pulse"
            className="absolute w-[4px] bg-primary/80 shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)] rounded-full z-50"
            style={{ left: '40px', x: '-50%' }}
            initial={{ height: 0, bottom: "10%", opacity: 0 }}
            animate={{ 
              height: [0, 100, 0],
              bottom: ["10%", "50%", "90%"],
              opacity: [0, 1, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <div className="relative flex flex-col items-center gap-0">
        {stages.map((stage, index) => {
          const isActive = activeStage === index && !isResetting;
          const isHovered = hoveredIndex === index;
          const Icon = stage.icon;

          return (
            <React.Fragment key={stage.id}>
              {/* Stage Node */}
              <div 
                className="relative flex flex-col items-center group cursor-pointer z-10 w-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center gap-6 w-full">
                  {/* Icon Container - Increased from size-14 to size-20 */}
                  <div className="relative flex-shrink-0 flex justify-center w-20">
                    <motion.div
                      animate={{ 
                        scale: isActive || isHovered ? 1.1 : 1,
                        borderColor: isActive || isHovered ? "var(--primary)" : "rgba(255, 255, 255, 0.1)"
                      }}
                      className={`
                        relative size-20 rounded-2xl border-2 flex items-center justify-center
                        bg-muted/50 backdrop-blur-xl transition-all duration-500
                        ${isActive || isHovered ? `shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]` : "shadow-none"}
                      `}
                    >
                      <Icon className={`size-8 transition-colors duration-500 ${isActive || isHovered ? "text-primary" : "text-muted-foreground"}`} />
                      
                      {/* Tooltip */}
                      <AnimatePresence>
                        {(isHovered) && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -20 }}
                            animate={{ opacity: 1, scale: 1, x: -10 }}
                            exit={{ opacity: 0, scale: 0.9, x: -20 }}
                            className="absolute right-full top-0 w-48 p-4 rounded-xl glass border border-primary/20 shadow-2xl z-[100] pointer-events-none mr-4"
                          >
                            <p className="text-[10px] uppercase font-black tracking-widest text-primary mb-2">Tools Used</p>
                            <div className="flex flex-wrap gap-1.5">
                              {stage.tools.map(tool => (
                                <span key={tool} className="px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-medium text-foreground">
                                  {tool}
                                </span>
                              ))}
                            </div>
                            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-background border-r border-t border-primary/20 rotate-45" />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Active Pulse Ring */}
                      {isActive && (
                        <motion.div
                          layoutId="pulse"
                          className="absolute inset-0 rounded-2xl border-2 border-primary"
                          initial={{ opacity: 0, scale: 1 }}
                          animate={{ opacity: [0, 0.5, 0], scale: 1.4 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                      
                      {/* Reset Flash */}
                      {isResetting && activeStage === index && (
                        <motion.div 
                          className="absolute inset-0 rounded-2xl bg-primary/20"
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 0.8 }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Text Content - Scaled up font sizes */}
                  <div className="text-left flex-1">
                    <p className={`text-xs md:text-sm font-black uppercase tracking-widest transition-colors duration-500 ${isActive || isHovered ? "text-primary" : "text-muted-foreground"}`}>
                      {stage.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5 opacity-60">
                      {stage.tools.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-[10px] font-medium text-muted-foreground tracking-wide">{t}{i < stage.tools.slice(0, 3).length - 1 && " •"}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Line - Precise Vertical Alignment */}
              {index < stages.length - 1 && (
                <div className="relative flex flex-col items-start w-full">
                  {/* Container width exactly matches the icon container (w-20) */}
                  <div className="w-20 flex justify-center">
                    <div className="relative w-[3px] h-12 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-primary/40"
                        initial={false}
                        animate={{ 
                          opacity: activeStage > index ? 1 : (activeStage === index ? 1 : 0.2)
                        }}
                      />
                      
                      {/* Data Particle Effect */}
                      {activeStage === index && isMoving && (
                        <motion.div
                          key={`particle-${activeStage}-${animationKey}`}
                          className="absolute size-2 bg-primary shadow-[0_0_12px_rgba(var(--primary-rgb),0.8)] rounded-full"
                          style={{ left: '50%', x: '-50%' }}
                          initial={{ top: "-20%" }}
                          animate={{
                             top: "120%"
                          }}
                          transition={{ 
                            duration: 0.8, 
                            repeat: 0,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-1 rounded-full bg-primary"
            animate={{
              y: [0, -40],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 20}%`,
              bottom: "0%"
            }}
          />
        ))}
      </div>
    </div>
  );
}
