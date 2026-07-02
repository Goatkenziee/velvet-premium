"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Grid3X3, ChevronRight } from "lucide-react";

const categories = [
  { name: "Amateur", count: "12.4K", color: "from-pink-500/20 to-purple-500/20", border: "border-pink-500/20" },
  { name: "Professional", count: "8.2K", color: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/20" },
  { name: "Lesbian", count: "6.8K", color: "from-purple-500/20 to-violet-500/20", border: "border-purple-500/20" },
  { name: "Couples", count: "5.1K", color: "from-rose-500/20 to-pink-500/20", border: "border-rose-500/20" },
  { name: "Trans", count: "4.3K", color: "from-cyan-500/20 to-teal-500/20", border: "border-cyan-500/20" },
  { name: "Solo", count: "3.9K", color: "from-amber-500/20 to-orange-500/20", border: "border-amber-500/20" },
  { name: "VR", count: "2.1K", color: "from-emerald-500/20 to-green-500/20", border: "border-emerald-500/20" },
  { name: "BDSM", count: "3.4K", color: "from-red-500/20 to-rose-500/20", border: "border-red-500/20" },
  { name: "Asian", count: "5.7K", color: "from-indigo-500/20 to-blue-500/20", border: "border-indigo-500/20" },
  { name: "European", count: "4.8K", color: "from-teal-500/20 to-emerald-500/20", border: "border-teal-500/20" },
  { name: "Anal", count: "6.2K", color: "from-orange-500/20 to-red-500/20", border: "border-orange-500/20" },
  { name: "Threesome", count: "3.6K", color: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/20" },
];

export function Categories() {
  return (
    <section id="categories" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Grid3X3 className="h-5 w-5 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold">Categories</h2>
            </div>
            <p className="text-muted-foreground text-sm">Explore by category</p>
          </div>
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            All Categories <ChevronRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/category/${cat.name.toLowerCase()}`}>
              <Card className={`p-4 border ${cat.border} bg-gradient-to-br ${cat.color} hover:scale-[1.02] transition-all cursor-pointer`}>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">{cat.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{cat.count} videos</span>
                    <ChevronRight className="h-3 w-3 text-muted-foreground" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
