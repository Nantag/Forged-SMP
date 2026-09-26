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
  ip:       '',                 // ← server address, e.g. 'play.forgedsmp.net' (empty = "ask on Discord")
  version:  'Java Edition 26.2',
  launch:   '2026-09-23T18:30:00+02:00',
  updated:  '2026-09-26',
};

// ── News (newest first) ─────────────────────────────────────────────────────
export const NEWS = [
  {
    date: '2026-09-25',
    title: L('Weapon Rifts are open', 'Aperte le Weapon Rift'),
    body: L(
      'Thirteen sealed dungeons, one per race weapon, opened with race Rift Keys. Also new: a gear score that counts your supplies, a solo bonus, rift challenges, streak fatigue, an exit block in ordinary rifts — and rift portals and meteors now show up more often.',
      'Tredici dungeon sigillati, uno per ogni arma di razza, aperti con le Rift Key di razza. Novità anche: un gear score che conta le tue scorte, bonus solo, sfide nelle rift, affaticamento da serie, un blocco d\'uscita nelle rift ordinarie — e portali e meteore ora compaiono più spesso.'),
  },
  {
    date: '2026-09-23',
    title: L('The server is live', 'Il server è online'),
    body: L(
      'Forged SMP opened on Wednesday 23 September at 18:30 (Italian time). Roll your race and good luck.',
      'Forged SMP ha aperto mercoledì 23 settembre alle 18:30. Tira la tua razza e buona fortuna.'),
  },
];

// ── Pillars (home / about) ──────────────────────────────────────────────────
export const PILLARS = [
  { icon: '🎲', page: 'races', title: L('Races', 'Razze'),
    text: L('Everyone rolls a permanent race with real stat and ability differences. Rarer races are stronger — and one is 1 in 10,000.',
            'Ognuno tira una razza permanente con statistiche e abilità diverse. Le più rare sono più forti — e una è 1 su 10.000.') },
  { icon: '🕳️', page: 'rift', title: L('The Rift', 'La Rift'),
    text: L('The main endgame: instanced cave dungeons for parties of up to 4, built fresh every time.',
            'L\'endgame principale: dungeon in grotta istanziati per gruppi fino a 4, generati da zero ogni volta.') },
  { icon: '🔨', page: 'forge', title: L('Meteors & the Forge', 'Meteore e Forgia'),
    text: L('Meteors fall from the sky. Hammer your gear on one in a timing minigame for a permanent buff — or ruin it.',
            'Le meteore cadono dal cielo. Martella il tuo equipaggiamento su una in un minigioco a tempo per un potenziamento permanente — o rovinalo.') },
  { icon: '⛓️', page: 'forge', title: L('Scarce netherite', 'Netherite scarsa'),
    text: L('There is very little netherite on purpose. Progress is a steady trickle, not a flood.',
            'La netherite è pochissima, di proposito. Si progredisce goccia a goccia, non a valanga.') },
  { icon: '⚔️', page: 'pvp', title: L('PvP with rules', 'PvP con regole'),
    text: L('Teams, bounties on real items, a daily Tracking Hour and a full tournament system.',
            'Team, taglie con oggetti veri, una Tracking Hour giornaliera e un sistema di tornei completo.') },
  { icon: '🤖', page: 'bosses', title: L('Bosses with real AI', 'Boss con vera IA'),
    text: L('Fake players with real combat AI power bosses, dungeon guardians and tournament bots.',
            'Finti giocatori con vera IA da combattimento animano boss, guardiani dei dungeon e bot dei tornei.') },
];

// ── Rarities ────────────────────────────────────────────────────────────────
export const RARITIES = [
  { key: 'common',      name: L('Common', 'Comune'),          chance: 40,    color: '#b9b9c2' },
  { key: 'uncommon',    name: L('Uncommon', 'Non comune'),    chance: 36,    color: '#5fe36a' },
  { key: 'rare',        name: L('Rare', 'Raro'),              chance: 14.4,  color: '#4aa6ff' },
  { key: 'epic',        name: L('Epic', 'Epico'),             chance: 7.2,   color: '#b56cff' },
  { key: 'legendary',   name: L('Legendary', 'Leggendario'),  chance: 2.16,  color: '#ff9a2e' },
  { key: 'divine',      name: L('Divine', 'Divino'),          chance: 0.23,  color: '#ffd84a' },
  { key: 'singularity', name: L('Singularity', 'Singolarità'), chance: 0.01, color: '#ff4fd8' },
];

export const ANOMALY_GLITCH = 'T̸h̷e̶ ̴A̵n̷o̸m̶a̴l̷y̶';

// ── Races ───────────────────────────────────────────────────────────────────
export const RACES = [
  { key: 'human', icon: '🙂', rarity: 'common', name: L('Human', 'Human'),
    effects: L(['The baseline. No perks, no penalties.'],
               ['La base. Nessun vantaggio, nessuna penalità.']),
    perk: L('More XP from everything you kill.', 'Più XP da tutto ciò che uccidi.') },

  { key: 'swift', icon: '💨', rarity: 'uncommon', name: L('Swift-Blooded', 'Swift-Blooded'),
    effects: L(['Quick on your feet and quick with a blade.', 'Always swims like you have Dolphin\'s Grace.', 'Costs half a heart.'],
               ['Veloce a piedi e con la lama.', 'Nuota sempre come con la Grazia del delfino.', 'Costa mezzo cuore.']),
    perk: L('Speed I for the whole run.', 'Velocità I per tutta la run.') },

  { key: 'ember', icon: '🔥', rarity: 'uncommon', name: L('Emberborn', 'Emberborn'),
    effects: L(['Fire and lava can\'t hurt you.', 'Furnaces near you cook faster.', 'Rain makes you noticeably squishier.'],
               ['Fuoco e lava non ti feriscono.', 'Le fornaci vicino a te cuociono più in fretta.', 'La pioggia ti rende molto più fragile.']),
    perk: L('Sets what you hit on fire.', 'Dà fuoco a ciò che colpisci.') },

  { key: 'stone', icon: '🪨', rarity: 'rare', name: L('Stonekin', 'Stonekin'),
    effects: L(['A heart tougher, a little slower.', 'Ores sometimes drop extra.', 'Level up 30% faster.', 'Sinks like a boulder in water.'],
               ['Un cuore in più, un po\' più lento.', 'I minerali a volte droppano di più.', 'Sali di livello il 30% più in fretta.', 'In acqua affonda come un macigno.']),
    perk: L('You take less damage.', 'Subisci meno danni.') },

  { key: 'verdant', icon: '🌿', rarity: 'rare', name: L('Verdant-Touched', 'Verdant-Touched'),
    effects: L(['Regenerates passively, forever.', 'Food fills you up more.', 'Crops grow faster just for you being nearby.'],
               ['Rigenera passivamente, per sempre.', 'Il cibo sazia di più.', 'I raccolti crescono più in fretta se sei vicino.']),
    perk: L('Every cleared room heals you, and your party a bit.', 'Ogni stanza completata cura te e un po\' il tuo gruppo.') },

  { key: 'frost', icon: '❄️', rarity: 'rare', name: L('Frostveil', 'Frostveil'),
    effects: L(['Chilling Aura: hostile mobs near you slow down.', 'Immune to cold, walks on powder snow.', 'Fire hurts a bit more; floats upward in water.'],
               ['Aura Gelida: i mob ostili vicini rallentano.', 'Immune al freddo, cammina sulla neve polverosa.', 'Il fuoco fa un po\' più male; in acqua galleggia verso l\'alto.']),
    perk: L('Slows what you hit.', 'Rallenta ciò che colpisci.') },

  { key: 'void', icon: '☠️', rarity: 'epic', name: L('Voidkin', 'Voidkin'),
    effects: L(['Open your ender chest anywhere (sneak + right-click).', 'Ender pearls with no cooldown; 1 in 4 comes back.', 'Endermen ignore you; no chorus fruit cooldown.', 'Falling into the void sends you back where you fell from (long cooldown).', 'Costs half a heart.'],
               ['Apri l\'ender chest ovunque (shift + tasto destro).', 'Perle di ender senza cooldown; 1 su 4 ritorna.', 'Gli Enderman ti ignorano; niente cooldown sui frutti di chorus.', 'Cadere nel vuoto ti riporta da dove sei caduto (cooldown lungo).', 'Costa mezzo cuore.']),
    perk: L('Once per run, a killing blow leaves you on a sliver of health.', 'Una volta per run, un colpo letale ti lascia con un filo di vita.') },

  { key: 'storm', icon: '⚡', rarity: 'epic', name: L('Stormcaller', 'Stormcaller'),
    effects: L(['Lightning-proof.', '+50% damage while it\'s storming.', 'Sneak + right-click with a trident calls three real bolts on your target.'],
               ['Immune ai fulmini.', '+50% danni durante i temporali.', 'Shift + tasto destro con un tridente evoca tre fulmini veri sul bersaglio.']),
    perk: L('Your hits sometimes call down a bolt.', 'I tuoi colpi a volte evocano un fulmine.') },

  { key: 'iron', icon: '⚙️', rarity: 'legendary', name: L('Ironclad', 'Ironclad'),
    effects: L(['Gear wears out slower.', 'No anvil job ever costs more than 30 levels — nothing is "Too Expensive!".', 'Moves a little slower.'],
               ['L\'equipaggiamento si consuma più lentamente.', 'Nessun lavoro all\'incudine costa più di 30 livelli — mai "Troppo costoso!".', 'Si muove un po\' più lentamente.']),
    perk: L('You take less damage.', 'Subisci meno danni.') },

  { key: 'blood', icon: '🩸', rarity: 'legendary', name: L('Bloodforged', 'Bloodforged'),
    effects: L(['Every melee hit heals you a little.', 'Immune to poison, weakness and wither.', 'A Totem brings you back at full health.', 'Food regenerates you slower.'],
               ['Ogni colpo in mischia ti cura un po\'.', 'Immune a veleno, debolezza e wither.', 'Un Totem ti riporta a vita piena.', 'Il cibo ti rigenera più lentamente.']),
    perk: L('Kills heal you.', 'Le uccisioni ti curano.') },

  { key: 'aether', icon: '✨', rarity: 'divine', name: L('Aetherborn', 'Aetherborn'),
    effects: L(['Glides like an elytra without wearing one.', 'With a real elytra: a long powered boost on every takeoff, free of charge.', 'No fall damage and an extra heart.', 'Projectiles hurt more.'],
               ['Plana come con un\'elytra anche senza indossarla.', 'Con un\'elytra vera: una lunga spinta a ogni decollo, gratis.', 'Niente danni da caduta e un cuore in più.', 'I proiettili fanno più male.']),
    perk: L('No fall damage.', 'Niente danni da caduta.') },

  { key: 'abyss', icon: '🌑', rarity: 'divine', name: L('Abyssborn', 'Abyssborn'),
    effects: L(['Permanent night vision.', 'Turns invisible on its own when the light gets low.', 'Hostile mobs lose you in the dark — and you see them glow faintly.'],
               ['Visione notturna permanente.', 'Diventa invisibile da solo quando la luce cala.', 'I mob ostili ti perdono al buio — e tu li vedi brillare debolmente.']),
    perk: L('You see in the dark.', 'Vedi al buio.') },

  { key: 'anomaly', icon: '🌀', rarity: 'singularity', name: L('The Anomaly', 'The Anomaly'), glitch: true,
    effects: L(['[ RECORD ▓▓▓▓▓▓▓ — 1 in 10,000 — REMAINDER OF ENTRY CORRUPTED ]', 'Nobody who has rolled it has explained it the same way twice.'],
               ['[ REGISTRO ▓▓▓▓▓▓▓ — 1 su 10.000 — RESTO DELLA VOCE CORROTTO ]', 'Nessuno che l\'abbia tirata l\'ha mai spiegata due volte allo stesso modo.']),
    perk: L('▓▓▓ [REDACTED]', '▓▓▓ [OSCURATO]') },
];

// ── Race weapons ────────────────────────────────────────────────────────────
// dmg = base damage, ap = abilities ignore armor (🛡️❌)
export const WEAPONS = [
  { race: 'human', icon: '🗡️', name: 'Wanderer\'s Blade', dmg: 7.5, ap: false,
    passive: L('A little extra damage while you have no potion effects running — an honest weapon with no tricks.', 'Un po\' di danno extra quando non hai effetti di pozione attivi — un\'arma onesta, senza trucchi.'),
    a1: L('Hits harder the lower your target\'s health is.', 'Colpisce più forte quanto meno vita ha il bersaglio.'),
    a2: L('Guaranteed critical hits for a few seconds while you\'re low on health.', 'Colpi critici garantiti per qualche secondo quando sei a poca vita.') },
  { race: 'swift', icon: '🐾', name: 'Storm Claws', dmg: 5.5, ap: true,
    passive: L('Extra damage while sprinting.', 'Danno extra mentre corri.'),
    a1: L('A dash-strike.', 'Uno scatto con colpo.'),
    a2: L('Chains the dash into a second nearby enemy and buffs your speed and haste.', 'Concatena lo scatto su un secondo nemico vicino e ti dà velocità e rapidità.') },
  { race: 'ember', icon: '🔥', name: 'Blazing Whip', dmg: 6.5, ap: true,
    passive: L('Hits from a bit of distance hit harder.', 'I colpi da una certa distanza fanno più male.'),
    a1: L('Drags your target toward you.', 'Trascina il bersaglio verso di te.'),
    a2: L('A wide fire sweep that ignites and weakens everyone it touches.', 'Un\'ampia spazzata di fuoco che incendia e indebolisce chiunque tocchi.') },
  { race: 'stone', icon: '🪓', name: 'Mountain Axe', dmg: 11.0, ap: false,
    passive: L('A chance to stun on hit.', 'Probabilità di stordire a ogni colpo.'),
    a1: L('A ground slam that hits everyone nearby.', 'Uno schianto a terra che colpisce tutti i vicini.'),
    a2: L('Calls down boulders on everyone around you for a few seconds.', 'Fa cadere massi su tutti intorno a te per qualche secondo.') },
  { race: 'verdant', icon: '🪓', name: 'Ancient Woodcutter\'s Axe', dmg: 11.0, ap: false,
    passive: L('Chops wood faster while held.', 'Taglia il legno più in fretta mentre la impugni.'),
    a1: L('Drops debris on your target.', 'Fa cadere detriti sul bersaglio.'),
    a2: L('Branches lash out at everyone around you for a few seconds.', 'I rami frustano tutti intorno a te per qualche secondo.') },
  { race: 'frost', icon: '🐺', name: 'White Wolf Claws', dmg: 5.5, ap: true,
    passive: L('Land a few hits in a row and your target slows down.', 'Qualche colpo di fila e il bersaglio rallenta.'),
    a1: L('Lunges you onto your target.', 'Ti lancia sul bersaglio.'),
    a2: L('Five rapid strikes, each hitting harder than the last.', 'Cinque colpi rapidi, ognuno più forte del precedente.') },
  { race: 'void', icon: '🗡️', name: 'Corrosive Dagger', dmg: 6.0, ap: true,
    passive: L('Every hit stacks poison.', 'Ogni colpo accumula veleno.'),
    a1: L('Dashes you onto your target with a heavy dose of poison at once.', 'Ti scaglia sul bersaglio con una forte dose di veleno.'),
    a2: L('Spreads a growing toxic cloud around you.', 'Diffonde una nube tossica crescente intorno a te.') },
  { race: 'storm', icon: '⚡', name: 'Zeus\'s Blade', dmg: 8.0, ap: false,
    passive: L('Hits harder during a storm.', 'Colpisce più forte durante i temporali.'),
    a1: L('An electrified strike (it also stuns in a Stormcaller\'s hands).', 'Un colpo elettrificato (in mano a un Evocatempeste stordisce anche).'),
    a2: L('Calls down real lightning on your target and everyone near them.', 'Evoca fulmini veri sul bersaglio e su chi gli sta vicino.') },
  { race: 'iron', icon: '⚔️', name: 'Siege Greatsword', dmg: 8.0, ap: false,
    passive: L('Extra damage against heavily armored targets.', 'Danno extra contro bersagli molto corazzati.'),
    a1: L('Knocks your target back hard.', 'Respinge con forza il bersaglio.'),
    a2: L('Parry for a few seconds, then answer with a heavy counter-hit that catches everyone nearby.', 'Para per qualche secondo, poi risponde con un pesante contrattacco su tutti i vicini.') },
  { race: 'blood', icon: '🪓', name: 'Butcher\'s Hatchet', dmg: 11.0, ap: false,
    passive: L('Extra damage against low-health targets.', 'Danno extra contro bersagli a poca vita.'),
    a1: L('Marks your target for a few seconds of bonus damage.', 'Marchia il bersaglio per qualche secondo di danno bonus.'),
    a2: L('Instantly finishes off anything already critically low.', 'Finisce all\'istante chiunque sia già a vita critica.') },
  { race: 'aether', icon: '🪽', name: 'Angelic Dagger', dmg: 5.5, ap: true,
    passive: L('If you\'re close to death, your next landed hit heals you.', 'Se sei vicino alla morte, il prossimo colpo a segno ti cura.'),
    a1: L('A blinding dash.', 'Uno scatto accecante.'),
    a2: L('Brief invulnerability plus a few guaranteed critical hits.', 'Breve invulnerabilità più qualche colpo critico garantito.') },
  { race: 'abyss', icon: '🗡️', name: 'Abyssal Dagger', dmg: 6.0, ap: true,
    passive: L('A chance to blind on hit.', 'Probabilità di accecare a ogni colpo.'),
    a1: L('Yanks your target into the air and slams them down.', 'Solleva il bersaglio in aria e lo schianta a terra.'),
    a2: L('A zone of darkness that blinds and damages everyone inside.', 'Una zona d\'oscurità che acceca e danneggia chiunque ci sia dentro.') },
  { race: 'anomaly', icon: '🌀', name: 'Chaos Blade', glitchName: '▓h̸a̷o̶s̶ ̴B̵l̷a̸d̶e̴', dmg: null, ap: null, redacted: true },
];

// ── Bosses ──────────────────────────────────────────────────────────────────
export const RACE_BOSSES = [
  { race: 'stone',   name: 'Kraghold',  title: L('the Riverstone Colossus', 'il Colosso di Pietrafiume'), style: L('Earth and water.', 'Terra e acqua.') },
  { race: 'swift',   name: 'Kaien',     title: L('Blade of a Thousand Cuts', 'Lama dei Mille Tagli'),     style: L('Blinding blade work.', 'Lavoro di lama accecante.') },
  { race: 'verdant', name: 'Sylvara',   title: L('the Overgrowth Warden', 'la Custode del Rigoglio'),     style: L('Thorns, pinning roots and poison clouds.', 'Spine, radici che bloccano e nubi velenose.') },
  { race: 'ember',   name: 'Nyxara',    title: L('the Ember Conjurer', 'l\'Evocatrice di Braci'),          style: L('Fire magic and summons.', 'Magia del fuoco ed evocazioni.') },
  { race: 'frost',   name: 'Hrimvar',   title: L('the Winter Sovereign', 'il Sovrano dell\'Inverno'),      style: L('Freezing novas, ice lanes and a whiteout.', 'Nove gelide, corsie di ghiaccio e una tormenta bianca.') },
  { race: 'void',    name: 'Ithrax',    title: L('the Void Sovereign', 'il Sovrano del Vuoto'),            style: L('Void lances and rifts.', 'Lance del vuoto e squarci.') },
  { race: 'iron',    name: 'Molgor',    title: L('the Ashen Titan', 'il Titano di Cenere'),                style: L('An armored bruiser.', 'Un picchiatore corazzato.') },
  { race: 'storm',   name: 'Aerix',     title: L('the Tempest Sovereign', 'il Sovrano della Tempesta'),    style: L('Gravity and lightning.', 'Gravità e fulmini.') },
  { race: 'blood',   name: 'Vaelric',   title: L('the Crimson Count', 'il Conte Cremisi'),                 style: L('Heals off the damage it deals.', 'Si cura con il danno che infligge.') },
  { race: 'aether',  name: 'Wemmbu',    title: L('Hammer of the Heavens', 'Martello dei Cieli'),           style: L('A sky-borne mace.', 'Una mazza che piove dal cielo.') },
  { race: 'abyss',   name: 'Nocthar',   title: L('the Deep Watcher', 'l\'Osservatore degli Abissi'),       style: L('Blinds you, vanishes, strikes from behind.', 'Ti acceca, svanisce, colpisce alle spalle.') },
  { race: 'anomaly', name: 'X̷̢e̶r̸a̴t̵h̶', title: L('▓▓▓▓▓▓▓▓▓', '▓▓▓▓▓▓▓▓▓'), style: L('[ENTRY REDACTED]', '[VOCE OSCURATA]'), redacted: true },
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
  { key: 'ordinary', color: '#b56cff', name: L('Ordinary', 'Ordinaria'), rooms: '8', time: '40 min', lives: '3',
    notes: L('The baseline. You can walk out by the lodestone or the exit block and keep everything.', 'La base. Puoi uscire dalla calamita o dal blocco d\'uscita e tenere tutto.') },
  { key: 'red', color: '#ff3b3b', name: L('Red Rift', 'Rift Rossa'), rooms: '11', time: '75 min', lives: '2',
    notes: L('~1 in 5 random portals. The bleeding portal pulls you in within ~14 blocks. No way back until it\'s cleared or you\'re out of lives. Boss: the Crimson Sovereign. Better loot plus an extra table (netherite, ancient debris, totems, books, runes).',
             '~1 portale casuale su 5. Il portale sanguinante ti risucchia entro ~14 blocchi. Non si torna indietro finché non è completata o finite le vite. Boss: il Sovrano Cremisi. Bottino migliore più una tabella extra (netherite, detriti antichi, totem, libri, rune).') },
  { key: 'anomaly', color: '#35f2e0', name: L('Anomaly', 'Anomalia'), rooms: '3–22', time: L('20 min + 4/room', '20 min + 4/stanza'), lives: '1',
    notes: L('~1 in 14, the rarest. Its portal looks exactly like an ordinary one. Inside, everything is wrong — and every room rolls its own tier. No way out, a randomly assembled boss. The best-paying thing on the server.',
             '~1 su 14, la più rara. Il portale è identico a quello ordinario. Dentro è tutto sbagliato — e ogni stanza ha il suo livello. Nessuna uscita, un boss assemblato a caso. La cosa che paga di più sul server.') },
  { key: 'void', color: '#e8e8ff', name: L('Void Rift', 'Rift del Vuoto'), rooms: L('short', 'breve'), time: '30 min', lives: '5',
    notes: L('Staff events only. A pillar of light visible from far away, up to 10 players, the biggest room in any rift and one boss chosen for the event. Not a trap: failing costs nothing you carry.',
             'Solo eventi dello staff. Un pilastro di luce visibile da lontano, fino a 10 giocatori, la stanza più grande di ogni rift e un boss scelto per l\'evento. Non è una trappola: fallire non ti costa ciò che porti.') },
  { key: 'weapon', color: '#ffd84a', name: L('Weapon Rifts', 'Weapon Rift'), rooms: L('themed', 'a tema'), time: '45 min', lives: '3',
    notes: L('13 sealed dungeons, one per race weapon, opened with that race\'s Rift Key. See below.', '13 dungeon sigillati, uno per arma di razza, aperti con la Rift Key di quella razza. Vedi sotto.') },
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

export const RIFT_RELICS = [
  { rift: L('Ordinary · ~1 in 16 kills', 'Ordinaria · ~1 ogni 16 uccisioni'), color: '#b56cff',
    items: [['Riftfang', L('Chills what it hits.', 'Congela ciò che colpisce.')], ['Sovereign\'s Mantle', L('+2 hearts.', '+2 cuori.')]] },
  { rift: L('Red · ~1 in 7', 'Rossa · ~1 su 7'), color: '#ff3b3b',
    items: [['Crimson Cleaver', L('Sets things alight.', 'Dà fuoco alle cose.')], ['Bloodmoon Greaves', L('Faster and tougher.', 'Più veloce e più resistente.')]] },
  { rift: L('Anomaly · ~1 in 4–5', 'Anomalia · ~1 su 4–5'), color: '#35f2e0',
    items: [['Unfinished Blade', L('Different stats every time, odd on-hit effects.', 'Statistiche diverse ogni volta, strani effetti al colpo.')], ['Halo of Nothing', L('+3 hearts and luck.', '+3 cuori e fortuna.')]] },
];

// Weapon-rift keys: frame is always the same, centre changes per race
export const KEY_FRAME = {
  corner: { icon: '🟫', name: L('Netherite Scrap', 'Frammento di netherite') },
  vert:   { icon: '👁️', name: L('Eye of Ender', 'Occhio di ender') },
  side:   { icon: '💎', name: L('Diamond Block', 'Blocco di diamante') },
};

export const WEAPON_RIFTS = [
  { race: 'human',   centre: ['⛏️', L('Netherite Pickaxe', 'Piccone di netherite')],    dungeon: 'The Mirror Hall',
    note: L('Every guardian is a copy of someone in your party. No boss.', 'Ogni guardiano è una copia di qualcuno del tuo gruppo. Nessun boss.') },
  { race: 'swift',   centre: ['🐇', L('Rabbit\'s Foot', 'Zampa di coniglio')],          dungeon: 'The Gale Run' },
  { race: 'ember',   centre: ['🔥', L('Blaze Rod', 'Verga di blaze')],                   dungeon: 'The Ember Forge' },
  { race: 'stone',   centre: ['🪨', L('Ancient Debris', 'Detriti antichi')],             dungeon: 'The Mountain Deeps' },
  { race: 'verdant', centre: ['🥚', L('Sniffer Egg', 'Uovo di sniffer')],                dungeon: 'The Overgrowth' },
  { race: 'frost',   centre: ['🧊', L('Blue Ice', 'Ghiaccio blu')],                      dungeon: 'The Frozen Cathedral' },
  { race: 'void',    centre: ['🔮', L('End Crystal', 'Cristallo dell\'End')],            dungeon: 'The Hollow Between' },
  { race: 'storm',   centre: ['🔱', L('Trident', 'Tridente')],                           dungeon: 'The Tempest Spire',
    note: L('The parkour can only be crossed with wind charges.', 'Il parkour si attraversa solo con le cariche di vento.') },
  { race: 'iron',    centre: ['🧱', L('Netherite Ingot', 'Lingotto di netherite')],      dungeon: 'The Iron Citadel' },
  { race: 'blood',   centre: ['🗿', L('Totem of Undying', 'Totem dell\'immortalità')],   dungeon: 'The Blood Foundry' },
  { race: 'aether',  centre: ['🪽', L('Elytra', 'Elytra')],                              dungeon: 'The Sky Sanctum',
    note: L('The parkour can only be crossed with wind charges.', 'Il parkour si attraversa solo con le cariche di vento.') },
  { race: 'abyss',   centre: ['💀', L('Wither Skeleton Skull', 'Teschio di scheletro wither')], dungeon: 'The Abyssal Vault',
    note: L('The pit is crossed in the dark.', 'Il baratro si attraversa al buio.') },
  { race: 'anomaly', centre: ['▓', L('▓▓▓▓▓', '▓▓▓▓▓')], dungeon: 'The Un̸w̷r̶itten Vault', redacted: true },
];

// ── The Forge ───────────────────────────────────────────────────────────────
export const FORGE = {
  cost:     L('1 Ancient Debris per attempt', '1 Detrito antico per tentativo'),
  burn:     10,     // minutes a meteor stays lit
  strikes:  7,
  timeout:  6,      // seconds before a strike counts as a miss
  heatMin:  50,
  // points are out of 14 (2 per strike: green = 2, yellow = 1, miss = 0)
  grades: [
    { key: 'flawless', min: 12, max: 14, color: '#c07bff', name: L('Flawless', 'Impeccabile'),
      text: L('Two buffs: the first at top strength, the second at the middle tier. Server-wide announcement.', 'Due potenziamenti: il primo al massimo, il secondo al livello medio. Annuncio a tutto il server.') },
    { key: 'good', min: 9, max: 11, color: '#5fe36a', name: L('Good', 'Buono'),
      text: L('One buff at middle strength.', 'Un potenziamento di forza media.') },
    { key: 'okay', min: 5, max: 8, color: '#ffd84a', name: L('Okay', 'Discreto'),
      text: L('One buff at the weakest strength.', 'Un potenziamento debole.') },
    { key: 'botched', min: 0, max: 4, color: '#ff4a4a', name: L('Botched', 'Rovinato'),
      text: L('No buff, and the piece is ruined (1 durability, can never be forged again).', 'Nessun potenziamento e il pezzo è rovinato (1 di durabilità, non si potrà mai più forgiare).') },
  ],
  // [name, okay, good, flawless] at full heat
  buffs: [
    { slot: L('Helmet', 'Elmo'), icon: '🪖', rows: [
      ['Vitality', '+1', '+2', '+5', L('Max Health', 'Vita massima')],
      ['Resolve', '+0.5', '+1', '+2.5', L('Armor Toughness', 'Robustezza armatura')],
      ['Deep Breath', '+1', '+2', '+5', L('Breath', 'Respiro')],
      ['Steadfast', '+5%', '+10%', '+25%', L('Knockback Resistance', 'Resistenza al contraccolpo')] ] },
    { slot: L('Chestplate', 'Corazza'), icon: '🛡️', rows: [
      ['Bulwark', '+0.5', '+1', '+2.5', L('Armor', 'Armatura')],
      ['Ironhide', '+5%', '+10%', '+25%', L('Knockback Resistance', 'Resistenza al contraccolpo')],
      ['Blast Ward', '+10%', '+20%', '+50%', L('Explosion Knockback Res.', 'Res. contraccolpo esplosioni')],
      ['Vitality', '+1', '+2', '+5', L('Max Health', 'Vita massima')] ] },
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
    { slot: L('Sword / Axe', 'Spada / Ascia'), icon: '⚔️', rows: [
      ['Keen', '+0.25', '+0.5', '+1', L('Attack Damage', 'Danno d\'attacco')],
      ['Swift Blade', '', '', '', L('Attack speed', 'Velocità d\'attacco')],
      ['Sweeping Edge / Lumberjack', '', '', '', L('Sweep / wood', 'Spazzata / legna')],
      ['Long Reach', '', '', '', L('Reach', 'Portata')] ] },
    { slot: L('Pickaxe', 'Piccone'), icon: '⛏️', rows: [
      ['Excavator', '+6', '+14', '+40', L('Mining Speed', 'Velocità di scavo')],
      ['Quickbreak', '+50%', '+100%', '+300%', L('Break Speed', 'Velocità di rottura')],
      ['Far Reach', '', '', '', L('Block reach', 'Portata blocchi')],
      ['Deep Diver', '', '', '', L('Mining underwater', 'Scavo sott\'acqua')] ] },
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
  ['🚫', L('No friendly fire from abilities', 'Niente fuoco amico dalle abilità'), L('Race weapon and item abilities can\'t hurt teammates. Plain sword swings still land — no cheap shots.', 'Le abilità di armi e oggetti non feriscono i compagni. I colpi normali di spada però colpiscono — niente scorciatoie.')],
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

export const TOURNAMENT = {
  modes: [
    ['1v1', L('Bracket, first to N wins per match; a rolling animation picks each pairing.', 'Tabellone, vince chi arriva prima a N vittorie; un\'animazione sceglie gli accoppiamenti.')],
    ['2v2', L('Pick your partner in a menu (/duo); the rest are paired randomly.', 'Scegli il partner da un menu (/duo); gli altri vengono accoppiati a caso.')],
    ['FFA', L('Everyone at once with a set number of lives. Last one standing wins.', 'Tutti contro tutti con un numero di vite. Vince l\'ultimo in piedi.')],
    ['Team FFA', L('Teams of two in a free-for-all.', 'Squadre da due in un tutti contro tutti.')],
  ],
  styles: [
    ['🎒', L('Kits', 'Kit'), L('A set kit, or several kits rolled before every game.', 'Un kit fisso, o più kit estratti prima di ogni partita.')],
    ['🏹', L('Bow PvP', 'Bow PvP'), L('A duel on two floating islands with an Infinity + Punch II bow each.', 'Un duello su due isole volanti, ognuno con un arco Infinità + Contraccolpo II.')],
    ['🌳', L('Vanilla PvP', 'Vanilla PvP'), L('A flat field with one oak tree per fighter. Craft your own gear.', 'Un campo piatto con una quercia per combattente. Ti crei l\'equipaggiamento.')],
    ['🎽', L('Your own inventory', 'Il tuo inventario'), L('Fight with your SMP gear — restored untouched afterwards.', 'Combatti con la tua roba dell\'SMP — restituita intatta dopo.')],
  ],
  arenas: L(['Classic — tiled floor, glass wall', 'Overworld — hills, trees, boulders and ponds', 'Hell — lava pits, magma and soul sand under a red sky'],
            ['Classica — pavimento a piastrelle, muro di vetro', 'Overworld — colline, alberi, massi e laghetti', 'Inferno — pozze di lava, magma e sabbia delle anime sotto un cielo rosso']),
  notes: L([
    'Your inventory, health and position are saved and restored afterwards.',
    'Race powers are switched off in the arena — everyone fights as a plain Human.',
    'Redemption round: two of the fallen fight; the winner is back in.',
    'Bots fill empty slots, from rookie to expert — never beyond what a real player can do.',
    'A podium camera with fireworks and an MVP for most damage dealt.',
  ], [
    'Inventario, vita e posizione vengono salvati e restituiti dopo.',
    'I poteri di razza sono spenti nell\'arena — tutti combattono da semplici Umani.',
    'Round di redenzione: due eliminati si sfidano; il vincitore rientra.',
    'I bot riempiono i posti vuoti, da principiante a esperto — mai oltre ciò che può fare un vero giocatore.',
    'Una telecamera sul podio con fuochi d\'artificio e un MVP per chi infligge più danni.',
  ]),
  prizes: [
    ['1v1', ['Champion\'s Crown', 'Duelist\'s Second Wind', 'Contender\'s Boon'],
      L('Crown: netherite helmet, +3 hearts, +1 damage. Second Wind: reusable full heal + shield (10 min cooldown). Boon: single-use Strength/Speed/Resistance.',
        'Corona: elmo di netherite, +3 cuori, +1 danno. Second Wind: cura completa + scudo riutilizzabile (cooldown 10 min). Boon: Forza/Velocità/Resistenza monouso.')],
    ['2v2', ['Champions\' Aegis', 'MVP\'s Medal', 'Runner-up\'s Stride', 'Partners\' Rally'],
      L('Aegis: diamond chestplate, +2 hearts, +1 toughness.', 'Aegis: corazza di diamante, +2 cuori, +1 robustezza.')],
    ['FFA', ['Survivor\'s Emblem', 'Battle Tonic', 'Field Ration', 'Slayer\'s Spark', 'Arena Ration'],
      L('Slayer\'s Spark goes to most knockouts; every fighter gets an Arena Ration.', 'Slayer\'s Spark va a chi fa più eliminazioni; ogni combattente riceve una Arena Ration.')],
  ],
  // Fill in after each tournament: { date, mode, champion, mvp }
  results: [],
};

// ── Items ───────────────────────────────────────────────────────────────────
export const ITEM_GROUPS = [
  { name: L('Race items', 'Oggetti di razza'), items: [
    ['🧪', 'Vial of Fate\'s Undoing', L('Rerolls your race from scratch. Craft: a Nether Star in the middle, 2 Totems of Undying and 6 Diamond Blocks around it.', 'Ritira la tua razza da zero. Craft: una Stella del Nether al centro, 2 Totem dell\'immortalità e 6 Blocchi di diamante intorno.')],
    ['🍀', 'Vial of Fortunate Odds', L('Biases your next race roll toward rarer tiers. Stacks with no limit; spent the instant you spin.', 'Sposta il prossimo tiro verso le rarità più alte. Si accumula senza limiti; si consuma appena tiri.')],
    ['📦', 'Race Container', L('A shulker shell that holds one extra race. Right-click to store your race (you become Human), again to swap. Swap has a cooldown; tradeable — the race goes with it.', 'Un guscio di shulker che contiene una razza in più. Tasto destro per riporre la tua razza (diventi Umano), di nuovo per scambiarle. Lo scambio ha un cooldown; si può scambiare — la razza va con lui.')],
  ]},
  { name: L('Weapons', 'Armi'), items: [
    ['🧊', 'Permafrost Lance', L('Right-click: freezing dash-thrust. Sneak + right-click: wide freezing pulse. Both bypass armor; chance of an extra cold burst on hit.', 'Tasto destro: affondo congelante. Shift + tasto destro: ampio impulso gelido. Entrambi ignorano l\'armatura; probabilità di un colpo di freddo extra.')],
    ['🩸', 'Blood Scyte', L('Builds Blood on hits and kills. Spend it on Unholy Strength or Bloody Boom — or it cancels a lethal hit and detonates around you.', 'Accumula Sangue con colpi e uccisioni. Spendilo in Unholy Strength o Bloody Boom — oppure annulla un colpo letale ed esplode intorno a te.')],
    ['🔴', 'Redliner', L('Legendary netherite sword built on momentum: sprint to climb up to tier 4 (Speed + cleave). Whiffing costs your tier. Tier 3–4 turns your next hit into an Execute. Sneak + right-click: wall-phasing dash with recharging charges.', 'Spada di netherite leggendaria basata sullo slancio: corri per salire fino al livello 4 (Velocità + fendente ad area). Mancare un colpo ti fa perdere il livello. Al livello 3–4 il colpo successivo diventa un\'Esecuzione. Shift + tasto destro: scatto attraverso i muri con cariche che si ricaricano.')],
  ]},
  { name: L('Relics', 'Reliquie'), items: [
    ['🥾', 'Blast Boots', L('Cuts explosion damage dramatically.', 'Riduce drasticamente i danni da esplosione.')],
    ['🥚', 'Dragon Egg', L('[ENTRY REDACTED]', '[VOCE OSCURATA]'), true],
    ['🎩', 'Vanishing Cap', L('Full invisibility, name and all, for a couple of minutes on a long cooldown.', 'Invisibilità totale, nome compreso, per un paio di minuti con un cooldown lungo.')],
  ]},
  { name: L('Consumables', 'Consumabili'), items: [
    ['🕊️', 'Elixir of Flight', L('Temporary creative-style flight.', 'Volo temporaneo come in creativa.')],
    ['⛏️', 'Concentrated Miner\'s Elixir', L('Haste, extra ore drops, night vision and speed at once.', 'Rapidità, più minerali, visione notturna e velocità insieme.')],
    ['🪨', 'Powder of Petrification', L('Throw it to briefly blind, slow and root everyone in the blast.', 'Lanciala per accecare, rallentare e immobilizzare per poco chi è nell\'esplosione.')],
    ['🪶', 'Phoenix Feather', L('Found in rift vaults. Revives a fallen teammate or restores a spent life. Does nothing outside a rift.', 'Si trova nei caveau delle rift. Rianima un compagno caduto o restituisce una vita. Fuori dalle rift non fa niente.')],
  ]},
  { name: L('Tools', 'Strumenti'), items: [
    ['🛠️', 'Wifi Crafting Table / Enderchest', L('A portable crafting table and ender chest — right-click to open anywhere.', 'Un banco da lavoro e un ender chest portatili — tasto destro per aprirli ovunque.')],
    ['🌀', 'Wifi Portal', L('A one-time round trip into the Nether and back, as long as you haven\'t been fighting recently.', 'Un viaggio di andata e ritorno nel Nether, monouso, se non hai combattuto di recente.')],
    ['🗝️', 'Rift Key', L('2 Echo Shards, an Ender Eye and an Amethyst Shard, shapeless. Opens a rift portal for 5 minutes, or pulls you into a running rift as reinforcements.', '2 Frammenti di eco, un Occhio di ender e un Frammento di ametista, senza forma. Apre un portale per 5 minuti, o ti porta come rinforzo in una rift in corso.')],
    ['🧭', 'Tracker', L('Staff-given compass. Pick an online player: they\'re warned, and a minute later it locks onto them for 5 minutes. Then it\'s consumed.', 'Bussola data dallo staff. Scegli un giocatore online: viene avvisato e un minuto dopo la bussola lo segue per 5 minuti. Poi si consuma.')],
    ['👁️', 'Sight Vial', L('Craftable. Toggles teammate glow for your whole team.', 'Craftabile. Attiva il bagliore dei compagni per tutto il team.')],
  ]},
  { name: L('Traps', 'Trappole'), items: [
    ['🪤', 'Bear Trap', L('Invisible snare that roots and damages whoever steps on it (not you).', 'Tagliola invisibile che blocca e ferisce chi ci passa (non te).')],
    ['💣', 'Landmine', L('Invisible charge that detonates on anyone who gets close (not you).', 'Carica invisibile che esplode su chi si avvicina (non te).')],
    ['🥄', 'Fake Trapper', L('Looks like an iron shovel. Mark two corners on soft ground (up to 6 blocks); 5 s later it arms. Anyone who steps in — even you — drops through. A redstone-powered area won\'t spring.', 'Sembra una pala di ferro. Segna due angoli su terreno morbido (fino a 6 blocchi); dopo 5 s si arma. Chiunque ci passi — anche tu — ci cade dentro. Se l\'area riceve redstone non scatta.')],
  ]},
];

// ── Commands players actually use ───────────────────────────────────────────
export const COMMANDS = [
  ['/team …  ·  /tc <msg>', L('Teams and team chat.', 'Team e chat di team.')],
  ['/bounty put · cancel · list  ·  /bounties', L('Bounties.', 'Taglie.')],
  ['/rift leave · status', L('Leave a rift / see its state.', 'Esci da una rift / vedine lo stato.')],
  ['/rift journal [player]', L('Your rift record book.', 'Il tuo diario delle rift.')],
  ['/rift top [cleared|bosses|rooms|deaths]', L('Server rankings.', 'Classifiche del server.')],
  ['/rift perks', L('Your race\'s rift perk.', 'Il vantaggio della tua razza nelle rift.')],
  ['/race …', L('Race info.', 'Info sulle razze.')],
  ['/duo · /duo <player> · /tournament join [id]', L('Tournament partner and joining.', 'Partner e iscrizione ai tornei.')],
];

export const CONTROLS = [
  [L('Sneak + right-click', 'Shift + tasto destro'), L('Ability 1', 'Abilità 1')],
  [L('Sneak + swap hands (F)', 'Shift + cambia mano (F)'), L('Ability 2 — own race only', 'Abilità 2 — solo la propria razza')],
];

// ── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQ = [
  [L('Can I change my race?', 'Posso cambiare razza?'),
   L('Yes, with a Vial of Fate\'s Undoing (Nether Star, 2 Totems, 6 Diamond Blocks). It\'s expensive on purpose. A Race Container lets you keep a second race.', 'Sì, con una Vial of Fate\'s Undoing (Stella del Nether, 2 Totem, 6 Blocchi di diamante). È costosa di proposito. Un Race Container ti fa tenere una seconda razza.')],
  [L('Do I lose my items if I die in the Rift?', 'Perdo gli oggetti se muoio nella Rift?'),
   L('Dying only costs a life — you keep your stuff. Losing the whole rift (everyone out of lives, or time runs out) costs everything you carry. Your XP stays.', 'Morire costa solo una vita — tieni la tua roba. Perdere la rift intera (tutti senza vite o tempo scaduto) ti costa tutto ciò che porti. L\'XP resta.')],
  [L('Can I forge the same piece twice?', 'Posso forgiare due volte lo stesso pezzo?'),
   L('No. Every piece gets exactly one forge, ever — except a Flawless chestplate, sword or pickaxe, which can take a second pass on a rare Cold Forge.', 'No. Ogni pezzo si forgia una volta sola — tranne corazza, spada o piccone Impeccabili, che possono avere un secondo passaggio su una rara Forgia Fredda.')],
  [L('Why is there so little netherite?', 'Perché c\'è così poca netherite?'),
   L('On purpose. Progress is meant to be a steady trickle. Rifts, red rifts and the forge are where it comes from.', 'Di proposito. Il progresso deve essere lento e costante. Arriva da rift, rift rosse e forgia.')],
  [L('Can I build as high as I want?', 'Posso costruire alto quanto voglio?'),
   L('Climb above y = 219 on blocks and a meteorite drops on you.', 'Sali sopra y = 219 sui blocchi e ti cade addosso una meteora.')],
  [L('Where are the rules?', 'Dove sono le regole?'),
   L('Rules and announcements live in the Discord.', 'Regole e annunci sono sul Discord.')],
];
