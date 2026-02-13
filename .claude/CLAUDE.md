# Project info

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Money Trees** is a monorepo containing a full-stack web application:
- **Frontend**: React 19 + TypeScript with Vite, Redux Toolkit, React Router
- **Backend**: FastAPI (Python) running on port 8002

This is a learning/blog project for experimenting with modern web technologies.learning/

## Development Commands

### Starting the Application
```bash
make dev                    # Start both frontend and backend simultaneously
```

The frontend runs on Vite's default port (5173), backend on port 8002.

### Frontend Commands (run from `frontend/`)
```bash
npm run dev                 # Start Vite dev server
npm run build              # Production build
npm run types              # Type check without emitting files
npm run lint               # Run ESLint
npm run stylelint          # Run Stylelint on CSS files
npm run test               # Run Jest tests
npm run test:watch         # Run tests in watch mode
npm run test:coverage      # Run tests with coverage report
```

### Backend
```bash
cd backend && source .venv/bin/activate && fastapi dev main.py --port 8002
```

## Architecture

### Directory Structure
```
frontend/src/
├── app/              # App-level configuration (store, routes, API helpers)
├── components/       # Reusable components (each component may have its own Redux slice)
├── pages/            # Page-level components
├── providers/        # React Context providers
└── shared/           # Shared utilities
    ├── hooks/        # Custom React hooks
    ├── utils/        # Utility functions
    └── styles/       # Global styles (colors, animations, reset, variables)
```

### Path Aliases
**Important**: Path aliases must be configured in BOTH `tsconfig.json` and `vite.config.ts`:
- `app` → `src/app`
- `components` → `src/components`
- `pages` → `src/pages`
- `providers` → `src/providers`
- `shared` → `src/shared`

When adding new path aliases, update BOTH files.

### State Management (Redux Toolkit)
- Central store configured in `app/store.ts`
- Slices are co-located with components (e.g., `components/Custom/counterSlice.ts`)
- Export types: `AppState` and `AppDispatch` from `app/store.ts`
- Pattern: Create slice → add to store → use with hooks

### Routing (React Router v7)
- Routes defined in `app/routes.tsx` using `createBrowserRouter`
- Simple setup: home route at `/`, error fallback at `*`

### Styling
- **CSS Modules** for component scoping
- **PostCSS** (no Sass/Less) with mixins, imports, nesting (Stage 3), and preset-env
- Custom class naming pattern: `{fileName}__{className}___{hash}`
- CSS custom properties for theming (light/dark mode)
- Global styles in `shared/styles/`

### API Layer
- Simple fetch-based helpers in `app/helpers.ts`
- Backend URL: `http://localhost:8002`
- Example functions: `getGreetingsText()`, `getHeroes(heroe, signal)`

### Theme Management
- React Context-based: `providers/ThemeProvider.tsx`
- Custom hook: `shared/hooks/useTheme.ts`
- Light/dark theme switching via CSS custom properties

## Technology Choices

| Decision | Rationale |
|----------|-----------|
| **Vite over Webpack** | Simpler configuration, faster dev server |
| **SWC over Babel** | Faster compilation |
| **PostCSS over Sass/Less** | Modern CSS features sufficient (variables, mixins, nesting) |
| **CSS Modules** | Component style isolation without JS runtime overhead |
| **Redux Toolkit** | Opinionated Redux with best practices built-in |

## Testing
- Jest + React Testing Library
- CSS modules mocked with `identity-obj-proxy`
- SVG files transformed with `jest-svg-transformer`
- Test utilities directory: `tests/utils/` (currently minimal)

## Engine Requirements
- Node.js >= 22.11.0
- npm >= 10.9.0

# Best practices
## Frontend
### TypeScript
Никогда не используй `any` в типизации.