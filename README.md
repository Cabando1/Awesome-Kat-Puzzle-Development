# Awesome Kat Puzzle — Development Copy

> **Development repository only.** Changes here do not update the live production game unless they are deliberately transferred to `Cabando1/Awesome-Kat-Puzzle-1`.

This repository is the protected working copy for testing new gameplay, layouts, sounds, skins, and future volumes.

## Repository roles

| Repository | Purpose |
|---|---|
| `Cabando1/Awesome-Kat-Puzzle-1` | Live production game. Do not experiment directly in this repository. |
| `Cabando1/Awesome-Kat-Puzzle-Development` | Development and testing copy. Make and validate changes here first. |

## Current development workflow

1. Create or use a focused branch for the change.
2. Test computer, iPad, iPhone, and Android layouts.
3. Test sound after the first player interaction because mobile browsers block automatic audio.
4. Merge the approved work into this development repository’s `main` branch.
5. Only after final approval, transfer the tested files to a new branch in the production repository.

## Current editions

### Version 1: Classic

The original desktop game, preserved separately.

### Version 2: Advanced

Responsive edition for computer, tablet, iPhone, and Android.

### Volume 3: Purrfect Puzzles

Personality-based edition with Calm, Stubborn, Chonky, and Zoomie cats, room-specific obstacles, laser-pointer movement, cat sounds, four music tracks, mechanic lessons, star ratings, four progressively faster levels, and per-level background skins.

## Important files

- `index.html` — version selection screen
- `classic.html` — Classic game wrapper
- `advanced.html`, `advanced.css`, `advanced.js` — Advanced edition
- `volume3.html`, `volume3.css`, `volume3-extra.css`, `volume3-core.js`, `volume3.js` — Volume 3
- `assets/audio/stubborn-hiss.mp3` — looping stubborn-cat hiss used after a refused rotation
- `assets/audio/laser-pointer.mp3` — looping laser sound used while the red landing dot is active
- `assets/audio/levels` — themed Level 2–4 music and progression effects
- `assets/brand` — app icons, Apple touch icon, favicon, and 1200×630 link-preview artwork
- `assets/cats/standard`, `assets/cats/stubborn`, `assets/cats/chonky` — full-cat artwork for all six named cats and three personality types
- `site.webmanifest`, `robots.txt`, `sitemap.xml` — installable-app and search metadata
- `joe-admin.html` — private administration page
- `.github/workflows/pages.yml` — development GitHub Pages deployment

Volume 3 starts audio only after player interaction. Effects and music keep separate
mute preferences. The stubborn hiss stops after a successful move or rotation, a
drop, pause, room exit, or round end. Audio playback failures do not stop gameplay.
The first Stubborn cat also plays a one-time arrival hiss and opens its mechanic
lesson after the cat drops through the runway hatch.

On phones, the runway stays above the board; the next cat, illustrated personality
portrait, goal, score, best, and streak stay in a rail beside the board. The laser,
Drop Cat button, and four movement controls form a bottom control dock. Wider screens
keep the board and control panel side by side. Both layouts stay within the visible
safe area and use the same gameplay code.

Volume 3 advances through four rooms: Cozy Living Room, Yarn Room, Cardboard
Castle, and Midnight Zoomies. Each room has unique music, a higher line goal,
faster automatic falling, and its own board mechanic. Yarn and cardboard clear
with completed rows for bonus points; the final room adds fast-falling Zoomie
cats and combines earlier obstacles. Laser uses reset to two at the beginning
of every level. Finishing a room awards up to three stars and opens the next one;
losing restarts the current level.

## Production game

`https://cabando1.github.io/Awesome-Kat-Puzzle-1/`

Do not point the development deployment at the production repository or production hosting folder.
