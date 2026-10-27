ARKA 123 — Task №4

1. Goal

Create a commercially convincing interactive hero experience for the ARKA 123 website.

The hero must present the ARKA 123 space through a branded character and an animation controlled by page scrolling.

The result should feel like a real commercial website component, not just an AI-generated video demonstration.

2. Context

Brand: АРКА 123

Business: rental of a 123 m² space for workshops, seminars, presentations and other events.

Slogan:

«Встречаемся напротив Библиотеки.»

Main visual feature

The space has large arched windows approximately 4 × 3.5 m with a view of the National Library of Belarus.

The architecture and the view are key elements of the brand concept and should play an important role in the hero animation.

3. What We Implement

Only Task №4 from the original test assignment.

The original assignment describes the task as:

a brand hero presents the ARKA 123 space;

the hero can meet and guide visitors through the space;

the hero can demonstrate the interior and the view from the windows;

the animation can use another suitable concept;

the animation must be integrated into the website;

the animation must be triggered / controlled by scrolling;

the animation should work as a visual background of the website.

4. Target Experience

The visitor should feel that they are being guided through the ARKA 123 space.

The scroll should control the progression of the visual story.

Possible narrative:

The hero appears.

The hero introduces the space.

The visitor moves through / into the space.

The interior is revealed.

Attention is drawn to the large arched windows.

The view of the National Library becomes the visual climax.

The hero completes the presentation.

The scene naturally transitions to the next website section.

This is a preliminary narrative. The final storyboard will be defined after reviewing the supplied materials.

5. Visual Principles

Real space

The actual ARKA 123 interior is the source of truth.

Do not significantly alter:

architecture;

room geometry;

window proportions;

layout;

perspective;

important architectural elements.

Creative effects are allowed if the real space remains recognizable.

Brand

The visual language should use:

ARKA 123 logo;

brand colors;

typography;

slogan;

architectural motif of the arch;

National Library view.

Character

The character must feel like part of the ARKA 123 brand rather than an unrelated AI-generated person.

Character consistency is required across all generated scenes.

6. Technical Concept

Selected Direction

The selected approach for Task №4 is:

Real ARKA photos + AI-assisted assets + 2.5D camera + GSAP scroll + character compositing.

The experience will be built primarily from the real ARKA 123 photographs rather than fully AI-generated environments or a complete 3D reconstruction.

The goal is to create the illusion of continuous camera movement through the real location while the user scrolls the page.

Core Pipeline

Use real ARKA 123 photographs as key scenes.

Prepare and, where necessary, extend or clean images using AI tools.

Create 2.5D depth/parallax effects for selected key scenes.

Animate virtual camera movement using zoom, pan and layered parallax.

Transition between photographs using shared architectural features, masks, crossfades and camera movement.

Composite the brand character into selected interior scenes.

Control the complete visual sequence using GSAP / ScrollTrigger.

Planned Visual Journey

The preliminary camera journey is:

Exterior → office windows → entrance → reception → interior → arched windows → National Library

The visitor begins outside the building and gradually approaches ARKA 123.

The camera then enters the space and continues through the interior.

The brand character appears inside the space, welcomes the visitor and helps guide attention toward the main architectural feature — the large arched windows.

The visual climax is the view of the National Library through the windows, connecting the experience with the slogan:

«Встречаемся напротив Библиотеки.»

Prototype Strategy

Before implementing the complete experience, create a small proof of concept using the first exterior photographs.

The prototype must verify that several separate real photographs can create a convincing feeling of continuous forward camera movement during scrolling.

Only after this approach is visually validated should the complete journey and character integration be implemented.

Technical Priorities

The implementation should prioritize:

Visual continuity between scenes.

Preservation of the real ARKA 123 architecture.

Smooth scroll-controlled movement.

Good browser performance.

Free or free-tier AI tools.

Minimal dependence on generated video.

Progressive enhancement for more advanced 2.5D effects.

React is not required for the core animation and should only be introduced if it provides a clear architectural benefit.

The core experience will primarily rely on GSAP / ScrollTrigger, browser rendering technologies (Canvas and/or DOM layers), and optimized visual assets.
7. AI Generation Strategy

The project should primarily use free AI tools / free tiers.

Possible generated assets:

brand character;

character poses;

environment extensions;

transitional frames;

visual effects;

supporting graphical elements.

Generated assets must maintain visual consistency.

The project documentation must record:

AI tools used;

free / paid tier;

approximate usage;

what each tool was used for.

8. Website Integration

The animation must be implemented as an actual website section.

It should support:

scroll-driven progression;

loading state;

smooth transitions;

responsive layout;

desktop;

mobile;

reduced-motion consideration;

acceptable loading performance.

The animation should not simply autoplay independently from the user's scroll.

9. Performance

Large visual assets must be optimized.

Consider:

WebP / AVIF;

appropriate image dimensions;

lazy loading where possible;

preloading only required animation assets;

minimizing memory usage;

avoiding unnecessary large video files;

mobile performance.

The final solution should balance visual quality and loading time.

10. Development Stages

Stage 1 — Research

Review all supplied ARKA 123 materials.

Review interior photographs.

Review logo and branding.

Identify the strongest visual elements.

Define the hero concept.

Stage 2 — Storyboard

Create the animation storyboard.

Define:

scenes;

character actions;

camera movement;

transitions;

scroll position for each scene;

beginning and ending states.

Stage 3 — AI Assets

Generate:

character;

required poses;

environment assets;

keyframes / supporting visuals.

Maintain visual consistency.

Stage 4 — Prototype

Implement a minimal working scroll animation.

The prototype should answer:

Does the visual concept actually work when controlled by scrolling?

Stage 5 — Production

improve animation;

integrate real ARKA 123 materials;

optimize assets;

add responsive behavior;

improve transitions;

add loading experience.

Stage 6 — Final Presentation

Prepare:

working website;

source code;

description of the concept;

list of AI tools;

list of subscriptions / free tiers;

approximate development time.

11. Definition of Done

The task is complete when:

The ARKA 123 brand character is implemented.

The character is visually consistent.

The real ARKA 123 space is recognizable.

The arched windows are presented prominently.

The National Library view is incorporated.

The animation is controlled by scrolling.

The animation is integrated into a working web page.

The experience works on desktop.

The experience works on mobile.

Visual assets are optimized.

The implementation does not depend on paid AI services.

AI tools used are documented.

Development time is documented.

The final result looks commercially presentable.

12. Out of Scope

The following are not separate deliverables:

full corporate website;

complete pricing system;

booking system;

backend;

CMS;

authentication;

full 3D model of the building;

implementation of Tasks №1–№3 as separate features.

They may only be simulated or represented where necessary to demonstrate how Task №4 would integrate into the future ARKA 123 website.

13. Final Objective

The final result should demonstrate one thing clearly:

The candidate can use AI as a production tool to create a commercially usable interactive web experience, rather than simply generating attractive images or code.

14. Source Materials

Office Photos

The processed office photos provided for the ARKA 123 test assignment:

Office entrance.png

Office interior.png

Office interior and features.png

Office interior 2.png

office windows from outside.png

reception.png

View from the window.png

View from the windows.png

View from the windows toward the library.png

View of the office from outside.png

View of the office windows from outside closest.png

These images are the primary visual reference for the ARKA 123 space.

Usage Rules

The office photos should be treated as the visual source of truth for:

interior architecture;

room proportions;

windows;

entrance;

reception area;

exterior appearance;

view from the windows;

relationship between the office and the surrounding architecture.

AI-generated elements must be integrated with these references and should not significantly distort the real architecture or layout.

The most important visual elements for Task №4 are:

The office interior.

The large arched windows.

The view toward the National Library.

The exterior appearance of the office.

The entrance / reception area.

These materials will be used to develop the storyboard and determine which parts should be generated, composited or animated.
