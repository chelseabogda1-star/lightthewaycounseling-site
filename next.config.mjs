/** @type {import('next').NextConfig} */

// Old Wix URL -> new URL. Keeps existing Google rankings and inbound links alive.
const legacy = {
  "/adhd": "/services/adhd",
  "/anger": "/services/anger",
  "/anxiety": "/services/anxiety",
  "/copy-of-anxiety-4": "/services/anxiety",
  "/autism": "/services/autism",
  "/behavioraldifficulties": "/services/behavioral-difficulties",
  "/boundaries": "/services/boundaries",
  "/chronicpain": "/services/chronic-pain",
  "/depression": "/services/depression",
  "/copy-of-depression": "/services/depression",
  "/emotionregulation": "/services/emotion-regulation",
  "/executivefunctioning": "/services/executive-functioning",
  "/grief": "/services/grief",
  "/lgbtq": "/services/lgbtq",
  "/lifetransitions": "/services/life-transitions",
  "/ocd": "/services/ocd",
  "/ptsd": "/services/ptsd",
  "/schoolrefusal": "/services/school-refusal",
  "/selfesteem": "/services/self-esteem",
  "/selfharm": "/services/self-harm",
  "/sportsperformance": "/services/sports-performance",
  "/therapyfortherapists": "/services/therapy-for-therapists",
  "/meet-the-team": "/team",
  "/chelsea-bogda": "/team/chelsea-bogda",
  "/caitlin-patterson": "/team/caitlin-reisel",
  "/heatheranderson": "/team/heather-anderson",
  "/johnkuzelka": "/team/john-kuzelka",
  "/stephaniemartinez": "/team/stephanie-martinez",
  "/nicolebennett": "/team/nicole-bennett",
  "/blogs": "/blog",
  "/testimonialsfeedback": "/contact",
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static.wixstatic.com" },
    ],
  },
  async redirects() {
    return [
      ...Object.entries(legacy).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      // Wix blog posts lived at /post/<slug>
      { source: "/post/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
