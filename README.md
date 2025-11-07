# Elo Win Probability Calculator

A simple web tool that calculates win probabilities between two players based on their Elo ratings.  
Built with React, TypeScript, and TanStack Query to demonstrate real-time calculations with deferred input updates for smooth user interaction.

## Overview

This project estimates the probability of winning a set (BO1, BO3, or BO5) given two Elo ratings.  
It uses the Elo formula to determine base win rates and derives extended probabilities for multi-game sets.

The app is optimized for performance:
- useDeferredValue prevents excessive recomputation while typing.
- TanStack Query manages caching and reactivity.
- Suspense ensures clean loading states without manual checks.

## Features

- Enter player and opponent Elo ratings.
- Instant probability updates once input stabilizes.
- Displays win chances for:
  - Single match
  - Best-of-3 set
  - Best-of-5 set
- Fully typed with TypeScript.
- Suspense-ready TanStack Query setup.

## Tech Stack

- React 18+
- TypeScript
- TanStack Query (v5)
- Vite for local development and build tooling

## Running Locally

```bash
# install dependencies
npm install

# start development server
npm run dev

# build for production
npm run build
```

Open http://localhost:5173 in your browser.

## License

MIT License © 2025 Kevin Adu-Sarkodie
