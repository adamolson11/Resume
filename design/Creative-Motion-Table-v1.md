# Creative Motion Table v1 — Framer Motion Grammar

**Purpose**  
A baseline animation grammar for the site to ensure consistent timing, easing, and reduced-motion behavior across components. Use these variants as the single source of truth.

---

## Motion Categories

### 1. **Section Reveals** (Hero, Projects, Timeline, Skills)
- **Use case:** Fade-in + slide-up when section enters viewport
- **Duration:** 0.9s
- **Easing:** easeSoft `[0.2, 0.9, 0.2, 1]`
- **Delay:** 0.12s stagger per child element
- **Reduced motion:** Instant opacity change, no slide

### 2. **Card Hover** (ProjectCard)
- **Use case:** Lift effect on hover
- **Duration:** 0.18s
- **Easing:** easeFast `[0.22, 1, 0.36, 1]`
- **Transform:** `translateY(-8px)` + shadow increase
- **Reduced motion:** No transform, only opacity/shadow change

### 3. **Modal Enter/Exit** (ProjectModal)
- **Enter duration:** 0.24s
- **Exit duration:** 0.18s
- **Easing:** easeFast
- **Backdrop:** fade from 0 to 0.85 opacity
- **Content:** scale from 0.94 to 1 + fade
- **Reduced motion:** Instant appearance/disappearance

### 4. **Logo Idle Animation** (AnimatedLogo)
- **Use case:** Subtle breathing effect
- **Duration:** 3.6s
- **Easing:** easeInOut (built-in)
- **Repeat:** Infinity, mirror
- **Scale range:** 0.96 → 1.0 → 0.96
- **Opacity range:** 0.88 → 1.0 → 0.88
- **Reduced motion:** Static (no animation)

### 5. **List Stagger** (Projects grid, Timeline items)
- **Use case:** Sequential fade-in of list items
- **Stagger delay:** 0.08s per item
- **Item duration:** 0.5s
- **Easing:** easeSoft
- **Reduced motion:** All items appear simultaneously

---

## Easing Curves Reference

```javascript
easeSoft: [0.2, 0.9, 0.2, 1]    // gentle deceleration
easeFast: [0.22, 1, 0.36, 1]    // snappy, energetic
```

---

## Reduced Motion Policy

When `prefers-reduced-motion: reduce` is detected:
- **Disable:** all transforms (translateY, scale)
- **Disable:** repeating/infinite animations (logoIdle)
- **Keep:** instant opacity changes (0 → 1)
- **Keep:** focus rings and hover state changes

---

## Implementation Notes

- All variants live in `scripts/motion/variants.js`
- Import specific variants per component (tree-shaking friendly)
- Test with OS-level reduced motion toggle
- Duration values are in seconds

---

**Version:** 1.0.0  
**Last Updated:** November 3, 2025  
**Owner:** Agent Pink (Creative UX)  
**Implementer:** Agent Green (SRDEV) + Agent Orange (Local Dev)
