import * as React from "react";
import { cn } from "@/lib/utils";

export function Avatar({ className, src, alt, fallback }: { className?: string; src?: string; alt: string; fallback: string }) {
  return (
    <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}>
      {src ? (
        <img src={src} alt={alt} className="aspect-square h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground">
          {fallback}
        </div>
      )}
    </div>
  );
}
