# Portfolio

A personal portfolio built with [Next.js](https://nextjs.org), [React](https://react.dev), Tailwind CSS, and HeroUI.

## Overview

This project is set up as a clean foundation for a personal site with a centered navigation layout, custom global styling, and room for hero, projects, skills, and contact sections.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- HeroUI

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - run the production server
- `npm run lint` - run ESLint

## Project Structure

```text
app/
	globals.css   global styles and layout rules
	layout.tsx    root layout and font setup
	Navbar.tsx    top navigation component
	Hero.tsx      hero section component
	page.tsx      home page entry point
public/         static assets
```

## Notes

- The homepage is still a work in progress.
- Navbar styling is handled globally in `app/globals.css`.
- Add new sections as separate components to keep the page easy to maintain.
