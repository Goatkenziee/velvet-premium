"use client";

import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";

const footerLinks = {
  Browse: ["Trending", "New Releases", "Categories", "Premium", "VR Content"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service", "DMCA"],
  Community: ["Forums", "Blog", "Discord", "Twitter", "Instagram"],
  Legal: ["2257 Notice", "Privacy", "Terms", "Cookies", "Accessibility"],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold">
              <span className="gradient-text">Velvet</span>
            </span>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Velvet. All rights reserved. | 18+ Only
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9.6.1.44-.27.44-.6v-2.14c-3.43.75-4.15-1.65-4.15-1.65-.56-1.43-1.37-1.81-1.37-1.81-1.12-.77.08-.75.08-.75 1.24.09 1.9 1.28 1.9 1.28 1.1 1.9 2.9 1.35 3.6 1.03.1-.8.43-1.35.78-1.66-2.74-.31-5.62-1.38-5.62-6.14 0-1.35.48-2.46 1.27-3.33-.13-.31-.55-1.57.12-3.27 0 0 1.04-.33 3.4 1.27.99-.28 2.05-.42 3.1-.42 1.05 0 2.11.14 3.1.42 2.36-1.6 3.4-1.27 3.4-1.27.67 1.7.25 2.96.12 3.27.79.87 1.27 1.98 1.27 3.33 0 4.77-2.9 5.82-5.66 6.13.44.38.84 1.13.84 2.28v3.38c0 .33.16.7.45.6 4.78-.75 8.44-4.9 8.44-9.9 0-5.53-4.5-10.02-10-10.02z"/></svg>
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[11px] text-muted-foreground/60 leading-relaxed max-w-3xl mx-auto">
            This website contains age-restricted material. You must be 18 years or older (21 in some jurisdictions) 
            to access this website. By entering this site, you agree to our Terms of Service and Privacy Policy. 
            All models appearing on this site are 18 years or older. Records required by 18 U.S.C. Section 2257 
            are on file with the Custodian of Records.
          </p>
        </div>
      </div>
    </footer>
  );
}
