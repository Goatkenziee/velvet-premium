"use client";

import { VideoCard } from "./video-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ChevronRight } from "lucide-react";

const newVideos = [
  { title: "Velvet Originals: First Time", duration: "45:20", views: "340K", category: "Amateur", premium: false, hd: true },
  { title: "Parisian Nights — Exclusive", duration: "52:10", views: "280K", category: "European", premium: true, hd: true },
  { title: "Passion Play — Ep. 7", duration: "38:45", views: "195K", category: "Professional", premium: false, hd: true },
  { title: "Behind Closed Doors Vol. 12", duration: "41:30", views: "410K", category: "Couples", premium: false, hd: true },
];

export function NewReleases() {
  return (
    <section id="new" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              <h2 className="text-2xl sm:text-3xl font-bold">New Releases</h2>
              <Badge variant="new" className="text-[10px]">LIVE</Badge>
            </div>
            <p className="text-muted-foreground text-sm">Updated daily with fresh content</p>
          </div>
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            What&apos;s New <ChevronRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {newVideos.map((video, i) => (
            <VideoCard key={i} {...video} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
