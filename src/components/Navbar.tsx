import * as React from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/src/constants";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tighter text-foreground">
            SARAVANA<span className="text-primary">KUMAR</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8 lg:mr-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-foreground" aria-label="Open menu">
                  <Menu className="size-6" />
                </Button>
              }
            />
            <SheetContent 
              side="right" 
              showCloseButton={false}
              className="glass border-l-border/30 w-full sm:w-[400px] p-0 flex flex-col justify-between h-full overflow-hidden"
            >
              <SheetClose 
                className="absolute top-4 right-4 flex items-center justify-center size-12 rounded-full hover:bg-foreground/10 transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                render={<button type="button" aria-label="Close menu" />}
              >
                <X className="size-6 text-foreground" />
              </SheetClose>

              <div className="flex flex-col gap-6 pt-24 pb-6 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <SheetClose 
                    key={link.name} 
                    nativeButton={false}
                    render={
                      <a
                        href={link.href}
                        className="text-[18px] font-semibold leading-normal text-foreground hover:text-primary transition-all duration-200 ease-in-out pl-6 flex items-center min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-r-full mr-6"
                      >
                        {link.name}
                      </a>
                    } 
                  />
                ))}
              </div>

              <div className="px-4 pb-4 mt-auto">
                <SheetClose 
                  nativeButton={false}
                  render={
                    <a 
                      href="#contact"
                      className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 ease-in-out text-[18px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background flex items-center justify-center" 
                    >
                      Hire Me
                    </a>
                  } 
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
