import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, children, variant = "default" }: { className?: string; children: React.ReactNode; variant?: "default" | "premium" | "new" }) {
  const variants = {
    default: "bg-muted text-muted-foreground",
    premium: "bg-gradient-to-r from-primary to-accent text-white",
    new: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  };
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}
