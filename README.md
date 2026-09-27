# Forged SMP — website

Public site for **Forged SMP**, a story-driven Minecraft survival server. Static HTML/CSS/ES modules, no build step. English-only; the Italian copy is kept in the code and comes back by setting `MULTILANG = true` in `js/app.js`.

## Run locally

```bash
python3 -m http.server 8080   # then open http://localhost:8080
```

(ES modules don't load from `file://`, so use any local HTTP server.)

## Deploy (GitHub Pages)

Settings → Pages → *Deploy from a branch* → pick the branch and `/ (root)`. `.nojekyll` is already in place. Pages use hash routes (`#/races`, `#/rift` …), so no 404 setup is needed.

## Editing content

**Every game fact lives in [`js/data.js`](js/data.js)**: races, weapons, bosses, rift numbers, forge grades and buffs, items, commands, FAQ, news. Each text is `{ en, it }`.

- **Server address:** set `SITE.ip`. Until then the site says "address on Discord". Once set, the live player count shows up automatically (via api.mcsrvstat.us).
- **Live weapon status:** `SITE.weaponStatus` is the `weapons.json` the server's WeaponTracker plugin writes to the `Nantag/forged-smp-data` repository. The Weapons page reads it and shows, on each card, who owns that weapon and whether they carry it or have stashed it, or whether it's destroyed or unclaimed. Where a weapon is is never in the file, so the site can't show it. Each race's `id` in `RACES` is its name on the server, which is how the two are matched. Set `weaponStatus` to `''` to hide it; while the file doesn't exist yet the page simply shows no status.
- **News:** add an entry at the top of `NEWS`.
- After changing numbers, bump `SITE.updated` (shown in the footer).

Page layout and interface text (headings, buttons) live in [`js/app.js`](js/app.js); styles in [`css/style.css`](css/style.css).

## Spoilers

The site intentionally keeps story content off the public pages: The Anomaly, its weapon, boss and weapon rift are shown redacted. Don't add hidden or scripted mechanics here.
