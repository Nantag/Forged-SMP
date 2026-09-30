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
  // Where each race weapon is: a file the server's WeaponTracker plugin keeps up to date (empty = hide it)
  weaponStatus: 'https://raw.githubusercontent.com/Nantag/forged-smp-data/main/weapons.json',
  version:  'Java Edition 26.2',
  launch:   '2026-09-23T18:30:00+02:00',
  updated:  '2026-09-29',
};

// ── News (newest first) ─────────────────────────────────────────────────────
export const NEWS = [
  {
    date: '2026-09-29',
    title: L('The End fight: Saturday 3 October, 17:30', 'Battaglia dell\'End: sabato 3 ottobre, 17:30'),
    body: L(
      'The End now opens with the End fight on Saturday 3 October at 17:30 (Italian time). Get your gear ready.',
      'L\'End ora si apre con la battaglia dell\'End sabato 3 ottobre alle 17:30 (ora italiana). Preparate l\'equipaggiamento.'),
  },
  {
    date: '2026-09-28',
    title: L('Calamity nights', 'Notti di calamità'),
    body: L(
      'Now and then a night is not an ordinary night. A Blood Moon brings stronger monsters and red rifts, a Starfall drops stars full of loot and meteors you can forge on for free, and a Thin Veil lets the rift press through. Nobody sleeps until dawn. <a href="#/calamity">What each night does</a>.',
      'Ogni tanto una notte non è una notte qualunque. Una Blood Moon porta mostri più forti e rift rosse, una Starfall fa cadere stelle piene di bottino e meteore su cui forgiare gratis, e un Thin Veil fa passare la rift. Nessuno dorme fino all\'alba. <a href="#/calamity">Cosa fa ogni notte</a>.'),
  },
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
    text: L('Teams, bounties on real items and a daily Tracking Hour when nobody can hide.',
            'Team, taglie con oggetti veri e una Tracking Hour giornaliera in cui nessuno può nascondersi.') },
  { icon: '🤖', page: 'bosses', title: L('Bosses with real AI', 'Boss con vera IA'),
    text: L('Fake players with real combat AI power bosses, dungeon guardians and world events.',
            'Finti giocatori con vera IA da combattimento animano boss, guardiani dei dungeon ed eventi nel mondo.') },
  { icon: '🌘', page: 'calamity', title: L('Calamity nights', 'Notti di calamità'),
    text: L('Now and then a night turns: a Blood Moon, a Starfall or a Thin Veil. Stronger monsters, falling stars, rifts tearing open, and nobody sleeps.',
            'Ogni tanto una notte cambia: Blood Moon, Starfall o Thin Veil. Mostri più forti, stelle cadenti, rift che si aprono, e nessuno dorme.') },
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
// id: the race's name on the server, used to match the live weapon status (SITE.weaponStatus).
export const RACES = [
  { key: 'human', id: 'HUMAN', icon: '🙂', rarity: 'common', name: L('Human', 'Human'),
    effects: L(['The baseline. No perks, no penalties.'],
               ['La base. Nessun vantaggio, nessuna penalità.']),
    perk: L('More XP from everything you kill.', 'Più XP da tutto ciò che uccidi.') },

  { key: 'swift', id: 'SWIFT_BLOODED', icon: '💨', rarity: 'uncommon', name: L('Swift-Blooded', 'Swift-Blooded'),
    effects: L(['Quick on your feet and quick with a blade.', 'Always swims like you have Dolphin\'s Grace.', 'Costs half a heart.'],
               ['Veloce a piedi e con la lama.', 'Nuota sempre come con la Grazia del delfino.', 'Costa mezzo cuore.']),
    perk: L('Speed I for the whole run.', 'Velocità I per tutta la run.') },

  { key: 'ember', id: 'EMBERBORN', icon: '🔥', rarity: 'uncommon', name: L('Emberborn', 'Emberborn'),
    effects: L(['Fire and lava can\'t hurt you.', 'Furnaces near you cook faster.', 'Rain makes you noticeably squishier.'],
               ['Fuoco e lava non ti feriscono.', 'Le fornaci vicino a te cuociono più in fretta.', 'La pioggia ti rende molto più fragile.']),
    perk: L('Sets what you hit on fire.', 'Dà fuoco a ciò che colpisci.') },

  { key: 'stone', id: 'STONEKIN', icon: '🪨', rarity: 'rare', name: L('Stonekin', 'Stonekin'),
    effects: L(['A heart tougher, a little slower.', 'Ores sometimes drop extra.', 'Level up 30% faster.', 'Sinks like a boulder in water.'],
               ['Un cuore in più, un po\' più lento.', 'I minerali a volte droppano di più.', 'Sali di livello il 30% più in fretta.', 'In acqua affonda come un macigno.']),
    perk: L('You take less damage.', 'Subisci meno danni.') },

  { key: 'verdant', id: 'VERDANT_TOUCHED', icon: '🌿', rarity: 'rare', name: L('Verdant-Touched', 'Verdant-Touched'),
    effects: L(['Regenerates passively, forever.', 'Food fills you up more.', 'Crops grow faster just for you being nearby.'],
               ['Rigenera passivamente, per sempre.', 'Il cibo sazia di più.', 'I raccolti crescono più in fretta se sei vicino.']),
    perk: L('Every cleared room heals you, and your party a bit.', 'Ogni stanza completata cura te e un po\' il tuo gruppo.') },

  { key: 'frost', id: 'FROSTVEIL', icon: '❄️', rarity: 'rare', name: L('Frostveil', 'Frostveil'),
    effects: L(['Chilling Aura: hostile mobs near you slow down.', 'Immune to cold, walks on powder snow.', 'Fire hurts a bit more; floats upward in water.'],
               ['Aura Gelida: i mob ostili vicini rallentano.', 'Immune al freddo, cammina sulla neve polverosa.', 'Il fuoco fa un po\' più male; in acqua galleggia verso l\'alto.']),
    perk: L('Slows what you hit.', 'Rallenta ciò che colpisci.') },

  { key: 'void', id: 'VOIDKIN', icon: '☠️', rarity: 'epic', name: L('Voidkin', 'Voidkin'),
    effects: L(['Open your ender chest anywhere (sneak + right-click).', 'Ender pearls with no cooldown; 1 in 4 comes back.', 'Endermen ignore you; no chorus fruit cooldown.', 'Falling into the void sends you back where you fell from (long cooldown).', 'Costs half a heart.'],
               ['Apri l\'ender chest ovunque (shift + tasto destro).', 'Perle di ender senza cooldown; 1 su 4 ritorna.', 'Gli Enderman ti ignorano; niente cooldown sui frutti di chorus.', 'Cadere nel vuoto ti riporta da dove sei caduto (cooldown lungo).', 'Costa mezzo cuore.']),
    perk: L('Once per run, a killing blow leaves you on a sliver of health.', 'Una volta per run, un colpo letale ti lascia con un filo di vita.') },

  { key: 'storm', id: 'STORMCALLER', icon: '⚡', rarity: 'epic', name: L('Stormcaller', 'Stormcaller'),
    effects: L(['Lightning-proof.', '+50% damage while it\'s storming.', 'Sneak + right-click with a trident calls three real bolts on your target.'],
               ['Immune ai fulmini.', '+50% danni durante i temporali.', 'Shift + tasto destro con un tridente evoca tre fulmini veri sul bersaglio.']),
    perk: L('Your hits sometimes call down a bolt.', 'I tuoi colpi a volte evocano un fulmine.') },

  { key: 'iron', id: 'IRONCLAD', icon: '⚙️', rarity: 'legendary', name: L('Ironclad', 'Ironclad'),
    effects: L(['Gear wears out slower.', 'No anvil job ever costs more than 30 levels — nothing is "Too Expensive!".', 'Moves a little slower.'],
               ['L\'equipaggiamento si consuma più lentamente.', 'Nessun lavoro all\'incudine costa più di 30 livelli — mai "Troppo costoso!".', 'Si muove un po\' più lentamente.']),
    perk: L('You take less damage.', 'Subisci meno danni.') },

  { key: 'blood', id: 'BLOODFORGED', icon: '🩸', rarity: 'legendary', name: L('Bloodforged', 'Bloodforged'),
    effects: L(['Every melee hit heals you a little.', 'Immune to poison, weakness and wither.', 'A Totem brings you back at full health.', 'Food regenerates you slower.'],
               ['Ogni colpo in mischia ti cura un po\'.', 'Immune a veleno, debolezza e wither.', 'Un Totem ti riporta a vita piena.', 'Il cibo ti rigenera più lentamente.']),
    perk: L('Kills heal you.', 'Le uccisioni ti curano.') },

  { key: 'aether', id: 'AETHERBORN', icon: '✨', rarity: 'divine', name: L('Aetherborn', 'Aetherborn'),
    effects: L(['Glides like an elytra without wearing one.', 'With a real elytra: a long powered boost on every takeoff, free of charge.', 'No fall damage and an extra heart.', 'Projectiles hurt more.'],
               ['Plana come con un\'elytra anche senza indossarla.', 'Con un\'elytra vera: una lunga spinta a ogni decollo, gratis.', 'Niente danni da caduta e un cuore in più.', 'I proiettili fanno più male.']),
    perk: L('No fall damage.', 'Niente danni da caduta.') },

  { key: 'abyss', id: 'ABYSSBORN', icon: '🌑', rarity: 'divine', name: L('Abyssborn', 'Abyssborn'),
    effects: L(['Permanent night vision.', 'Turns invisible on its own when the light gets low.', 'Hostile mobs lose you in the dark — and you see them glow faintly.'],
               ['Visione notturna permanente.', 'Diventa invisibile da solo quando la luce cala.', 'I mob ostili ti perdono al buio — e tu li vedi brillare debolmente.']),
    perk: L('You see in the dark.', 'Vedi al buio.') },

  { key: 'anomaly', id: 'THE_ANOMALY', icon: '🌀', rarity: 'singularity', name: L('The Anomaly', 'The Anomaly'), glitch: true,
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
  { race: 'aether', icon: '🪽', name: 'Angelic Longsword', dmg: 5.5, ap: true,
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
  strikes:  5,
  timeout:  6,      // seconds before a strike counts as a miss
  heatMin:  50,
  // min/max = point ranges; null until the thresholds for 5 strikes are confirmed
  grades: [
    { key: 'flawless', min: null, max: null, color: '#c07bff', name: L('Flawless', 'Impeccabile'),
      text: L('Two buffs: the first at top strength, the second at the middle tier. Server-wide announcement.', 'Due potenziamenti: il primo al massimo, il secondo al livello medio. Annuncio a tutto il server.') },
    { key: 'good', min: null, max: null, color: '#5fe36a', name: L('Good', 'Buono'),
      text: L('One buff at middle strength.', 'Un potenziamento di forza media.') },
    { key: 'okay', min: null, max: null, color: '#ffd84a', name: L('Okay', 'Discreto'),
      text: L('One buff at the weakest strength.', 'Un potenziamento debole.') },
    { key: 'botched', min: null, max: null, color: '#ff4a4a', name: L('Botched', 'Rovinato'),
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
    ['🕰️', 'The Stopped Clock', L('A boss reward — whoever lands the killing blow takes it. Right-click: time stops for everyone else within 8 blocks, players and bots alike. For 4 seconds they can\'t move, swing, shoot, eat or use anything (they can still look around, and still be hit). You aren\'t frozen. Reusable, 2-minute cooldown. A boss can never be stopped by it.', 'Ricompensa di un boss — la prende chi sferra il colpo mortale. Tasto destro: il tempo si ferma per tutti gli altri nel raggio di 8 blocchi, giocatori e bot. Per 4 secondi non possono muoversi, colpire, sparare, mangiare né usare nulla (possono ancora guardarsi intorno e subire colpi). Tu non sei bloccato. Riutilizzabile, cooldown di 2 minuti. Un boss non può mai essere fermato.')],
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
    ['🗝️', 'Rift Key', L('2 Echo Shards, an Ender Eye and an Amethyst Shard, shapeless. Lets you join a rift someone else has already started, to help them.', '2 Frammenti di eco, un Occhio di ender e un Frammento di ametista, senza forma. Ti fa entrare in una rift già avviata da altri, per aiutarli.')],
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
  [L('Can I use a minimap?', 'Posso usare una minimappa?'),
   L('No — minimaps and maps of any kind are banned. Waypoints are allowed.', 'No — minimappe e mappe di qualsiasi tipo sono vietate. I waypoint sono permessi.')],
  [L('What happens if I log out mid-fight?', 'Cosa succede se esco durante un combattimento?'),
   L('A Zombie spawns in your place. Killing it counts as killing you — your loot drops.', 'Al tuo posto compare uno Zombie. Ucciderlo vale come uccidere te — il tuo bottino cade.')],
  [L('Where are the rules?', 'Dove sono le regole?'),
   L('On the Rules page, and in the Discord.', 'Nella pagina Regole, e sul Discord.')],
];

// ── Special mechanics ───────────────────────────────────────────────────────
export const DIMENSIONS = [
  { key: 'nether', icon: '🔥', name: L('The Nether', 'Il Nether'), opensAfterHours: 5,
    text: L('Locked for the first 5 hours after launch, then opens automatically.', 'Bloccato per le prime 5 ore dal lancio, poi si apre da solo.') },
  { key: 'end', icon: '🌌', name: L('The End', 'L\'End'), opensAt: '2026-10-03T17:30:00+02:00',
    text: L('Opens with the End fight on Saturday 3 October at 17:30 (Italian time).', 'Si apre con la battaglia dell\'End sabato 3 ottobre alle 17:30 (ora italiana).') },
];

// ── Calamity nights ─────────────────────────────────────────────────────────
// From the Calamity plugin's config: roll chance, the weights (share), each night's buffs and intervals.
export const CALAMITY = {
  rules: L([
    'At dusk a night has a <b>1 in 5</b> chance of becoming a calamity, with at least <b>two ordinary nights</b> between two calamities.',
    'It lasts <b>until dawn</b>. Everyone in the Overworld sees it rise, and the whole server is told.',
    '<b>Nobody sleeps through it</b>: beds refuse everyone until it is over.',
    'Only the Overworld is touched. The Nether and the End carry on as usual.',
    'A rift that opens during a calamity keeps its bonus to the end of the run, even past dawn. More portals can be open at once on these nights.',
  ], [
    'Al tramonto una notte ha <b>1 possibilità su 5</b> di diventare una calamità, con almeno <b>due notti normali</b> tra una calamità e l\'altra.',
    'Dura <b>fino all\'alba</b>. Chi è nell\'Overworld la vede sorgere, e tutto il server viene avvisato.',
    '<b>Nessuno la salta dormendo</b>: i letti rifiutano tutti finché non finisce.',
    'Tocca solo l\'Overworld. Nether ed End vanno avanti come sempre.',
    'Una rift aperta durante una calamità tiene il suo bonus fino alla fine della run, anche dopo l\'alba. In queste notti possono esserci più portali aperti insieme.',
  ]),
  nights: [
    { key: 'blood-moon', icon: '🩸', color: '#ff3b3b', name: 'Blood Moon', rising: 'THE BLOOD MOON RISES',
      share: '45%', portals: '5 min', loot: '+50%',
      effects: L([
        'A <b>red full moon</b>, and red at the edges of your sight.',
        'Monsters spawn <b>twice as thick</b>, with +50% health, +35% damage and +15% speed.',
        'They pay <b>double XP</b>, and about 1 in 50 drops a <b>forge rune</b>.',
        '<b>Rift:</b> a portal tears open near someone every 5 minutes, mostly <b>red rifts</b>. Rifts opened tonight have tougher, more numerous mobs and pay +50% loot and XP.',
      ], [
        'Una <b>luna piena rossa</b>, e rosso ai bordi della vista.',
        'I mostri compaiono <b>il doppio</b>, con +50% di vita, +35% di danno e +15% di velocità.',
        'Danno <b>il doppio dell\'XP</b>, e circa 1 su 50 lascia una <b>runa della forgia</b>.',
        '<b>Rift:</b> ogni 5 minuti si apre un portale vicino a qualcuno, per lo più <b>rift rosse</b>. Le rift aperte stanotte hanno mob più forti e numerosi e danno +50% di bottino e XP.',
      ]) },
    { key: 'starfall', icon: '🌠', color: '#ffd84a', name: 'Starfall', rising: 'THE SKY IS BREAKING',
      share: '35%', portals: '10 min', loot: '+30%',
      effects: L([
        '<b>Shooting stars</b> streak across the sky.',
        'Every 40 seconds a <b>star falls</b> near someone, under a column of light. It leaves glowing loot for whoever gets there first: XP bottles, lapis, amethyst, emeralds, gold, sometimes diamonds or a forge rune.',
        '<b>Forge:</b> <b>star-touched meteors</b> fall every 4 minutes. Forging on one <b>costs nothing</b>, and each forging takes only half as much heat out of it.',
        '<b>Rift:</b> a portal opens every 10 minutes, now and then an anomaly. Rifts opened tonight pay +30% loot and +25% XP.',
      ], [
        '<b>Stelle cadenti</b> attraversano il cielo.',
        'Ogni 40 secondi una <b>stella cade</b> vicino a qualcuno, sotto una colonna di luce. Lascia bottino luccicante per chi arriva per primo: bottiglie di XP, lapislazzuli, ametista, smeraldi, oro, a volte diamanti o una runa della forgia.',
        '<b>Forgia:</b> ogni 4 minuti cadono <b>meteore toccate dalle stelle</b>. Forgiarci sopra <b>non costa nulla</b>, e ogni forgiatura toglie solo metà del calore.',
        '<b>Rift:</b> ogni 10 minuti si apre un portale, a volte un\'anomalia. Le rift aperte stanotte danno +30% di bottino e +25% di XP.',
      ]) },
    { key: 'thin-veil', icon: '🌫️', color: '#b56cff', name: 'Thin Veil', rising: 'THE VEIL GROWS THIN',
      share: '20%', portals: '3 min', loot: '+25%',
      effects: L([
        'The rift presses through: purple motes drift around you, and something whispers nearby.',
        '3 in 10 natural monster spawns are <b>endermen</b> instead.',
        '<b>Rift:</b> a portal opens every 3 minutes, <b>half of them anomalies</b>. Rifts opened tonight are a little tougher and pay +25% loot and +30% XP.',
        '<b>Forge:</b> <b>Cold Forge</b> meteors fall every 7 minutes.',
      ], [
        'La rift preme per passare: particelle viola ti fluttuano intorno, e qualcosa sussurra lì vicino.',
        '3 mostri naturali su 10 compaiono come <b>enderman</b>.',
        '<b>Rift:</b> ogni 3 minuti si apre un portale, <b>metà sono anomalie</b>. Le rift aperte stanotte sono un po\' più dure e danno +25% di bottino e +30% di XP.',
        '<b>Forgia:</b> ogni 7 minuti cadono meteore da <b>Forgia Fredda</b>.',
      ]) },
  ],
};

export const MECHANICS = [
  { icon: '🔨', title: L('The Mace', 'La Mazza'),
    text: L('There is only one Mace on the entire server. It is unique: no other copy can be crafted or obtained.',
            'Esiste una sola Mazza su tutto il server. È unica: nessun\'altra copia si può craftare o ottenere.') },
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
  'If you hold a unique weapon and don\'t log in for 5 days, you lose it. (Logging in and leaving right after does not count.)',
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
  'Se hai un\'arma unica e non entri per 5 giorni, la perdi. (Entrare e uscire subito dopo non conta.)',
  'I contratti vincolano chi firma e il proprietario del libro: romperne uno ha conseguenze dagli admin. Per essere valido, un contratto deve contenere la parola "contratto" nel testo ed essere firmato dalla seconda parte.',
  '<b>È vietato usare l\'Elytra per scappare</b> (ban temporaneo e morte).',
  'Massimo 5 persone per team. Ogni team va creato con il sistema di team in gioco; team non registrati in gioco, o con membri in più, verranno puniti.',
  'Uccidere un compagno di team per la sua taglia è illegale.',
]);
