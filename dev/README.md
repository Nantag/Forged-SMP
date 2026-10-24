# Forged SMP site - Season 3 (dev)

The site as it will be for Season 3, served at `/dev/` until then. Everything about items is switched over: race
weapons are gone, the **Gems** page (`#/gems`) lists the fifteen gems with the live status of every one-of-a-kind item,
the Rift page has the 13 gem vaults and their keys, and the Items page has the Season 3 items (Starsteel & Riftborn,
the reworked relics, the new potions). Rule 8 is the Season 3 one.

Live status reads `items.json` (version 2) from `Nantag/forged-smp-data`, which the server's WeaponTracker plugin
writes (`website.path: items.json`). It names who has each item, never where it is.

At the Season 3 launch: copy `dev/index.html`, `dev/404.html`, `dev/css` and `dev/js` over the root ones, set
`SITE.launch` in `js/data.js`, and delete `dev/`.
