    


# bengerlovin.me

Inspired by a lot of portofios and personal sites including (but not limited to): 

- [Lee Robinson](https://leerob.io)
- [Alex Lomas](https://lowmess.com)
- [Danilo Leal](https://daniloleal.co)


## Code Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Primary Language**: [TypeScript](https://www.typescriptlang.org/)
- **Forms**: [Formik](https://formik.org/docs/overview)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `layouts/*` - collection of container elements for pages, inlcuding things like `PageSection` and `PageContainer` .
- `lib/*` - library folder with functions to fetch data from API endpoints, primarily powers the [home page](https://bengerlovin.me/) which shows data from Spotify, WordPress, GitHub, et cetera
- `components/*` - houses all the reusable, composable elements that I use to build up static pages 
- `pages/*` - static pages like home, about, uses, et cetera.
- `public/*` - static assets including fonts and images and my CV
- `styles/*` - stores the global CSS file that serves as an entry point for TailwindCSS.

## Installing

```bash
git clone https://github.com/bengerlovin/bengerlovin.me.git
cd portfolio
npm i
```

## Building

```bash
npm run build
```

## Developing

```bash
npm run start
```
