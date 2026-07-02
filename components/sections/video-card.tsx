"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Clock, Heart } from "lucide-react";
import { useState } from "react";

interface VideoCardProps {
  title: string;
  thumbnail?: string;
  duration: string;
  views: string;
  category: string;
  premium?: boolean;
  hd?: boolean;
  className?: string;
  featured?: boolean;
}

const gradients = [
  "from-pink-500/30 via-purple-500/20 to-transparent",
  "from-blue-500/30 via-cyan-500/20 to-transparent",
  "from-orange-500/30 via-red-500/20 to-transparent",
  "from-emerald-500/30 via-teal-500/20 to-transparent",
  "from-violet-500/30 via-indigo-500/20 to-transparent",
  "from-rose-500/30 via-pink-500/20 to-transparent",
];

const thumbColors = [
  "bg-gradient-to-br from-pink-600/40 to-purple-900/60",
  "bg-gradient-to-br from-blue-600/40 to-indigo-900/60",
  "bg-gradient-to-br from-orange-600/40 to-red-900/60",
  "bg-gradient-to-br from-emerald-600/40 to-teal-900/60",
  "bg-gradient-to-br from-violet-600/40 to-indigo-900/60",
  "bg-gradient-to-br from-rose-600/40 to-pink-900/60",
];

const emojis = ["🔥", "💜", "✨", "🌶️", "💋", "👑"];

export function VideoCard({ title, duration, views, category, premium, hd, className, featured }: VideoCardProps) {
  const [liked, setLiked] = useState(false);
  const idx = Math.floor(Math.random() * 6);

  return (
    <div className={cn("group cursor-pointer", className)}>
      {/* Thumbnail */}
      <div className={cn("relative aspect-video rounded-xl overflow-hidden", featured ? "rounded-2xl" : "")}>
        <div className={cn("absolute inset-0", thumbColors[idx])}>
          <div className={cn("absolute inset-0 bg-gradient-to-br", gradients[idx])} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-30 select-none">{emojis[idx]}</span>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
            <Play className="h-6 w-6 text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* Top badges */}
        <div className="absolute top-2 left-2 right-2 flex items-start justify-between">
          <div className="flex gap-1.5">
            {premium && <Badge variant="premium" className="text-[10px] px-1.5 py-0.5">PREMIUM</Badge>}
            {hd && <Badge variant="default" className="text-[10px] px-1.5 py-0.5 bg-black/60 border-0">HD</Badge>}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
            className="h-7 w-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className={cn("h-3.5 w-3.5", liked ? "fill-red-500 text-red-500" : "text-white")} />
          </button>
        </div>

        {/* Duration */}
        <div className="absolute bottom-2 right-2 rounded-md bg-black/70 px-1.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
          {duration}
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <div className="flex items-center gap-2">
          <Badge variant="default" className="text-[10px] px-1.5 py-0 bg-muted/50 text-muted-foreground border-0">
            {category}
          </Badge>
        </div>
        <h3 className="text-sm font-medium text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" /> {views}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {duration}
          </span>
        </div>
      </div>
    </div>
  );
}
