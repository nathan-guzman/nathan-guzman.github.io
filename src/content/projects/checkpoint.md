---
title: "CheckPoint"
tagline: "A scavenger hunt platform that turned a Brooklyn farewell into a city-wide game — and is now a tool anyone can use."
tools: ["React 19", "TypeScript", "Vite", "Tailwind", "Supabase", "Mapbox GL", "Google Maps API", "Vercel", "PWA"]
role: "Solo, built with Claude Code"
year: "2025"
order: 2
visualVariant: "phone-video"
visualSrc: "/videos/checkpoint-demo.mp4"
visualPoster: "/images/tile-checkpoint.svg"
visualSide: "right"
variantNote: "Demo video placeholder — will upgrade to live phone-iframe in v1.5 once demo mode ships."
pullQuote: "It's not a product. It's a love letter with GPS coordinates."
links:
  - label: "Live app (TBD)"
    url: "#"
---

CheckPoint started as a farewell to Brooklyn — a scavenger hunt where I seeded 40+ locations across the borough that were meaningful to me, each with a clue, a category, and a handwritten message about why the place mattered. My friends formed teams and spent an afternoon racing across Brooklyn to find them. When they arrived at the right spot, GPS confirmed their location, confetti filled the screen, and the place's name and personal message were revealed.

But it became more than the event. I built it as a general-purpose platform — anyone can host their own scavenger hunt anywhere, with their own places, their own clues, their own people. The admin panel handles the chaos of a live outdoor event: timer controls, manual check-in overrides for when GPS fails, batch distance calculations via Google Maps, double-confirmation for destructive operations.

The technical depth came from designing for real-world conditions. GPS is unreliable; the app knows it and shows troubleshooting steps when a check-in fails. Mobile browsers drop WebSocket connections unpredictably, so the leaderboard uses real-time sync with a polling fallback. The four-factor scoring algorithm rewards rarity and distance, with a 1.5x multiplier when teams stay together — creating an actual strategic dilemma between covering ground and earning multipliers.

After the game ends, players can export every discovered place as a KML file to save in Google My Maps. A scavenger hunt that happened on one afternoon becomes a permanent layer on their personal map of a place.

A planned "lifestyle" version is in the works — the gamification recedes and people can share meaningful places with friends without the competition.
