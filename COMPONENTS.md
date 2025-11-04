# Components Guide

This document describes the React components used in the Adam Olson Portfolio site.

## Component Architecture

```
components/
├── Hero.js           - Landing section with profile and introduction
├── Projects.js       - Projects grid with modal integration
├── ProjectCard.js    - Individual project card with glass effect
├── ProjectModal.js   - Full-screen project detail modal
├── Timeline.js       - Professional experience timeline
├── Skills.js         - Skills and qualifications section
├── MicroBio.js       - Education section
├── Footer.js         - Site footer with social links
└── AnimatedLogo.js   - Animated logo component
```

## Core Components

### Hero.js
**Purpose:** Landing hero section with profile photo and introduction.

**Features:**
- Responsive layout with centered content
- Profile image with shadow effects
- Gradient background (Digital Noir theme)
- Typography using Lora font for headings

**Props:** None

**Usage:**
```jsx
import Hero from '../components/Hero';

<Hero />
```

---

### Projects.js
**Purpose:** Main projects section with grid layout and modal management.

**Features:**
- Responsive grid (1/2/3 columns)
- Framer Motion staggered animations
- Modal state management
- Max-width container for centered layout

**Props:** None (uses `projects.json` data)

**Usage:**
```jsx
import Projects from '../components/Projects';

<Projects />
```

---

### ProjectCard.js
**Purpose:** Individual project card with glass morphism design.

**Features:**
- Glass effect with backdrop blur
- Hover animations (lift + scale)
- Project media/image display
- Tech stack badges
- Keyboard accessible (Enter key support)

**Props:**
- `project` (object) - Project data object
  - `title` (string) - Project title
  - `short` (string) - Short description
  - `image` (string) - Image URL or path
  - `tech` (array) - Array of technology strings
- `onOpen` (function) - Callback when card is clicked

**Usage:**
```jsx
<ProjectCard 
  project={projectData} 
  onOpen={() => setModalOpen(true)} 
/>
```

---

### ProjectModal.js
**Purpose:** Full-screen modal for detailed project information.

**Features:**
- Backdrop blur overlay
- Close on Escape key or backdrop click
- Displays full description, tech stack, and links
- Smooth fade-in animation
- Focus trap for accessibility

**Props:**
- `project` (object) - Project data object
  - `title` (string) - Project title
  - `long` (string) - Full description
  - `tech` (array) - Technology stack
  - `image` (string) - Project image
  - `live` (string) - Live site URL (optional)
  - `repo` (string) - GitHub repo URL (optional)
- `onClose` (function) - Callback to close modal

**Usage:**
```jsx
{isOpen && (
  <ProjectModal 
    project={selectedProject} 
    onClose={() => setIsOpen(false)} 
  />
)}
```

---

### Timeline.js
**Purpose:** Professional experience timeline with animated connector.

**Features:**
- Vertical timeline layout
- Pulse animation on connector line
- Responsive design
- Company, role, dates, and responsibilities

**Props:** None

**Usage:**
```jsx
import Timeline from '../components/Timeline';

<Timeline />
```

---

### Skills.js
**Purpose:** Skills and qualifications display with grid layout.

**Features:**
- Grid of skill badges
- Hover effects on badges
- Bulleted qualification list
- Gradient background section

**Props:** None

**Usage:**
```jsx
import Skills from '../components/Skills';

<Skills />
```

---

### MicroBio.js
**Purpose:** Education section with card display.

**Features:**
- Centered card layout
- Gradient background
- Clean typography hierarchy

**Props:** None

**Usage:**
```jsx
import MicroBio from '../components/MicroBio';

<MicroBio />
```

---

### Footer.js
**Purpose:** Site footer with social links and copyright.

**Features:**
- Dark background
- LinkedIn link
- Dynamic copyright year
- Centered layout

**Props:** None

**Usage:**
```jsx
import Footer from '../components/Footer';

<Footer />
```

---

### AnimatedLogo.js
**Purpose:** Animated logo component (implementation varies).

**Features:**
- Animation effects
- Brand identity

**Props:** TBD

---

## Design System

### Colors
- **Primary Blue (hb-blue):** `#00bcd4`
- **Accent Blue (hb-accent):** `#4979ff`
- **Background Dark 1:** `#0b1020`
- **Background Dark 2:** `#061026`
- **Text Muted:** `rgba(230,238,248,0.6)`

### Typography
- **Headings:** Lora (serif)
- **Body:** Inter (sans-serif)

### Effects
- **Glass Morphism:** `backdrop-filter: blur(12px)` + `rgba(255,255,255,0.02)`
- **Shadows:** Multiple layered shadows for depth
- **Hover:** `translateY(-4px)` + enhanced shadow

## Data Structure

### projects.json
```json
{
  "id": "unique-id",
  "title": "Project Title",
  "short": "Brief description",
  "long": "Full description with details",
  "tech": ["React", "Next.js", "Tailwind"],
  "image": "/images/project.png",
  "live": "https://live-site.com",
  "repo": "https://github.com/user/repo"
}
```

## Accessibility

All components follow accessibility best practices:
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus management in modals
- Color contrast compliance
- Reduced motion support via CSS

## Performance

- Images use lazy loading (`loading="lazy"`)
- Framer Motion animations are optimized
- CSS-in-JS avoided in favor of Tailwind utilities
- Component code splitting via Next.js

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

**Last Updated:** November 3, 2025
