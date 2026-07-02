"use client";

import { useState } from "react";
import { Flame } from "lucide-react";
import { VideoCard } from "@/components/sections/video-card";
import { VideoPlayer } from "@/components/sections/video-player";
import { trendingVideos, type VideoData } from "@/lib/video-data";

export function Trending() {
  const [playingVideo, setPlayingVideo] = useState<VideoData | null>(null);

  return (
    <>
      <section id="trending" className="relative py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Flame className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Trending Now
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Most watched this week
                </p>
              </div>
            </div>
            <button className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
              View All
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trendingVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={setPlayingVideo}
              />
            ))}
          </div>
        </div>
      </section>

      <VideoPlayer
        video={playingVideo}
        onClose={() => setPlayingVideo(null)}
      />
    </>
  );
}
