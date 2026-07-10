# Melhor — Links

A single-page "link in bio" site with a color-shifting ambient background,
3D tilt cards, and links to Instagram, TikTok, Discord, and email.

## Structure

```
melhor-links/
├── index.html        # page markup
├── style.css          # all styling, animations, 3D tilt effects
├── script.js           # theme-switching + tilt interactivity
├── assets/
│   └── profile.jpg   # avatar photo shown at the top
└── README.md
```

## Deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `melhor-links`).
2. Upload `index.html`, `style.css`, `script.js`, and the `assets/` folder
   to the repo root, keeping the same names and structure shown above.
3. Go to **Settings → Pages**.
4. Under **Source**, choose the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will give you a live URL, usually:
   `https://<your-username>.github.io/melhor-links/`
   (it can take a minute or two to go live the first time).

## Local preview

Just open `index.html` in any browser — no build step or server needed.

## Editing

- **Links & text**: edit `index.html`. Each social link is an `<a class="card" ... href="...">`.
- **Brand colors**: set via `data-a`, `data-b`, `data-c` attributes on each `<a>` tag in `index.html`.
- **Styling / animations**: `style.css`.
- **Interactivity** (color-shift on hover, 3D tilt): `script.js`.
- **Avatar photo**: `assets/profile.jpg` — swap the file (same name) to change it.
