# 📺 MiniTV – NBC New York Live Stream

A minimal, browser-based live TV viewer for NBC New York. Features a sleek dark UI with a live stream embedded in a styled "TV frame," a dual clock display, and playback controls.

---

## Features

- 🔴 Live NBC New York stream via embedded iframe
- 🕒 Dual clock showing local time and New York time
- 🔄 Soft refresh and hard reload buttons for the stream
- ⛶ Fullscreen support for the player
- 📺 Picture-in-Picture button (activated from within the NBC player controls due to cross-origin restrictions)
- 🌙 Dark gradient UI with a responsive TV-frame layout

---

## Usage

Just open `index.html` in a browser — no build step or server required.

```bash
# Clone the repo
git clone https://github.com/your-username/minitv.git

# Open in browser
open index.html
```

> **Note:** Autoplay with sound may be blocked by the browser until the user interacts with the page. Click the unmute/play overlay to start the stream with audio.

---

## Controls

| Button | Action |
|--------|--------|
| 🔄 Refresh | Soft-reloads the stream (same URL) |
| ↺ Reload | Hard-reloads the stream with a new timestamp |
| ⛶ Fullscreen | Toggles fullscreen for the player area |
| PiP | Picture-in-Picture (use the NBC player's built-in PiP button) |

---

## Notes

- PiP and audio unmuting are subject to browser cross-origin restrictions since the stream is loaded via an iframe from `nbcnewyork.com`.
- The stream URL used is NBC New York's public embed endpoint.
