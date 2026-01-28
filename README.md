# KSSM English Curriculum Hub

A comprehensive web application for Malaysian educators to access and compare the KSSM (Kurikulum Standard Sekolah Menengah) English Language Curriculum for Secondary Forms 1-5.

![KSSM English Hub](https://img.shields.io/badge/KSSM-English%20Curriculum-blue)
![CEFR Aligned](https://img.shields.io/badge/CEFR-A2%20Mid%20to%20B1%20High-green)
![Forms](https://img.shields.io/badge/Forms-1--5-orange)

**Live Site**: [https://hedarchion.github.io/kssm-english-hub](https://yourusername.github.io/kssm-english-hub)

---

## Features

### 1. Browse by Form
- Select any combination of Forms 1-5
- View complete curriculum content for each form:
  - **Listening** (🟡 Yellow), **Speaking** (🔴 Red), **Reading** (🟢 Green), **Writing** (🔵 Blue), **Literature** (🟣 Purple)
  - **Grammar** topics organized by form
  - **Vocabulary** categorized by themes
  - **Suggested Text Types** for each form
- **Learning Standards** displayed under each Content Standard
- **Copy All** functionality for entire sections

### 2. Standards View (Cascading Structure)
The standards follow a **three-tier cascading paradigm**:

```
Content Standards → Learning Standards → Performance Standards
```

**Multi-Select Features:**
- ✅ Select multiple **Forms** (1-5)
- ✅ Select multiple **Skills** (Listening, Speaking, Reading, Writing, Literature)
- ✅ Select multiple **Aspects** (Content, Learning, Performance)
- ✅ **Compare by Forms** AND/OR **Compare by Skills**

### 3. Side-by-Side Comparison
- Compare multiple forms simultaneously
- Responsive grid layout adapts to selection
- Color-coded skill cards for easy identification

### 4. Quiz Game - Curriculum Mastery Challenge
Test your knowledge across **10 levels**:

| Level | Title | Topic |
|-------|-------|-------|
| 1 | Curriculum Foundations | CEFR, 4 Themes, Basic Structure |
| 2 | Listening Standards | Content & Learning Standards |
| 3 | Speaking Standards | Content & Learning Standards |
| 4 | Reading & Writing | Content & Learning Standards |
| 5 | Literature in Action | Content & Learning Standards |
| 6 | Performance Standards | 6 Performance Levels |
| 7 | Curriculum Framework | 21st Century Skills & HOTS |
| 8 | Cross-Curricular Elements | 10 Elements |
| 9 | Grammar & Vocabulary | Topics & Categories |
| 10 | Master Challenge | Comprehensive Test |

**Features:**
- Progress saved locally in browser
- Sequential level unlocking
- Certificate generation upon completion
- Download certificate as PNG image

### 5. Quick Reference
- Pupils' Profile (9 attributes)
- HOTS Levels (Applying, Analysing, Evaluating, Creating)
- Cross-Curricular Elements (10 elements)
- Four Main Themes

### 6. Copy Functionality
- **Individual Copy**: Click copy button on any item
- **Copy All**: Copy entire sections as formatted text

---

## Data Structure

### Standards Paradigm
```
Content Standard (e.g., 1.1 - Understand meaning)
    ↓
Learning Standards (e.g., 1.1.1, 1.1.2...)
    ↓
Performance Standards (Levels 1-6 with descriptors)
```

### Performance Levels
| Level | Description | CEFR Target |
|-------|-------------|-------------|
| 1 | Requires support | Revise A2 |
| 2 | On track to achieve | Revise A2 |
| 3 | Achieves expectations | Revise A2 |
| 4 | On track to exceed | A2 High |
| 5 | Working towards exceeding | A2 High |
| 6 | Exceeds expectations | A2 High |

### CEFR Progression
| Form | CEFR Level |
|------|------------|
| Form 1 | A2 Mid Revised |
| Form 2 | A2 High |
| Form 3 | B1 Low |
| Form 4 | B1 Mid |
| Form 5 | B1 High |

### Skill Color Coding
| Skill | Color | Hex Code |
|-------|-------|----------|
| Listening | 🟡 Yellow | #FEF9C3 (bg), #CA8A04 (text) |
| Speaking | 🔴 Red | #FEE2E2 (bg), #DC2626 (text) |
| Reading | 🟢 Green | #DCFCE7 (bg), #16A34A (text) |
| Writing | 🔵 Blue | #DBEAFE (bg), #2563EB (text) |
| Literature | 🟣 Purple | #F3E8FF (bg), #9333EA (text) |

---

## Tech Stack

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite

---

## Step-by-Step: Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in to your account
2. Click the **+** button in the top right corner → **New repository**
3. Repository name: `kssm-english-hub`
4. Make it **Public**
5. Click **Create repository**

### Step 2: Prepare Your Local Code

1. Open your terminal/command prompt
2. Navigate to your project folder:
```bash
cd /path/to/kssm-english-hub
```

3. Initialize Git (if not already done):
```bash
git init
```

4. Update `vite.config.ts` for GitHub Pages:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/kssm-english-hub/',  // ← ADD THIS LINE (use your repo name)
  build: {
    outDir: 'dist',
  },
})
```

### Step 3: Build the Project

```bash
npm install
npm run build
```

This creates a `dist/` folder with your built website.

### Step 4: Push to GitHub

1. Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/YOUR_USERNAME/kssm-english-hub.git
```

2. Commit your code:
```bash
git add .
git commit -m "Initial commit"
```

3. Push to main branch:
```bash
git push -u origin main
```

### Step 5: Deploy to GitHub Pages

**Option A: Using gh-pages branch (Recommended)**

```bash
# Install gh-pages package (one time)
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

**Option B: Manual deployment**

```bash
# Create a separate branch for GitHub Pages
git checkout --orphan gh-pages

# Remove all files except dist
git rm -rf .
cp -r dist/* .

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Go back to main branch
git checkout main
```

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **/(root)**
5. Click **Save**

### Step 7: Wait and Access

- GitHub will build your site (takes 1-5 minutes)
- Your site will be at: `https://YOUR_USERNAME.github.io/kssm-english-hub/`
- You can check the status in **Settings → Pages**

### Updating Your Site

After making changes:

```bash
# Build again
npm run build

# Deploy again
npm run deploy
```

Or if using manual method:

```bash
# Rebuild
npm run build

# Update gh-pages branch
git checkout gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Update site"
git push origin gh-pages
git checkout main
```

---

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/kssm-english-hub.git
cd kssm-english-hub

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

---

## Project Structure

```
src/
├── components/
│   ├── CopyButton.tsx          # Single item copy
│   ├── CopyAllButton.tsx       # Copy all items in section
│   ├── FormSelector.tsx        # Form selection buttons
│   ├── SkillTabs.tsx           # Skill content tabs (color-coded)
│   ├── BrowseComparisonView.tsx # Side-by-side comparison
│   ├── StandardsView.tsx       # Multi-select standards view
│   ├── QuickReference.tsx      # Quick reference section
│   └── QuizGame.tsx            # 10-level quiz game
├── data/
│   ├── curriculumData.ts       # Curriculum content data
│   ├── standardsData.ts        # Standards structure data
│   └── quizData.ts             # Quiz questions
├── App.tsx                     # Main application
└── main.tsx                    # Entry point
```

---

## Copy Features

| Content | Individual | Copy All |
|---------|------------|----------|
| Grammar Items | ✓ | ✓ |
| Vocabulary Words | ✓ | ✓ (per category + all) |
| Text Types | ✓ | ✓ |
| Learning Standards | ✓ | ✓ |
| Content Standards | ✓ | ✓ |
| Performance Standards | ✓ | ✓ |
| Pupils' Profile | ✓ | ✓ |
| HOTS Levels | ✓ | ✓ |
| Cross-Curricular | ✓ | ✓ |

---

## Quiz Certificate

Upon completing all 10 levels, users can generate a certificate containing:
- Website name: **KSSM English Curriculum Hub**
- User's full name
- Job/Position (optional)
- Date of completion
- Achievement description
- List of mastered skills

The certificate is generated as a PNG image and can be downloaded.

---

## Data Sources

This application contains curriculum data extracted from:
- KSSM English Language Syllabus Documents (Forms 1-5)
- DSKP (Dokumen Standard Kurikulum dan Pentaksiran) Documents

All standards text is **verbatim** from official documents to ensure accuracy.

---

## License

This project is for educational purposes. Curriculum content belongs to Kementerian Pendidikan Malaysia (Ministry of Education Malaysia).

---

## Acknowledgments

- **Made by**: [Ashrofu](https://github.com/hedarchion) using KIMI-K2 2.5
- Kementerian Pendidikan Malaysia for the curriculum framework
- CEFR (Common European Framework of Reference for Languages) for proficiency standards
- SBELC (Standard-Based English Language Curriculum) guidelines

---

**Note**: This is an unofficial resource created to help educators access curriculum information more efficiently. Always refer to official documents from the Ministry of Education for authoritative information.
# Deployment Trigger
