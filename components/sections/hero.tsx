"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, ChevronRight, Shield } from "lucide-react";
import Link from "next/link";

const categories = [
  "Amateur", "Professional", "Lesbian", "Trans", "Couples",
  "Solo", "VR", "BDSM", "Asian", "European", "Anal", "Threesome"
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="premium" className="text-xs tracking-widest uppercase px-3 py-1">
                <Sparkles className="h-3 w-3 mr-1" /> The Ultimate Experience
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Welcome to{" "}
                <span className="gradient-text">Velvet</span>
                <br />
                <span className="text-foreground/80">Where Fantasy Meets Reality</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Thousands of exclusive HD videos. Curated categories. Zero ads.
                The premium adult entertainment platform designed for the
                discerning viewer.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="gap-2 text-base h-12 px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 glow">
                <Play className="h-5 w-5 fill-current" />
                Start Watching Free
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base h-12 px-8">
                <Shield className="h-5 w-5" />
                View Plans
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold gradient-text">50K+</div>
                <div className="text-xs text-muted-foreground">HD Videos</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">2M+</div>
                <div className="text-xs text-muted-foreground">Active Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">4K</div>
                <div className="text-xs text-muted-foreground">Ultra HD</div>
              </div>
            </div>
          </div>

          {/* Right — Category Cloud */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                  Browse Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/category/${cat.toLowerCase()}`}
                      className="group inline-flex items-center gap-1 rounded-full border border-border bg-background/50 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      {cat}
                      <ChevronRight className="h-3 w-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <Link href="/categories" className="text-sm text-primary hover:text-accent transition-colors inline-flex items-center gap-1">
                    View all 40+ categories <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
