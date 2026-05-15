# Portfolio

Modern personal portfolio built with Next.js 16, React 19, Tailwind CSS v4, GSAP, and `shaders/react`.

## Overview

This project is a visually driven portfolio site designed to present a developer profile with a strong first impression. It combines a shader-based hero section, a clean navigation bar, and a project area that can be expanded into a full resume or case-study site.

## Highlights

- Animated shader hero with a GSAP fade-in to keep the load-in smooth.
- Custom font loading with `next/font` for fast, consistent typography.
- App Router layout structure that keeps metadata and server rendering aligned.
- Built with Tailwind CSS v4 for quick, scalable styling.
- Minimal component structure that is easy to extend for projects, skills, and contact sections.

## Tech Stack

- Next.js 16.2
- React 19
- Tailwind CSS 4
- GSAP
- shaders/react
- react-icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
src/app/
	layout.js
	globals.css
	components/
		Hero.jsx
		Navbar.jsx
		Projects.jsx
```

## Notes

- The current build focuses on the landing experience and is ready for expansion into project cards, skills, and contact sections.
