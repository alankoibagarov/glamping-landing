"use client";

import {useState, useEffect} from "react";
import { MoonStar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#stays", label: "Stays" },
  { href: "#experience", label: "Experience" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-40 border-b bg-background/80 backdrop-blur transition-all duration-300 ease-out self-center max-w-full",
        isScrolled ? "bg-background/90 shadow-sm w-6xl rounded-3xl" : "w-full",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 transform-gpu origin-top transition-all duration-300 ease-out",
          isScrolled ? "py-2 scale-90" : "py-3 scale-100",
        )}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MoonStar className="h-4 w-4" />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">
              Aurora Glamping
            </span>
            <span className="text-xs text-muted-foreground">
              Stay under a brighter sky
            </span>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="hidden rounded-full px-4 text-xs md:inline-flex"
          >
            <a href="#stays">View stays</a>
          </Button>
          <Button asChild size="sm" className="rounded-full px-4 text-xs shadow-sm">
            <a href="#cta">Check availability</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

