# Forged SMP site - Season 3 (dev)

The full Season 3 site, served at `/dev/` until the season starts. Every page is the Season 3 one:

- **Home / Rules:** "Season 3" in the hero; until `SITE.launch` is set it says "starting soon", then counts down, then
  shows the day. The Rules page has the season timeline (grace, PvP and the Rift, the Nether, the border, the Forge,
  Tracking Hour, red rifts and calamity, the gem vault tiers, the Cold Forge) and counts down to each step once the
  launch date is set. The End is shown as closed.
- **Gems:** the fifteen gems with the live status of every one-of-a-kind item.
- **Rift:** rare portals, downed and revive, red rifts, the 13 gem vaults and their keys.
- **Forge:** the crafted Forge and Cold Forge blocks and their recipes, grades, buffs, frost techniques and runes.
- **Bosses:** the rift bosses and the 13 gem guardians.
- **Items:** Starsteel & Riftborn, the reworked relics, the new potions.

Hidden on purpose: the anomaly rift and its step on the timeline are glitched; HATE and staff events aren't mentioned.

Live status reads `items.json` (version 2) from `Nantag/forged-smp-data`, which the server's WeaponTracker plugin
writes (`website.path: items.json`). It names who has each item, never where it is.

At the Season 3 launch: set `SITE.launch` in `dev/js/data.js` (e.g. `'2026-11-07T18:30:00+01:00'`), copy
`dev/index.html`, `dev/404.html`, `dev/css` and `dev/js` over the root ones, and delete `dev/`.
