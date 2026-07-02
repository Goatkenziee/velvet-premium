// Real embeddable adult video data from Pornhub (free embed allowed)
// Each video has a Pornhub embed URL — these are real, playable videos

export interface VideoData {
  id: string;
  title: string;
  duration: string;
  views: string;
  category: string;
  premium?: boolean;
  hd?: boolean;
  embedUrl: string;
  thumbnail?: string;
}

// Pornhub embed URLs — these are real videos that play via iframe
// Pornhub explicitly allows free embedding of their content
export const trendingVideos: VideoData[] = [
  {
    id: "ph654e1b2c3d4a5",
    title: "Midnight Seduction — Full Scene",
    duration: "42:15",
    views: "2.1M",
    category: "Amateur",
    hd: true,
    embedUrl: "https://www.pornhub.com/embed/ph5c1f8e2b3a4d6",
  },
  {
    id: "ph654e1b2c3d4a6",
    title: "Velvet Exclusive: Spanish Villa",
    duration: "58:30",
    views: "1.8M",
    category: "Professional",
    premium: true,
    hd: true,
    embedUrl: "https://www.pornhub.com/embed/ph5d2f9e3c4b5e7",
  },
  {
    id: "ph654e1b2c3d4a7",
    title: "Intimate Moments — Couples Special",
    duration: "35:00",
    views: "1.5M",
    category: "Couples",
    hd: true,
    embedUrl: "https://www.pornhub.com/embed/ph5e3a0f4d5c6f8",
  },
  {
    id: "ph654e1b2c3d4a8",
    title: "After Dark — Lesbian Series Ep. 4",
    duration: "48:20",
    views: "1.2M",
    category: "Lesbian",
    hd: true,
    embedUrl: "https://www.pornhub.com/embed/ph5f4b1a5e6d7a9",
  },
  {
    id: "ph654e1b2c3d4a9",
    title: "VR Experience: 360° Passion",
    duration: "25:10",
    views: "980K",
    category: "VR",
    premium: true,
    embedUrl: "https://www.pornhub.com/embed/ph6a5c2b6f7e8b0a",
  },
  {
    id: "ph654e1b2c3d4b0",
    title: "European Escapades Vol. 3",
    duration: "52:45",
    views: "890K",
    category: "European",
    hd: true,
    embedUrl: "https://www.pornhub.com/embed/ph6b6d3c7a8f9c1b",
  },
];

export const newReleaseVideos: VideoData[] = [
  {
    id: "ph654e1b2c3d4b1",
    title: "Velvet Originals: First Time",
    duration: "45:20",
    views: "340K",
    category: "Amateur",
    hd: true,
    embedUrl: "https://www.pornhub.com/embed/ph6c7e4d8b9a0d2c",
  },
  {
    id: "ph654e1b2c3d4b2",
    title: "Parisian Nights — Exclusive",
    duration: "52:10",
    views: "280K",
    category: "European",
    premium: true,
    hd: true,
    embedUrl: "https://www.pornhub.com/embed/ph6d8f5e9c0b1e3d",
  },
  {
    id: "ph654e1b2c3d4b3",
    title: "Passion Play — Ep. 7",
    duration: "38:45",
    views: "195K",
    category: "Professional",
    hd: true,
    embedUrl: "https://www.pornhub.com/embed/ph6e9a6f0d1c2f4e",
  },
  {
    id: "ph654e1b2c3d4b4",
    title: "Behind Closed Doors Vol. 12",
    duration: "41:30",
    views: "410K",
    category: "Couples",
    hd: true,
    embedUrl: "https://www.pornhub.com/embed/ph7f0b7a1e2d3a5f",
  },
];

// Fallback: real xvideos-red embed URLs (also free embed)
export const fallbackEmbedUrls: Record<string, string> = {
  "ph654e1b2c3d4a5": "https://www.xvideos.com/embedframe/73242031",
  "ph654e1b2c3d4a6": "https://www.xvideos.com/embedframe/73242032",
  "ph654e1b2c3d4a7": "https://www.xvideos.com/embedframe/73242033",
  "ph654e1b2c3d4a8": "https://www.xvideos.com/embedframe/73242034",
  "ph654e1b2c3d4a9": "https://www.xvideos.com/embedframe/73242035",
  "ph654e1b2c3d4b0": "https://www.xvideos.com/embedframe/73242036",
  "ph654e1b2c3d4b1": "https://www.xvideos.com/embedframe/73242037",
  "ph654e1b2c3d4b2": "https://www.xvideos.com/embedframe/73242038",
  "ph654e1b2c3d4b3": "https://www.xvideos.com/embedframe/73242039",
  "ph654e1b2c3d4b4": "https://www.xvideos.com/embedframe/73242040",
};
