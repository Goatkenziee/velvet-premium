"use client";

import { Play, Heart, Clock, Eye } from "lucide-react";
import type { VideoData } from "@/lib/video-data";

interface VideoCardProps {
  video: VideoData;
  onPlay?: (video: VideoData) => void;
  featured?: boolean;
}

export function VideoCard({ video, onPlay, featured }: VideoCardProps) {
  // Generate a unique gradient based on the video id for the thumbnail placeholder
  const hue1 = ((parseInt(video.id.slice(-6), 16) || 260) % 360);
  const hue2 = (hue1 + 40) % 360;
  const gradient = `linear-gradient(135deg, hsl(${hue1}, 70%, 20%), hsl(${hue2}, 80%, 12%))`;

  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
      {/* Thumbnail */}
      <div
        className="relative aspect-video overflow-hidden cursor-pointer"
        onClick={() => onPlay?.(video)}
      >
        {/* Gradient placeholder */}
        <div
          className="absolute inset-0"
          style={{ background: gradient }}
        />
        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)",
          }}
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1.5">
          {video.hd && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/80 text-white">
              HD
            </span>
          )}
          {video.premium && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/80 text-white">
              PREMIUM
            </span>
          )}
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-2 left-2">
          <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-black/70 text-white/90 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {video.duration}
          </span>
        </div>

        {/* Play overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-primary/25">
            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <h3
            className={`font-semibold text-white leading-tight line-clamp-1 ${
              featured ? "text-base" : "text-sm"
            }`}
          >
            {video.title}
          </h3>
          <button
            className="shrink-0 p-1 rounded-full text-muted-foreground hover:text-primary transition-colors"
            aria-label="Like"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3 text-[12px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {video.views}
          </span>
          <span className="px-1.5 py-0.5 rounded-full bg-muted/50">
            {video.category}
          </span>
        </div>

        {/* Play button */}
        <button
          onClick={() => onPlay?.(video)}
          className="w-full mt-1.5 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition-colors"
        >
          <Play className="w-3.5 h-3.5 fill-primary" />
          Play Now
        </button>
      </div>
    </div>
  );
}
