"use client";

import { useEffect, useCallback } from "react";
import { X, Maximize2, Minimize2, Heart, Share2 } from "lucide-react";
import type { VideoData } from "@/lib/video-data";

interface VideoPlayerProps {
  video: VideoData | null;
  onClose: () => void;
}

export function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (video) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [video, handleKeyDown]);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-5xl mx-4 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-3 min-w-0">
            <h2 className="text-lg font-semibold text-white truncate">
              {video.title}
            </h2>
            <span className="shrink-0 text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
              {video.duration}
            </span>
            {video.hd && (
              <span className="shrink-0 text-[10px] font-bold text-primary bg-primary/15 px-1.5 py-0.5 rounded">
                HD
              </span>
            )}
            {video.premium && (
              <span className="shrink-0 text-[10px] font-bold text-amber-400 bg-amber-400/15 px-1.5 py-0.5 rounded">
                PREMIUM
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-1.5 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Embed */}
        <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-border/50">
          <iframe
            src={video.embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            title={video.title}
            loading="lazy"
          />
        </div>

        {/* Actions Bar */}
        <div className="flex items-center justify-between mt-3 px-1">
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {video.views} views
            </span>
            <span className="text-sm text-muted-foreground">
              {video.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-white text-xs transition-colors">
              <Heart className="w-3.5 h-3.5" />
              Like
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-white text-xs transition-colors">
              <Share2 className="w-3.5 h-3.5" />
              Share
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-white text-xs transition-colors">
              <Maximize2 className="w-3.5 h-3.5" />
              Fullscreen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
