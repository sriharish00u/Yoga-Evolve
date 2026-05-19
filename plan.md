# Project Evolving Yoga — Full Architecture Redesign

## Architecture

```
React 19 + TypeScript + Vite + React Compiler + React Router v7
                    ↓
    BrowserRouter → App.tsx → Routes (7 pages)
                    ↓
    Shared: Navigation | Footer | XPToastStack
                    ↓
   ┌──────┬──────┬──────┬──────┬──────┬──────┬──────┐
  Home  Postures Practice Session Dashboard Benefits Tests
```

## Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | `HomePage` | Landing — hero, benefits, branches, CTA |
| `/postures` | `PosturesPage` | Full pose library with filters, search, detail modal |
| `/practice` | `PracticePage` | Routine builder — select poses, drag-reorder, presets |
| `/session` | `SessionPage` | Active session — webcam, countdown, feedback, summary |
| `/dashboard` | `DashboardPage` | Stats, streaks, badges, milestones, XP chart |
| `/benefits` | `BenefitsPage` | Educational page — benefits, 8 limbs, pranayama |
| `/tests` | `TestsPage` | Self-assessment tests (wraps existing UserTests) |

## Olaichuvadi Design Tokens

```
--primary-color: #b38b59    --primary-hover: #9a6b45
--secondary-color: #f5deb3  --accent-color: #654321
--light-bg: #f3e0b5        --dark-bg: #4a2c06
--text-color: #3b1e08      --text-light: #654321
--success-color: #8b6b30   --warning-color: #d4b676
--error-color: #8b4513
```

## Implementation Phases

### Phase 0: Setup
- Install `react-router-dom@^7`
- No config file changes

### Phase 1: Types & Utilities
- `src/types/yoga.ts` — shared types
- `src/types/mediapipe.d.ts` — MediaPipe globals
- `src/utils/poseMatch.ts` — stillness heuristic scoring
- `src/utils/feedbackEngine.ts` — correction cues
- `src/utils/gamification.ts` — XP, levels, combos
- `src/utils/confetti.ts` — canvas particle system
- `src/store/sessionStore.ts` — session config/result persistence

### Phase 2: Hooks
- `src/hooks/useWebcam.ts` — `getUserMedia` wrapper
- `src/hooks/usePoseDetection.ts` — MediaPipe Pose integration

### Phase 3: Shared Components
- `src/components/CountdownRing.tsx` + `.css` — SVG countdown
- `src/components/XPToast.tsx` + `.css` — global toast stack

### Phase 4: Pages
- `src/pages/HomePage.tsx` + `.css`
- `src/pages/PosturesPage.tsx` + `.css`
- `src/pages/PracticePage.tsx` + `.css`
- `src/pages/SessionPage.tsx` + `.css`
- `src/pages/DashboardPage.tsx` + `.css`
- `src/pages/BenefitsPage.tsx` + `.css`
- `src/pages/TestsPage.tsx`

### Phase 5: Integration
- `index.html` — MediaPipe CDN scripts
- `src/main.tsx` — BrowserRouter wrapper
- `src/App.tsx` — Routes, remove old layout
- `src/components/Navigation.tsx` + `.css` — NavLink-based, dark theme, hamburger
- `src/components/Footer.tsx` + `.css` — Link-based navigation
- `src/utils/appreciationUtils.ts` — extend UserStats, add methods
- `src/index.css` — global enhancements (app-main, page-wrapper, pose-img filter)

## Key Constraints
- No `enum` (erasableSyntaxOnly) — use string unions
- `import type` for type-only imports (verbatimModuleSyntax)
- No `any` except MediaPipe globals
- All CSS uses CSS variables, never hardcoded non-Olaichuvadi colors
- Mobile responsive at 768px breakpoint
