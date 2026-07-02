"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { VideoCard } from "@/components/sections/video-card";
import { VideoPlayer } from "@/components/sections/video-player";
import { newReleaseVideos, type VideoData } from "@/lib/video-data";

export function NewReleases() {
  const [playingVideo, setPlayingVideo] = useState<VideoData | null>(null);

  return (
    <>
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  New Releases
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Fresh content added daily
                </p>
              </div>
            </div>
            <button className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors">
              View All
              <span aria-hidden="true">→</span>
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {newReleaseVideos.map((video) => (
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
