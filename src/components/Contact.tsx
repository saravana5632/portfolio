import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Mail, Github, Linkedin, Terminal, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [formState, setFormState] = React.useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = React.useState({ name: false, email: false, subject: false, message: false });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const [hoveredIcon, setHoveredIcon] = React.useState<"github" | "linkedin" | "leetcode" | null>(null);

  const socialLinks = [
    {
      id: "github" as const,
      label: "github",
      href: "https://github.com/saravana5632",
      icon: Github,
      ariaLabel: "GitHub profile",
      expandedWidth: 140,
    },
    {
      id: "linkedin" as const,
      label: "linkedin",
      href: "https://www.linkedin.com/in/saravana5632",
      icon: Linkedin,
      ariaLabel: "LinkedIn profile",
      expandedWidth: 155,
    },
    {
      id: "leetcode" as const,
      label: "leetcode",
      href: "https://leetcode.com/u/sSewr2BiES",
      icon: Terminal,
      ariaLabel: "LeetCode profile",
      expandedWidth: 155,
    },
  ];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("oatktg.saravana5632@gmail.com")
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      })
      .catch(() => {
        // Fallback silently if clipboard access is denied
      });
  };


  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyc3au4FjXvfjkSETaclpn88VJ_3mrcgS552Vjmi8LW60gPyuVvyIgpHSO4Ve_gT34/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !formState.name.trim(),
      email: !formState.email.trim() || !/^\S+@\S+\.\S+$/.test(formState.email),
      subject: !formState.subject.trim(),
      message: !formState.message.trim(),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);
    try {
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
    if (value.trim()) setErrors(prev => ({ ...prev, [id]: false }));
  };

  const textFields = [
    { id: "name" as const, label: "Name", placeholder: "Enter your name", type: "text" },
    { id: "email" as const, label: "Email", placeholder: "your@email.com", type: "email" },
    { id: "subject" as const, label: "Subject", placeholder: "Inquiry about...", type: "text" },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-black mb-6 tracking-tight">Let's <span className="text-primary">Collaborate</span>.</h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-light">
                  Have a data challenge or an internship opportunity? I'm always open to discussing new projects, ML research, or data-driven business solutions.
                </p>

                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-4 rounded-2xl glass hover:bg-muted/35 transition-all duration-300 group/email">
                    <a
                      href="mailto:oatktg.saravana5632@gmail.com"
                      className="flex items-center gap-4 group cursor-pointer flex-1 min-w-0"
                      aria-label="Send email to Saravanakumar"
                    >
                      <div className="size-12 rounded-xl glass flex items-center justify-center group-hover/email:bg-primary transition-all duration-300 shrink-0">
                        <Mail className="size-5 group-hover/email:text-primary-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Email Me</div>
                        <div className="text-sm sm:text-base md:text-lg font-medium truncate block">oatktg.saravana5632@gmail.com</div>
                      </div>
                    </a>
                    
                    <button
                      onClick={handleCopyEmail}
                      id="copy-email-button"
                      className="self-start sm:self-auto h-10 px-4 rounded-xl border border-border bg-background/50 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all shrink-0 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      <Copy className="size-3.5" />
                      Copy Email
                    </button>
                  </div>

                  <div 
                    className="flex items-center h-14 gap-6"
                    id="social-links-container"
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    {socialLinks.map((link) => {
                      const isHovered = hoveredIcon === link.id;
                      const isOtherHovered = hoveredIcon !== null && !isHovered;
                      const IconComponent = link.icon;

                      return (
                        <motion.a
                          key={link.id}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.ariaLabel}
                          onMouseEnter={() => setHoveredIcon(link.id)}
                          onMouseLeave={() => setHoveredIcon(null)}
                          animate={{
                            width: isOtherHovered ? 56 : isHovered ? link.expandedWidth : 56,
                            opacity: isOtherHovered ? 0 : 1,
                            scale: isOtherHovered ? 0.9 : 1,
                          }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 450, 
                            damping: 26 
                          }}
                          className={`h-14 rounded-2xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 overflow-hidden shrink-0 cursor-pointer ${
                            isHovered ? "px-5" : "w-14"
                          } ${isOtherHovered ? "pointer-events-none" : ""}`}
                        >
                          <div className="flex items-center justify-center select-none whitespace-nowrap">
                            <AnimatePresence>
                              {isHovered && (
                                <motion.span
                                  initial={{ opacity: 0, width: 0, x: -10 }}
                                  animate={{ opacity: 1, width: "auto", x: 0 }}
                                  exit={{ opacity: 0, width: 0, x: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="font-mono text-xs font-bold tracking-widest uppercase mr-3 shrink-0"
                                >
                                  {link.label}
                                </motion.span>
                              )}
                            </AnimatePresence>
                            <IconComponent className="size-7 shrink-0" />
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] glass shadow-2xl relative"
            >
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {textFields.map(({ id, label, placeholder, type }) => (
                  <div key={id} className="space-y-2">
                    <label
                      htmlFor={id}
                      className={`text-xs font-black uppercase tracking-widest transition-colors ${errors[id] ? "text-destructive" : "text-muted-foreground"}`}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      value={formState[id]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={`w-full h-14 px-6 rounded-2xl bg-background/50 border outline-none transition-all placeholder:text-muted-foreground/50 ${errors[id] ? "border-destructive ring-1 ring-destructive" : "border-border focus:border-primary focus:ring-1 focus:ring-primary"}`}
                    />
                    {errors[id] && (
                      <p className="text-[10px] uppercase font-bold tracking-wider text-destructive mt-1">
                        {id === "email" ? "Please enter a valid email address" : `Please enter your ${id}`}
                      </p>
                    )}
                  </div>
                ))}

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className={`text-xs font-black uppercase tracking-widest transition-colors ${errors.message ? "text-destructive" : "text-muted-foreground"}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className={`w-full p-6 rounded-2xl bg-background/50 border outline-none transition-all placeholder:text-muted-foreground/50 resize-none ${errors.message ? "border-destructive ring-1 ring-destructive" : "border-border focus:border-primary focus:ring-1 focus:ring-primary"}`}
                  />
                  {errors.message && (
                    <p className="text-[10px] uppercase font-bold tracking-wider text-destructive mt-1">Please enter your message</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-2xl bg-primary text-primary-foreground font-black text-base hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-all disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
                  <Send className={`ml-2 size-5 ${isSubmitted ? "animate-bounce" : ""} ${isSubmitting ? "animate-pulse" : ""}`} />
                </Button>

                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xs font-bold uppercase tracking-widest text-primary"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            id="copy-toast-notification"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-card border border-border px-5 py-3.5 rounded-2xl shadow-xl max-w-sm"
          >
            <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <Check className="size-4" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-card-foreground">Copied!</div>
              <div className="text-[11px] text-muted-foreground font-medium">Email address copied to clipboard.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
            © 2026 Saravanakumar G • Built with React & Intelligence
          </div>
          <div className="flex items-center gap-8">
            <a href="#home" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
