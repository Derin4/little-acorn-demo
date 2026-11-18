# Little Acorn Learning Center

A demo website for a fictional child care centre, built by [MyClickAid](https://myclickaid.com) for its portfolio gallery.

**Live demo:** https://little-acorn-demo.derin-obasa.workers.dev/

> **A fictional centre.** Little Acorn Learning Center, its staff, rooms, capacity, parent quotes and prices are made up for this demo. No waitlist form sends any data.

## What it shows

- **Home page:** a playful animated hero with a drifting sky and a blob-shaped photo, a live count of open spots, trust badges, room cards, a "day at Little Acorn" slider, animated numbers, facilities and parent testimonials.
- **Age finder:** enter a child's date of birth and see which room fits, with a friendly note for children between rooms.
- **A day at Little Acorn:** drag a slider, or tap a time, to follow a typical day from the first hello to goodnight.
- **Programs:** four age-specific rooms (infant, toddler, preschool, Pre-K) with ratios, age ranges and what children learn.
- **Waitlist:** a form with room availability and a demo reference code. Full rooms show a demo place in line.
- **Facilities and About:** the outdoor yard, reading corner, art studio, nap room, secure entry and kitchen, plus the staff, milestones and values.
- **Details:** floating and bouncing animations, wave dividers, reduced-motion support and keyboard-friendly menus.

## Built with

- [Next.js](https://nextjs.org/) (App Router, JavaScript, static export)
- [Tailwind CSS](https://tailwindcss.com/) v4
- Fonts: Fredoka and Nunito Sans, self-hosted with `@fontsource`
- Hosted on Cloudflare

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To create the production build (a static site in the `out` folder):

```bash
npm run build
```

## Project structure

```
app/
  _components/   Header, Footer, Sky, Waves, DayDial, AgeFinder, RoomCards, WaitlistForm, ...
  _lib/          data.js, utils.js, pictures.js
  _styles/       globals.css
  programs/  facilities/  enroll/  about/
public/          Photos (.webp)
```

## Photos

Photos are optional. Every slot works as a coloured placeholder until you add an image. Put the files in `public/` and register them in `app/_lib/pictures.js`.

| Slot              | File                                                                 | Size                       |
| ----------------- | -------------------------------------------------------------------- | -------------------------- |
| Hero (blob shape) | `la-hero.webp`                                                       | 1400 × 1750, portrait 4:5  |
| Rooms             | `la-room-infant.webp`, `-toddler`, `-preschool`, `-prek`             | 1200 × 1200, square        |
| Facilities        | `la-fac-yard.webp`, `-reading`, `-art`, `-nap`, `-entry`, `-kitchen` | 1600 × 1200, landscape 4:3 |
| Staff             | `la-staff-marisol.webp`, `-theo`, `-amara`                           | 1200 × 1200, square        |
| About banner      | `la-about.webp`                                                      | 1600 × 1000, landscape     |

## Deployment

The site is a static export (`output: "export"` in `next.config.mjs`) and deploys to Cloudflare from this repository. Every push to the main branch rebuilds and redeploys it.

## About MyClickAid

MyClickAid is a bespoke web design studio. This site is one of several demo projects that show what a custom-designed website can look like for different kinds of businesses.
