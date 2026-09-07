# Claude CLI Project Guidelines & Anti-AI-Slop Design System

This project is a personal web resume / portfolio with multilingual support (`index.html`, `styles.css`, `script.js`, `lang.js`).
All UI and frontend work in this repository must strictly adhere to high-agency, Anti-AI-Slop design standards.

---

## 1. Installed Skills (.claude/skills/)

The following skills are installed and available in `.claude/skills/`:

### A. Hallmark (`nutlope/hallmark`)
- **Location**: `.claude/skills/hallmark`
- **Commands / Verbs**:
  - `hallmark audit <target>`: Audit existing HTML/CSS against 57 quality gates and anti-patterns without modifying code.
  - `hallmark redesign <target> [--mood <name>]`: Redesign UI structure and aesthetics within existing boundaries and copy intent.
  - `hallmark study <URL | screenshot>`: Extract Design DNA (macrostructure, typography, palette) from references.
  - Default design flow: Strictly enforces anti-slop quality gates, non-generic section rhythms, and locked tokens.

### B. Taste Skill (`Leonxlnx/taste-skill`)
- **Location**: `.claude/skills/design-taste-frontend`, `.claude/skills/high-end-visual-design`, `.claude/skills/minimalist-ui`, etc.
- **Global Numeric Dials (Default)**:
  - `DESIGN_VARIANCE: 8` (High layout novelty, breaking generic 3-card/bento boilerplate)
  - `MOTION_INTENSITY: 7` (Refined physics, tactile micro-interactions, responsive hover states)
  - `VISUAL_DENSITY: 6` (Balanced, clean information architecture like Linear / Raycast)
- **Specialized Skills**:
  - `redesign-existing-projects`: In-place quality upgrade without breaking functionality.
  - `minimalist-ui`: Editorial monochrome, typographic contrast, muted accents.
  - `industrial-brutalist-ui`: High-contrast typography, utilitarian grid.

### C. StyleSeed (`bitjaru/styleseed`)
- **Location**: `.claude/skills/styleseed`, `.claude/skills/ss-*`
- **Skills**:
  - `ss-audit` / `ss-review`: Automated design drift check and compliance scoring.
  - `ss-tokens`: Manage consistent CSS custom properties for spacing, typography, and color tokens.
  - `ss-dial`: Dial tuning for visual density, contrast, and motion.
  - `ss-motion`: Micro-motion curves and interaction physics.

---

## 2. Component & Interaction References

When composing interactive elements or landing page sections, use patterns inspired by:
- **21st.dev**: Spotlight hover effects, morphing buttons, animated borders, magnetic cursor targets.
- **Magic UI**: Bento grids with dynamic layouts, text morphing, marquee ticker for logos/skills, ripple effects.
- **Aceternity UI**: Background grid/beams, subtle 3D card tilt, smooth tracing borders.

---

## 3. Strict Anti-Slop Quality Rules

1. **No Purple/Indigo Default Gradients**: Never use generic purple/blue gradients (`linear-gradient(to right, #6366f1, #a855f7)`).
2. **No Font Monoculture**: Do not default to plain Inter for everything. Combine distinctive display typography with clean body fonts.
3. **No 3-Identical-Card Blocks**: Avoid generic 3-column cards with identical icons on top. Vary rhythm, scale, and hierarchy.
4. **Locked Tokens**: Define all colors and font sizes in CSS variables (`--color-*`, `--font-*`, `--space-*`). Never use raw inline arbitrary hex codes scattered across CSS.
5. **Real Content Only**: Never invent fake metrics or placeholders like "+47% conversion" or "trusted by 50,000+ teams".
6. **Preserve Language & Functionality**: Preserve the multi-language system (`lang.js`), structure, and responsive layout across mobile and desktop.
