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

### Volume 3: Cats With Attitude

Personality-based edition with Calm, Stubborn, and Chonky cats, a couch obstacle, laser-pointer movement, cat sounds, music, mechanic lessons, and level background skins.

## Important files

- `index.html` — version selection screen
- `classic.html` — Classic game wrapper
- `advanced.html`, `advanced.css`, `advanced.js` — Advanced edition
- `volume3.html`, `volume3.css`, `volume3-extra.css`, `volume3.js` — Volume 3
- `assets/audio/stubborn-hiss.mp3` — looping stubborn-cat hiss used after a refused rotation
- `assets/audio/laser-pointer.mp3` — looping laser sound used while the red landing dot is active
- `joe-admin.html` — private administration page
- `.github/workflows/pages.yml` — development GitHub Pages deployment

Volume 3 starts audio only after player interaction. Effects and music keep separate
mute preferences. The stubborn hiss stops after a successful move or rotation, a
drop, pause, room exit, or round end. Audio playback failures do not stop gameplay.

## Production game

`https://cabando1.github.io/Awesome-Kat-Puzzle-1/`

Do not point the development deployment at the production repository or production hosting folder.
