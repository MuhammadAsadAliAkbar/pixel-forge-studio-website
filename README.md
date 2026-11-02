# Pixel Forge & Vector Studio Website

A modern, Adobe-inspired marketing website for **Pixel Forge** (raster image editor) and **Vector Studio** (vector design software), built with **Next.js 16**, **React 19**, **TypeScript** and **Tailwind CSS v4**.

## Features

- Responsive dark theme UI with purple/cyan accents
- Top navigation: Home · Image · Video · Resource · Download · Supports
- Product showcase for Pixel Forge & Vector Studio
- Full Download page with platform options (Windows / macOS / Linux)
- Resources, Video (Motion Lab teaser) and Support pages
- Mobile-friendly hamburger menu

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build       |
| `npm run start` | Start production server|
| `npm run lint`  | Run ESLint             |

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home
│   ├── image/page.tsx    # Image tools
│   ├── video/page.tsx    # Video / Motion Lab
│   ├── resources/page.tsx
│   ├── download/page.tsx
│   ├── support/page.tsx
│   ├── layout.tsx
│   └── globals.css
└── components/
    ├── Navbar.tsx
    └── Footer.tsx
```

## License

This is a demo / portfolio project. Feel free to use and modify.
# pixel-forge-studio-website
