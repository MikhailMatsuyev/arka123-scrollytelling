# ARKA 123 — AI Video ScrollAnimation

## Goal

Create a scroll-driven hero experience for ARKA 123.

The experience should feel like a continuous camera journey through the ARKA 123 space:
city → building → entrance → reception → interior → windows → National Library.

The main focus of this implementation is Task №4 — the ARKA 123 brand hero who presents the space and guides the visitor through it.

---

## Context

ARKA 123 is a 123 m² space for workshops, seminars and events.

Slogan:

> «Встречаемся напротив Библиотеки.»

The most distinctive architectural feature is the large arched windows with a direct view of the National Library of Belarus.

The website experience should use the real ARKA 123 photography as the visual foundation.

---

## What we implement

- [x] Task №4 — ARKA 123 brand hero
- [x] Scroll-driven hero experience
- [x] Real ARKA 123 photography as the main visual source
- [x] Continuous camera journey between the selected photographs
- [x] Architectural transitions based on the real space
- [x] Large arched windows as a recurring visual motif
- [ ] AI-generated brand hero character
- [ ] Character poses integrated into the scenes
- [ ] Final responsive behavior
- [ ] Final performance optimization
- [ ] Final production asset optimization

---

## Target experience

The visitor should feel as if the camera is physically moving through the ARKA 123 space.

The scroll controls the camera.

The experience should not feel like a slideshow of unrelated photographs.

The transitions should create the illusion of depth and movement using:

- real photographs
- scale
- position
- parallax
- layered images
- controlled crossfades
- AI-generated character assets
- selected depth/2.5D effects

---

## Visual principles

- [x] Use real ARKA 123 photographs as the visual foundation
- [x] Preserve the real architecture
- [x] Preserve the real proportions and perspective of the space
- [x] Avoid excessive camera movement
- [x] Use smooth transitions between scenes
- [x] Maintain a consistent visual atmosphere
- [ ] Complete final color/lighting consistency
- [ ] Complete final visual polish

---

## Character

The brand hero is a 32-year-old attractive woman with dark hair.

Approximate height: 165 cm.

Style:

- modern smart-casual business outfit
- light blouse/top
- neutral slightly oversized blazer
- straight trousers
- minimal shoes
- minimal accessories
- subtle ARKA 123 branded badge

Character requirements:

- [x] Define character appearance
- [x] Define outfit
- [x] Define visual style
- [x] Create initial character reference
- [ ] Generate final production character
- [ ] Generate Welcome pose
- [ ] Generate Guide pose
- [ ] Generate Show pose
- [ ] Generate Window / Library pose
- [ ] Integrate character into real photographs
- [ ] Match perspective
- [ ] Match scale
- [ ] Match lighting
- [ ] Add subtle ARKA 123 branding

---

# Technical concept

## Stack

- [x] Vite
- [x] TypeScript
- [x] GSAP
- [x] GSAP ScrollTrigger
- [x] GitHub Pages base path configuration
- [ ] GitHub Pages deployment
- [ ] ESLint final configuration
- [ ] Prettier final configuration

---

## Core pipeline

### Input

Real ARKA 123 photographs.

### Processing

- [x] Image sequencing
- [x] Scroll-controlled camera
- [x] Scale transitions
- [x] Position transitions
- [x] Crossfades
- [x] Basic parallax/depth effect
- [x] Continuous scene transitions
- [ ] Character compositing
- [ ] Final 2.5D depth treatment
- [ ] Final transition polish

### Output

A single scroll-driven hero experience integrated into the website.

---

# Planned journey

## 1. City / Exterior

- [x] Establishing exterior shot
- [x] Move closer to ARKA 123
- [x] Move toward the large arched windows
- [x] Use the architecture as a transition element

Assets:

- `View of the office from outside.png`
- `office windows from outside.png`
- `View of the office windows from outside closest.png`

---

## 2. Entrance

- [x] Transition from exterior into the entrance
- [ ] Add Welcome character pose
- [ ] Integrate character into the scene

Asset:

- `Office entrance.png`

---

## 3. Reception

- [x] Transition into reception
- [ ] Add Guide character pose
- [ ] Integrate character into the scene

Asset:

- `reception.png`

---

## 4. Interior

- [x] Move deeper into the ARKA 123 space
- [x] Connect the two interior views
- [ ] Add Show character pose
- [ ] Integrate character into the scene
- [ ] Finalize depth/parallax

Assets:

- `Office interior.png`
- `Office interior 2.png`

---

## 5. Windows

- [x] Shift camera attention toward the large arched windows
- [x] Create transition toward the outside view
- [ ] Add Window / Library character pose
- [ ] Integrate character into the scene

Assets:

- `View from the windows.png`
- `View from the window.png`

---

## 6. National Library climax

- [x] Reach the final view toward the National Library
- [x] Make the Library view the visual climax
- [ ] Integrate character as a secondary element
- [ ] Finalize the ending composition
- [ ] Add final ARKA 123 branding/message

Asset:

- `View from the windows toward the library.png`

---

# Camera movement

- [x] Scroll controls the camera
- [x] Use smooth scale changes
- [x] Use subtle horizontal/vertical movement
- [x] Use controlled crossfades
- [x] Reduce excessive left/right movement
- [x] Create continuous movement between photographs
- [x] Add initial depth illusion
- [ ] Refine depth/parallax
- [ ] Add final camera easing/polish
- [ ] Finalize mobile camera behavior

The movement should feel like a camera moving through a real space rather than a collection of image transitions.

---

# Prototype strategy

## Exterior prototype

- [x] Implement exterior sequence
- [x] Connect three exterior photographs
- [x] Test scroll-controlled movement
- [x] Test scale transitions
- [x] Test horizontal camera movement
- [x] Reduce excessive lateral movement
- [x] Validate the continuous camera illusion
- [x] Move from prototype toward the complete scene

Prototype sequence:

`exterior-1 → exterior-2 → exterior-3`

---

# AI strategy

AI should be used selectively.

## Character

- [ ] Generate final character
- [ ] Generate consistent poses
- [ ] Maintain character identity across generations
- [ ] Composite character into real ARKA photography

## Image processing

- [ ] Remove unwanted elements where necessary
- [ ] Extend/crop selected images where necessary
- [ ] Generate depth information where useful
- [ ] Prepare selected transition assets

AI should support the real ARKA 123 environment rather than replace it.

---

# Website integration

- [x] Integrate the experience into the Vite application
- [x] Implement the main hero viewport
- [x] Implement scroll-driven animation
- [x] Integrate all current ARKA 123 scene photographs
- [x] Configure Vite base path for GitHub Pages
- [ ] Configure GitHub Pages deployment
- [ ] Add final hero character
- [ ] Add final branding
- [ ] Finalize accessibility
- [ ] Finalize responsive behavior

---

# Performance

- [ ] Convert production images to WebP/AVIF
- [ ] Create responsive image variants
- [ ] Reduce initial visual payload
- [ ] Lazy-load images where appropriate
- [ ] Preload the first scene
- [ ] Preload the next required scene
- [ ] Monitor decoded image memory
- [ ] Optimize animation performance
- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Test on slower hardware

Target guideline:

- initial visual payload approximately 2–3 MB
- individual production images approximately 150–400 KB where practical

These values are guidelines and should be adjusted according to visual quality and device performance.

---

# Development stages

## Stage 1 — Research

- [x] Review assignment
- [x] Identify Task №4 as the implementation target
- [x] Review ARKA 123 photographs
- [x] Identify architectural visual motifs
- [x] Define technical direction
- [x] Define AI usage strategy

**Status: DONE**

---

## Stage 2 — Storyboard

- [x] Define the visitor journey
- [x] Map photographs to scenes
- [x] Define character interaction states
- [x] Define camera movement principles
- [x] Define Library climax
- [x] Define exterior prototype

**Status: DONE**

---

## Stage 3 — AI Assets

- [x] Define character appearance
- [x] Create character reference
- [ ] Generate final production character
- [ ] Generate character poses
- [ ] Prepare character assets for compositing
- [ ] Prepare additional AI-assisted visual assets

**Status: IN PROGRESS**

---

## Stage 4 — Prototype

- [x] Build Vite/TypeScript foundation
- [x] Integrate GSAP
- [x] Integrate ScrollTrigger
- [x] Build pinned hero viewport
- [x] Implement exterior prototype
- [x] Validate scroll-controlled camera
- [x] Expand prototype to the complete photo sequence
- [x] Implement basic depth effect
- [x] Implement scene transitions

**Status: DONE**

---

## Stage 5 — Production

- [x] Integrate all selected ARKA 123 photographs
- [x] Implement scroll-driven camera
- [x] Implement scene transitions
- [x] Implement architectural transition logic
- [x] Implement initial 2.5D/depth effect
- [ ] Integrate final character
- [ ] Add character poses
- [ ] Finalize 2.5D depth
- [ ] Finalize Library climax
- [ ] Finalize branding
- [ ] Optimize production assets
- [ ] Optimize loading
- [ ] Finalize responsive behavior
- [ ] Final visual polish

**Status: IN PROGRESS**

---

## Stage 6 — Final Presentation

- [ ] Finalize complete experience
- [ ] Finalize character integration
- [ ] Finalize visual transitions
- [ ] Finalize responsive behavior
- [ ] Finalize performance
- [ ] Deploy to GitHub Pages
- [ ] Test production build
- [ ] Test final experience on desktop
- [ ] Test final experience on mobile
- [ ] Prepare final presentation

**Status: NOT STARTED**

---

# Definition of Done

- [ ] Task №4 is fully implemented
- [ ] Visitor can scroll through a continuous ARKA 123 journey
- [ ] Real ARKA 123 photography remains the visual foundation
- [ ] Camera movement feels continuous and natural
- [ ] Character consistently represents the ARKA 123 brand
- [ ] Character is integrated into the real environment
- [ ] All major ARKA 123 scenes are connected
- [ ] National Library view works as the final visual climax
- [ ] Experience works responsively
- [ ] Images are optimized for production
- [ ] Performance is acceptable on desktop and mobile
- [ ] GitHub Pages deployment works
- [ ] Final production build passes
- [ ] Final presentation is ready

---

# Out of scope

- [x] Full 3D reconstruction of the ARKA 123 building
- [x] Full 3D character
- [x] Complex game-like interaction
- [x] Rebuilding the entire ARKA 123 website
- [x] Replacing real ARKA 123 photography with a fully AI-generated environment

---

# Current status

**Overall project status: PRODUCTION IN PROGRESS**

Completed:

- research
- storyboard
- technical foundation
- exterior prototype
- complete photo sequence
- GSAP/ScrollTrigger camera system
- basic transitions
- initial 2.5D/depth effect

Current focus:

1. [ ] Finalize AI character assets
2. [ ] Integrate character into the scenes
3. [ ] Improve depth/parallax
4. [ ] Finalize visual transitions
5. [ ] Optimize assets and performance
6. [ ] Configure GitHub Pages deployment
7. [ ] Final testing and presentation

---

# Final objective

Create a polished, memorable ARKA 123 scroll-driven hero experience where the visitor feels guided through the real space by the ARKA 123 brand hero.

The final experience should communicate the identity of the place through architecture, movement, atmosphere and the view toward the National Library — without turning the project into a generic AI-generated environment.
