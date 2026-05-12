---
title: "1940neighbors.nyc"
tagline: "Mapping 1940 NYC Census records to the buildings where people actually lived."
tools: ["QGIS", "Python", "NYC Open Data", "Ancestry.com", "qgis2web"]
role: "Solo, ongoing"
year: "2023–present"
order: 1
visualVariant: "wide-iframe"
visualSrc: "https://1940neighbors.nyc"
visualSide: "left"
pullQuote: "Letting people see who lived in their building 85 years ago, by name."
links:
  - label: "1940neighbors.nyc"
    url: "https://1940neighbors.nyc"
  - label: "GitHub"
    url: "https://github.com/nathan-guzman"
  - label: "Process PDF"
    url: "#"
---

1940neighbors.nyc is a reproducible pipeline for turning handwritten 1940 Census manuscripts into spatial data, joined to the present-day building footprints where those people lived. To date, I've mapped seven enumeration districts across NYC, representing hundreds of buildings and thousands of individual records.

The technical work involves text-scraping handwritten records via Ancestry, normalizing street names against NYC's authoritative address data, custom Python scripts to clean house numbers and join records to Building Identification Numbers (BIN), and a QGIS workflow that produces interactive web maps distinguishing buildings constructed before 1940 (where you're looking at the same physical structure people lived in) from those constructed after.

The project includes a public "Request Your Block" form, inviting others to ask me to map their neighborhood. The full methodology is documented in a 5-page process guide so the work is reproducible by anyone with QGIS and patience.

I think of this as a historical GIS project but also a small public-history practice — letting people see the people who lived in their building 85 years ago, by name and occupation, where they came from and who they lived with.
