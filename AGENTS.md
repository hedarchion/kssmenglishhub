# KSSM English Curriculum Hub - Agent Guide

## Project Overview

This is a **React + TypeScript** web application for Malaysian educators to access and compare the KSSM (Kurikulum Standard Sekolah Menengah) English Language Curriculum for Secondary Forms 1-5.

**Live Site**: Deployed to GitHub Pages at `https://hedarchion.github.io/kssmenglishhub/`

**Repository**: `https://github.com/hedarchion/kssmenglishhub.git`

---

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | React | ^19.2.0 |
| Language | TypeScript | ~5.9.3 |
| Build Tool | Vite | ^7.3.1 |
| Styling | Tailwind CSS | ^3.4.19 |
| UI Library | shadcn/ui | New York style |
| Icons | Lucide React | ^0.562.0 |
| Form Handling | react-hook-form | ^7.70.0 |
| Validation | Zod | ^4.3.5 |

### Key Dependencies

- **Radix UI Primitives**: Comprehensive headless UI components (@radix-ui/react-*)
- **class-variance-authority (cva)**: For component variant management
- **tailwind-merge + clsx**: For conditional class merging
- **date-fns**: Date formatting utilities
- **recharts**: Charting library for data visualization
- **sonner**: Toast notifications
- **embla-carousel-react**: Carousel component

---

## Project Structure

```
Kimi_Agent_kssm english hub/
├── app/                          # Main application directory (CI/CD builds from here)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn/ui components (50+ components)
│   │   │   ├── BrowseComparisonView.tsx
│   │   │   ├── ComparativeView.tsx
│   │   │   ├── CopyAllButton.tsx
│   │   │   ├── CopyButton.tsx
│   │   │   ├── FormSelector.tsx
│   │   │   ├── QuickReference.tsx
│   │   │   ├── QuizGame.tsx
│   │   │   ├── SkillTabs.tsx
│   │   │   └── StandardsView.tsx
│   │   ├── data/
│   │   │   ├── curriculumData.ts    # Form 1-5 curriculum content
│   │   │   ├── quizData.ts          # 10-level quiz questions
│   │   │   └── standardsData.ts     # CEFR standards data
│   │   ├── hooks/
│   │   │   └── use-mobile.ts        # Mobile breakpoint detection
│   │   ├── lib/
│   │   │   └── utils.ts             # cn() utility for class merging
│   │   ├── App.tsx                  # Main app component
│   │   ├── main.tsx                 # Entry point
│   │   ├── App.css
│   │   └── index.css                # Tailwind + CSS variables
│   ├── dist/                        # Build output (GitHub Pages)
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── eslint.config.js
│   └── components.json              # shadcn/ui configuration
├── src/                         # Root-level source (mirrors app/src)
├── .github/
│   └── workflows/
│       └── deploy-gh-pages.yml  # GitHub Actions deployment
├── package.json                 # Root package.json (has deploy script)
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── README.md                    # Detailed user documentation
```

**Note**: The project has duplicate files at root and `app/` levels. The GitHub Actions workflow builds from the `app/` directory. The root `package.json` includes an additional `deploy` script using `gh-pages`.

---

## Build and Development Commands

All commands should be run from the `app/` directory for CI/CD consistency:

```bash
cd app/

# Install dependencies
npm install

# Start development server (Vite)
npm run dev
# → http://localhost:5173

# Type check and build for production
npm run build
# → Output: app/dist/

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

### Root Directory Commands

The root `package.json` includes an additional deployment command:

```bash
# Deploy to GitHub Pages (using gh-pages package)
npm run deploy
```

---

## TypeScript Configuration

The project uses a multi-file TypeScript configuration:

- **tsconfig.json**: Root config that references app and node configs
- **tsconfig.app.json**: Application-specific settings
  - Target: ES2022
  - Module: ESNext with bundler resolution
  - JSX: react-jsx
  - Strict mode enabled
  - Path alias: `@/*` → `./src/*`
- **tsconfig.node.json**: Vite config type checking

### Path Aliases

```typescript
// Use @/ prefix for imports from src/
import { Button } from '@/components/ui/button';
import { curriculumData } from '@/data/curriculumData';
import { cn } from '@/lib/utils';
```

---

## Code Style Guidelines

### ESLint Configuration

Uses the new ESLint flat config format (`eslint.config.js`):

- `@eslint/js` - Recommended JavaScript rules
- `typescript-eslint` - TypeScript recommended rules
- `eslint-plugin-react-hooks` - React Hooks rules
- `eslint-plugin-react-refresh` - Fast Refresh validation
- Ignores: `dist/` directory

### Component Patterns

1. **shadcn/ui Components**: Located in `src/components/ui/`
   - Use `cva` (class-variance-authority) for variants
   - Use `cn()` utility for class merging
   - Follow the pattern: `ComponentName.tsx`

2. **Custom Components**: Located in `src/components/`
   - Use functional components with explicit return types
   - Props interfaces should be defined inline or in the same file

3. **CSS Variables**: Theme colors defined in `src/index.css` using HSL format

### Naming Conventions

- Components: PascalCase (e.g., `FormSelector.tsx`)
- Utilities/Hooks: camelCase (e.g., `use-mobile.ts`)
- Data files: camelCase (e.g., `curriculumData.ts`)
- CSS classes: Tailwind standard (kebab-case for custom)

---

## Data Structure

The curriculum follows a three-tier cascading paradigm:

```
Content Standards → Learning Standards → Performance Standards
```

### Key Types (from `curriculumData.ts`)

```typescript
interface FormData {
  form: number;                    // 1-5
  cefrLevel: string;               // "A2 Mid", "A2 High", etc.
  themes: string[];                // 4 main themes
  grammar: string[];               // Grammar topics
  vocabulary: Record<string, string[]>;  // Categorized vocab
  textTypes: string[];             // Suggested text types
  skills: SkillStandards[];        // Listening, Speaking, Reading, Writing, Literature
}
```

### Skill Color Coding

| Skill | Background | Text |
|-------|------------|------|
| Listening | #FEF9C3 | #CA8A04 (Yellow) |
| Speaking | #FEE2E2 | #DC2626 (Red) |
| Reading | #DCFCE7 | #16A34A (Green) |
| Writing | #DBEAFE | #2563EB (Blue) |
| Literature | #F3E8FF | #9333EA (Purple) |

---

## Testing

**Note**: This project currently does **not** have automated tests configured. Consider adding:

- Vitest for unit testing
- React Testing Library for component testing
- Playwright or Cypress for E2E testing

---

## Deployment

### GitHub Actions Workflow

File: `.github/workflows/deploy-gh-pages.yml`

- **Trigger**: Push to any branch
- **Node Version**: 18
- **Working Directory**: `app/`
- **Deploy Target**: `gh-pages` branch
- **Published Directory**: `app/dist`

### Manual Deployment

```bash
# Build the app
cd app && npm run build

# Deploy using gh-pages (from root)
cd ..
npm run deploy
```

---

## Security Considerations

1. **No sensitive data**: Curriculum data is public educational content
2. **No API keys**: All data is static JSON/TypeScript
3. **Local storage only**: Quiz progress stored in browser localStorage
4. **GitHub Pages**: Static hosting, no server-side code

---

## Adding New shadcn/ui Components

The project uses shadcn/ui "New York" style. To add new components:

```bash
cd app
npx shadcn add <component-name>
```

This will install the component and its dependencies to `src/components/ui/`.

---

## Key Files for Modifications

| Task | File(s) |
|------|---------|
| Update curriculum content | `src/data/curriculumData.ts` |
| Update quiz questions | `src/data/quizData.ts` |
| Update standards | `src/data/standardsData.ts` |
| Change theme colors | `src/index.css` CSS variables |
| Modify layout | `src/App.tsx` |
| Add new UI component | `src/components/ui/` |
| Change build config | `app/vite.config.ts` |
| Update deployment | `.github/workflows/deploy-gh-pages.yml` |

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2022+ features required
- Responsive design for mobile (768px breakpoint)

---

## Additional Notes

- **Language**: All code comments and documentation are in English
- **Curriculum Source**: Kementerian Pendidikan Malaysia (Ministry of Education Malaysia)
- **CEFR Alignment**: A2 Mid (Form 1) to B1 High (Form 5)
- **Copy Feature**: Components use `navigator.clipboard` API for copying content
