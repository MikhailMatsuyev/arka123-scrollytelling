# ARKA 123 — Task №4

## 1. Goal

Create a commercially convincing interactive hero experience for the ARKA 123 website.

The hero must present the ARKA 123 space through a branded character and an animation controlled by page scrolling.

The result should feel like a real commercial website component, not just an AI-generated video demonstration.

---

## 2. Context

**Brand:** АРКА 123

**Business:** rental of a 123 m² space for workshops, seminars, presentations and other events.

**Slogan:**

> «Встречаемся напротив Библиотеки.»

### Main visual feature

The space has large arched windows approximately 4 × 3.5 m with a view of the National Library of Belarus.

The architecture and the view are key elements of the brand concept and should play an important role in the hero animation.

---

## 3. What We Implement

Only **Task №4** from the original test assignment.

The original assignment describes the task as:

- a brand hero presents the ARKA 123 space;
- the hero can meet and guide visitors through the space;
- the hero can demonstrate the interior and the view from the windows;
- the animation can use another suitable concept;
- the animation must be integrated into the website;
- the animation must be triggered / controlled by scrolling;
- the animation should work as a visual background of the website.

---

## 4. Target Experience

The visitor should feel that they are being guided through the ARKA 123 space.

The scroll should control the progression of the visual story.

### Preliminary narrative

1. The visitor approaches the ARKA 123 building.
2. The camera gradually moves closer to the building.
3. The visitor approaches the characteristic arched windows.
4. The camera enters the ARKA 123 space.
5. The reception and interior are revealed.
6. The brand character appears inside the space and welcomes the visitor.
7. The character guides the visitor through the space.
8. Attention is gradually drawn to the large arched windows.
9. The camera approaches the windows.
10. The National Library becomes the visual climax.
11. The experience ends with the ARKA 123 brand and slogan.
12. The scene naturally transitions to the next website section.

The final implementation should feel like **one continuous journey rather than a slideshow of separate photographs**.

---

## 5. Visual Principles

### Real space

The actual ARKA 123 interior is the source of truth.

Do not significantly alter:

- architecture;
- room geometry;
- window proportions;
- layout;
- perspective;
- important architectural elements.

Creative effects are allowed if the real space remains recognizable.

### Brand

The visual language should use:

- ARKA 123 logo;
- brand colors;
- typography;
- slogan;
- architectural motif of the arch;
- National Library view.

### Character

The character must feel like part of the ARKA 123 brand rather than an unrelated AI-generated person.

Character consistency is required across all generated scenes.

The character concept is defined as a 32-year-old attractive woman with dark hair, approximately 165 cm tall, wearing a modern smart-casual business outfit.

She acts as the ARKA 123 host and guide and wears a subtle ARKA 123 branded badge with the company logo.

---

# 6. Technical Concept

## Selected Direction

The selected approach for Task №4 is:

**Real ARKA photos + AI-assisted assets + 2.5D camera + GSAP scroll + character compositing.**

The experience will be built primarily from the real ARKA 123 photographs rather than fully AI-generated environments or a complete 3D reconstruction.

The goal is to create the illusion of continuous camera movement through the real location while the user scrolls the page.

---

## Core Pipeline

1. Use real ARKA 123 photographs as key scenes.
2. Prepare and, where necessary, extend or clean images using AI tools.
3. Create 2.5D depth/parallax effects for selected key scenes.
4. Animate virtual camera movement using zoom, pan and layered parallax.
5. Transition between photographs using shared architectural features, masks, crossfades and camera movement.
6. Composite the brand character into selected interior scenes.
7. Control the complete visual sequence using GSAP / ScrollTrigger.

---

## Planned Visual Journey

The preliminary camera journey is:

**Exterior → office windows → entrance → reception → interior → arched windows → National Library**

The visitor begins outside the building and gradually approaches ARKA 123.

The camera then enters the space and continues through the interior.

The brand character appears inside the space, welcomes the visitor and helps guide attention toward the main architectural feature — the large arched windows.

The visual climax is the view of the National Library through the windows, connecting the experience with the slogan:

> «Встречаемся напротив Библиотеки.»

---

### Brand Hero

The hero is a 32-year-old attractive woman with dark hair, approximately 165 cm tall, wearing a modern smart-casual business outfit.

She has a friendly, warm, approachable, and charming appearance. She acts as the ARKA 123 host, welcoming visitors and guiding them through the space.

The hero wears a subtle ARKA 123 branded badge with the company logo.

Her appearance, hairstyle, clothing, proportions, and overall visual identity must remain consistent across all generated poses and scenes.

The character should be visually integrated into the real ARKA 123 photography, matching the perspective, lighting, scale, and atmosphere of each scene.

### Hero Interaction & Poses

The hero should appear as a natural host and guide rather than as a static character placed over the background.

The main interaction states are:

1. Welcome — she meets the visitor near the entrance and invites them inside.
2. Guide — she leads the visitor forward and gestures toward the space.
3. Show — she presents the interior and its features.
4. Window / Library — she guides attention toward the arched windows and the view of the National Library.

The poses should form a continuous visual sequence rather than a collection of unrelated static images.

The character should use consistent facial features, hairstyle, clothing, proportions, and branding across all poses.

### Scene Structure

Hero appearance:
- Entrance: Welcome pose.
- Reception: Guide pose.
- Interior: Show pose.
- Arched Windows / Library: Window / Library pose.

### Scroll Camera Flow

The experience should feel like one continuous camera journey through the ARKA 123 space rather than a sequence of unrelated images.

The scroll controls the camera movement and determines the progression through the scenes.

#### 1. Exterior Approach

Start with a wide exterior view of ARKA 123.

The camera slowly moves forward toward the building.

Use scale, position, and subtle parallax to create the impression of physical movement.

Transition naturally from the distant exterior view to the closer exterior view.

#### 2. Entrance

Continue the forward camera movement toward the entrance.

Introduce the Brand Hero near the entrance using the Welcome pose.

The camera passes through the entrance and transitions into the interior.

#### 3. Reception

The camera continues moving forward through the reception area.

The Brand Hero uses the Guide pose and visually directs the visitor further into the space.

Use subtle camera movement and parallax to maintain the feeling of continuous motion.

#### 4. Interior

Gradually reveal the main ARKA 123 interior.

The Brand Hero uses the Show pose and presents the space.

The camera moves deeper into the room while maintaining visual continuity with the previous scene.

#### 5. Arched Windows

The camera gradually shifts its attention toward the distinctive arched windows.

The Brand Hero uses the Window / Library pose.

The movement should make the windows feel like the natural destination of the journey.

#### 6. Library Climax

The camera moves through or toward the arched window view.

The National Library becomes the main visual focus.

The Brand Hero remains secondary to the view and does not obstruct the final composition.

The sequence should end with a calm, visually strong composition emphasizing the ARKA 123 location and its connection to the National Library.

### Camera Movement Principles

The camera movement should be based primarily on:

smooth scale changes;

horizontal and vertical positioning;

subtle parallax between foreground and background layers;

depth-based movement where additional depth information is available;

smooth scene transitions controlled by scroll position.

The goal is to create the illusion of a continuous 3D camera movement using real 2D photography and selected AI-generated depth/assets rather than generating a complete 3D environment.

The scroll position should directly control the camera state, allowing the user to move forward and backward through the experience without breaking scene continuity.

### 1. Exterior Approach

Source images:

- `View of the office from outside.png`
- `office windows from outside.png`
- `View of the office windows from outside closest.png`

The three exterior photographs should be used to create the feeling of continuous forward camera movement toward the ARKA 123 building.

The transition should feel like an actual approach rather than three unrelated photographs.

Possible techniques:

- 2.5D depth;
- parallax;
- virtual camera movement;
- controlled zoom;
- image extension where necessary;
- architectural masking.

---

### 2. Entrance

Source image:

- `Office entrance.png`

The transition from the exterior into the interior should use architectural geometry, masks and camera movement rather than a simple hard cut.

The goal is to create the feeling that the camera has physically entered the ARKA 123 space.

---

### 3. Reception

Source image:

- `reception.png`

This scene establishes that the visitor has entered the space.

The perspective of the reception area should be used to continue the feeling of forward movement.

The brand character has already been introduced at the entrance and continues guiding the visitor through the reception and interior scenes.

---

### 4. Interior

Source images:

- `Office interior.png`
- `Office interior 2.png`
- `Office interior and features.png`

`Office interior and features.png` should primarily be treated as a reference for the space and its features because it contains informational annotations.

The interior should communicate:

- size of the space;
- architectural character;
- materials;
- lighting;
- large windows;
- overall ARKA 123 atmosphere.

The brand character should first appear **inside the ARKA 123 space**, rather than at the beginning of the experience.

The character should feel like a host who welcomes and guides the visitor rather than a decorative AI element.

---

### 5. Arched Windows

Source images:

- `View from the windows.png`
- `View from the window.png`

The camera gradually moves toward the large arched windows.

The arched window should become the visual focus of the scene.

The arch should also be considered as a recurring visual transition/masking motif.

This creates a connection between:

**building architecture → interior windows → visual identity → transition language.**

---

### 6. National Library Climax

Source image:

- `View from the windows toward the library.png`

The camera reaches the window and reveals the National Library.

The final scene should be visually calmer and should avoid unnecessary effects.

The purpose of this moment is to let the viewer recognize the location and connect it with the ARKA 123 slogan:

> **«Встречаемся напротив Библиотеки.»**

The final frame should naturally lead into the next website section.

---

## Prototype Strategy

Before implementing the complete experience, create a small proof of concept using the first exterior photographs.

The prototype must verify that several separate real photographs can create a convincing feeling of continuous forward camera movement during scrolling.

The first prototype should focus only on:

**Exterior → closer exterior → closest exterior**

Only after this approach is visually validated should the complete journey and character integration be implemented.

---

## Technical Priorities

The implementation should prioritize:

- visual continuity between scenes;
- preservation of the real ARKA 123 architecture;
- smooth scroll-controlled movement;
- good browser performance;
- free or free-tier AI tools;
- minimal dependence on generated video;
- progressive enhancement for more advanced 2.5D effects.

React is not required for the core animation and should only be introduced if it provides a clear architectural benefit.

The core experience will primarily rely on:

- GSAP;
- ScrollTrigger;
- Canvas and/or DOM layers;
- optimized visual assets;
- browser-native rendering capabilities.

---

# 7. AI Generation Strategy
AI should be used selectively, not as the primary video generator.

Possible AI usage:
- character
- poses
- image cleanup/extension
- depth maps
- selected transitional visuals/effects

Browser handles:
- camera movement
- scroll control
- parallax
- sequence playback
### Possible AI tasks

AI may be used for:

- brand character generation;
- character poses and variations;
- image cleanup and preparation;
- extending image areas where required for camera movement;
- depth-map generation;
- selected transitional visuals;
- supporting visual effects;
- other small assets required to maintain visual continuity.

### What should not be delegated to AI

The following should primarily be implemented in the browser:

- camera movement;
- scroll control;
- parallax;
- scene sequencing;
- animation timing;
- interaction with the page.

The project should avoid depending on a fully AI-generated continuous video.

### Character Generation

The hero should first be created as a single high-quality character reference. Additional poses should then be generated from the same character identity to minimize facial and visual inconsistencies.

The character will be composited into the real ARKA 123 photographs rather than replacing the real environment with fully AI-generated backgrounds.

The real ARKA 123 photography remains the visual source of truth for the environment.

### AI documentation

The project documentation must record:

- AI tools used;
- free / paid tier;
- approximate usage;
- what each tool was used for.

The final implementation should not depend on paid AI services.

---

# 8. Website Integration

The animation must be implemented as an actual website section.

It should support:

- scroll-driven progression;
- loading state;
- smooth transitions;
- responsive layout;
- desktop;
- mobile;
- reduced-motion consideration;
- acceptable loading performance.

The animation should not simply autoplay independently from the user's scroll.

The scroll position should act as the primary controller of the visual progression.

---

# 9. Performance

Large visual assets must be optimized.

The source PNG files should be treated as original/reference assets rather than necessarily being delivered directly to the browser.

### Web assets

Consider:

- WebP / AVIF;
- appropriate image dimensions;
- desktop/mobile variants;
- responsive asset loading;
- lazy loading;
- preloading only the first scene and immediately required assets;
- progressive loading of subsequent scenes;
- minimizing decoded image memory;
- avoiding unnecessary large video files;
- mobile performance.

### Initial loading

The initial visual payload should be kept small enough to avoid blocking the first render.

As a guideline:

- target approximately **150–400 KB per web image** where practical;
- target approximately **2–3 MB or less for the initial visual payload**;
- exact limits should be adjusted after testing actual image resolution and visual quality.

For Canvas/image-sequence implementations, use a custom loading strategy rather than loading the entire animation sequence at once.

The final solution should balance:

**visual quality ↔ loading time ↔ browser memory ↔ mobile performance.**

---

# 10. Development Stages

## Stage 1 — Research

Review all supplied ARKA 123 materials.

Review:

- interior photographs;
- exterior photographs;
- logo;
- branding;
- advertising materials.

Identify the strongest visual elements.

Define the hero concept.

---

## Stage 2 — Storyboard

Create the final animation storyboard.

Define:

- scenes;
- character actions;
- camera movement;
- transitions;
- scroll position for each scene;
- beginning and ending states;
- visual climax;
- transition into the next website section.

The storyboard should be based on the actual ARKA 123 photographs.

---

## Stage 3 — AI Assets

Generate only the AI assets that are actually required.

Potential assets:

- character;
- character poses;
- image extensions;
- depth maps;
- transitional assets;
- supporting visual elements.

Maintain visual consistency.

---

## Stage 4 — Prototype

Implement a minimal working scroll animation.

The first prototype should use only the exterior sequence:

**distant building → closer building → closest approach.**

The prototype should answer:

> Does the visual concept actually create the feeling of continuous movement when controlled by scrolling?

If the answer is yes, continue to the full experience.

---

## Stage 5 — Production

Improve the animation.

Integrate:

- all selected ARKA 123 photographs;
- character;
- 2.5D scenes;
- transitions;
- arched-window visual motif;
- National Library climax;
- responsive behavior;
- loading experience.

Optimize all visual assets.

---

## Stage 6 — Final Presentation

Prepare:

- working website;
- source code;
- description of the concept;
- list of AI tools;
- list of subscriptions / free tiers;
- approximate development time.

The final presentation should clearly demonstrate the production process and explain how AI was used as part of the workflow.

---

# 11. Definition of Done

The task is complete when:

- the ARKA 123 brand character is implemented;
- the character is visually consistent;
- the real ARKA 123 space is recognizable;
- the exterior approach is implemented;
- the entrance and interior are presented;
- the arched windows are presented prominently;
- the National Library view is incorporated;
- the animation is controlled by scrolling;
- the animation is integrated into a working web page;
- the experience works on desktop;
- the experience works on mobile;
- visual assets are optimized;
- the implementation does not depend on paid AI services;
- AI tools used are documented;
- development time is documented;
- the final result looks commercially presentable.

---

# 12. Out of Scope

The following are not separate deliverables:

- full corporate website;
- complete pricing system;
- booking system;
- backend;
- CMS;
- authentication;
- full 3D model of the building;
- implementation of Tasks №1–№3 as separate features.

They may only be simulated or represented where necessary to demonstrate how Task №4 would integrate into the future ARKA 123 website.

---

# 13. Final Objective

The final result should demonstrate one thing clearly:

> The candidate can use AI as a production tool to create a commercially usable interactive web experience, rather than simply generating attractive images or code.

The project should demonstrate that AI, real photography and frontend technologies can be combined into a coherent commercial experience.

---

# 14. Source Materials

## Office Photos

The processed office photos provided for the ARKA 123 test assignment:

- `Office entrance.png`
- `Office interior.png`
- `Office interior and features.png`
- `Office interior 2.png`
- `office windows from outside.png`
- `reception.png`
- `View from the window.png`
- `View from the windows.png`
- `View from the windows toward the library.png`
- `View of the office from outside.png`
- `View of the office windows from outside closest.png`

These images are the primary visual reference for the ARKA 123 space.

---

## Usage Rules

The office photos should be treated as the visual source of truth for:

- interior architecture;
- room proportions;
- windows;
- entrance;
- reception area;
- exterior appearance;
- view from the windows;
- relationship between the office and the surrounding architecture.

AI-generated elements must be integrated with these references and should not significantly distort the real architecture or layout.

---

## Most Important Visual Elements

The most important visual elements for Task №4 are:

1. The office interior.
2. The large arched windows.
3. The view toward the National Library.
4. The exterior appearance of the office.
5. The entrance / reception area.
6. The ARKA 123 brand identity.
7. The character as a host/guide.

These materials will be used to develop the storyboard and determine which parts should be generated, composited or animated.
