# Awesome Kat Puzzle

A browser-based falling-block puzzle made for Gail, with original cartoon cats that walk across the delivery runway and drop through the hatch as tetromino-style pieces.

## Play

The GitHub Pages site is expected at:

`https://cabando1.github.io/Awesome-Kat-Puzzle-1/`

If the deployment has not been enabled yet, open **Settings → Pages** and select **GitHub Actions** as the source. Then open the **Actions** tab and run **Deploy Awesome Kat Puzzle**.

## Current playable preview

- Four sample levels with different speeds and starter layouts
- Seven classic falling-block shapes
- Original rounded cartoon-cat visuals
- Walking delivery cat and hatch-drop animation
- Keyboard, touch buttons, tapping, and swiping
- Synthesized meows and effects with mute control
- Score, line goals, streaks, best scores, and saved progress
- Admin Bird workshop for browser-local custom test levels
- Responsive desktop, tablet, and phone design

## Controls

- Left and right arrows: move
- Down arrow: soft drop
- Up arrow or Space: rotate
- Enter: hard drop
- P: pause
- On mobile: use the buttons, tap to rotate, or swipe

## Preview limitation

GitHub Pages is static hosting. Custom Admin Bird levels are currently stored only in the browser that created them. The production Hostinger version will add secure Gail and Joe administrator accounts, a shared database, level publishing, editing, ordering, and removal.

## Planned production work

1. Replace prototype block faces with a full original animated cat art set.
2. Add secure Hostinger PHP/MySQL authentication for Gail and Joe.
3. Add a visual shared level builder with testing and publishing.
4. Add more level structures, themes, cat breeds, animations, sounds, and accessibility options.
5. Add save synchronization and optional player profiles.

## Deployment

The repository contains a GitHub Actions workflow at `.github/workflows/pages.yml`. It deploys the static site after a push to `main` once GitHub Pages is configured to use **GitHub Actions**.

Original game presentation restored on July 20, 2026, and a fresh Pages deployment was triggered.
