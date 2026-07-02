"use client";

import { VideoCard } from "./video-card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ChevronRight } from "lucide-react";

const trendingVideos = [
  { title: "Midnight Seduction — Full Scene", duration: "42:15", views: "2.1M", category: "Amateur", premium: false, hd: true },
  { title: "Velvet Exclusive: Spanish Villa", duration: "58:30", views: "1.8M", category: "Professional", premium: true, hd: true },
  { title: "Intimate Moments — Couples Special", duration: "35:00", views: "1.5M", category: "Couples", premium: false, hd: true },
  { title: "After Dark — Lesbian Series Ep. 4", duration: "48:20", views: "1.2M", category: "Lesbian", premium: false, hd: true },
  { title: "VR Experience: 360° Passion", duration: "25:10", views: "980K", category: "VR", premium: true, hd: false },
  { title: "European Escapades Vol. 3", duration: "52:45", views: "890K", category: "European", premium: false, hd: true },
];

export function Trending() {
  return (
    <section id="trending" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold">Trending Now</h2>
            </div>
            <p className="text-muted-foreground text-sm">Most watched this week</p>
          </div>
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            View All <ChevronRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trendingVideos.map((video, i) => (
            <VideoCard key={i} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
}
