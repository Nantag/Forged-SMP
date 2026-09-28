import {
  SITE, NEWS, PILLARS, RARITIES, RACES, ANOMALY_GLITCH, WEAPONS, RACE_BOSSES, RIFT_BOSSES,
  RIFT_KINDS, RIFT_TIERS, RIFT_ROOMS, RIFT_CHALLENGES, RIFT_RELICS, KEY_FRAME, WEAPON_RIFTS,
  FORGE, TEAM_COMMANDS, TEAM_PERKS, BOUNTY_RULES, ITEM_GROUPS, COMMANDS, CONTROLS, FAQ,
  DIMENSIONS, CALAMITY, MECHANICS, COMBAT_RULES, RULES_DISCORD, RULES_GAME,
} from './data.js';

// ── Language ─────────────────────────────────────────────────────────────────
const L = (en, it) => ({ en, it });
// The site is English-only for now. Italian copy is kept in every { en, it }
// pair: set MULTILANG = true to bring back the IT/EN toggle.
const MULTILANG = false;
let lang = 'en';
if (MULTILANG) {
  try { lang = localStorage.getItem('forged-lang') || ''; } catch { /* storage blocked */ }
  if (lang !== 'en' && lang !== 'it') lang = (navigator.language || '').toLowerCase().startsWith('it') ? 'it' : 'en';
}

const t = o => o == null ? '' : typeof o === 'string' || Array.isArray(o) ? o : (o[lang] ?? o.en);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// UI copy (game facts live in data.js)
const U = {
  home: L('Home', 'Home'), races: L('Races', 'Razze'), weapons: L('Weapons', 'Armi'), rift: L('The Rift', 'La Rift'),
  forge: L('Forge', 'Forgia'), bosses: L('Bosses', 'Boss'), pvp: L('PvP', 'PvP'), items: L('Items', 'Oggetti'), rules: L('Rules', 'Regole'), join: L('Join', 'Entra'),
  tagline: L('Something in this world is wrong. Forge anyway.', 'Qualcosa in questo mondo non va. Forgia comunque.'),
  eyebrow: L('Minecraft Java · Story-driven survival SMP', 'Minecraft Java · SMP survival a storia'),
  intro: L('A heavily customised survival server built on around forty of our own plugins — made to be played, recorded and watched.',
           'Un server survival pesantemente personalizzato, costruito su una quarantina di plugin nostri — fatto per essere giocato, registrato e guardato.'),
  discordBtn: L('Join the Discord', 'Entra nel Discord'),
  howJoin: L('How to join', 'Come entrare'),
  address: L('Server address', 'Indirizzo del server'),
  addressDiscord: L('Address on Discord', 'Indirizzo sul Discord'),
  copy: L('Copy', 'Copia'), copied: L('Copied!', 'Copiato!'),
  online: L('online', 'online'), offline: L('Offline', 'Offline'), players: L('players', 'giocatori'),
  liveSince: L('Live since 23 September 2026', 'Online dal 23 settembre 2026'),
  day: L('Day', 'Giorno'),
  pillarsTitle: L('What makes it different', 'Cosa lo rende diverso'),
  stepsTitle: L('Get in, in three steps', 'Entra in tre passi'),
  step1: L('Join the Discord', 'Entra nel Discord'), step1t: L('Rules, announcements and the server guide live there.', 'Lì trovi regole, annunci e la guida del server.'),
  step2: L('Connect', 'Connettiti'), step2t: L(`Launch Minecraft ${SITE.version} and add the server address.`, `Avvia Minecraft ${SITE.version} e aggiungi l'indirizzo del server.`),
  step3: L('Roll your race', 'Tira la tua razza'), step3t: L('Three spins the moment you join. The last one is yours — for good.', 'Tre giri appena entri. L\'ultimo è tuo — per sempre.'),
  news: L('Latest news', 'Ultime novità'),
  updated: L('Last updated', 'Ultimo aggiornamento'),
  notMojang: L('Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.', 'Non è un prodotto ufficiale Minecraft. Non approvato né associato a Mojang o Microsoft.'),
  // races
  racesLead: L('Everyone rolls a permanent race the moment they join: three spins in a roll screen, and the last one you land on is yours (or confirm early). Rarer races are stronger.',
               'Ognuno tira una razza permanente appena entra: tre giri nella schermata di tiro, e l\'ultima su cui atterri è tua (o conferma prima). Le razze più rare sono più forti.'),
  odds: L('Roll odds', 'Probabilità'), oneIn: L('1 in', '1 su'),
  tryRoll: L('Try a roll', 'Prova un tiro'), rollBtn: L('Spin', 'Gira'), spinsLeft: L('spins left', 'giri rimasti'),
  rollAgain: L('Start over', 'Ricomincia'), lockedIn: L('Locked in', 'Confermata'), confirm: L('Confirm', 'Conferma'),
  rollNote: L('Just for fun — uses the real odds. Your in-game roll is separate.', 'Solo per gioco — usa le probabilità reali. Il tiro in gioco è un\'altra cosa.'),
  all: L('All', 'Tutte'),
  riftPerk: L('In the Rift', 'Nella Rift'), weapon: L('Weapon', 'Arma'), boss: L('Boss', 'Boss'), weaponRift: L('Weapon rift', 'Weapon rift'),
  changeRace: L('Changing your race', 'Cambiare razza'),
  // weapons
  weaponsLead: L('One signature weapon per race. Anyone can pick any of them up, but each one only shows its full potential in the hands of its own race.',
                 'Un\'arma distintiva per razza. Chiunque può raccoglierle, ma ognuna mostra tutto il suo potenziale solo in mano alla propria razza.'),
  wsLive: L('Live from the server', 'In diretta dal server'),
  wsUpdated: L('updated {t}', 'aggiornato {t}'),
  wsOwnedBy: L('Owned by', 'Di'),
  wsCarried: L('carrying it', 'ce l\'ha addosso'),
  wsStashed: L('Stashed away', 'Messa al sicuro'),
  wsStashedT: L('stashed away', 'messa al sicuro'),
  wsNoOwner: L('owner unknown', 'proprietario sconosciuto'),
  wsDestroyed: L('Destroyed', 'Distrutta'),
  wsReopened: L('its weapon rift is open again', 'la sua weapon rift è di nuovo aperta'),
  wsConquered: L('Vault conquered', 'Caveau conquistato'),
  wsConqueredT: L('not seen yet', 'non ancora vista'),
  wsUnclaimed: L('Unclaimed', 'Non reclamata'),
  wsSealed: L('its weapon rift is still sealed', 'la sua weapon rift è ancora sigillata'),
  wsSeen: L('seen {t}', 'vista {t}'),
  wsJustNow: L('just now', 'adesso'),
  wsAgo: L('{t} ago', '{t} fa'),
  wsCounts: L('{held} carried · {stashed} stashed · {free} unclaimed', '{held} addosso · {stashed} al sicuro · {free} non reclamate'),
  sameRace: L('Your race', 'La tua razza'), sameRaceT: L('Full passive and both abilities.', 'Passiva completa ed entrambe le abilità.'),
  otherRace: L('Another race', 'Altra razza'), otherRaceT: L('A weaker passive and the first ability only.', 'Passiva più debole e solo la prima abilità.'),
  apLegend: L('🛡️❌ Abilities hit straight through armor. Fast, light weapons trade base damage for this. Totems still work normally.',
              '🛡️❌ Le abilità passano attraverso l\'armatura. Le armi leggere e veloci scambiano danno base per questo. I Totem funzionano normalmente.'),
  damage: L('Damage', 'Danno'), passive: L('Passive', 'Passiva'), ability1: L('Ability 1', 'Abilità 1'), ability2: L('Ability 2', 'Abilità 2'),
  ownRaceOnly: L('own race only', 'solo la propria razza'),
  redacted: L('[ENTRY REDACTED]', '[VOCE OSCURATA]'),
  // rift
  riftLead: L('Instanced cave-dungeon expeditions for a party of up to 4, built fresh every time. PvE only — nobody can hurt anybody inside. You\'re kept in adventure mode (water buckets still work), and what you carry goes in and comes back with you.',
              'Spedizioni in dungeon-grotta istanziati per un gruppo fino a 4, generati da zero ogni volta. Solo PvE — nessuno può ferire nessuno. Sei in modalità avventura (i secchi d\'acqua funzionano), e ciò che porti entra ed esce con te.'),
  gettingIn: L('Getting in', 'Come entrare'),
  kinds: L('Kinds of rift', 'Tipi di rift'), rooms: L('Rooms', 'Stanze'), timeLimit: L('Time', 'Tempo'), lives: L('Lives', 'Vite'),
  difficulty: L('Difficulty: gear score & tiers', 'Difficoltà: gear score e livelli'),
  inside: L('Inside an ordinary rift', 'Dentro una rift ordinaria'),
  livesLoot: L('Lives, death and loot', 'Vite, morte e bottino'),
  modifiers: L('Loot modifiers', 'Modificatori del bottino'),
  challenges: L('Challenges', 'Sfide'),
  relics: L('Rift relics', 'Reliquie della Rift'),
  weaponRifts: L('The 13 weapon rifts', 'Le 13 weapon rift'),
  keyVis: L('Key recipe', 'Ricetta della chiave'),
  riftBosses: L('Rift bosses', 'Boss della Rift'),
  riftCmds: L('Your record', 'Il tuo registro'),
  // forge
  forgeLead: L('Meteors crash down near players. Their glowing core is a forge: hammer a piece of gear on it in a timing minigame to earn a permanent buff — or ruin it. Each piece gets exactly one shot, ever.',
               'Le meteore cadono vicino ai giocatori. Il loro nucleo incandescente è una forgia: martella un pezzo di equipaggiamento in un minigioco a tempo per un potenziamento permanente — o rovinalo. Ogni pezzo ha un solo tentativo, per sempre.'),
  findMeteor: L('Finding a meteor', 'Trovare una meteora'),
  useForge: L('Using the forge', 'Usare la forgia'),
  tryForge: L('Try the hammer', 'Prova il martello'),
  forgeDemoNote: L('A demo of the minigame — click, tap or press Space to strike. The real one plays in an in-game window.',
                   'Una demo del minigioco — clicca, tocca o premi Spazio per colpire. Quello vero si gioca in una finestra in gioco.'),
  strike: L('Strike', 'Colpisci'), start: L('Heat the forge', 'Scalda la forgia'), strikesLeft: L('strikes left', 'colpi rimasti'),
  points: L('Points', 'Punti'), grades: L('Grades', 'Voti'), heat: L('Heat', 'Calore'),
  heatT: L('The forge cools as the meteor burns down. The heat when you start is locked in and scales every buff you earn: 100% while white-hot, down to 50% right before it burns out. The race is to get there first.',
           'La forgia si raffredda mentre la meteora si spegne. Il calore all\'inizio viene fissato e scala ogni potenziamento: 100% quando è incandescente, fino al 50% appena prima di spegnersi. La gara è arrivare per primi.'),
  heatSlider: L('Minutes since the crash', 'Minuti dall\'impatto'),
  buffs: L('What each piece can roll', 'Cosa può uscire per ogni pezzo'),
  buffsNote: L('Okay / Good / Flawless strength at a full-heat forge. Buffs are normal attribute bonuses — nothing to activate.',
               'Forza Discreto / Buono / Impeccabile con la forgia al massimo. Sono normali bonus d\'attributo — niente da attivare.'),
  coldForge: L('The Cold Forge', 'La Forgia Fredda'),
  runes: L('Runes', 'Rune'),
  forgeRules: L('Good to know', 'Da sapere'),
  // bosses
  bossesLead: L('Named bosses, fought one at a time in an arena of their own, escalating through phases. Some phases need teamwork — smash crystals, break weak points, hit the vulnerability window. A boss bar and a soundtrack that shifts from calm to intense come with them.',
                'Boss con un nome, affrontati uno alla volta nella loro arena, con fasi sempre più dure. Alcune fasi richiedono gioco di squadra — distruggi cristalli, rompi punti deboli, colpisci nella finestra giusta. Con loro arrivano una barra della vita e una colonna sonora che passa dal calmo all\'intenso.'),
  raceBosses: L('Race bosses', 'Boss di razza'),
  raceBossesT: L('One per race (Humans have none). Each fights as its race, holding a copy of its weapon, and uses its abilities in later phases.',
                 'Uno per razza (gli Umani non ne hanno). Ognuno combatte come la sua razza, con una copia della sua arma, e ne usa le abilità nelle fasi avanzate.'),
  // pvp
  pvpLead: L('PvP is on — with rules. Teams for your crew, bounties with real items, and a daily hour where nobody can hide.',
             'Il PvP è attivo — con regole. Team per il tuo gruppo, taglie con oggetti veri, un\'ora al giorno in cui nessuno può nascondersi e un sistema di tornei completo.'),
  teams: L('Teams', 'Team'), teamsT: L('Up to 5 players. No stat boosts — only teamplay tools.', 'Fino a 5 giocatori. Nessun bonus alle statistiche — solo strumenti di squadra.'),
  bounties: L('Bounties', 'Taglie'), bountiesT: L('Put real items on someone\'s head. Whoever kills them next gets every item, instantly.', 'Metti oggetti veri sulla testa di qualcuno. Chi lo uccide per primo prende tutto, all\'istante.'),
  tracking: L('Tracking Hour', 'Tracking Hour'),
  trackingT: L('Once a day the server\'s Locator Bar — the HUD strip showing the direction of every other online player — switches on for everyone. Five minutes before, everyone gets a warning in chat: hide better, get safe, or get ready to hunt.',
               'Una volta al giorno la Locator Bar del server — la barra che mostra la direzione di ogni altro giocatore online — si accende per tutti. Cinque minuti prima arriva un avviso in chat: nasconditi meglio, mettiti al sicuro o preparati a cacciare.'),
  tracker: L('The Tracker', 'Il Tracker'),
  trackerT: L('A staff-given compass that ignores Tracking Hour and works any time. Pick an online player: they\'re warned immediately, a countdown sits on your action bar, and one minute later your compass locks onto their live position for 5 minutes. It can\'t be dropped or stored while running, and it\'s consumed at the end.',
              'Una bussola data dallo staff che ignora la Tracking Hour e funziona sempre. Scegli un giocatore online: viene avvisato subito, un conto alla rovescia appare sulla tua action bar e un minuto dopo la bussola punta la sua posizione in tempo reale per 5 minuti. Non si può buttare né riporre mentre è attiva, e alla fine si consuma.'),
  skyLimit: L('The sky limit', 'Il limite del cielo'),
  skyLimitT: L('Climb above y = 219 on blocks (not flying) and a meteorite drops on you.', 'Sali sopra y = 219 sui blocchi (non volando) e ti cade addosso una meteora.'),
  tournaments: L('Tournaments', 'Tornei'),
  tournamentsT: L('Admin-run events in a throwaway arena world. Several can run at once, each in its own arena. Join an open one with /tournament join.',
                  'Eventi gestiti dagli admin in un mondo-arena usa e getta. Ne possono girare diversi insieme, ognuno nella sua arena. Entra in uno aperto con /tournament join.'),
  modes: L('Modes', 'Modalità'), styles: L('Styles', 'Stili'), arenas: L('Arenas', 'Arene'), prizes: L('Prizes', 'Premi'),
  prizesT: L('Custom items given back in the normal world — all intentionally modest, none of them netherite gear.', 'Oggetti personalizzati consegnati nel mondo normale — tutti volutamente modesti, nessuno è equipaggiamento di netherite.'),
  hallOfFame: L('Hall of fame', 'Albo d\'oro'),
  noResults: L('No results posted yet — the first champions will be listed here.', 'Ancora nessun risultato — qui compariranno i primi campioni.'),
  champion: L('Champion', 'Campione'), mode: L('Mode', 'Modalità'), date: L('Date', 'Data'),
  // items
  itemsLead: L('Custom gear found around the server. Most of it is staff-given or found in the Rift rather than crafted.',
               'Equipaggiamento personalizzato che si trova sul server. Gran parte viene dato dallo staff o si trova nella Rift, invece che craftato.'),
  // join
  joinLead: L('Everything you need to get on the server and find your way around.', 'Tutto ciò che serve per entrare e orientarsi.'),
  version: L('Version', 'Versione'),
  commands: L('Commands', 'Comandi'), controls: L('Controls', 'Controlli'), faq: L('FAQ', 'Domande frequenti'),
  rulesT: L('Read the rules and the special mechanics before you play — PvP is allowed everywhere.', 'Leggi le regole e le meccaniche speciali prima di giocare — il PvP è permesso ovunque.'),
  readRules: L('Read the rules', 'Leggi le regole'),
  rulesLead: L('How this server differs from vanilla, and the rules for the server and the Discord. Staff decisions are final — if you disagree, open a ticket.',
               'In cosa questo server è diverso dal vanilla, e le regole per il server e il Discord. Le decisioni dello staff sono definitive — se non sei d\'accordo, apri un ticket.'),
  mechanics: L('Special mechanics', 'Meccaniche speciali'),
  dimensions: L('Dimensions', 'Dimensioni'),
  calamity: L('Calamity nights', 'Notti di calamità'),
  calamityT: L('Now and then a night is not an ordinary night. There are three kinds, and a Blood Moon is the most common.', 'Ogni tanto una notte non è una notte qualunque. Ce ne sono di tre tipi, e la Blood Moon è la più comune.'),
  calShare: L('Of calamities', 'Delle calamità'), calPortals: L('Portal every', 'Portale ogni'), calLoot: L('Rift loot', 'Bottino rift'),
  calMore: L('Calamity nights open many more.', 'Le notti di calamità ne aprono molti di più.'),
  calStar: L('During a Starfall, star-touched meteors fall too: forging on them is free.', 'Durante una Starfall cadono anche meteore toccate dalle stelle: forgiarci sopra è gratis.'),
  open: L('Open', 'Aperto'), opensIn: L('Opens in', 'Si apre tra'),
  inCombat: L('While in combat', 'Durante il combattimento'),
  inCombatT: L('These apply only while you\'re flagged as in combat. Outside of combat, vanilla behavior applies.', 'Valgono solo mentre sei segnalato come in combattimento. Fuori dal combattimento vale il comportamento vanilla.'),
  gameRules: L('In-game rules', 'Regole in gioco'),
  discordRules: L('Discord rules', 'Regole del Discord'),
  endOpens: L('The End opens in', 'L\'End si apre tra'),
  notFound: L('This page slipped through a rift.', 'Questa pagina è finita in una rift.'),
  back: L('Back home', 'Torna alla home'),
};
const u = k => t(U[k]);

// ── Lookups ──────────────────────────────────────────────────────────────────
const RACE   = Object.fromEntries(RACES.map(r => [r.key, r]));
const RARITY = Object.fromEntries(RARITIES.map(r => [r.key, r]));
const WEAPON = Object.fromEntries(WEAPONS.map(w => [w.race, w]));
const BOSS   = Object.fromEntries(RACE_BOSSES.map(b => [b.race, b]));
const WRIFT  = Object.fromEntries(WEAPON_RIFTS.map(w => [w.race, w]));
const rarityIndex = k => RARITIES.findIndex(r => r.key === k);

const glitchSpan = (text, label) =>
  `<span class="glitch-text" data-text="${esc(text)}" aria-label="${esc(label)}"><span aria-hidden="true">${esc(text)}</span></span>`;
const raceName = r => r.glitch ? glitchSpan(ANOMALY_GLITCH, t(r.name)) : esc(t(r.name));
const rarityBadge = key => `<span class="rarity r-${key}">${esc(t(RARITY[key].name))}</span>`;
const list = arr => `<ul class="ticks">${t(arr).map(x => `<li>${x}</li>`).join('')}</ul>`;
const head = (title, lead, kicker = '') => `
  <header class="page-head">
    ${kicker ? `<p class="eyebrow">${kicker}</p>` : ''}
    <h1 class="decode">${title}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ''}
  </header>`;
const section = (title, body, id = '') => `
  <section class="block"${id ? ` id="${id}"` : ''}>
    <h2 class="decode"><span class="h-mark" aria-hidden="true">//</span> ${title}</h2>
    ${body}
  </section>`;
const fmtDate = iso => new Date(iso + 'T12:00:00').toLocaleDateString(lang === 'it' ? 'it-IT' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// ── Address / status widget ──────────────────────────────────────────────────
function ipCard() {
  if (!SITE.ip) return `
    <div class="ip-card">
      <div class="ip-label">${u('address')}</div>
      <a class="ip-value ip-link" href="${SITE.discord}" target="_blank" rel="noopener">${u('addressDiscord')} ↗</a>
      <div class="ip-meta">${esc(SITE.version)}</div>
    </div>`;
  return `
    <div class="ip-card">
      <div class="ip-label">${u('address')}</div>
      <button class="ip-value" type="button" data-copy="${esc(SITE.ip)}" title="${u('copy')}">
        <code>${esc(SITE.ip)}</code><span class="ip-copy">${u('copy')}</span>
      </button>
      <div class="ip-meta"><span class="status" data-status><span class="dot"></span>…</span> · ${esc(SITE.version)}</div>
    </div>`;
}

async function loadStatus() {
  const el = document.querySelector('[data-status]');
  if (!el || !SITE.ip) return;
  try {
    const res = await fetch(`https://api.mcsrvstat.us/3/${encodeURIComponent(SITE.ip)}`);
    const d = await res.json();
    el.classList.toggle('on', !!d.online);
    el.innerHTML = d.online
      ? `<span class="dot"></span>${d.players?.online ?? 0}/${d.players?.max ?? '?'} ${u('players')} ${u('online')}`
      : `<span class="dot"></span>${u('offline')}`;
  } catch { el.innerHTML = `<span class="dot"></span>—`; }
}

// ── Live weapon status (written by the server's WeaponTracker plugin) ───────
const RACE_BY_ID = Object.fromEntries(RACES.filter(r => r.id).map(r => [r.id, r]));
const fillIn = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
function ago(ms) {
  const min = Math.max(0, Math.round((Date.now() - ms) / 60000));
  if (min < 2) return u('wsJustNow');
  const span = min < 60 ? `${min} min` : min < 48 * 60 ? `${Math.round(min / 60)} h` : `${Math.round(min / 1440)} ${t(L('days', 'giorni'))}`;
  return fillIn(u('wsAgo'), { t: span });
}

function weaponStatusHtml(info) {
  // Who owns it, never where it is: the file carries no positions, and none are shown.
  const alive = (info.copies || []).filter(c => c.state !== 'destroyed');
  const seen = alive.length ? Math.max(...alive.map(c => c.seen || 0)) : 0;
  const owners = [...new Set(alive.filter(c => c.owner).sort((a, b) => (a.state === 'held' ? 0 : 1) - (b.state === 'held' ? 0 : 1)).map(c => c.owner))];
  const ownedBy = owners.length ? `${u('wsOwnedBy')} ${owners.map(n => `<b>${esc(n)}</b>`).join(', ')}` : '';
  const sub = text => `<span class="ws-sub">${text}</span>`;
  const seenAgo = fillIn(u('wsSeen'), { t: ago(seen) });
  switch (info.state) {
    case 'held':
      return `<span class="ws-icon" aria-hidden="true">⚔️</span><span>${ownedBy}</span>${sub(u('wsCarried') + ' · ' + seenAgo)}`;
    case 'stashed':
      return ownedBy
        ? `<span class="ws-icon" aria-hidden="true">📦</span><span>${ownedBy}</span>${sub(u('wsStashedT') + ' · ' + seenAgo)}`
        : `<span class="ws-icon" aria-hidden="true">📦</span><span>${u('wsStashed')}</span>${sub(u('wsNoOwner') + ' · ' + seenAgo)}`;
    case 'destroyed':
      return `<span class="ws-icon" aria-hidden="true">💀</span><span>${u('wsDestroyed')}</span>${info.vaultConquered === false ? sub(u('wsReopened')) : ''}`;
    case 'conquered':
      return `<span class="ws-icon" aria-hidden="true">🔓</span><span>${u('wsConquered')}</span>${sub(u('wsConqueredT'))}`;
    case 'unclaimed':
      return `<span class="ws-icon" aria-hidden="true">🔒</span><span>${u('wsUnclaimed')}</span>${info.vaultConquered === false ? sub(u('wsSealed')) : ''}`;
    default:
      return '';
  }
}

async function loadWeaponStatus() {
  if (!SITE.weaponStatus) return;
  let data;
  try {
    const res = await fetch(SITE.weaponStatus, { cache: 'no-cache' });
    if (!res.ok) return;
    data = await res.json();
  } catch { return; } // no file yet, or offline: the page just shows no status
  if (!data || typeof data.weapons !== 'object') return;
  const counts = { held: 0, stashed: 0, free: 0 };
  for (const [id, info] of Object.entries(data.weapons)) {
    const race = RACE_BY_ID[id];
    if (!race || race.glitch || !info) continue;
    const el = document.querySelector(`[data-weapon-status="${race.key}"]`);
    const html = weaponStatusHtml(info);
    if (!el || !html) continue;
    el.innerHTML = html;
    el.className = `w-status ${info.state}`;
    el.hidden = false;
    if (info.state === 'held') counts.held++;
    else if (info.state === 'stashed') counts.stashed++;
    else if (info.state === 'unclaimed' || info.state === 'conquered') counts.free++;
  }
  const live = document.getElementById('weapon-live');
  if (live && data.updated) {
    live.innerHTML = `<span><span class="dot"></span><b>${u('wsLive')}</b></span><span>${fillIn(u('wsCounts'), counts)}</span>`
      + `<span class="muted">${fillIn(u('wsUpdated'), { t: ago(data.updated) })}</span>`;
    live.hidden = false;
  }
}

const dayNumber = () => Math.max(1, Math.floor((Date.now() - new Date(SITE.launch)) / 86400000) + 1);

// ── Pages ────────────────────────────────────────────────────────────────────
const PAGES = {};

PAGES.home = () => `
  <section class="hero">
    <div class="embers" aria-hidden="true">${Array.from({ length: 18 }, (_, i) => `<i style="--i:${i}"></i>`).join('')}</div>
    <p class="eyebrow">${u('eyebrow')}</p>
    <h1 class="hero-title glitch" data-text="FORGED SMP">FORGED SMP</h1>
    <p class="tagline">${u('tagline')}</p>
    <p class="hero-intro">${u('intro')}</p>
    <div class="hero-row">
      ${ipCard()}
      <div class="hero-cta">
        <a class="btn btn-primary" href="${SITE.discord}" target="_blank" rel="noopener">${discordIcon()} ${u('discordBtn')}</a>
        <a class="btn btn-ghost" href="#/join">${u('howJoin')} →</a>
      </div>
    </div>
    <p class="since"><span class="live-dot"></span>${u('liveSince')} · <b>${u('day')} ${dayNumber()}</b></p>
    ${openAt(DIMENSIONS[1]) > Date.now() ? `<p class="end-count" data-end>🌌 ${u('endOpens')} <b>${countdown(openAt(DIMENSIONS[1]) - Date.now())}</b></p>` : ''}
  </section>

  ${section(u('pillarsTitle'), `
    <div class="grid g3">
      ${PILLARS.map(p => `
        <a class="card card-link pillar" href="#/${p.page}">
          <div class="pillar-icon" aria-hidden="true">${p.icon}</div>
          <h3>${t(p.title)}</h3>
          <p>${t(p.text)}</p>
        </a>`).join('')}
    </div>`)}

  ${section(u('stepsTitle'), `
    <ol class="steps">
      <li><span class="step-n">01</span><div><h3>${u('step1')}</h3><p>${u('step1t')}</p></div></li>
      <li><span class="step-n">02</span><div><h3>${u('step2')}</h3><p>${u('step2t')}</p></div></li>
      <li><span class="step-n">03</span><div><h3>${u('step3')}</h3><p>${u('step3t')}</p></div></li>
    </ol>`)}

  ${section(u('news'), `
    <div class="news">
      ${NEWS.map(n => `
        <article class="card news-item">
          <time datetime="${n.date}">${fmtDate(n.date)}</time>
          <h3>${t(n.title)}</h3>
          <p>${t(n.body)}</p>
        </article>`).join('')}
    </div>`)}
`;

PAGES.races = () => `
  ${head(u('races'), u('racesLead'))}

  ${section(u('odds'), `
    <div class="odds-bar" role="img" aria-label="${u('odds')}">
      ${RARITIES.map(r => `<span style="--w:${Math.max(r.chance, 0.6)};--c:${r.color}" title="${esc(t(r.name))} ${r.chance}%"></span>`).join('')}
    </div>
    <div class="odds-list">
      ${RARITIES.map(r => `
        <div class="odds-row">
          <span class="swatch" style="--c:${r.color}"></span>
          <span class="odds-name" style="color:${r.color}">${esc(t(r.name))}</span>
          <span class="odds-pct">${r.chance}%</span>
          <span class="odds-in">${u('oneIn')} ${Math.round(100 / r.chance).toLocaleString(lang)}</span>
        </div>`).join('')}
    </div>`)}

  ${section(u('races'), `
    <div class="chips" role="group" aria-label="Filter">
      <button class="chip on" data-filter="all" type="button">${u('all')}</button>
      ${RARITIES.map(r => `<button class="chip" data-filter="${r.key}" type="button" style="--c:${r.color}">${esc(t(r.name))}</button>`).join('')}
    </div>
    <div class="grid g2 race-grid">
      ${RACES.map(r => raceCard(r)).join('')}
    </div>`, 'list')}

  ${section(u('changeRace'), `
    <div class="grid g3">
      ${ITEM_GROUPS[0].items.map(([icon, name, desc]) => `
        <div class="card item"><div class="item-icon" aria-hidden="true">${icon}</div><h3>${esc(name)}</h3><p>${t(desc)}</p></div>`).join('')}
    </div>`)}
`;

function raceCard(r) {
  const rar = RARITY[r.rarity];
  const w = WEAPON[r.key], b = BOSS[r.key], wr = WRIFT[r.key];
  return `
    <article class="card race ${r.glitch ? 'is-glitch' : ''}" data-rarity="${r.rarity}" id="race-${r.key}" style="--c:${rar.color}">
      <div class="race-top">
        <div class="race-icon" aria-hidden="true">${r.icon}</div>
        <div>
          <h3>${raceName(r)}</h3>
          ${rarityBadge(r.rarity)} <span class="muted small">${rar.chance}%</span>
        </div>
      </div>
      ${r.glitch ? `<div class="redacted-block">${t(r.effects).map(x => `<p>${esc(x)}</p>`).join('')}</div>` : list(r.effects)}
      <dl class="race-meta">
        <div><dt>${u('riftPerk')}</dt><dd>${esc(t(r.perk))}</dd></div>
        <div><dt>${u('weapon')}</dt><dd><a href="#/weapons">${w.redacted ? glitchSpan(w.glitchName, 'Redacted') : esc(w.name)}</a></dd></div>
        ${b ? `<div><dt>${u('boss')}</dt><dd>${b.redacted ? `<span class="redact">▓▓▓▓▓▓</span>` : `<a href="#/bosses">${esc(b.name)}</a>`}</dd></div>` : ''}
        <div><dt>${u('weaponRift')}</dt><dd>${wr.redacted ? `<span class="redact">▓▓▓▓▓▓▓▓</span>` : `<a href="#/rift">${esc(wr.dungeon)}</a>`}</dd></div>
      </dl>
    </article>`;
}

PAGES.weapons = () => {
  const maxDmg = Math.max(...WEAPONS.filter(w => w.dmg).map(w => w.dmg));
  const sorted = [...WEAPONS].sort((a, b) => rarityIndex(RACE[a.race].rarity) - rarityIndex(RACE[b.race].rarity));
  return `
  ${head(u('weapons'), u('weaponsLead'))}
  <div class="grid g2 rule-cards">
    <div class="card rule good"><h3>✓ ${u('sameRace')}</h3><p>${u('sameRaceT')}</p></div>
    <div class="card rule"><h3>◐ ${u('otherRace')}</h3><p>${u('otherRaceT')}</p></div>
  </div>
  <div class="controls">
    ${CONTROLS.map(([k, v]) => `<div><kbd>${t(k)}</kbd><span>${t(v)}</span></div>`).join('')}
  </div>
  <p class="note">${u('apLegend')}</p>
  <p class="w-live" id="weapon-live" hidden></p>

  <div class="grid g2 weapon-grid">
    ${sorted.map(w => {
      const r = RACE[w.race], rar = RARITY[r.rarity];
      if (w.redacted) return `
        <article class="card weapon is-glitch" style="--c:${rar.color}">
          <div class="weapon-top"><div class="race-icon" aria-hidden="true">${w.icon}</div>
            <div><h3>${glitchSpan(w.glitchName, 'Redacted weapon')}</h3><span class="muted small">${raceName(r)}</span></div>
            <div class="dmg-num">▓▓▓</div></div>
          <div class="redacted-block"><p>${u('redacted')}</p><p class="redact-lines" aria-hidden="true">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓▓▓▓▓▓▓</p></div>
        </article>`;
      return `
        <article class="card weapon" style="--c:${rar.color}">
          <div class="weapon-top">
            <div class="race-icon" aria-hidden="true">${w.icon}</div>
            <div><h3>${esc(w.name)}</h3><a class="muted small" href="#/races">${raceName(r)} · ${esc(t(rar.name))}</a></div>
            <div class="dmg-num" title="${u('damage')}">${w.dmg.toFixed(1)}${w.ap ? '<span class="ap" title="Armor piercing">🛡️❌</span>' : ''}</div>
          </div>
          <div class="dmg-bar" aria-hidden="true"><span style="width:${(w.dmg / maxDmg) * 100}%"></span></div>
          <div class="w-status" data-weapon-status="${w.race}" hidden></div>
          <dl class="abilities">
            <div><dt>${u('passive')}</dt><dd>${esc(t(w.passive))}</dd></div>
            <div><dt>${u('ability1')} <kbd>⇧ + RMB</kbd></dt><dd>${esc(t(w.a1))}</dd></div>
            <div class="own"><dt>${u('ability2')} <kbd>⇧ + F</kbd> <em>${u('ownRaceOnly')}</em></dt><dd>${esc(t(w.a2))}</dd></div>
          </dl>
        </article>`;
    }).join('')}
  </div>`;
};

PAGES.rift = () => `
  ${head(u('rift'), u('riftLead'), 'PvE · ENDGAME')}

  ${section(u('gettingIn'), `
    <div class="grid g2">
      <div class="card"><h3>🌀 ${t(L('Random portals', 'Portali casuali'))}</h3>
        <p>${t(L('A tear in the air opens near a random player — about one every ~75 minutes across the server. Everyone within ~250 blocks is told the direction. It stays open 15 minutes. Click it to ready up: everyone who clicks within 20 seconds goes in together, up to 4.',
                 'Uno squarcio nell\'aria si apre vicino a un giocatore a caso — circa uno ogni ~75 minuti su tutto il server. Chi è entro ~250 blocchi riceve la direzione. Resta aperto 15 minuti. Cliccalo per prepararti: chi clicca entro 20 secondi entra insieme, fino a 4.'))}
          <a href="#/rules/calamity">${u('calMore')}</a></p></div>
      <div class="card"><h3>🗝️ ${t(L('Rift Key: join to help', 'Rift Key: entra per aiutare'))}</h3>
        <p>${t(L('A Rift Key lets you — and allies within 8 blocks — enter a rift someone else has already started, to help them. It can\'t open a rift on its own. A 60-minute key cooldown applies. Craft: 2 Echo Shards + an Ender Eye + an Amethyst Shard, shapeless.',
                 'Una Rift Key fa entrare te — e gli alleati entro 8 blocchi — in una rift già avviata da altri, per aiutarli. Da sola non apre rift. Si applica un cooldown di 60 minuti. Craft: 2 Frammenti di eco + un Occhio di ender + un Frammento di ametista, senza forma.'))}</p>
        <div class="shapeless" aria-label="Rift Key recipe"><span>🔷</span><span>🔷</span><span>👁️</span><span>💜</span><b>→</b><span>🗝️</span></div></div>
    </div>`)}

  ${section(u('kinds'), `
    <div class="kinds">
      ${RIFT_KINDS.map(k => `
        <article class="card kind" style="--c:${k.color}">
          <h3>${esc(t(k.name))}</h3>
          <div class="kind-stats">
            <div><span>${u('rooms')}</span><b>${esc(t(k.rooms))}</b></div>
            <div><span>${u('timeLimit')}</span><b>${esc(t(k.time))}</b></div>
            <div><span>${u('lives')}</span><b>${esc(t(k.lives))}</b></div>
          </div>
          <p>${esc(t(k.notes))}</p>
        </article>`).join('')}
    </div>`)}

  ${section(u('difficulty'), `
    <p>${t(L('The rift reads the party\'s gear — armor and Protection, best weapon, totems, potions, food and golden apples — into a gear score and picks one of five tiers. Every extra player adds mobs, health and damage. Mobs wear at most an iron helmet and chestplate: the difficulty is in the numbers and the mob types.',
             'La rift legge l\'equipaggiamento del gruppo — armatura e Protezione, arma migliore, totem, pozioni, cibo e mele d\'oro — in un gear score e sceglie uno di cinque livelli. Ogni giocatore in più aggiunge mob, vita e danni. I mob indossano al massimo elmo e corazza di ferro: la difficoltà sta nei numeri e nei tipi di mob.'))}</p>
    <div class="tiers">
      ${RIFT_TIERS.map(tr => `
        <div class="tier" style="--n:${tr.tier}">
          <div class="tier-n">T${tr.tier}</div>
          <div class="tier-score">${tr.score}</div>
          <div class="tier-text">${esc(t(tr.mobs))}</div>
        </div>`).join('')}
    </div>`)}

  ${section(u('inside'), `
    <p>${t(L('A chain of caverns joined by tunnels. Each room\'s exit is sealed by a purple barrier until the room is done.', 'Una catena di caverne unite da tunnel. L\'uscita di ogni stanza è sigillata da una barriera viola finché non la completi.'))}</p>
    <div class="grid g5 rooms">
      ${RIFT_ROOMS.map(r => `<div class="card room"><div class="room-icon" aria-hidden="true">${r.icon}</div><h3>${esc(t(r.name))}</h3><p>${esc(t(r.text))}</p></div>`).join('')}
    </div>`)}

  ${section(u('livesLoot'), `
    <div class="grid g2">
      <div class="card">
        ${list(L([
          'Dying costs a life and puts you back at the last room you cleared. You keep your items and XP.',
          'Out of lives, you spectate — you keep your things and the clear credit if the team wins, but you can\'t loot chests.',
          '<b class="warn">Losing the rift costs everything you carry</b> (everyone out of lives, or time runs out). XP stays.',
          'Walking out by the lodestone or the exit block in an ordinary rift, or winning, is always safe.',
          'Ender chests can\'t be used inside.',
        ], [
          'Morire costa una vita e ti riporta all\'ultima stanza completata. Tieni oggetti e XP.',
          'Senza vite fai lo spettatore — tieni la tua roba e il credito se il team vince, ma non puoi saccheggiare i forzieri.',
          '<b class="warn">Perdere la rift ti costa tutto ciò che porti</b> (tutti senza vite o tempo scaduto). L\'XP resta.',
          'Uscire dalla calamita o dal blocco d\'uscita in una rift ordinaria, o vincere, è sempre sicuro.',
          'Gli ender chest non si possono usare dentro.',
        ]))}
      </div>
      <div class="card">
        ${list(L([
          'The boss drops 3 chests on a first-tier run, up to 5 on the hardest. You have 3 minutes to loot before the rift closes.',
          'Diamonds, emeralds, XP bottles, golden apples, pearls, enchanted books (Mending, Protection IV, Sharpness V, Fortune III, Efficiency V from tier 3), totems, enchanted golden apples, diamond blocks, shulker shells. Top tier: a Netherite Upgrade template and, rarely, a Nether Star.',
          'Netherite doesn\'t scale: a few ancient debris, some scrap and the occasional ingot.',
          'A rare chest can hold a <b>rune</b> for the forge. Vaults sometimes hold a <b>Phoenix Feather</b>.',
        ], [
          'Il boss lascia 3 forzieri al primo livello, fino a 5 al più difficile. Hai 3 minuti per saccheggiare prima che la rift si chiuda.',
          'Diamanti, smeraldi, bottiglie d\'XP, mele d\'oro, perle, libri incantati (Mending, Protezione IV, Affilatezza V, Fortuna III, Efficienza V dal livello 3), totem, mele d\'oro incantate, blocchi di diamante, gusci di shulker. Al livello massimo: un modello di potenziamento in netherite e, raramente, una Stella del Nether.',
          'La netherite non scala: qualche detrito antico, un po\' di frammenti e ogni tanto un lingotto.',
          'Un forziere raro può contenere una <b>runa</b> per la forgia. I caveau a volte hanno una <b>Phoenix Feather</b>.',
        ]))}
      </div>
    </div>`)}

  ${section(u('modifiers'), `
    <div class="grid g2">
      <div class="card stat"><div class="stat-big">×1.35</div><h3>${t(L('Solo bonus', 'Bonus solo'))}</h3><p>${t(L('Finish a rift alone — nobody else ever enters — for more loot and XP.', 'Completa una rift da solo — nessun altro entra mai — per più bottino e XP.'))}</p></div>
      <div class="card stat"><div class="stat-big">−15%</div><h3>${t(L('Streak fatigue', 'Affaticamento'))}</h3><p>${t(L('Each rift boss you killed in the last hour cuts your next rift\'s loot by 15%, down to 40%.', 'Ogni boss di rift ucciso nell\'ultima ora riduce il bottino della prossima del 15%, fino al 40%.'))}</p></div>
    </div>
    <h3 class="sub">${u('challenges')}</h3>
    <p>${t(L('Optional goals shown on floating boards above the start room, vaults and shrines. Every one kept when the boss falls adds to your loot and XP multiplier — <b>one broken by anyone is lost for the whole party.</b>',
             'Obiettivi facoltativi mostrati su pannelli sopra la stanza iniziale, i caveau e i santuari. Ognuno mantenuto quando cade il boss aumenta il moltiplicatore di bottino e XP — <b>se qualcuno ne rompe uno, è perso per tutto il gruppo.</b>'))}</p>
    <div class="grid g3">
      ${RIFT_CHALLENGES.map(c => `
        <div class="card challenge c-${c.level}"><div class="ch-head"><h3>${esc(t(c.name))}</h3><span class="ch-bonus">${c.bonus} ${t(L('each', 'l\'una'))}</span></div>${list(c.list)}</div>`).join('')}
    </div>`)}

  ${section(u('riftBosses'), `
    <div class="grid g2">
      ${RIFT_BOSSES.map(b => `
        <article class="card boss-card"><p class="eyebrow">${esc(t(b.where))}</p><h3>${esc(b.name)}</h3>${list(b.moves)}</article>`).join('')}
    </div>`)}

  ${section(u('relics'), `
    <p>${t(L('Boss-only gear with a small drop chance in the first reward chest. You can\'t get it anywhere else.', 'Equipaggiamento solo da boss, con una piccola probabilità nel primo forziere. Non si trova altrove.'))}</p>
    <div class="grid g3">
      ${RIFT_RELICS.map(r => `
        <div class="card relic" style="--c:${r.color}"><p class="eyebrow">${esc(t(r.rift))}</p>
          ${r.items.map(([n, d]) => `<div class="relic-item"><b>${esc(n)}</b><span>${esc(t(d))}</span></div>`).join('')}</div>`).join('')}
    </div>`)}

  ${section(u('weaponRifts'), `
    <p>${t(L('Thirteen sealed, themed dungeons, one per race weapon. Only a member of the race can craft its key, but anyone can use it — keys are tradeable. Right-click and you plus everyone within 8 blocks go in (up to 4).',
             'Tredici dungeon sigillati e a tema, uno per arma di razza. Solo un membro della razza può craftare la sua chiave, ma chiunque può usarla — le chiavi si scambiano. Tasto destro e tu più chi è entro 8 blocchi entrate (fino a 4).'))}</p>
    <p>${t(L('No ordinary mobs: a parkour over a pit, a handful of strong guardians in full netherite, a sigil puzzle that <i>hurts</i> instead of summoning, the race\'s own boss — and beyond it a vault with the best loot in any rift and a ritual altar that forges that race\'s real weapon. Failing costs what you carry; you can still leave by the lodestone.',
             'Niente mob normali: un parkour sopra un baratro, pochi guardiani forti in netherite completa, un enigma dei sigilli che <i>ferisce</i> invece di evocare, il boss della razza — e oltre, un caveau con il miglior bottino di ogni rift e un altare rituale che forgia la vera arma di quella razza. Fallire costa ciò che porti; puoi comunque uscire dalla calamita.'))}</p>

    <div class="card keyvis">
      <div class="keyvis-grid-wrap">
        <h3>${u('keyVis')}</h3>
        <div class="craft" id="key-grid" aria-live="polite"></div>
        <div class="craft-legend">
          <span>🟫 ${esc(t(KEY_FRAME.corner.name))}</span>
          <span>👁️ ${esc(t(KEY_FRAME.vert.name))}</span>
          <span>💎 ${esc(t(KEY_FRAME.side.name))}</span>
        </div>
      </div>
      <div class="keyvis-info">
        <div class="key-races" role="group" aria-label="Race">
          ${WEAPON_RIFTS.map((w, i) => `<button type="button" class="key-race ${i === 0 ? 'on' : ''}" data-key="${w.race}" title="${esc(t(RACE[w.race].name))}" style="--c:${RARITY[RACE[w.race].rarity].color}">${RACE[w.race].icon}</button>`).join('')}
        </div>
        <div id="key-info"></div>
      </div>
    </div>`)}

  ${section(u('riftCmds'), `
    <div class="cmd-table">
      ${COMMANDS.filter(([c]) => c.startsWith('/rift')).map(([c, d]) => `<div><code>${esc(c)}</code><span>${esc(t(d))}</span></div>`).join('')}
    </div>`)}
`;

PAGES.forge = () => `
  ${head(u('forge'), u('forgeLead'), 'METEORS · BUFFS')}

  ${section(u('findMeteor'), `
    <div class="grid g3">
      <div class="card"><h3>☄️ ${t(L('The crash', 'L\'impatto'))}</h3><p>${t(L('Meteors fall on their own, landing 30–80 blocks from a random online player. Staff can also call them.', 'Le meteore cadono da sole, a 30–80 blocchi da un giocatore online a caso. Anche lo staff può evocarle.'))}
          <a href="#/rules/calamity">${u('calStar')}</a></p></div>
      <div class="card"><h3>🧭 ${t(L('The rumble', 'Il boato'))}</h3><p>${t(L('Everyone within ~250 blocks hears thunder and gets the direction on their action bar (north-east, south…) — never the distance or coordinates.', 'Chi è entro ~250 blocchi sente un tuono e riceve la direzione sull\'action bar (nord-est, sud…) — mai distanza o coordinate.'))}</p></div>
      <div class="card"><h3>⏳ ${t(L('The burn', 'Lo spegnimento'))}</h3><p>${t(L(`It burns for about ${FORGE.burn} minutes; the glowing magma core cools to blackstone as it goes.`, `Brucia per circa ${FORGE.burn} minuti; il nucleo di magma si raffredda in pietranera.`))}</p></div>
    </div>`)}

  ${section(u('useForge'), `
    <div class="grid g2">
      <div class="card">
        ${list(L([
          'Hold a piece of armor — or a sword, axe, pickaxe, shovel or hoe — in your main hand and right-click the core.',
          `Each attempt burns <b>${FORGE.cost.en.replace(' per attempt', '')}</b>. One person at a time.`,
          `A hammer sweeps back and forth along a row of slots. The green slot is the sweet spot, with yellow on either side. <b>${FORGE.strikes} strikes</b>; the hammer speeds up after the first; a strike not made within ${FORGE.timeout} seconds is a miss.`,
          'The finished piece gets an enchant glow, and its tooltip lists the grade, the buffs and who forged it.',
        ], [
          'Tieni in mano un pezzo d\'armatura — o spada, ascia, piccone, pala o zappa — e fai tasto destro sul nucleo.',
          `Ogni tentativo consuma <b>${FORGE.cost.it.replace(' per tentativo', '')}</b>. Una persona alla volta.`,
          `Un martello scorre avanti e indietro su una fila di caselle. La casella verde è il punto giusto, con il giallo ai lati. <b>${FORGE.strikes} colpi</b>; il martello accelera dopo il primo; un colpo non dato entro ${FORGE.timeout} secondi è mancato.`,
          'Il pezzo finito brilla come incantato, e la descrizione mostra voto, potenziamenti e chi l\'ha forgiato.',
        ]))}
      </div>
      <div class="card">
        <h3>${u('grades')}</h3>
        <div class="grades">
          ${FORGE.grades.map(g => `
            <div class="grade${g.min == null ? ' no-pts' : ''}" style="--c:${g.color}">${g.min == null ? '' : `<div class="grade-pts">${g.min}–${g.max}</div>`}<div><b>${esc(t(g.name))}</b><p>${esc(t(g.text))}</p></div></div>`).join('')}
        </div>
      </div>
    </div>`)}

  ${section(u('heat'), `
    <p>${u('heatT')}</p>
    <div class="card heat">
      <label for="heat-range">${u('heatSlider')}: <b id="heat-min">0</b></label>
      <input type="range" id="heat-range" min="0" max="${FORGE.burn}" step="0.5" value="0" />
      <div class="heat-bar"><span id="heat-fill"></span></div>
      <p class="heat-out"><b id="heat-pct">100%</b> · <span id="heat-ex"></span></p>
    </div>`)}

  ${section(u('buffs'), `
    <p class="muted">${u('buffsNote')}</p>
    <div class="tabs" role="tablist">
      ${FORGE.buffs.map((b, i) => `<button type="button" role="tab" class="tab ${i === 0 ? 'on' : ''}" data-tab="${i}" aria-selected="${i === 0}">${b.icon} ${esc(t(b.slot))}</button>`).join('')}
    </div>
    <div id="buff-table"></div>
    <p class="muted small">${t(L('Shovels and hoes roll similar tool buffs. A Flawless pickaxe breaks stone and ores essentially instantly.', 'Pale e zappe hanno potenziamenti simili. Un piccone Impeccabile rompe pietra e minerali praticamente all\'istante.'))}</p>`)}

  ${section(u('coldForge') + ' & ' + u('runes'), `
    <div class="grid g2">
      <div class="card cold">
        <h3>❄️ ${u('coldForge')}</h3>
        ${list(L([
          'A rare blue-lit variant — about 1 in 7 meteors.',
          'Only takes a chestplate, sword or pickaxe already forged <b>Flawless</b>, and costs <b>1 Netherite Ingot</b>.',
          'Rolls a second, different set of buffs. A botched attempt costs nothing but the try.',
          'Only a Cold Forge pass can open a <b>rune slot</b> (sword, axe, chestplate or pickaxe).',
        ], [
          'Una rara variante con luce blu — circa 1 meteora su 7.',
          'Accetta solo corazza, spada o piccone già forgiati <b>Impeccabili</b>, e costa <b>1 Lingotto di netherite</b>.',
          'Tira un secondo set di potenziamenti diverso. Un tentativo rovinato costa solo il tentativo.',
          'Solo un passaggio alla Forgia Fredda può aprire uno <b>slot per rune</b> (spada, ascia, corazza o piccone).',
        ]))}
      </div>
      <div class="card">
        <h3>🔹 ${u('runes')}</h3>
        ${list(L([
          'Separate items found mostly in rift loot — best in red rifts and from their boss.',
          'Each gives a substantial effect to a weapon, chestplate or pickaxe.',
          'Socket: forged piece in the main hand, rune in the off hand, sneak + right-click.',
          'Sneak + right-click with an empty off hand pulls it back out, unbroken.',
        ], [
          'Oggetti a parte, trovati soprattutto nel bottino delle rift — le migliori nelle rift rosse e dal loro boss.',
          'Ognuna dà un effetto consistente a un\'arma, una corazza o un piccone.',
          'Incastonare: pezzo forgiato in mano, runa nella mano secondaria, shift + tasto destro.',
          'Shift + tasto destro con la mano secondaria vuota la toglie, intatta.',
        ]))}
      </div>
    </div>`)}

  ${section(u('forgeRules'), `
    <div class="card">
      ${list(L([
        'Each piece can be forged exactly once, ever.',
        'The forge refuses non-forgeable items, already-forged or ruined pieces, custom-named items and one-of-a-kind items.',
        'Walk away before your first strike and you get everything back. After you\'ve started, remaining strikes count as misses.',
        'If the meteor burns out or the server restarts mid-attempt, you get everything back.',
      ], [
        'Ogni pezzo si può forgiare una sola volta, per sempre.',
        'La forgia rifiuta oggetti non forgiabili, pezzi già forgiati o rovinati, oggetti rinominati e oggetti unici.',
        'Se te ne vai prima del primo colpo riavrai tutto. Dopo aver iniziato, i colpi rimasti contano come mancati.',
        'Se la meteora si spegne o il server si riavvia durante un tentativo, riavrai tutto.',
      ]))}
    </div>`)}
`;

PAGES.bosses = () => `
  ${head(u('bosses'), u('bossesLead'), 'BESTIARY')}
  ${section(u('raceBosses'), `
    <p>${u('raceBossesT')}</p>
    <div class="grid g3 bestiary">
      ${RACE_BOSSES.map(b => {
        const r = RACE[b.race], rar = RARITY[r.rarity];
        return `
        <article class="card boss ${b.redacted ? 'is-glitch' : ''}" style="--c:${rar.color}">
          <div class="boss-sigil" aria-hidden="true">${r.icon}</div>
          <p class="eyebrow">${raceName(r)}</p>
          <h3>${b.redacted ? glitchSpan(b.name, 'Redacted boss') : esc(b.name)}</h3>
          <p class="boss-title">${esc(t(b.title))}</p>
          <p>${esc(t(b.style))}</p>
          ${b.redacted ? '' : `<p class="muted small">${u('weapon')}: ${esc(WEAPON[b.race].name)}</p>`}
        </article>`;
      }).join('')}
    </div>`)}
  ${section(u('riftBosses'), `
    <div class="grid g2">
      ${RIFT_BOSSES.map(b => `<article class="card boss-card"><p class="eyebrow">${esc(t(b.where))}</p><h3>${esc(b.name)}</h3>${list(b.moves)}</article>`).join('')}
    </div>`)}
`;

PAGES.pvp = () => `
  ${head(u('pvp'), u('pvpLead'))}

  ${section(u('teams'), `
    <p>${u('teamsT')}</p>
    <div class="grid g2">
      <div class="cmd-table">${TEAM_COMMANDS.map(([c, d]) => `<div><code>${esc(c)}</code><span>${esc(t(d))}</span></div>`).join('')}</div>
      <div class="perks">${TEAM_PERKS.map(([i, n, d]) => `<div class="card perk"><span class="perk-icon" aria-hidden="true">${i}</span><div><h3>${esc(t(n))}</h3><p>${esc(t(d))}</p></div></div>`).join('')}</div>
    </div>`, 'teams')}

  ${section(u('bounties'), `
    <p>${u('bountiesT')}</p>
    <div class="card bounty">${list(BOUNTY_RULES)}</div>`, 'bounties')}

  ${section(u('tracking'), `
    <div class="grid g2">
      <div class="card"><h3>📡 ${u('tracking')}</h3><p>${u('trackingT')}</p></div>
      <div class="card"><h3>🧭 ${u('tracker')}</h3><p>${u('trackerT')}</p></div>
    </div>`, 'tracking')}
`;

PAGES.items = () => `
  ${head(u('items'), u('itemsLead'))}
  ${ITEM_GROUPS.map(g => section(t(g.name), `
    <div class="grid g3">
      ${g.items.map(([icon, name, desc, redacted]) => `
        <div class="card item ${redacted ? 'is-glitch' : ''}">
          <div class="item-icon" aria-hidden="true">${icon}</div>
          <h3>${esc(name)}</h3>
          <p>${redacted ? `<span class="redact-text">${esc(t(desc))}</span>` : esc(t(desc))}</p>
        </div>`).join('')}
    </div>`)).join('')}
`;

PAGES.join = () => `
  ${head(u('join'), u('joinLead'))}
  <div class="grid g2 join-top">
    ${ipCard()}
    <a class="card card-link discord-card" href="${SITE.discord}" target="_blank" rel="noopener">
      ${discordIcon()}<div><h3>Discord</h3><p>${u('step1t')}</p></div><span class="arrow">↗</span>
    </a>
  </div>
  ${section(u('stepsTitle'), `
    <ol class="steps">
      <li><span class="step-n">01</span><div><h3>${u('step1')}</h3><p>${u('step1t')}</p></div></li>
      <li><span class="step-n">02</span><div><h3>${u('step2')}</h3><p>${u('step2t')}</p></div></li>
      <li><span class="step-n">03</span><div><h3>${u('step3')}</h3><p>${u('step3t')}</p></div></li>
    </ol>`)}
  ${section(u('rules'), `<div class="card"><p>${u('rulesT')}</p><a class="btn btn-ghost" href="#/rules">${u('readRules')} →</a></div>`)}
  ${section(u('commands'), `<div class="cmd-table">${COMMANDS.map(([c, d]) => `<div><code>${esc(c)}</code><span>${esc(t(d))}</span></div>`).join('')}</div>`)}
  ${section(u('controls'), `<div class="controls">${CONTROLS.map(([k, v]) => `<div><kbd>${t(k)}</kbd><span>${t(v)}</span></div>`).join('')}</div>`)}
  ${section(u('faq'), `<div class="faq">${FAQ.map(([q, a]) => `<details class="card"><summary>${esc(t(q))}</summary><p>${esc(t(a))}</p></details>`).join('')}</div>`)}
`;

const openAt = d => new Date(new Date(SITE.launch).getTime() + d.opensAfterHours * 3600000);
function countdown(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
  return (d ? `${d}d ` : '') + `${h}h ${String(m).padStart(2, '0')}m ${String(sec).padStart(2, '0')}s`;
}
const dimState = d => {
  const left = openAt(d) - Date.now();
  return left <= 0 ? `<span class="dim-open">● ${u('open')}</span>` : `${u('opensIn')} <b>${countdown(left)}</b>`;
};
function tickCountdowns() {
  const tick = () => {
    document.querySelectorAll('[data-dim]').forEach(el => { el.innerHTML = dimState(DIMENSIONS.find(d => d.key === el.dataset.dim)); });
    document.querySelectorAll('[data-end]').forEach(el => {
      const left = openAt(DIMENSIONS.find(d => d.key === 'end')) - Date.now();
      if (left <= 0) el.remove(); else el.querySelector('b').textContent = countdown(left);
    });
  };
  tick();
  const id = setInterval(tick, 1000);
  cleanupFns.push(() => clearInterval(id));
}

PAGES.rules = () => `
  ${head(u('rules'), u('rulesLead'))}

  ${section(u('dimensions'), `
    <div class="grid g2">
      ${DIMENSIONS.map(d => `
        <div class="card dim dim-${d.key}"><div class="dim-top"><span class="item-icon" aria-hidden="true">${d.icon}</span><h3>${esc(t(d.name))}</h3></div>
          <p>${esc(t(d.text))}</p><p class="dim-state" data-dim="${d.key}">${dimState(d)}</p></div>`).join('')}
    </div>`)}

  ${section(u('calamity'), `
    <p>${u('calamityT')}</p>
    <div class="card">${list(CALAMITY.rules)}</div>
    <div class="kinds nights">
      ${CALAMITY.nights.map(n => `
        <article class="card kind night" style="--c:${n.color}">
          <h3><span aria-hidden="true">${n.icon}</span> ${esc(n.name)}</h3>
          <p class="night-rising">${esc(n.rising)}</p>
          <div class="kind-stats">
            <div><span>${u('calShare')}</span><b>${n.share}</b></div>
            <div><span>${u('calPortals')}</span><b>${n.portals}</b></div>
            <div><span>${u('calLoot')}</span><b>${n.loot}</b></div>
          </div>
          ${list(n.effects)}
        </article>`).join('')}
    </div>`, 'calamity')}

  ${section(u('mechanics'), `
    <div class="grid g3">
      ${MECHANICS.map(m => `<div class="card"><div class="item-icon" aria-hidden="true">${m.icon}</div><h3>${esc(t(m.title))}</h3><p>${esc(t(m.text))}</p></div>`).join('')}
    </div>
    <h3 class="sub">⚔️ ${u('inCombat')}</h3>
    <div class="card combat"><p class="muted">${u('inCombatT')}</p>${list(COMBAT_RULES)}</div>`, 'mechanics')}

  ${section(u('gameRules'), `<ol class="rules-list">${t(RULES_GAME).map(r => `<li>${r}</li>`).join('')}</ol>`, 'game')}
  ${section(u('discordRules'), `<ol class="rules-list">${t(RULES_DISCORD).map(r => `<li>${esc(r)}</li>`).join('')}</ol>`, 'discord')}
`;

PAGES.notfound = () => `
  <section class="notfound">
    <h1 class="glitch" data-text="404">404</h1>
    <p>${u('notFound')}</p>
    <a class="btn btn-primary" href="#/">${u('back')}</a>
  </section>`;

// ── Page behaviour ───────────────────────────────────────────────────────────
const MOUNT = {};

MOUNT.home = () => { loadStatus(); tickCountdowns(); };
MOUNT.rules = () => tickCountdowns();
MOUNT.join = () => loadStatus();
MOUNT.weapons = () => loadWeaponStatus();

MOUNT.races = () => {
  // filter
  document.querySelectorAll('.chip').forEach(chip => chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === chip));
    const f = chip.dataset.filter;
    document.querySelectorAll('.race').forEach(card => { card.hidden = f !== 'all' && card.dataset.rarity !== f; });
  }));

};

MOUNT.rift = () => {
  const grid = document.getElementById('key-grid');
  const info = document.getElementById('key-info');
  const F = KEY_FRAME;
  const render = key => {
    const w = WRIFT[key], r = RACE[key], rar = RARITY[r.rarity];
    const cells = [F.corner, F.vert, F.corner, F.side, { icon: w.centre[0], name: w.centre[1], centre: true }, F.side, F.corner, F.vert, F.corner];
    grid.innerHTML = `<div class="craft-3">${cells.map(c => `<div class="slot ${c.centre ? 'centre' : ''}" title="${esc(t(c.name))}" style="--c:${rar.color}">${c.icon}</div>`).join('')}</div>`
      + `<div class="craft-arrow">→</div><div class="slot out" style="--c:${rar.color}" title="Rift Key">🗝️</div>`;
    info.innerHTML = w.redacted ? `
      <p class="eyebrow">${raceName(r)}</p><h3>${glitchSpan(w.dungeon, 'Redacted dungeon')}</h3>
      <p class="redact-text">${u('redacted')}</p>` : `
      <p class="eyebrow" style="color:${rar.color}">${esc(t(r.name))} · ${esc(t(rar.name))}</p>
      <h3>${esc(w.dungeon)}</h3>
      <p><b>${t(L('Centre item', 'Oggetto centrale'))}:</b> ${w.centre[0]} ${esc(t(w.centre[1]))}</p>
      ${w.note ? `<p>${esc(t(w.note))}</p>` : ''}
      <p class="muted small">${u('boss')}: ${BOSS[key] ? esc(BOSS[key].name + ', ' + t(BOSS[key].title)) : '—'} · ${u('weapon')}: ${esc(WEAPON[key].name)}</p>`;
  };
  document.querySelectorAll('.key-race').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.key-race').forEach(x => x.classList.toggle('on', x === b));
    render(b.dataset.key);
  }));
  render(WEAPON_RIFTS[0].race);
};

MOUNT.forge = () => {
  // buff tabs
  const table = document.getElementById('buff-table');
  const renderTab = i => {
    const b = FORGE.buffs[i];
    table.innerHTML = `<div class="table-wrap"><table class="table buffs">
      <thead><tr><th>Buff</th><th>${t(L('Stat', 'Statistica'))}</th><th class="c-okay">${t(FORGE.grades[2].name)}</th><th class="c-good">${t(FORGE.grades[1].name)}</th><th class="c-flaw">${t(FORGE.grades[0].name)}</th></tr></thead>
      <tbody>${b.rows.map(([n, o, g, f, stat]) => `<tr><td><b>${esc(n)}</b></td><td class="muted">${esc(t(stat))}</td><td>${o || '·'}</td><td>${g || '·'}</td><td class="flaw">${f || '·'}</td></tr>`).join('')}</tbody>
    </table></div>`;
  };
  document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => { x.classList.toggle('on', x === tab); x.setAttribute('aria-selected', x === tab); });
    renderTab(+tab.dataset.tab);
  }));
  renderTab(0);

  // heat slider
  const range = document.getElementById('heat-range');
  const upd = () => {
    const m = +range.value;
    const pct = Math.round(100 - (m / FORGE.burn) * (100 - FORGE.heatMin));
    document.getElementById('heat-min').textContent = m;
    document.getElementById('heat-pct').textContent = pct + '%';
    const fill = document.getElementById('heat-fill');
    fill.style.width = pct + '%';
    fill.style.setProperty('--h', (pct - FORGE.heatMin) / (100 - FORGE.heatMin));
    document.getElementById('heat-ex').textContent =
      `${t(L('Flawless Vitality', 'Vitality Impeccabile'))}: +${(5 * pct / 100).toFixed(1)} ${t(L('max health', 'vita massima'))}`;
  };
  range.addEventListener('input', upd); upd();

};

// ── Decode effect on headings (readable within ~0.4s) ────────────────────────
const GLYPHS = '▓▒░█▚▞#%&@$<>/\\';
function decode(el) {
  if (reduceMotion) return;
  const text = el.textContent;
  const nodes = [...el.childNodes];
  let frame = 0; const frames = 12;
  const tick = () => {
    frame++;
    const revealed = Math.floor((frame / frames) * text.length);
    el.textContent = text.split('').map((c, i) => i < revealed || c === ' ' ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]).join('');
    if (frame < frames) requestAnimationFrame(() => setTimeout(tick, 25));
    else { el.textContent = ''; nodes.forEach(n => el.appendChild(n)); }
  };
  tick();
}

// ── Chrome: nav, footer, language ────────────────────────────────────────────
const NAV = ['home', 'races', 'weapons', 'rift', 'forge', 'bosses', 'pvp', 'items', 'rules', 'join'];
let cleanupFns = [];

function renderChrome(page) {
  document.documentElement.lang = lang;
  document.getElementById('nav').innerHTML = NAV.map(p =>
    `<a href="#/${p === 'home' ? '' : p}" class="${p === page ? 'on' : ''}"${p === page ? ' aria-current="page"' : ''}>${u(p)}</a>`).join('')
    + `<a class="nav-discord" href="${SITE.discord}" target="_blank" rel="noopener">${discordIcon()} Discord</a>`;
  const langBtn = document.getElementById('lang');
  langBtn.hidden = !MULTILANG;
  langBtn.innerHTML = `<span class="${lang === 'it' ? 'on' : ''}">IT</span><span class="${lang === 'en' ? 'on' : ''}">EN</span>`;
  document.getElementById('footer').innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand"><span class="glitch" data-text="FORGED SMP">FORGED SMP</span><p class="muted small">${u('tagline')}</p></div>
      <nav class="footer-nav" aria-label="Footer">${NAV.map(p => `<a href="#/${p === 'home' ? '' : p}">${u(p)}</a>`).join('')}</nav>
      <div class="footer-meta">
        <a class="btn btn-ghost btn-sm" href="${SITE.discord}" target="_blank" rel="noopener">${discordIcon()} Discord</a>
        <p class="muted small">${u('updated')}: ${fmtDate(SITE.updated)}</p>
        <p class="muted tiny">${u('notMojang')}</p>
      </div>
    </div>`;
}

function route() {
  cleanupFns.forEach(f => f()); cleanupFns = [];
  const [, raw = '', anchor] = (location.hash || '#/').match(/^#\/?([^#/]*)(?:\/(.*))?/) || [];
  const page = raw === '' ? 'home' : PAGES[raw] ? raw : 'notfound';
  renderChrome(page);
  const app = document.getElementById('app');
  app.innerHTML = `<div class="page page-${page}">${PAGES[page]()}</div>`;
  document.title = page === 'home' ? `${SITE.name} — ${u('tagline')}` : `${u(page) || '404'} · ${SITE.name}`;
  MOUNT[page]?.();
  bindCopy();
  document.querySelectorAll('.page-head h1.decode, .block h2.decode').forEach((h, i) => setTimeout(() => decode(h), i * 40));
  if (anchor) document.getElementById(anchor)?.scrollIntoView();
  else window.scrollTo(0, 0);
  closeMenu();
}

function bindCopy() {
  document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); toast(u('copied')); }
    catch { toast(b.dataset.copy); }
  }));
}

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('show'), 1800);
}

const menuBtn = document.getElementById('menu-btn');
function closeMenu() { document.body.classList.remove('menu-open'); menuBtn.setAttribute('aria-expanded', 'false'); }
menuBtn.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.getElementById('lang').addEventListener('click', () => {
  lang = lang === 'it' ? 'en' : 'it';
  try { localStorage.setItem('forged-lang', lang); } catch { /* ignore */ }
  const y = window.scrollY;
  route();
  window.scrollTo(0, y);
});

function discordIcon() {
  return `<svg class="i-discord" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.6 1.3a18.3 18.3 0 0 0-5.6 0L8.6 3a19.7 19.7 0 0 0-4.9 1.5C.6 9.1-.3 13.6.1 18.1a19.9 19.9 0 0 0 6 3l1.3-2.1a12.9 12.9 0 0 1-2-1l.5-.4a14.2 14.2 0 0 0 12.2 0l.5.4c-.6.4-1.3.7-2 1l1.3 2.1a19.8 19.8 0 0 0 6-3c.5-5.2-.8-9.7-3.6-13.7ZM8 15.4c-1.2 0-2.2-1.1-2.2-2.4S6.8 10.6 8 10.6s2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Z"/></svg>`;
}

addEventListener('hashchange', route);
route();
