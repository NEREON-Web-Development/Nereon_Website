# NEREON Website

Official website for **NEREON** — a startup that develops web applications, websites, serious games, and provides IT advisory services. NEREON also publishes its own games as an in-house gaming studio.

## Tech Stack

- **React 19** — UI framework
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — utility-first styling (configured via `@tailwindcss/vite`, no `tailwind.config.js` needed)
- **React Router v7** — client-side routing

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services overview, stats, interactive chat widget |
| `/services` | Services — IT advisory, web development, case studies |
| `/games` | Games — game portfolio, Web3 banner, future roadmap |
| `/contact` | Contact — consultation form, project brief form |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build (output to dist/)
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

## Deployment (GitHub Secrets)

Use GitHub Actions with encrypted repository secrets as the primary deployment path.

Required repository secrets:

- `FTP_SERVER` (example: `nereon.gr`)
- `FTP_USERNAME`
- `FTP_PASSWORD`

Workflow file: `.github/workflows/deploy.yml`

This workflow builds with Vite and uploads `./dist/` directly to `/httpdocs/`.

Local fallback (`deploy.ps1`) still supports environment variables if needed:

```powershell
$env:FTP_SERVER = "ftp://nereon.gr/httpdocs/"
$env:FTP_USERNAME = "your_ftp_username"
$env:FTP_PASSWORD = "your_ftp_password"
$env:LOCAL_DIST_PATH = "C:\NBF\Nereon_Website\dist"
./deploy.ps1
```

## Plesk Git Deploy (Export + Development)

If you deploy with Plesk Git directly to `httpdocs`, source files are copied first and the site will break unless you build and publish `dist`.

In Plesk repository settings, set the deployment action to:

```bash
bash ./deploy-plesk.sh
```

What this does:

- runs `npm ci`
- runs `npm run build`
- copies `dist/index.html` to web root `index.html`
- copies `dist/assets/` to web root `assets/`

After this, `Export now` then `Development now` should serve `/assets/...` instead of `/src/main.jsx`.

## Project Structure

```
src/
  components/
    Navbar.jsx        # Responsive navigation with mobile hamburger
    Footer.jsx        # Site footer with navigation and social links
    MasterPrompt.jsx  # Interactive chat widget with quick actions
    ServiceCard.jsx   # Reusable service card component
    GameCard.jsx      # Reusable game card with status badge
  pages/
    Home.jsx          # Landing page
    Services.jsx      # Services & case studies
    Games.jsx         # Gaming studio & game portfolio
    Contact.jsx       # Consultation & project brief forms
  App.jsx             # Root component with router setup
  main.jsx            # Entry point
  index.css           # Tailwind CSS import
```
