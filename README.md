# Awesome Kat Puzzle

A browser-based falling-block puzzle made for Gail, with original cartoon cats that walk across the delivery runway and drop through the hatch as tetromino-style pieces.

## Play

Main version dashboard:

`https://cabando1.github.io/Awesome-Kat-Puzzle-1/`

## Version 1: Classic

Classic preserves the original desktop game that Gail and Joe approved.

- Original layout and gameplay
- Four rooms with 6, 10, 14 and 18-line goals
- Cat runway and hatch animation
- Named next-cat preview
- Keyboard and touch controls
- Saved scores and unlock progress
- Protected wrapper hides the old player-facing Admin Bird control

The frozen backup is stored on the `classic-v1-frozen` branch. Advanced development should not modify `game.html`.

## Version 2: Advanced

Advanced is a separate responsive build for computer, iPad, iPhone and Android.

- No-scroll active gameplay layout
- Runway, board, next cat and controls stay visible
- Touch controls ordered `Rotate`, `Down`, `Left`, `Right`
- Large separate Drop Cat button
- Translucent outlined landing guide
- Separate Advanced scores, unlocks and preferences
- Four original rooms plus browser-local custom rooms
- Custom cat roster with multiple names, colors and shape assignments
- Advanced desktop layout remains optional beside Classic

## Controls

Classic keyboard controls:

- Left and right arrows: move
- Down arrow: soft drop
- Up arrow or Space: rotate
- Enter: hard drop
- P: pause

Advanced touch controls:

- Left thumb: Rotate and Down
- Right thumb: Left and Right
- Separate Drop Cat button
- Swipe or tap directly on the board is also supported

## Deployment

The repository contains a GitHub Actions workflow at `.github/workflows/pages.yml`. It deploys the static site after a push to `main` once GitHub Pages is configured to use **GitHub Actions**.
