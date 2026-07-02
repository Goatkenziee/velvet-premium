"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, Heart, User, LogIn, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Trending", href: "#trending" },
  { label: "Categories", href: "#categories" },
  { label: "Premium", href: "#premium" },
  { label: "New Releases", href: "#new" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span className="gradient-text">Velvet</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        {/* Search */}
        <div className={cn("hidden md:flex items-center gap-2", searchOpen && "flex")}>
          {searchOpen ? (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="w-64 pl-9 h-9 text-sm"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-2">
            <Heart className="h-4 w-4" />
            <span className="hidden lg:inline">Favorites</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <User className="h-4 w-4" />
            <span className="hidden lg:inline">Sign In</span>
          </Button>
          <Button size="sm" className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90">
            <Sparkles className="h-4 w-4" />
            <span>Join Premium</span>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="space-y-1 px-4 py-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="w-full pl-9" />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Heart className="h-4 w-4" /> Favorites
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <LogIn className="h-4 w-4" /> Sign In
              </Button>
              <Button className="w-full justify-start gap-2 bg-gradient-to-r from-primary to-accent">
                <Sparkles className="h-4 w-4" /> Join Premium
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
