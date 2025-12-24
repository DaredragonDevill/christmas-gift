# Merry Christmas Gift

A festive, responsive single-page experience built with React (via CDN + Babel) and vanilla CSS/JS. Features a clean white/red Christmas theme, snowfall, decorative lights, background trees, and a playful interaction that reveals a message.

## Features
- Snowfall overlay with variable drift for realism
- White/red theme with accessible contrast and responsive sizing
- Decorative lights strip, confetti celebration on completion
- Background SVG Christmas trees and a snowy ground band
- 7x2 aligned heart grid that fills the viewport nicely on desktop and mobile

## Run Locally
Open `index.html` directly, or serve the folder for best results:

### Windows PowerShell
```powershell
# Option 1: open directly
Start-Process "C:\Users\UGT\Desktop\CHRISTMAS GIFT\index.html"

# Option 2: quick local server via PowerShell (requires Python)
# If Python is installed:
python -m http.server 5500 -d "C:\Users\UGT\Desktop\CHRISTMAS GIFT"; Start-Process http://localhost:5500
```

## Accessibility & UX
- Color palette selected for good contrast on white backgrounds
- Touch targets sized with `clamp()` responsive font sizes
- Non-interactive overlays (`snow`, `decor`, `confetti`) use `pointer-events: none`
- Animations are lightweight and avoid layout thrashing

## Portfolio Notes (FAANG-targeted polish)
If you want to present this in a portfolio:
- Convert to a modern setup (Vite + React + TypeScript); separate components and styles
- Add unit tests for interaction (e.g., clicking hearts) using Vitest + React Testing Library
- Add Lighthouse checks (performance, accessibility, best practices)
- Add CI (GitHub Actions) for build + test + deploy to GitHub Pages/Netlify
- Include a short write-up: design decisions, accessibility trade-offs, performance metrics
- Track simple analytics (privacy-friendly) for engagement on the page

I can scaffold the Vite + TS version and migrate this codebase if you'd like. 