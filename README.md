# Portfolio

Personal portfolio built with Next.js, React and Tailwind CSS. The site uses a shader-driven hero, animated transitions, and minimal components so you can showcase projects and contact info quickly.

## Features

- Shader-based hero with GSAP entry animation
- Responsive navbar and project cards
- Tailwind CSS utility-first styling
- Easy-to-extend component structure

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- GSAP
- shaders/react
- react-icons

## Quick Start

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

Open http://localhost:3000 in your browser.

## Project Structure

Key files:

- `src/app/layout.js` — root layout and font setup
- `src/app/globals.css` — global styles and Tailwind import
- `src/app/components/Hero.jsx` — shader hero section
- `src/app/components/Navbar.jsx` — top navigation
- `src/app/components/Projects.jsx` — projects grid

## Development Notes

- The hero uses `shaders/react`; ensure it is supported in your environment.
- Sticky positioning can be affected by ancestor `overflow` or `transform` styles — remove those if `position: sticky` doesn't work as expected.
- Global scrollbar hiding is implemented in `globals.css`; it hides the visual scrollbar while preserving scroll behavior.

## Contributing

1. Fork the repo
2. Create a branch for your feature (`git checkout -b feat/awesome`)
3. Open a pull request

## License

This repository is provided as-is. Add a license file if you want to publish or open-source the project.
