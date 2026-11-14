// ─────────────────────────────────────────────────────────────────────────────
//  FORGED SMP — every game fact on the site lives in this file.
//  Numbers come from the server config / the Discord #server-guide.
//  Tunable values can change: update them here and bump SITE.updated.
//  Every text is { en, it }.
// ─────────────────────────────────────────────────────────────────────────────

const L = (en, it) => ({ en, it });

export const SITE = {
  name:     'Forged SMP',
  discord:  'https://discord.gg/TE95wjjEhD',
  ip:       '212.100.172.180:19016',   // server address (empty = "ask on Discord")
  // Who has each gem and the other one-of-a-kind items: a file the server's WeaponTracker plugin keeps up to date
  // (empty = hide it). Never where they are.
  itemStatus: 'https://raw.githubusercontent.com/Nantag/forged-smp-data/main/items.json',
  version:  'Java Edition 26.2',
  season:   3,
  // When Season 3 starts (empty = not announced yet: the site says "starting soon").
  launch:   '',
  updated:  '2026-11-14',
};

// ── News (newest first) ─────────────────────────────────────────────────────
export const NEWS = [
  {
    date: '2026-11-11',
    title: L('Season 3, slimmed down', 'Stagione 3, alleggerita'),
    body: L(
      'Fewer systems, done better. No calamity nights this season, and the Stone and Verdant gems are gone. The world is <b>2,500 blocks</b> from the centre in every direction, and the season opens up over three weeks instead of one: something new every few days.',
      'Meno sistemi, fatti meglio. Niente notti di calamità in questa stagione, e le gemme Stone e Verdant non ci sono più. Il mondo è largo <b>2.500 blocchi</b> dal centro in ogni direzione, e la stagione si apre in tre settimane invece di una: qualcosa di nuovo ogni pochi giorni.'),
  },
  {
    date: '2026-10-24',
    title: L('Season 3', 'Stagione 3'),
    body: L(
      'A new world, and it opens up a piece at a time: one hour of grace, then PvP and the Rift, then the Nether and the border out to its full size. Races and race weapons are gone — <a href="#/gems">thirteen gems</a> took their place, one of each, won in the Rift\'s gem vaults. The <a href="#/forge">Forge</a> is a block you craft now, with a Cold Forge and runes later on. New <a href="#/items">Starsteel and Riftborn gear, reworked relics and new potions</a>, and rule 8 for everything one of a kind.',
      'Un mondo nuovo, che si apre un pezzo alla volta: un\'ora di tregua, poi PvP e Rift, poi il Nether e il confine fino alla sua misura piena. Le razze e le armi di razza non ci sono più — al loro posto <a href="#/gems">tredici gemme</a>, una per tipo, vinte nei caveau delle gemme della Rift. La <a href="#/forge">Forgia</a> ora è un blocco che si crafta, con la Forgia Fredda e le rune più avanti. Nuovo <a href="#/items">equipaggiamento Starsteel e Riftborn, reliquie riviste e nuove pozioni</a>, e la regola 8 per tutto ciò che è unico.'),
  },
];

// ── Pillars (home / about) ──────────────────────────────────────────────────
export const PILLARS = [
  { icon: '🗓️', page: 'rules', title: L('A season that opens up', 'Una stagione che si apre'),
    text: L('One hour of grace, then something new every few days for three weeks: PvP and the Rift, the Nether, the Forge and Starsteel, red rifts, the gem vaults tier by tier.',
            'Un\'ora di tregua, poi qualcosa di nuovo ogni pochi giorni per tre settimane: PvP e Rift, il Nether, la Forgia e lo Starsteel, le rift rosse, i caveau delle gemme una rarità alla volta.') },
  { icon: '💎', page: 'gems', title: L('Gems', 'Gemme'),
    text: L('Thirteen gems, and only one of each exists. Win them in the Rift\'s gem vaults — and keep them.',
            'Tredici gemme, e ne esiste una sola per tipo. Vincile nei caveau delle gemme della Rift — e tienile.') },
  { icon: '🕳️', page: 'rift', title: L('The Rift', 'La Rift'),
    text: L('Rare portals into instanced dungeons for parties of up to 4, built fresh every time. Red rifts drag you in.',
            'Portali rari verso dungeon istanziati per gruppi fino a 4, generati da zero ogni volta. Le rift rosse ti trascinano dentro.') },
  { icon: '🔨', page: 'forge', title: L('The Forge', 'La Forgia'),
    text: L('Craft a Forge, place it, and hammer your gear on it in a timing minigame for a permanent buff — or ruin it.',
            'Crafta una Forgia, piazzala e martellaci sopra il tuo equipaggiamento in un minigioco a tempo per un potenziamento permanente — o rovinalo.') },
  { icon: '⛓️', page: 'items', title: L('Scarce netherite', 'Netherite scarsa'),
    text: L('Very little netherite, on purpose — Starsteel and one-of-a-kind Riftborn gear are the way up.',
            'Pochissima netherite, di proposito — lo Starsteel e l\'equipaggiamento Riftborn, unico, sono la via per salire.') },
  { icon: '⚔️', page: 'pvp', title: L('PvP with rules', 'PvP con regole'),
    text: L('Teams, bounties on real items and a daily Tracking Hour when nobody can hide.',
            'Team, taglie con oggetti veri e una Tracking Hour giornaliera in cui nessuno può nascondersi.') },
  { icon: '🤖', page: 'bosses', title: L('Bosses with real AI', 'Boss con vera IA'),
    text: L('Fake players with real combat AI power the rift bosses and the gem vaults\' guardians — each guardian fights with the gem it guards.',
            'Finti giocatori con vera IA da combattimento animano i boss delle rift e i guardiani dei caveau — ognuno combatte con la gemma che custodisce.') },
];

// ── The season, step by step (Season plugin) ─────────────────────────────────
// at: hours after the start. Each step arrives with a title and a toast, and the in-game Guide fills in.
export const SEASON = [
  { at: 0, icon: '🕊️', name: L('Grace', 'Tregua'),
    text: L('The first hour: nobody can hurt anybody and nobody gets hungry. The world is 2,000 blocks across. Make your team.',
            'La prima ora: nessuno può ferire nessuno e nessuno ha fame. Il mondo è largo 2.000 blocchi. Fai il tuo team.') },
  { at: 1, icon: '⚔️', name: L('PvP & the Rift', 'PvP e Rift'),
    text: L('Grace ends: PvP is on, bounties open, and now and then a rift portal tears open.',
            'Finisce la tregua: PvP attivo, si aprono le taglie, e ogni tanto si squarcia un portale della Rift.') },
  { at: 2, icon: '🔥', name: L('The Nether · the full world · Relics', 'Il Nether · il mondo intero · Reliquie'),
    text: L('Nether portals work, and the border moves out to 2,500 blocks each way (5,000 across) for the rest of the season. Traps and wifi tools can be crafted.',
            'I portali del Nether funzionano, e il confine si allarga a 2.500 blocchi per lato (5.000 in tutto) per il resto della stagione. Trappole e strumenti wifi si possono craftare.') },
  { at: 12, icon: '🔨', name: L('The Forge', 'La Forgia'),
    text: L('The Forge can be crafted: hammer your gear for a permanent buff.', 'La Forgia si può craftare: martella il tuo equipaggiamento per un potenziamento permanente.') },
  { at: 24, icon: '🔹', name: L('Starsteel · Tracking Hour', 'Starsteel · Tracking Hour'),
    text: L('Starsteel ingots can be made from Starsteel Ore, and the daily Tracking Hour starts.',
            'I lingotti di Starsteel si fanno dal minerale di Starsteel, e parte la Tracking Hour giornaliera.') },
  { at: 72, icon: '⚗️', name: L('Alchemy', 'Alchimia'),
    text: L('The new potions can be brewed.', 'Si possono distillare le nuove pozioni.') },
  { at: 96, icon: '🔷', name: L('The first gem vaults', 'I primi caveau'),
    text: L('The Epic gem vaults open: Magma, Venom, Fortune.', 'Si aprono i caveau Epici: Magma, Venom, Fortune.') },
  { at: 144, icon: '🩸', name: L('Red rifts', 'Rift rosse'),
    text: L('Red rifts start tearing open — and they drag you in.', 'Iniziano ad aprirsi le rift rosse — e ti trascinano dentro.') },
  { at: 216, icon: '💜', name: L('Legendary gem vaults', 'Caveau Leggendari'),
    text: L('Rime, Tempest, Umbral, Lumen, Echo.', 'Rime, Tempest, Umbral, Lumen, Echo.') },
  { at: 288, icon: '❄️', name: L('The Cold Forge', 'La Forgia Fredda'),
    text: L('The Cold Forge can be crafted: frost techniques and rune slots for Flawless pieces.',
            'Si può craftare la Forgia Fredda: tecniche del gelo e slot per rune per i pezzi Impeccabili.') },
  { at: 384, icon: '🌟', name: L('Mythic gem vaults', 'Caveau Mitici'),
    text: L('Briar, Anchor, Chrono — the keys must be attuned, and everyone can see you do it.',
            'Briar, Anchor, Chrono — le chiavi vanno attivate, e tutti ti vedono mentre lo fai.') },
  { at: 504, icon: '▓', name: L('???', '???'), glitch: true,
    text: L('Not every portal is what it looks like.', 'Non tutti i portali sono quello che sembrano.') },
];

// ── Gems (Season 3) ─────────────────────────────────────────────────────────
// id: the gem's id on the server, used to match the live status (SITE.itemStatus).
// opensDay: the season day its tier's vaults open (null: no vault).
export const GEM_TIERS = [
  { key: 'epic',      name: L('Epic', 'Epica'),            color: '#50a0ff', opensDay: 4 },
  { key: 'legendary', name: L('Legendary', 'Leggendaria'), color: '#be5aff', opensDay: 9 },
  { key: 'mythic',    name: L('Mythic', 'Mitica'),         color: '#ffa028', opensDay: 16 },
  { key: 'chromatic', name: L('Chromatic', 'Cromatica'),   color: '#ffffff', opensDay: null },
];

export const GEMS = [
  { id: 'gem:magma', key: 'magma', tier: 'epic', icon: '🔥', name: 'Magma Gem', theme: L('fire', 'fuoco'),
    gifts: L(['Searing: your hits set them alight, and a burning foe takes more from you.', 'Molten Core: burning never hurts you; fire and lava burn you for half.'],
             ['Rovente: i tuoi colpi danno fuoco, e un nemico in fiamme subisce di più da te.', 'Nucleo fuso: bruciare non ti ferisce mai; fuoco e lava ti fanno metà danno.']),
    f: L('Magma Bolt (2 charges): a molten shot that sets its target alight and crusts the ground where it lands.',
         'Dardo di magma (2 cariche): un colpo fuso che incendia il bersaglio e rende rovente il terreno dove atterra.'),
    sf: L('Eruption: the ground bursts around you, throwing everyone up in flames — anyone already burning is Melted first, their armour counting for half.',
          'Eruzione: il terreno esplode intorno a te e scaglia tutti in aria tra le fiamme — chi sta già bruciando viene prima Fuso, e la sua armatura conta la metà.') },
  { id: 'gem:venom', key: 'venom', tier: 'epic', icon: '🧪', name: 'Venom Gem', theme: L('poison', 'veleno'),
    gifts: L(['Toxic Edge: your hits stack Venom, which eats through armour every second.', 'Antivenom: poison can\'t take you.'],
             ['Lama tossica: i tuoi colpi accumulano Veleno, che ogni secondo passa attraverso l\'armatura.', 'Antiveleno: il veleno non ha effetto su di te.']),
    f: L('Spit (2 charges): a glob of venom; two in quick succession leave a puddle that keeps stacking it.',
         'Sputo (2 cariche): un grumo di veleno; due di fila lasciano una pozza che continua ad accumularlo.'),
    sf: L('Rupture: every foe near you carrying Venom has it burst at once — the more stacks, the harder.',
          'Rottura: il Veleno di ogni nemico vicino esplode tutto insieme — più ne ha accumulato, più fa male.') },
  { id: 'gem:fortune', key: 'fortune', tier: 'epic', icon: '💰', name: 'Fortune Gem', theme: L('gold — the grinder\'s', 'oro — del grinder'),
    gifts: L(['Bounty: mobs you kill often drop double, and give more XP.', 'Prospector: ores sometimes give one more.'],
             ['Bottino: i mob che uccidi spesso lasciano il doppio, e danno più XP.', 'Cercatore: i minerali a volte ne danno uno in più.']),
    f: L('Harvest Arc (2 charges): a sweep in front of you — heavy against mobs, light against players. The second goes all the way round.',
         'Arco del raccolto (2 cariche): una spazzata davanti a te — forte contro i mob, leggera contro i giocatori. La seconda fa il giro completo.'),
    sf: L('Prospect: every ore around you glows through the rock for you alone, and you mine faster.',
          'Prospezione: ogni minerale intorno a te brilla attraverso la roccia, solo per te, e scavi più in fretta.') },
  { id: 'gem:rime', key: 'rime', tier: 'legendary', icon: '❄️', name: 'Rime Gem', theme: L('frost', 'gelo'),
    gifts: L(['Chill: your hits slow, and the third freezes them solid — your next blow Shatters the ice.', 'Frostbite: whoever hits you is chilled.', 'Water freezes under you; the cold can\'t hurt you; fire burns you for half.'],
             ['Gelo: i tuoi colpi rallentano, e il terzo congela — il colpo dopo frantuma il ghiaccio.', 'Morso del gelo: chi ti colpisce viene raggelato.', 'L\'acqua gela sotto di te; il freddo non ti ferisce; il fuoco ti fa metà danno.']),
    f: L('Ice Lance (2 charges): through everyone in a line; two quickly make a Glacial Spear that bursts. Aimed at your feet, it freezes a lane to skate on.',
         'Lancia di ghiaccio (2 cariche): trapassa chiunque sia in linea; due di fila diventano una Lancia glaciale che esplode. Puntata ai piedi, ghiaccia una pista su cui pattinare.'),
    sf: L('Glacier Wall: a wall of real ice rises before you. Press again and it bursts outward, freezing everyone in front of it.',
          'Muro glaciale: un muro di vero ghiaccio si alza davanti a te. Premi di nuovo ed esplode in avanti, congelando chiunque abbia davanti.') },
  { id: 'gem:tempest', key: 'tempest', tier: 'legendary', icon: '🌪️', name: 'Tempest Gem', theme: L('storm', 'tempesta'),
    gifts: L(['Updraft: a second jump in mid-air.', 'Skyfighter: hits from the air land harder, pop them up and give your jump back.', 'Static: airborne hits charge you — full, your next blow is a Thunderclap.', 'Faster (more under a storm); lightning can\'t touch you.'],
             ['Corrente ascensionale: un secondo salto a mezz\'aria.', 'Combattente del cielo: i colpi dall\'aria fanno più male, sbalzano in alto e ti ridanno il salto.', 'Statica: i colpi in aria ti caricano — al massimo, il prossimo colpo è un Tuono.', 'Più veloce (ancora di più nei temporali); i fulmini non ti toccano.']),
    f: L('Gale Dash (2 charges): a burst of wind that throws aside whoever you pass; dash again quickly for a Thunder Dash.',
         'Scatto di vento (2 cariche): una raffica che scaraventa via chi attraversi; scatta di nuovo subito per uno Scatto del tuono.'),
    sf: L('Eye of the Storm: shots at you are caught and thrown back at the shooter — and it ends in lightning, harder for each one it turned.',
          'Occhio del ciclone: i colpi diretti a te vengono presi e rilanciati a chi li ha tirati — e finisce in un fulmine, più forte per ogni colpo respinto.') },
  { id: 'gem:umbral', key: 'umbral', tier: 'legendary', icon: '🌑', name: 'Umbral Gem', theme: L('shadow', 'ombra'),
    gifts: L(['Ambush: your first blow after a quiet moment hits much harder and silences them — no gem power answers them for a moment.', 'Backstab: blows to the back land harder.', 'Night vision; blindness and darkness can\'t take you; faster in the dark.'],
             ['Imboscata: il primo colpo dopo un momento di quiete fa molto più male e li silenzia — per un attimo nessun potere di gemma risponde loro.', 'Pugnalata alle spalle: i colpi alla schiena fanno più male.', 'Visione notturna; cecità e oscurità non ti prendono; più veloce al buio.']),
    f: L('Shade Step (2 charges): step out of the shadow behind whoever you look at — kill them soon after and the step comes back. Twice onto the same one: Umbral Cut, straight through them.',
         'Passo d\'ombra (2 cariche): esci dall\'ombra alle spalle di chi guardi — uccidilo poco dopo e il passo torna. Due volte sullo stesso: Taglio d\'ombra, dritto attraverso di lui.'),
    sf: L('Veil: you and your gear vanish, leaving a Shadow Double that blinds whoever strikes it.',
          'Velo: tu e il tuo equipaggiamento sparite, lasciando un Doppio d\'ombra che acceca chi lo colpisce.') },
  { id: 'gem:lumen', key: 'lumen', tier: 'legendary', icon: '✨', name: 'Lumen Gem', theme: L('light — the healer', 'luce — il guaritore'),
    gifts: L(['Kindred Light: your hits heal your most hurt teammate nearby, and you a little.', 'Warm Glow: you and teammates near you regenerate, and you heal more from everything.'],
             ['Luce fraterna: i tuoi colpi curano il compagno più ferito vicino, e un po\' anche te.', 'Bagliore caldo: tu e i compagni vicini vi rigenerate, e ti curi di più da tutto.']),
    f: L('Mending Ray (2 charges): a beam that heals a teammate or hurts a foe — and at a distant teammate it carries you to them.',
         'Raggio curativo (2 cariche): un raggio che cura un compagno o ferisce un nemico — e verso un compagno lontano ti porta da lui.'),
    sf: L('Sanctuary: a dome of light where your team regenerates, and each of them is spared one killing blow.',
          'Santuario: una cupola di luce dove la tua squadra si rigenera, e ognuno viene risparmiato da un colpo mortale.') },
  { id: 'gem:echo', key: 'echo', tier: 'legendary', icon: '🔊', name: 'Echo Gem', theme: L('sculk — the tracker', 'sculk — il segugio'),
    gifts: L(['Resonance: three hits set them ringing, and your next blow is a Shatterwave.', 'Vibrations: anyone moving near you is marked for you alone, through walls.', 'Heard: a player you strike is tracked for 3 minutes.', 'Gem Sense: you feel the nearest other gem carrier — and they feel you.'],
             ['Risonanza: tre colpi li fanno risuonare, e il colpo dopo è un\'Onda d\'urto.', 'Vibrazioni: chi si muove vicino a te viene segnato solo per te, attraverso i muri.', 'Sentito: un giocatore che colpisci viene tracciato per 3 minuti.', 'Senso delle gemme: senti chi porta la gemma più vicina — e lui sente te.']),
    f: L('Sonic Lunge (2 charges): dash ahead leaving an Echo of yourself; press again to snap back through everyone.',
         'Affondo sonico (2 cariche): scatta in avanti lasciando un\'Eco di te; premi di nuovo per tornare indietro attraverso tutti.'),
    sf: L('Warden\'s Call: a sonic boom down your sight — and Darkness and a glow for everyone around.',
          'Richiamo del Warden: un boato sonico dove guardi — e Oscurità e bagliore per chiunque sia intorno.') },
  { id: 'gem:sanguine', key: 'briar', tier: 'mythic', icon: '🌹', name: 'Briar Gem', theme: L('thorns', 'spine'),
    gifts: L(['Barbed: your hits always land as critical hits.', 'Thorned: your hits on a Thorned foe deal more.', 'Deep Roots: Strength from potions and beacons lasts four times as long.', 'Barkskin: no single blow takes more than 6 hearts from you.'],
             ['Spinato: i tuoi colpi sono sempre critici.', 'Spinoso: i tuoi colpi su un nemico Spinoso fanno di più.', 'Radici profonde: la Forza di pozioni e beacon dura quattro volte tanto.', 'Corteccia: nessun colpo singolo ti toglie più di 6 cuori.']),
    f: L('Thornwheel (2 charges): a wheel of thorns that bounces off walls and Thorns whoever it cuts.',
         'Ruota di spine (2 cariche): una ruota di spine che rimbalza sui muri e rende Spinoso chi taglia.'),
    sf: L('Bindweed: leap and crash down, up to three times — everyone you crash into shares the damage the others take. Crash into them all three times, then press again: they Bloom.',
          'Vilucchio: balza e schiantati, fino a tre volte — chi colpisci condivide il danno che subiscono gli altri. Colpiscili tutte e tre le volte, poi premi di nuovo: Sbocciano.') },
  { id: 'gem:aureate', key: 'anchor', tier: 'mythic', icon: '⚓', name: 'Anchor Gem', theme: L('sea', 'mare'),
    gifts: L(['Undertow Grip: +1 reach, and your hits pull instead of push.', 'Haste while sneaking; much less fall damage; your armour wears slower.'],
             ['Presa della risacca: +1 di portata, e i tuoi colpi tirano invece di spingere.', 'Rapidità da accovacciato; molto meno danno da caduta; l\'armatura si consuma più piano.']),
    f: L('Harpoon (2 charges): catch a foe to haul them in, or bite terrain to be hauled there and drop on them from above. Both harpoons on one foe at once: Keelhaul.',
         'Arpione (2 cariche): aggancia un nemico per tirarlo a te, o un muro per farti tirare lì e piombare dall\'alto. Entrambi gli arpioni sullo stesso nemico: Chiglia.'),
    sf: L('Undertow: a brief parry that turns blows, arrows and potions back on whoever sent them.',
          'Risacca: una breve parata che rimanda colpi, frecce e pozioni a chi li ha mandati.') },
  { id: 'gem:chrono', key: 'chrono', tier: 'mythic', icon: '⏳', name: 'Chrono Gem', theme: L('time', 'tempo'),
    gifts: L(['Afterimage: every third blow in a row lands again a moment later.'],
             ['Immagine residua: ogni terzo colpo di fila arriva di nuovo un attimo dopo.']),
    f: L('Rewind: snap back to where you stood 3 seconds ago, with the health you had then. Press again quickly for a Haste Burst.',
         'Riavvolgi: torni dov\'eri 3 secondi fa, con la vita che avevi allora. Premi di nuovo subito per uno Scatto di rapidità.'),
    sf: L('Stasis: a field where foes slow to a crawl and shots hang in the air — and when it ends, much of what you dealt inside lands again.',
          'Stasi: un campo dove i nemici rallentano fin quasi a fermarsi e i colpi restano sospesi in aria — e alla fine, buona parte del danno che hai fatto dentro arriva di nuovo.') },
  { id: 'gem:prism', key: 'prism', tier: 'chromatic', icon: '🌈', name: 'Prism Gem', theme: L('every colour', 'ogni colore'),
    gifts: L(['Holds three colours at a time, drawn from the Legendary, Epic and Rare gems — and it is whichever one it\'s turned to: that gem\'s gifts and powers.', 'Right-click it in your inventory for three new colours, once an hour.'],
             ['Contiene tre colori alla volta, presi dalle gemme Leggendarie, Epiche e Rare — ed è quello a cui è rivolta: doni e poteri di quella gemma.', 'Tasto destro nell\'inventario per tre colori nuovi, una volta all\'ora.']),
    f: L('F / Sneak + F: the powers of the colour it\'s turned to. Q (in hand): Spectrum Shift to the next colour. Sneak + Q: White Light — the first power of all three colours, one after another.',
         'F / Shift + F: i poteri del colore a cui è rivolta. Q (in mano): Cambio di spettro al colore successivo. Shift + Q: Luce bianca — il primo potere di tutti e tre i colori, uno dopo l\'altro.') },
  { id: 'gem:nil', key: 'null', tier: 'chromatic', icon: '⚫', name: 'Null Gem', theme: L('no colour', 'nessun colore'),
    gifts: L(['Nullfield: no gem\'s second power answers anyone near you (your teammates are spared).', 'Hollow: no harmful effect can take you.'],
             ['Campo nullo: il secondo potere delle gemme non risponde a nessuno vicino a te (i compagni sono risparmiati).', 'Vuoto: nessun effetto negativo ha presa su di te.']),
    f: L('Erase: a lance of nothing — the first it reaches loses every good effect and all absorption, and is silenced.',
         'Cancella: una lancia di nulla — il primo che raggiunge perde ogni effetto positivo e tutto l\'assorbimento, e viene silenziato.'),
    sf: L('Collapse: a sphere of nothing that drinks in everyone near it and deletes every shot inside, then folds shut.',
          'Collasso: una sfera di nulla che risucchia chiunque le sia vicino e cancella ogni colpo al suo interno, poi si richiude.') },
];

// The other things that exist only once (their live status comes from the same file).
export const OTHER_UNIQUES = [
  { id: 'relic:dragon_egg',   icon: '🥚', name: 'Dragon Egg', note: L('[ENTRY REDACTED]', '[VOCE OSCURATA]'), redacted: true },
  { id: 'riftborn:helmet',     icon: '🪖', name: 'Riftborn Helmet',     note: L('Riftborn · forged', 'Riftborn · forgiato') },
  { id: 'riftborn:chestplate', icon: '🛡️', name: 'Riftborn Chestplate', note: L('Riftborn · forged', 'Riftborn · forgiato') },
  { id: 'riftborn:leggings',   icon: '👖', name: 'Riftborn Leggings',   note: L('Riftborn · forged', 'Riftborn · forgiato') },
  { id: 'riftborn:boots',      icon: '🥾', name: 'Riftborn Boots',      note: L('Riftborn · forged', 'Riftborn · forgiato') },
  { id: 'riftborn:sword',      icon: '🗡️', name: 'Riftborn Sword',      note: L('Riftborn · forged', 'Riftborn · forgiato') },
  { id: 'riftborn:axe',        icon: '🪓', name: 'Riftborn Axe',        note: L('Riftborn · forged', 'Riftborn · forgiato') },
  { id: 'riftborn:pickaxe',    icon: '⛏️', name: 'Riftborn Pickaxe',    note: L('Riftborn · forged', 'Riftborn · forgiato') },
];

// ── Bosses ──────────────────────────────────────────────────────────────────
// The gem vaults' guardians: each fights with the gem it guards.
export const GUARDIANS = [
  { gem: 'magma',   name: 'Pyrrhos',   title: L('the Living Forge', 'la Forgia Vivente'),          style: L('Molten bolts and burning ground; slag from above, the forge\'s own breath.', 'Dardi fusi e terreno in fiamme; scorie dall\'alto, il respiro della forgia.') },
  { gem: 'venom',   name: 'Vesska',    title: L('the Blight Mother', 'la Madre della Peste'),      style: L('Everything she touches carries her venom; her brood comes, and the air goes bad.', 'Tutto ciò che tocca porta il suo veleno; arriva la sua covata, e l\'aria si guasta.') },
  { gem: 'fortune', name: 'Aurum',     title: L('the Gilded Hoarder', 'l\'Accumulatore Dorato'),   style: L('It sweeps through anything near it, flings its gold, and calls its keepers.', 'Spazza tutto ciò che ha vicino, scaglia il suo oro e chiama i suoi custodi.') },
  { gem: 'rime',    name: 'Isolde',    title: L('the White Silence', 'il Silenzio Bianco'),        style: L('Lances of ice, walls of it, and a whiteout nobody sees through.', 'Lance di ghiaccio, muri di ghiaccio, e una tormenta in cui nessuno vede.') },
  { gem: 'tempest', name: 'Kaelos',    title: L('the Unbroken Storm', 'la Tempesta Indomita'),     style: L('Always in the air, always somewhere else; the sky answers it.', 'Sempre in aria, sempre altrove; il cielo gli risponde.') },
  { gem: 'umbral',  name: 'Sable',     title: L('the Quiet Knife', 'la Lama Silenziosa'),          style: L('Behind you, then gone; the lights go out and she is faster in the dark.', 'Alle tue spalle, poi sparita; le luci si spengono e al buio è più veloce.') },
  { gem: 'lumen',   name: 'Auriel',    title: L('the Last Light', 'l\'Ultima Luce'),               style: L('She heals herself with her own light — break her channel, or the fight goes on forever.', 'Si cura con la sua luce — interrompi il suo canale, o lo scontro non finisce mai.') },
  { gem: 'echo',    name: 'Hollowmaw', title: L('the Listener', 'l\'Ascoltatore'),                 style: L('It hears everything that moves. When it shrieks, sneak — or be heard.', 'Sente tutto ciò che si muove. Quando urla, accovacciati — o verrai sentito.') },
  { gem: 'briar',   name: 'Morwen',    title: L('the Thorn Queen', 'la Regina delle Spine'),       style: L('Thornwheels and binding vines; she roots you, then the ground itself grows teeth.', 'Ruote di spine e liane che legano; ti blocca, poi il terreno stesso mette i denti.') },
  { gem: 'anchor',  name: 'Thalassar', title: L('the Drowned Admiral', 'l\'Ammiraglio Annegato'),  style: L('Harpoons, anchor drops and keelhauls; his guns walk across the room, and the sea comes in.', 'Arpioni, ancore che piombano e chiglie; i suoi cannoni spazzano la sala, e il mare entra.') },
  { gem: 'chrono',  name: 'Aeon',      title: L('the Hour Thief', 'il Ladro di Ore'),              style: L('It is where it was, then where it will be; what you lose, you lose twice.', 'È dov\'era, poi dove sarà; ciò che perdi, lo perdi due volte.') },
];

export const RIFT_BOSSES = [
  { name: 'The Rift Sovereign', where: L('Ordinary rifts', 'Rift ordinarie'),
    moves: L(['A giant that slams the ground in a telegraphed ring.', 'Calls its court at 66% and 33% health — it takes less damage while they live.', 'Rains marked meteors, blinks onto a player and slams.', 'Ends by marking every player for explosions.'],
             ['Un gigante che colpisce il suolo in un anello segnalato.', 'Chiama la sua corte al 66% e al 33% di vita — subisce meno danni finché sono vivi.', 'Fa piovere meteore segnalate, si teletrasporta su un giocatore e colpisce.', 'Finisce marchiando ogni giocatore per delle esplosioni.']) },
  { name: 'The Crimson Sovereign', where: L('Red rifts', 'Rift rosse'),
    moves: L(['Meteor showers and blink-strikes.', 'A black-hole pull followed by a slam.', 'Hexes.', 'Enrages at 20% health.'],
             ['Piogge di meteore e colpi a teletrasporto.', 'Un risucchio a buco nero seguito da uno schianto.', 'Maledizioni.', 'Si infuria al 20% di vita.']) },
];

// ── The Rift ────────────────────────────────────────────────────────────────
export const RIFT_KINDS = [
  { key: 'ordinary', color: '#b56cff', name: L('Ordinary', 'Ordinaria'), rooms: '7', time: '25 min', lives: '3',
    notes: L('The baseline. You can walk out by the lodestone and keep everything.', 'La base. Puoi uscire dalla calamita e tenere tutto.') },
  { key: 'red', color: '#ff3b3b', name: L('Red Rift', 'Rift Rossa'), rooms: '9', time: '55 min', lives: '2',
    notes: L('Two days in, red rifts start: about 1 in 5 portals. A red portal doesn\'t wait to be clicked: it drags in anyone within 14 blocks, and there\'s no way back until it\'s cleared or you\'re out of lives. Boss: the Crimson Sovereign. Harder — and far richer: an extra table with Rift Cores, epic runes, netherite, totems and books.',
             'Dopo due giorni arrivano le rift rosse: circa 1 portale su 5. Un portale rosso non aspetta il clic: trascina dentro chiunque sia entro 14 blocchi, e non si torna indietro finché non è completata o finite le vite. Boss: il Sovrano Cremisi. Più dura — e molto più ricca: una tabella extra con Nuclei della Rift, rune epiche, netherite, totem e libri.') },
  { key: 'anomaly', color: '#35f2e0', name: L('▓▓▓▓▓▓▓', '▓▓▓▓▓▓▓'), rooms: '▓', time: '▓▓', lives: '▓', glitch: true,
    notes: L('[ENTRY REDACTED] — some portals look ordinary. Some aren\'t.', '[VOCE OSCURATA] — alcuni portali sembrano ordinari. Alcuni no.') },
  { key: 'weapon', color: '#ffd84a', name: L('Gem Vaults', 'Caveau delle gemme'), rooms: L('themed', 'a tema'), time: '45 min', lives: '3',
    notes: L('11 sealed dungeons, one per gem, opened with that gem\'s key, up to 4 players. Fail and you lose what you carried in. See below.', '11 dungeon sigillati, uno per gemma, aperti con la chiave di quella gemma, fino a 4 giocatori. Se fallisci perdi ciò che hai portato. Vedi sotto.') },
];

export const RIFT_TIERS = [
  { tier: 1, score: '0+',  mobs: L('Zombies and skeletons', 'Zombie e scheletri') },
  { tier: 2, score: '12+', mobs: L('Tougher mixes', 'Mix più tosti') },
  { tier: 3, score: '24+', mobs: L('Middle tier — full diamond, Protection IV, no supplies', 'Livello medio — diamante completo, Protezione IV, niente scorte') },
  { tier: 4, score: '36+', mobs: L('A properly stocked player', 'Un giocatore ben rifornito') },
  { tier: 5, score: '44+', mobs: L('Full diamond and a full inventory: vindicators, wither skeletons, evokers', 'Diamante completo e inventario pieno: vindicatori, scheletri wither, evocatori') },
];

export const RIFT_ROOMS = [
  { icon: '🧟', name: L('Hollows', 'Cavità'), text: L('Waves of mobs; the last wave brings an elite.', 'Ondate di mob; l\'ultima porta un élite.') },
  { icon: '🔷', name: L('Sigil Chamber', 'Camera dei Sigilli'), text: L('Four coloured pillars flash a sequence — strike them in the same order. Each round adds a step; a wrong one calls mobs.', 'Quattro pilastri colorati lampeggiano una sequenza — colpiscili nello stesso ordine. Ogni turno aggiunge un passo; uno sbagliato evoca mob.') },
  { icon: '📦', name: L('Vault', 'Caveau'), text: L('Chests to loot.', 'Forzieri da saccheggiare.') },
  { icon: '✨', name: L('Shrine', 'Santuario'), text: L('Touch the enchanting table for a full heal and a returned life (once each).', 'Tocca il tavolo da incantesimi per una cura completa e una vita restituita (una volta a testa).') },
  { icon: '👑', name: L('The boss', 'Il boss'), text: L('The Rift Sovereign waits at the end.', 'Il Sovrano della Rift aspetta alla fine.') },
];

export const RIFT_CHALLENGES = [
  { level: 'easy',   bonus: '+0.10×', name: L('Easy', 'Facile'),
    list: L(['Solve every sigil first time', 'No ender pearls', 'Clear in under half the time limit'], ['Risolvi ogni sigillo al primo colpo', 'Niente perle di ender', 'Completa in meno di metà del tempo']) },
  { level: 'medium', bonus: '+0.25×', name: L('Medium', 'Media'),
    list: L(['Nobody dies', 'No enchanted golden apples', 'No totems used'], ['Nessuno muore', 'Niente mele d\'oro incantate', 'Nessun totem usato']) },
  { level: 'hard',   bonus: '+1.0×',  name: L('Hard', 'Difficile'),
    list: L(['Take no damage at all', 'Wear no armor', 'Clear in under 15% of the time limit'], ['Non subire alcun danno', 'Nessuna armatura', 'Completa in meno del 15% del tempo']) },
];

export const GEM_KEY_FRAMES = {
  epic:      { corner: { icon: '🔷', name: L('Gem Cluster', 'Grappolo di gemme') }, vert: { icon: '👁️', name: L('Eye of Ender', 'Occhio di ender') }, side: { icon: '💎', name: L('Diamond Block', 'Blocco di diamante') } },
  legendary: { corner: { icon: '🔷', name: L('Gem Cluster', 'Grappolo di gemme') }, vert: { icon: '🔮', name: L('Rift Core', 'Nucleo della Rift') }, side: { icon: '💎', name: L('Diamond Block', 'Blocco di diamante') } },
  mythic:    { corner: { icon: '🔷', name: L('Gem Cluster', 'Grappolo di gemme') }, vert: { icon: '🔮', name: L('Rift Core', 'Nucleo della Rift') }, side: { icon: '⭐', name: L('Nether Star', 'Stella del Nether') } },
};

export const GEM_VAULTS = [
  { gem: 'magma',    dungeon: 'The Ember Forge',      centre: ['🔥', L('Blaze Rod', 'Verga di blaze')],          guardian: 'Pyrrhos, the Living Forge' },
  { gem: 'venom',    dungeon: 'The Blight Hollow',    centre: ['🐡', L('Pufferfish', 'Pesce palla')],            guardian: 'Vesska, the Blight Mother' },
  { gem: 'fortune',  dungeon: 'The Gilded Hoard',     centre: ['🟩', L('Emerald Block', 'Blocco di smeraldo')],  guardian: 'Aurum, the Gilded Hoarder' },
  { gem: 'rime',     dungeon: 'The Frozen Cathedral', centre: ['🧊', L('Blue Ice', 'Ghiaccio blu')],             guardian: 'Isolde, the White Silence' },
  { gem: 'tempest',  dungeon: 'The Tempest Spire',    centre: ['🌬️', L('Breeze Rod', 'Verga di brezza')],        guardian: 'Kaelos, the Unbroken Storm',
    note: L('The parkour can only be crossed with wind charges.', 'Il parkour si attraversa solo con le cariche di vento.') },
  { gem: 'umbral',   dungeon: 'The Hollow Between',   centre: ['💀', L('Wither Skeleton Skull', 'Teschio di scheletro wither')], guardian: 'Sable, the Quiet Knife' },
  { gem: 'lumen',    dungeon: 'The Sky Sanctum',      centre: ['🗿', L('Totem of Undying', 'Totem dell\'immortalità')], guardian: 'Auriel, the Last Light',
    note: L('The parkour can only be crossed with wind charges.', 'Il parkour si attraversa solo con le cariche di vento.') },
  { gem: 'echo',     dungeon: 'The Listening Deep',   centre: ['🌀', L('Echo Shard', 'Frammento di eco')],       guardian: 'Hollowmaw, the Listener',
    note: L('The pit is crossed in the dark.', 'Il baratro si attraversa al buio.') },
  { gem: 'briar',    dungeon: 'The Overgrowth',       centre: ['🥚', L('Sniffer Egg', 'Uovo di sniffer')],       guardian: 'Morwen, the Thorn Queen' },
  { gem: 'anchor',   dungeon: 'The Drowned Citadel',  centre: ['🌊', L('Heart of the Sea', 'Cuore del mare')],    guardian: 'Thalassar, the Drowned Admiral' },
  { gem: 'chrono',   dungeon: 'The Hour Vault',       centre: ['🧭', L('Recovery Compass', 'Bussola di recupero')], guardian: 'Aeon, the Hour Thief' },
];

// ── The Forge ───────────────────────────────────────────────────────────────
export const FORGE = {
  // The Forge block's recipe, row by row (Forge plugin). Opens 12 hours in.
  recipe: [['🟫', '⚒️', '🟫'], ['⬛', '🛠️', '⬛'], ['💎', '🔥', '💎']],
  recipeKey: [['🟫', L('Netherite Scrap', 'Frammento di netherite')], ['⚒️', L('Anvil', 'Incudine')], ['⬛', L('Obsidian', 'Ossidiana')],
              ['🛠️', L('Smithing Table', 'Tavolo da forgiatura')], ['💎', L('Diamond Block', 'Blocco di diamante')], ['🔥', L('Blast Furnace', 'Altoforno')]],
  // The Cold Forge: a Forge in the middle. Opens 12 days in.
  coldRecipe: [['🧊', '🟪', '🧊'], ['🟪', '🔨', '🟪'], ['🧊', '⭐', '🧊']],
  coldKey: [['🧊', L('Blue Ice', 'Ghiaccio blu')], ['🟪', L('Netherite Ingot', 'Lingotto di netherite')], ['🔨', L('Forge', 'Forgia')], ['⭐', L('Nether Star', 'Stella del Nether')]],
  cost:     L('2 Netherite Scrap a try', '2 Frammenti di netherite a tentativo'),
  coldCost: L('2 Netherite Ingots a try', '2 Lingotti di netherite a tentativo'),
  strikes:  5,
  timeout:  6,      // seconds before a strike counts as a miss
  grades: [
    { key: 'flawless', min: '85%', max: '100%', color: '#c07bff', name: L('Flawless', 'Impeccabile'),
      text: L('Two buffs: you pick the first from the piece\'s list, at top strength; the second is random, at middle strength. Announced to the whole server.', 'Due potenziamenti: scegli il primo dalla lista del pezzo, al massimo; il secondo è a caso, di forza media. Annunciato a tutto il server.') },
    { key: 'good', min: '60%', max: '84%', color: '#5fe36a', name: L('Good', 'Buono'),
      text: L('One buff at middle strength.', 'Un potenziamento di forza media.') },
    { key: 'okay', min: '35%', max: '59%', color: '#ffd84a', name: L('Okay', 'Discreto'),
      text: L('One buff at the weakest strength.', 'Un potenziamento debole.') },
    { key: 'botched', min: '0%', max: '34%', color: '#ff4a4a', name: L('Botched', 'Rovinato'),
      text: L('No buff, and the piece is left nearly broken — and can never be forged again.', 'Nessun potenziamento, e il pezzo resta quasi rotto — e non si potrà mai più forgiare.') },
  ],
  // [name, okay, good, flawless, stat]
  buffs: [
    { slot: L('Helmet', 'Elmo'), icon: '🪖', rows: [
      ['Vitality', '+1', '+2', '+5', L('Max Health', 'Vita massima')],
      ['Resolve', '+0.5', '+1', '+2.5', L('Armor Toughness', 'Robustezza armatura')],
      ['Deep Breath', '+1', '+2', '+5', L('Breath', 'Respiro')],
      ['Steadfast', '+5%', '+10%', '+25%', L('Knockback Resistance', 'Resistenza al contraccolpo')] ] },
    { slot: L('Chestplate', 'Corazza'), icon: '🛡️', rows: [
      ['Bulwark', '+1', '+2', '+4', L('Armor', 'Armatura')],
      ['Resolve', '+1', '+2', '+4', L('Armor Toughness', 'Robustezza armatura')],
      ['Vitality', '+2', '+4', '+8', L('Max Health', 'Vita massima')],
      ['Ironhide', '+10%', '+20%', '+40%', L('Knockback Resistance', 'Resistenza al contraccolpo')],
      ['Blast Ward', '+20%', '+40%', '+80%', L('Explosion Knockback Res.', 'Res. contraccolpo esplosioni')] ] },
    { slot: L('Leggings', 'Gambali'), icon: '👖', rows: [
      ['Swiftstep', '+3%', '+5%', '+12%', L('Move Speed', 'Velocità')],
      ['Bulwark', '+0.5', '+1', '+2.5', L('Armor', 'Armatura')],
      ['Ironhide', '+5%', '+10%', '+25%', L('Knockback Resistance', 'Resistenza al contraccolpo')],
      ['Resolve', '+0.5', '+1', '+2.5', L('Armor Toughness', 'Robustezza armatura')] ] },
    { slot: L('Boots', 'Stivali'), icon: '🥾', rows: [
      ['Featherfall', '−10%', '−20%', '−50%', L('Fall Damage', 'Danni da caduta')],
      ['Sure-Footed', '+0.2', '+0.3', '+0.6', L('Step Height', 'Altezza del passo')],
      ['Swiftstep', '+3%', '+5%', '+12%', L('Move Speed', 'Velocità')],
      ['Ironhide', '+5%', '+10%', '+25%', L('Knockback Resistance', 'Resistenza al contraccolpo')] ] },
    { slot: L('Sword', 'Spada'), icon: '🗡️', rows: [
      ['Keen', '+0.25', '+0.5', '+1', L('Attack Damage', 'Danno d\'attacco')],
      ['Swift Blade', '+0.05', '+0.1', '+0.2', L('Attack Speed', 'Velocità d\'attacco')],
      ['Sweeping Edge', '+10%', '+20%', '+40%', L('Sweep Damage', 'Danno della spazzata')],
      ['Long Reach', '+0.05', '+0.1', '+0.25', L('Attack Reach', 'Portata d\'attacco')] ] },
    { slot: L('Axe', 'Ascia'), icon: '🪓', rows: [
      ['Keen', '+0.25', '+0.5', '+1', L('Attack Damage', 'Danno d\'attacco')],
      ['Swift Blade', '+0.05', '+0.1', '+0.2', L('Attack Speed', 'Velocità d\'attacco')],
      ['Lumberjack', '+3', '+7', '+20', L('Chopping Speed', 'Velocità di taglio')],
      ['Long Reach', '+0.05', '+0.1', '+0.25', L('Attack Reach', 'Portata d\'attacco')] ] },
    { slot: L('Pickaxe', 'Piccone'), icon: '⛏️', rows: [
      ['Excavator', '+6', '+14', '+40', L('Mining Speed', 'Velocità di scavo')],
      ['Quickbreak', '+50%', '+100%', '+300%', L('Break Speed', 'Velocità di rottura')],
      ['Far Reach', '+1', '+2', '+4', L('Block Reach', 'Portata blocchi')],
      ['Deep Diver', '+20%', '+40%', '+80%', L('Underwater Mining', 'Scavo sott\'acqua')] ] },
  ],
  // The Cold Forge's frost techniques: [name, okay, good, flawless, what it does]
  cold: [
    { slot: L('Sword', 'Spada'), icon: '🗡️', rows: [
      ['Grievous Edge', '30%', '40%', '50%', L('hits cut the target\'s healing for 3 s', 'i colpi riducono le cure del bersaglio per 3 s')],
      ['Rime', '1 s', '1.5 s', '2 s', L('every 3rd hit in a row freezes the target', 'ogni 3° colpo di fila congela il bersaglio')],
      ['Shatter', '+10%', '+15%', '+25%', L('damage to slowed or frozen targets', 'danno a bersagli rallentati o congelati')],
      ['Executioner', '+8%', '+12%', '+20%', L('damage to targets under 30% health', 'danno a bersagli sotto il 30% di vita')] ] },
    { slot: L('Chestplate', 'Corazza'), icon: '🛡️', rows: [
      ['Frost Shell', '2', '4', '6', L('hearts of ice when brought under 30% health (90 s cooldown)', 'cuori di ghiaccio quando scendi sotto il 30% (cooldown 90 s)')],
      ['Chilling Retort', '1 s', '1.5 s', '2 s', L('whoever hits you in melee is slowed', 'chi ti colpisce in mischia viene rallentato')],
      ['Thaw', '30%', '50%', '75%', L('weaker Grievous Wounds, Poison and Wither on you', 'Ferite gravi, Veleno e Wither più deboli su di te')],
      ['Cold Snap', '20%', '30%', '50%', L('less from the first hit after 10 s untouched', 'meno danno dal primo colpo dopo 10 s senza essere colpito')] ] },
    { slot: L('Pickaxe', 'Piccone'), icon: '⛏️', rows: [
      ['Cold Fortune', '5%', '10%', '20%', L('chance of one more drop from an ore', 'probabilità di un drop in più da un minerale')],
      ['Lava Seal', '33%', '66%', '100%', L('chance lava you uncover freezes over', 'probabilità che la lava che scopri si congeli')],
      ['Deep Cold', '30%', '50%', '80%', L('weaker Mining Fatigue on you', 'Affaticamento più debole su di te')],
      ['Hardened Haft', '25%', '40%', '50%', L('slower wear (after Unbreaking)', 'si consuma più piano (dopo Indistruttibilità)')] ] },
  ],
  // Runes: [name, common, rare, epic, stat]
  runes: [
    { slot: L('Weapon', 'Arma'), icon: '⚔️', rows: [
      ['Brutal Edge', '+1.5', '+3', '+6', L('Attack Damage', 'Danno d\'attacco')],
      ['Frenzy', '+0.15', '+0.3', '+0.6', L('Attack Speed', 'Velocità d\'attacco')],
      ['Reach', '+0.1', '+0.2', '+0.4', L('Attack Reach', 'Portata d\'attacco')],
      ['Sweeper', '+30%', '+60%', '+120%', L('Sweep Damage', 'Danno della spazzata')] ] },
    { slot: L('Chestplate', 'Corazza'), icon: '🛡️', rows: [
      ['Titan\'s Heart', '+2', '+3', '+6', L('Max Health', 'Vita massima')],
      ['Aegis', '+2', '+4', '+8', L('Armor', 'Armatura')],
      ['Unshakable', '+5%', '+10%', '+20%', L('Knockback Resistance', 'Resistenza al contraccolpo')],
      ['Juggernaut', '+2', '+4', '+8', L('Armor Toughness', 'Robustezza armatura')],
      ['Featherweight', '+5%', '+10%', '+20%', L('Move Speed', 'Velocità')] ] },
    { slot: L('Pickaxe', 'Piccone'), icon: '⛏️', rows: [
      ['Deep Vein', '+10', '+25', '+60', L('Mining Speed', 'Velocità di scavo')],
      ['Overclock', '+100%', '+200%', '+500%', L('Break Speed', 'Velocità di rottura')],
      ['Long Arm', '+0.5', '+1', '+2', L('Block Reach', 'Portata blocchi')],
      ['Prospector', '+1', '+2', '+4', L('Luck', 'Fortuna')] ] },
  ],
};

// ── PvP ─────────────────────────────────────────────────────────────────────
export const TEAM_COMMANDS = [
  ['/team create <name>', L('Start a team — you\'re the leader.', 'Crea un team — sei il leader.')],
  ['/team invite <player>', L('Leader only. Invite expires after 5 minutes.', 'Solo leader. L\'invito scade dopo 5 minuti.')],
  ['/team accept · /team deny', L('Answer an invite.', 'Rispondi a un invito.')],
  ['/team leave', L('Leave (leadership passes to the longest-serving member).', 'Esci (la guida passa al membro più anziano).')],
  ['/team kick <player> · /team disband', L('Leader only.', 'Solo leader.')],
  ['/team list · /team info [player]', L('See a roster.', 'Vedi i membri.')],
  ['/tc <message>', L('Private team chat, wherever they are.', 'Chat privata del team, ovunque siano.')],
];

export const TEAM_PERKS = [
  ['🚫', L('No friendly fire from abilities', 'Niente fuoco amico dalle abilità'), L('Gem and item abilities can\'t hurt teammates. Plain sword swings still land — no cheap shots.', 'Le abilità di gemme e oggetti non feriscono i compagni. I colpi normali di spada però colpiscono — niente scorciatoie.')],
  ['📦', L('Shared Team Chest', 'Team Chest condivisa'), L('A live, always-in-sync inventory only your team can open. Needs 2+ members.', 'Un inventario sempre sincronizzato che solo il tuo team può aprire. Servono 2+ membri.')],
  ['👁️', L('Teammate glow', 'Bagliore dei compagni'), L('Craft a Sight Vial, sneak + right-click to toggle: your team glows through walls, even invisible. Only your team sees it.', 'Crea una Sight Vial, shift + tasto destro per attivarla: il team brilla attraverso i muri, anche se invisibile. Lo vede solo il tuo team.')],
  ['❤️', L('Low-health alerts', 'Avvisi vita bassa'), L('Everyone is pinged when a teammate drops below 30% health.', 'Tutti ricevono un avviso quando un compagno scende sotto il 30% di vita.')],
];

export const BOUNTY_RULES = L([
  '/bounty put <player> opens a chest screen: drop in up to 45 stacks and click Confirm. The target is warned.',
  'Only a player kill claims it — mobs, falls, lava and the void don\'t count; the bounty stays up.',
  'Bounties stack: the killer gets every item from every bounty at once, straight into their inventory (overflow drops at their feet).',
  'You can\'t bounty yourself. The target just has to have played before — they can be offline.',
  'Teammates can\'t kill each other to claim a bounty.',
  '/bounty list opens a menu of everyone with a price on their head (look-only preview). /bounty list <player> gives a quick summary. /bounty cancel <player> takes yours back.',
], [
  '/bounty put <giocatore> apre una cassa: metti fino a 45 stack e clicca Conferma. Il bersaglio viene avvisato.',
  'Solo l\'uccisione da parte di un giocatore la riscatta — mob, cadute, lava e vuoto non contano; la taglia resta.',
  'Le taglie si sommano: il killer riceve ogni oggetto di ogni taglia in un colpo, direttamente nell\'inventario (l\'eccesso cade ai suoi piedi).',
  'Non puoi mettere una taglia su te stesso. Il bersaglio deve solo aver già giocato — può essere offline.',
  'I compagni di team non possono uccidersi a vicenda per riscuotere una taglia.',
  '/bounty list apre un menu con tutti quelli che hanno una taglia (anteprima in sola lettura). /bounty list <giocatore> dà un riepilogo. /bounty cancel <giocatore> ritira la tua.',
]);

// ── Items ───────────────────────────────────────────────────────────────────
export const ITEM_GROUPS = [
  { name: L('Starsteel & Riftborn', 'Starsteel e Riftborn'), items: [
    ['🔹', 'Starsteel', L('Starsteel Ore — deepslate flecked with blue and gold, deep down — gives Shards; shards and gold make Ingots. A diamond piece plus ingots in a crafting table makes Starsteel armour or a sword, axe or pickaxe: tougher than diamond, each with a small passive, enchantments kept. Full set — Starguard: when a hit leaves you low, starlight shields you.', 'Il minerale di Starsteel — ardesia profonda screziata di blu e oro, molto in basso — dà Frammenti; frammenti e oro fanno Lingotti. Un pezzo di diamante più lingotti nel banco da lavoro fa un\'armatura Starsteel o una spada, ascia o piccone: più resistenti del diamante, ognuno con una piccola passiva, incantesimi conservati. Set completo — Guardia stellare: quando un colpo ti lascia a poca vita, la luce delle stelle ti protegge.')],
    ['🟣', 'Riftborn', L('Only one of each piece and tool exists. A Starsteel piece plus Rift Cores (from red rifts and bosses): far stronger, fireproof, better passives. If one is destroyed, or nobody sees it for 14 days, it can be forged again. Full set — Riftstep: when a hit leaves you low, the rift pulls you out of the fight.', 'Esiste un solo esemplare di ogni pezzo e strumento. Un pezzo Starsteel più Nuclei della Rift (dalle rift rosse e dai boss): molto più forti, ignifughi, passive migliori. Se uno viene distrutto, o nessuno lo vede per 14 giorni, si può forgiare di nuovo. Set completo — Passo della Rift: quando un colpo ti lascia a poca vita, la rift ti tira fuori dallo scontro.')],
    ['💗', 'Gem Shard & Gem Cluster', L('Gem Ore — deepslate with pink crystals, very deep — gives Gem Shards; four make a Gem Cluster. They\'re the frames of the gem vault keys.', 'Il minerale di gemma — ardesia con cristalli rosa, molto in profondità — dà Frammenti di gemma; quattro fanno un Grappolo di gemme. Sono le cornici delle chiavi dei caveau delle gemme.')],
  ]},
  { name: L('Relics', 'Reliquie'), items: [
    ['🥾', 'Blast Boots', L('Explosions barely hurt and throw you up instead — and that landing doesn\'t hurt. Every other fall hurts more.', 'Le esplosioni ti fanno pochissimo e ti lanciano in alto — e quell\'atterraggio non fa male. Ogni altra caduta fa più male.')],
    ['🥚', 'Dragon Egg', L('[ENTRY REDACTED]', '[VOCE OSCURATA]'), true],
    ['🎩', 'Vanishing Cap', L('Put it on and you\'re invisible for 2 minutes — your armour and what you hold vanish too, and only the cap can be seen. Then it slips off into your pack and rests.', 'Indossalo e sei invisibile per 2 minuti — spariscono anche armatura e ciò che tieni in mano, e si vede solo il cappello. Poi scivola nel tuo inventario e si riposa.')],
    ['🕰️', 'The Stopped Clock', L('A boss reward — whoever lands the killing blow takes it. Right-click: time stops for everyone else within 8 blocks, players and bots alike. For 4 seconds they can\'t move, swing, shoot, eat or use anything (they can still look around, and still be hit). You aren\'t frozen. Reusable, 2-minute cooldown. A boss can never be stopped by it.', 'Ricompensa di un boss — la prende chi sferra il colpo mortale. Tasto destro: il tempo si ferma per tutti gli altri nel raggio di 8 blocchi, giocatori e bot. Per 4 secondi non possono muoversi, colpire, sparare, mangiare né usare nulla (possono ancora guardarsi intorno e subire colpi). Tu non sei bloccato. Riutilizzabile, cooldown di 2 minuti. Un boss non può mai essere fermato.')],
  ]},
  { name: L('Potions', 'Pozioni'), items: [
    ['⚔️', 'Combat Potion', L('Fire Resistance, Speed and Strength II in one. Brew a Battle Catalyst (blaze rods, magma cream, sugar and a diamond block) into a Potion of Strength II. Glowstone: Speed II.', 'Resistenza al fuoco, Velocità e Forza II in una. Distilla un Catalizzatore da battaglia (verghe di blaze, crema di magma, zucchero e un blocco di diamante) in una Pozione di Forza II. Polvere di luminite: Velocità II.')],
    ['⛏️', 'Potion of Haste', L('An amethyst shard on an Awkward Potion. Corrupted: Mining Fatigue.', 'Un frammento di ametista su una Pozione Strana. Corrotta: Affaticamento.')],
    ['🛡️', 'Potion of Armor Resistance', L('An armadillo scute on an Awkward Potion — your armour wears at half.', 'Uno scudo di armadillo su una Pozione Strana — la tua armatura si consuma la metà.')],
    ['💥', 'Potion of Fragility', L('Only from Armor Resistance and a Brittle Eye (4 echo shards round a fermented spider eye). Throw it: armour and shields wear far faster, Unbreaking or not, and every hit does more.', 'Solo da Resistenza dell\'armatura e un Occhio fragile (4 frammenti di eco intorno a un occhio di ragno fermentato). Lanciala: armature e scudi si consumano molto più in fretta, Indistruttibilità o no, e ogni colpo fa di più.')],
    ['🕊️', 'Elixir of Flight', L('A golden apple on Slow Falling. You fly until it runs out — even starting in mid-air. Not in a fight. Glowstone: faster. Corrupted: Levitation.', 'Una mela d\'oro su Caduta lenta. Voli finché dura — anche partendo a mezz\'aria. Non durante uno scontro. Polvere di luminite: più veloce. Corrotta: Levitazione.')],
    ['🕶️', 'Potion of Concealment', L('An ink sac on an Awkward Potion. You vanish from the Locator Bar (Tracking Hour included), a Tracker\'s compass and the Echo Gem\'s senses — 2:00, or 5:00 with Redstone. Milk or dying ends it. Drink, splash or lingering.', 'Una sacca d\'inchiostro su una Pozione Strana. Sparisci dalla Locator Bar (anche durante la Tracking Hour), dalla bussola di un Tracker e dai sensi della Gemma Echo — 2:00, o 5:00 con la Redstone. Il latte o la morte la fanno finire. Da bere, splash o persistente.')],
  ]},
  { name: L('Consumables', 'Consumabili'), items: [
    ['🪨', 'Powder of Petrification', L('Smelt a pufferfish. Right-click: everyone within 3 blocks is rooted, blinded and can\'t jump for 2 seconds.', 'Cuoci un pesce palla. Tasto destro: chi è entro 3 blocchi viene bloccato, accecato e non può saltare per 2 secondi.')],
    ['🪶', 'Phoenix Feather', L('Found in rift vaults. Revives a fallen teammate or restores a spent life. Does nothing outside a rift.', 'Si trova nei caveau delle rift. Rianima un compagno caduto o restituisce una vita. Fuori dalle rift non fa niente.')],
  ]},
  { name: L('Tools', 'Strumenti'), items: [
    ['🛠️', 'Wifi Crafting Table / Ender Chest', L('Crafted (they\'re in your recipe book). Right-click to open anywhere; never placed.', 'Si craftano (sono nel ricettario). Tasto destro per aprirli ovunque; non si piazzano.')],
    ['🌀', 'Wifi Portal', L('Crafted: flint and steel ringed by obsidian. In the overworld it takes you to the matching spot in the Nether, carving out a room; from the Nether, back where you opened it — once.', 'Si crafta: acciarino circondato da ossidiana. Nell\'overworld ti porta nel punto corrispondente del Nether, scavando una stanza; dal Nether, di nuovo dove l\'hai aperto — una volta sola.')],
    ['🗝️', 'Rift Key', L('2 Echo Shards, an Ender Eye and an Amethyst Shard, shapeless. Lets you join a rift someone else has already started, to help them.', '2 Frammenti di eco, un Occhio di ender e un Frammento di ametista, senza forma. Ti fa entrare in una rift già avviata da altri, per aiutarli.')],
    ['🧭', 'Tracker', L('Staff-given compass. Pick an online player: they\'re warned, and a minute later it locks onto them for 5 minutes. Then it\'s consumed.', 'Bussola data dallo staff. Scegli un giocatore online: viene avvisato e un minuto dopo la bussola lo segue per 5 minuti. Poi si consuma.')],
    ['👁️', 'Sight Vial', L('Craftable. Toggles teammate glow for your whole team.', 'Craftabile. Attiva il bagliore dei compagni per tutto il team.')],
    ['🎒', 'Super Bundle', L('Crafted. A bundle with 9 real slots — and what\'s inside travels on the item itself.', 'Si crafta. Un bundle con 9 slot veri — e quello che c\'è dentro viaggia sull\'oggetto stesso.')],
    ['🪨', 'Bedrock Drill', L('Craft a Drill Core, set it on a bedrock block and box it in with four iron blocks, then right-click: 30 seconds later that bedrock is gone — and most of the machine with it.', 'Crafta un Drill Core, mettilo su un blocco di bedrock e chiudilo con quattro blocchi di ferro, poi tasto destro: 30 secondi dopo quella bedrock non c\'è più — e con lei quasi tutta la macchina.')],
  ]},
  { name: L('Traps', 'Trappole'), items: [
    ['🪤', 'Bear Trap', L('Crafted. Planted at your feet, armed for 5 minutes: whoever steps on it is rooted, hurt and glows — and you\'re told where. A faint wisp of sparks gives it away to anyone who looks. Never goes off on you.', 'Si crafta. Piazzata ai tuoi piedi, armata per 5 minuti: chi ci passa viene bloccato, ferito e brilla — e tu sai dove. Un debole filo di scintille la rivela a chi guarda bene. Non scatta mai su di te.')],
    ['💣', 'Landmine', L('Crafted. Planted at your feet, armed until something sets it off: a click, then a TNT-strength blast that breaks blocks. A faint wisp of smoke gives it away. Never goes off on you.', 'Si crafta. Piazzata ai tuoi piedi, armata finché qualcosa non la fa scattare: un clic, poi un\'esplosione da TNT che rompe i blocchi. Un debole filo di fumo la rivela. Non scatta mai su di te.')],
    ['🥄', 'Fake Trapper', L('Looks like an iron shovel. Mark two corners on soft ground (up to 6 blocks); 5 s later it arms. Anyone who steps in — even you — drops through. A redstone-powered area won\'t spring.', 'Sembra una pala di ferro. Segna due angoli su terreno morbido (fino a 6 blocchi); dopo 5 s si arma. Chiunque ci passi — anche tu — ci cade dentro. Se l\'area riceve redstone non scatta.')],
  ]},
];

// ── Commands players actually use ───────────────────────────────────────────
export const COMMANDS = [
  ['/guide', L('The in-game guide book — it fills in as the season opens up.', 'La guida in gioco — si riempie man mano che la stagione si apre.')],
  ['/team …  ·  /tc <msg>', L('Teams and team chat.', 'Team e chat di team.')],
  ['/bounty put · cancel · list  ·  /bounties', L('Bounties.', 'Taglie.')],
  ['/rule8', L('How long until rule 8 takes your one-of-a-kind items.', 'Quanto manca prima che la regola 8 ti tolga i tuoi oggetti unici.')],
  ['/rift leave · status', L('Leave a rift / see its state.', 'Esci da una rift / vedine lo stato.')],
  ['/rift journal [player]', L('Your rift record book.', 'Il tuo diario delle rift.')],
  ['/rift top [cleared|bosses|rooms|deaths]', L('Server rankings.', 'Classifiche del server.')],
  ['/forge list', L('Every forge buff and frost technique, with its numbers.', 'Ogni potenziamento della forgia e tecnica del gelo, con i numeri.')],
];

export const CONTROLS = [
  [L('F (swap hands)', 'F (cambia mano)'), L('Your gem\'s power', 'Il potere della tua gemma')],
  [L('Sneak + F', 'Shift + F'), L('Your gem\'s second power', 'Il secondo potere della gemma')],
  [L('Right-click / Sneak + right-click', 'Tasto destro / Shift + tasto destro'), L('A relic\'s powers (The Stopped Clock…)', 'I poteri delle reliquie (The Stopped Clock…)')],
];

// ── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQ = [
  [L('When does everything open?', 'Quando si apre tutto?'),
   L('A piece at a time over the first three weeks — see "The season" on the Rules page. The in-game guide (/guide) gets a new page each time something opens.', 'Un pezzo alla volta nelle prime tre settimane — vedi "La stagione" nella pagina Regole. La guida in gioco (/guide) riceve una pagina nuova ogni volta che si apre qualcosa.')],
  [L('What happened to races and the race weapons?', 'Che fine hanno fatto le razze e le armi di razza?'),
   L('They\'re gone — no rolls, no race items. The thirteen gems took their place: one of each, won in the Rift\'s gem vaults.', 'Non ci sono più — niente tiri, niente oggetti di razza. Al loro posto ci sono le tredici gemme: una per tipo, vinte nei caveau delle gemme della Rift.')],
  [L('Do I lose my items if I die in the Rift?', 'Perdo gli oggetti se muoio nella Rift?'),
   L('No — a killing blow knocks you down, a teammate can pick you up, and bleeding out only costs a life. Losing the whole rift (everyone out of lives, or time runs out) costs everything you carry. Your XP stays.', 'No — un colpo letale ti mette a terra, un compagno può rialzarti, e dissanguarti costa solo una vita. Perdere la rift intera (tutti senza vite o tempo scaduto) ti costa tutto ciò che porti. L\'XP resta.')],
  [L('I stopped playing for a week — where\'s my gem?', 'Ho smesso di giocare per una settimana — dov\'è la mia gemma?'),
   L('Rule 8: hold a one-of-a-kind item and don\'t really play for 7 days (at least 30 minutes, not AFK) and it\'s lost — free for someone else to win. /rule8 shows how long you have.', 'Regola 8: se tieni un oggetto unico e per 7 giorni non giochi davvero (almeno 30 minuti, non AFK) lo perdi — libero per qualcun altro. /rule8 mostra quanto ti resta.')],
  [L('Can I forge the same piece twice?', 'Posso forgiare due volte lo stesso pezzo?'),
   L('No. Every piece gets exactly one forge, ever — except a Flawless chestplate, sword or pickaxe, which can take a second pass on the Cold Forge.', 'No. Ogni pezzo si forgia una volta sola — tranne corazza, spada o piccone Impeccabili, che possono avere un secondo passaggio sulla Forgia Fredda.')],
  [L('Why is there so little netherite?', 'Perché c\'è così poca netherite?'),
   L('On purpose. Progress is meant to be a steady trickle. Rifts — red rifts above all — are where it comes from, and Starsteel and Riftborn are the way up.', 'Di proposito. Il progresso deve essere lento e costante. Arriva dalle rift — soprattutto quelle rosse — e Starsteel e Riftborn sono la via per salire.')],
  [L('Can I use a minimap?', 'Posso usare una minimappa?'),
   L('No — minimaps and maps of any kind are banned. Waypoints are allowed.', 'No — minimappe e mappe di qualsiasi tipo sono vietate. I waypoint sono permessi.')],
  [L('What happens if I log out mid-fight?', 'Cosa succede se esco durante un combattimento?'),
   L('A Zombie spawns in your place. Killing it counts as killing you — your loot drops.', 'Al tuo posto compare uno Zombie. Ucciderlo vale come uccidere te — il tuo bottino cade.')],
  [L('Where are the rules?', 'Dove sono le regole?'),
   L('On the Rules page, and in the Discord.', 'Nella pagina Regole, e sul Discord.')],
];

// ── Special mechanics ───────────────────────────────────────────────────────
export const DIMENSIONS = [
  { key: 'nether', icon: '🔥', name: L('The Nether', 'Il Nether'), opensAfterHours: 2,
    text: L('Opens two hours into the season, when the border grows to 2,500 blocks each way.', 'Si apre due ore dopo l\'inizio della stagione, quando il confine cresce a 2.500 blocchi per lato.') },
  { key: 'end', icon: '🌌', name: L('The End', 'L\'End'), closed: true,
    text: L('Closed for now.', 'Chiuso, per ora.') },
];

export const MECHANICS = [
  { icon: '🟣', title: L('Pearls never vanish', 'Le perle non spariscono'),
    text: L('A thrown ender pearl stays until it pulls you: logging out, changing world or a restart don\'t eat it, and a stasis pearl survives your death. A pearl thrown mid-fight still disappears when you die.',
            'Una perla di ender lanciata resta finché non ti tira: uscire, cambiare mondo o un riavvio non la cancellano, e una perla in stasi sopravvive alla tua morte. Una perla lanciata in combattimento sparisce comunque quando muori.') },
  { icon: '💎', title: L('No crystal or anchor PvP', 'Niente crystal o anchor PvP'),
    text: L('End Crystals and Respawn Anchors can\'t be used to damage players.',
            'I Cristalli dell\'End e le Ancore di rinascita non possono danneggiare i giocatori.') },
  { icon: '⛓️', title: L('Netherite armor is disabled', 'Armatura di netherite disattivata'),
    text: L('Armor can\'t be upgraded to netherite at the smithing table — there are other ways to get it. Netherite tools and weapons are crafted as normal.',
            'L\'armatura non si può potenziare in netherite al tavolo da forgiatura — ci sono altri modi per ottenerla. Strumenti e armi di netherite si craftano normalmente.') },
  { icon: '🫥', title: L('Invisible kills are anonymous', 'Uccisioni invisibili anonime'),
    text: L('Kill a player while invisible and your name is hidden from the death message.',
            'Se uccidi un giocatore mentre sei invisibile, il tuo nome non compare nel messaggio di morte.') },
  { icon: '🧑‍🌾', title: L('Endless villager trades', 'Scambi infiniti coi villager'),
    text: L('Villager trades restock infinitely — they never lock.', 'Gli scambi dei villager si rigenerano all\'infinito — non si bloccano mai.') },
];

export const COMBAT_RULES = L([
  'Ender Pearl cooldown: <b>35 seconds</b>.',
  'Golden Apple cooldown: <b>1 second</b>.',
  '<b>Combat logging</b> spawns a Zombie in your place. Killing it counts exactly like killing you: it drops your loot and is a valid kill for your attacker.',
], [
  'Cooldown delle Perle di ender: <b>35 secondi</b>.',
  'Cooldown delle Mele d\'oro: <b>1 secondo</b>.',
  '<b>Uscire in combattimento</b> fa comparire uno Zombie al tuo posto. Ucciderlo vale esattamente come uccidere te: lascia il tuo bottino e conta come uccisione valida per chi ti attaccava.',
]);

// ── Rules ───────────────────────────────────────────────────────────────────
export const RULES_DISCORD = L([
  'Mutual respect: no serious insults, racism, NSFW or discriminatory content.',
  'No spamming, flooding, or advertising other servers/Discords without permission.',
  'Use channels for their intended purpose (help in the help channel, etc.).',
  'No doxxing or sharing others\' personal info.',
  'Staff decisions are final. If you disagree, open a ticket instead of arguing publicly.',
  'Keep nicknames and avatars appropriate (no NSFW or offensive images).',
  'PvP being intense in-game doesn\'t excuse toxic behavior in Discord chat.',
], [
  'Rispetto reciproco: niente insulti gravi, razzismo, contenuti NSFW o discriminatori.',
  'Niente spam, flood o pubblicità di altri server/Discord senza permesso.',
  'Usa i canali per il loro scopo (aiuto nel canale aiuto, ecc.).',
  'Niente doxxing o condivisione di dati personali altrui.',
  'Le decisioni dello staff sono definitive. Se non sei d\'accordo, apri un ticket invece di discutere in pubblico.',
  'Nickname e avatar appropriati (niente immagini NSFW o offensive).',
  'Un PvP intenso in gioco non giustifica comportamenti tossici nella chat di Discord.',
]);

export const RULES_GAME = L([
  '<b>PvP is allowed everywhere</b> except explicitly marked safe zones (if any). No complaints about being killed or looted.',
  '<b>No cheat clients</b>, X-ray, hacked clients or unfair-advantage mods. No minimaps or maps of any kind — waypoints are allowed. <b>Permanent ban.</b>',
  'No lag machines or intentional TPS-crashing farms.',
  'No item duping or bug exploiting — report bugs to staff instead.',
  'Respect other players\' builds: raiding and stealing are allowed, but pointless destructive griefing (random TNT spam, wiping whole builds for no reason) is not.',
  'No alt accounts to get around the whitelist, bans or rules.',
  'Staff can step in for bug abuse or behavior that ruins the experience for everyone.',
  'If you hold a one-of-a-kind item (a gem, a Riftborn piece or a unique relic) and don\'t really play for 7 days — at least 30 minutes, not AFK — you lose it. (Logging in and leaving right after does not count.)',
  'Contracts are binding on the signer and the book owner: breaking one has consequences from the admins. To count, a contract must contain the word "contract" somewhere in its text and be signed by the second party.',
  '<b>Using an Elytra to run away is prohibited</b> (temp-ban and death).',
  'Max team size is 5. Every team must be created with the in-game team system; teams not registered in-game, or with extra members, will be punished.',
  'Killing a teammate for their bounty is illegal.',
], [
  '<b>Il PvP è permesso ovunque</b> tranne nelle zone sicure segnalate (se ce ne sono). Niente lamentele se vieni ucciso o derubato.',
  '<b>Niente client di cheat</b>, X-ray, client hackerati o mod che danno vantaggi. Niente minimappe o mappe di alcun tipo — i waypoint sono permessi. <b>Ban permanente.</b>',
  'Niente lag machine o farm che fanno crollare i TPS di proposito.',
  'Niente duplicazione di oggetti o sfruttamento di bug — segnalali allo staff.',
  'Rispetta le costruzioni altrui: raid e furti sono permessi, ma il grief distruttivo senza senso (TNT a caso, radere al suolo intere costruzioni senza motivo) no.',
  'Niente account secondari per aggirare whitelist, ban o regole.',
  'Lo staff può intervenire per abusi di bug o comportamenti che rovinano l\'esperienza a tutti.',
  'Se hai un oggetto unico (una gemma, un pezzo Riftborn o una reliquia unica) e per 7 giorni non giochi davvero — almeno 30 minuti, non AFK — lo perdi. (Entrare e uscire subito dopo non conta.)',
  'I contratti vincolano chi firma e il proprietario del libro: romperne uno ha conseguenze dagli admin. Per essere valido, un contratto deve contenere la parola "contratto" nel testo ed essere firmato dalla seconda parte.',
  '<b>È vietato usare l\'Elytra per scappare</b> (ban temporaneo e morte).',
  'Massimo 5 persone per team. Ogni team va creato con il sistema di team in gioco; team non registrati in gioco, o con membri in più, verranno puniti.',
  'Uccidere un compagno di team per la sua taglia è illegale.',
]);
