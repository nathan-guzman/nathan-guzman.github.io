---
title: "Locale"
tagline: "Discover the businesses within walking distance of where you live."
tools: ["React", "TypeScript", "OpenStreetMap (Overpass API)", "Local-first storage", "PWA"]
role: "Solo, built with Claude Code"
year: "2025"
order: 3
visualVariant: "phone-iframe"
visualSrc: "about:blank"
visualSide: "left"
variantNote: "Live iframe pending default-address handling. Falls back to a poster screen until then."
iframePermissions: "geolocation"
links:
  - label: "Live app"
    url: "#"
  - label: "GitHub"
    url: "https://github.com/nathan-guzman/neighborhood-explorer"
---

Locale pulls every business within a configurable walking radius of your address, sourced from OpenStreetMap. You can set a home address, browse what's around you, and track which places you've visited. It's local-first — your data lives on your device, not on a server.

I built it because I wanted a tool that pushed against algorithmic discovery — no recommendations, no rankings, no "for you" feed. Just the actual map of what's nearby, organized by category and walking distance, encouraging you to explore the businesses in your immediate neighborhood rather than the ones an algorithm thinks you'd like.

It's a small piece of civic technology in the quietest sense: a tool that makes the geography around you legible without intermediating it.
