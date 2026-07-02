"use client";

import { Play, Shield, Zap, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToContent = () => {
    const trendingSection = document.getElementById("trending");
    if (trendingSection) {
      trendingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.15)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_hsl(var(--accent)/0.08)_0%,_transparent_50%)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
          <Zap className="w-4 h-4 fill-primary" />
          Premium HD Streaming — No Ads
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
          <span className="text-white">Experience</span>
          <br />
          <span className="gradient-text">Velvet</span>
          <span className="text-white">.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Thousands of exclusive HD videos. Curated categories. Zero ads.
          <br />
          The premium adult entertainment platform designed for the discerning viewer.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContent}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            <Play className="w-5 h-5 fill-white" />
            Watch Now
          </button>
          <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-base transition-all duration-200 border border-border/50">
            Explore Categories
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-green-500" />
            18+ Verified
          </span>
          <span className="flex items-center gap-1.5">
            <Play className="w-4 h-4 text-primary" />
            10,000+ Videos
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400" />
            4K HDR Quality
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground/50 mx-auto" />
        </div>
      </div>
    </section>
  );
}
