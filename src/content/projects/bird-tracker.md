---
title: "Backyard Bird Tracker"
tagline: "A 3-tap workflow for contributing casual backyard bird counts to eBird's global dataset."
tools: ["React", "TypeScript", "Vite", "Tailwind", "Supabase", "eBird API", "Wikipedia API", "PWA"]
role: "Solo, built with Claude Code"
year: "2026"
order: 4
visualVariant: "phone-iframe"
visualSrc: "https://nathanguzman.com/backyard-bird-tracker/"
visualSide: "right"
variantNote: "The export pipeline is built; the end-to-end eBird CSV import flow is being validated now."
links:
  - label: "Live app"
    url: "https://nathanguzman.com/backyard-bird-tracker/"
  - label: "GitHub"
    url: "https://github.com/nathan-guzman"
---

eBird is the gold standard for global bird observation data, used by researchers and conservationists worldwide. But submitting a checklist requires navigating multiple screens, manually searching species names, and filling in metadata. For someone who just wants to step outside and count the birds at their feeder, the friction is high enough to discourage regular participation.

Backyard Bird Tracker reduces the session to tap-to-count. The species grid is ranked by how likely each bird is to appear in your region right now, based on eBird's regional frequency data. You tap a card to count, tap again to count more. When you're done, you export a CSV formatted exactly to eBird's import specification, and your casual count joins the global dataset.

The app is offline-capable, installable as a PWA, and uses GPS auto-detection to localize the species list. It's a small piece of community-data infrastructure — narrowing the gap between citizen-science systems and the people who could be contributing to them but currently aren't. The same instinct that drives the planning work: lower the friction between formal data systems and the everyday people whose observations actually populate them.
