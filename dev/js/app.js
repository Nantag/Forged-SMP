import {
  SITE, NEWS, PILLARS, GEM_TIERS, GEMS, OTHER_UNIQUES, GUARDIANS, RIFT_BOSSES, SEASON,
  RIFT_KINDS, RIFT_TIERS, RIFT_ROOMS, RIFT_CHALLENGES, GEM_KEY_FRAMES, GEM_VAULTS,
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
  home: L('Home', 'Home'), gems: L('Gems', 'Gemme'), rift: L('The Rift', 'La Rift'),
  forge: L('Forge', 'Forgia'), bosses: L('Bosses', 'Boss'), pvp: L('PvP', 'PvP'), items: L('Items', 'Oggetti'), rules: L('Rules', 'Regole'), join: L('Join', 'Entra'),
  tagline: L('Something in this world is wrong. Forge anyway.', 'Qualcosa in questo mondo non va. Forgia comunque.'),
  eyebrow: L('Minecraft Java · Story-driven survival SMP · Season 3', 'Minecraft Java · SMP survival a storia · Stagione 3'),
  intro: L('A heavily customised survival server built on around forty of our own plugins — made to be played, recorded and watched.',
           'Un server survival pesantemente personalizzato, costruito su una quarantina di plugin nostri — fatto per essere giocato, registrato e guardato.'),
  discordBtn: L('Join the Discord', 'Entra nel Discord'),
  howJoin: L('How to join', 'Come entrare'),
  address: L('Server address', 'Indirizzo del server'),
  addressDiscord: L('Address on Discord', 'Indirizzo sul Discord'),
  copy: L('Copy', 'Copia'), copied: L('Copied!', 'Copiato!'),
  online: L('online', 'online'), offline: L('Offline', 'Offline'), players: L('players', 'giocatori'),
  seasonName: L('Season 3', 'Stagione 3'),
  seasonSoon: L('starting soon — the date comes on Discord', 'in arrivo — la data arriva sul Discord'),
  seasonIn: L('starts in', 'inizia tra'),
  day: L('Day', 'Giorno'),
  pillarsTitle: L('What makes it different', 'Cosa lo rende diverso'),
  stepsTitle: L('Get in, in three steps', 'Entra in tre passi'),
  step1: L('Join the Discord', 'Entra nel Discord'), step1t: L('Rules, announcements and the server guide live there.', 'Lì trovi regole, annunci e la guida del server.'),
  step2: L('Connect', 'Connettiti'), step2t: L(`Launch Minecraft ${SITE.version} and add the server address.`, `Avvia Minecraft ${SITE.version} e aggiungi l'indirizzo del server.`),
  step3: L('Make your team', 'Fai la tua squadra'), step3t: L('The first hour is grace: nobody can hurt anybody. Team up with /team before PvP opens.', 'La prima ora è di tregua: nessuno può ferire nessuno. Fai squadra con /team prima che si apra il PvP.'),
  news: L('Latest news', 'Ultime novità'),
  updated: L('Last updated', 'Ultimo aggiornamento'),
  notMojang: L('Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.', 'Non è un prodotto ufficiale Minecraft. Non approvato né associato a Mojang o Microsoft.'),
  // gems
  gemsLead: L('Fifteen gems, and only one of each exists. Thirteen are won in the Rift\'s gem vaults; the two Chromatic gems turn up only at events. Carry one and it\'s yours: F for its power, Sneak + F for its other one.',
              'Quindici gemme, e ne esiste una sola per tipo. Tredici si vincono nei caveau delle gemme della Rift; le due Cromatiche compaiono solo agli eventi. Portane una ed è tua: F per il suo potere, Shift + F per l\'altro.'),
  gemRules: L('How gems work', 'Come funzionano le gemme'),
  gemTiersT: L('Tiers', 'Rarità'),
  gemOpens: L('vaults open {d}', 'caveau aperti {d}'),
  gemNoVault: L('no vault — only at events', 'nessun caveau — solo agli eventi'),
  gemList: L('The fifteen', 'Le quindici'),
  gifts: L('Always on', 'Sempre attivo'),
  power1: L('Power', 'Potere'), power2: L('Second power', 'Secondo potere'),
  vault: L('Vault', 'Caveau'),
  uniquesT: L('The other one-of-a-kind items', 'Gli altri oggetti unici'),
  uniquesLead: L('Only one of each of these exists too: the Riftborn gear is forged, the relics are found. Lost, each can be had again.',
                 'Anche di questi ne esiste uno solo: l\'equipaggiamento Riftborn si forgia, le reliquie si trovano. Se va perso, si può riottenere.'),
  wsLive: L('Live from the server', 'In diretta dal server'),
  wsUpdated: L('updated {t}', 'aggiornato {t}'),
  wsOwnedBy: L('Owned by', 'Di'),
  wsCarried: L('carrying it', 'ce l\'ha addosso'),
  wsStashed: L('Somewhere in the world', 'Da qualche parte nel mondo'),
  wsStashedT: L('not on them right now', 'non ce l\'ha addosso ora'),
  wsNoOwner: L('owner unknown', 'proprietario sconosciuto'),
  wsFree: L('In its vault', 'Nel suo caveau'),
  wsFreeT: L('nobody has it — its vault can be conquered', 'nessuno ce l\'ha — il suo caveau si può conquistare'),
  wsFreeEvent: L('Not in the world', 'Non è nel mondo'),
  wsFreeEventT: L('it turns up only at events', 'compare solo agli eventi'),
  wsFreeOther: L('Not in the world', 'Non è nel mondo'),
  wsFreeOtherT: L('it can be had again', 'si può riottenere'),
  wsOut: L('Out in the world', 'Nel mondo'),
  wsOutT: L('not seen on anyone yet', 'non ancora vista addosso a nessuno'),
  wsSeen: L('seen {t}', 'vista {t}'),
  wsJustNow: L('just now', 'adesso'),
  wsAgo: L('{t} ago', '{t} fa'),
  wsCounts: L('{held} carried · {stashed} elsewhere · {free} unclaimed', '{held} addosso · {stashed} altrove · {free} non reclamate'),
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
  gemVaults: L('The 13 gem vaults', 'I 13 caveau delle gemme'),
  keyVis: L('Key recipe', 'Ricetta della chiave'),
  riftBosses: L('Rift bosses', 'Boss della Rift'),
  riftCmds: L('Your record', 'Il tuo registro'),
  // forge
  forgeLead: L('The Forge is a block you craft and place, like a smithing table. Hammer a piece of gear on it in a timing minigame to earn a permanent buff — or ruin it. Each piece gets exactly one shot, ever.',
               'La Forgia è un blocco che si crafta e si piazza, come un tavolo da forgiatura. Martellaci sopra un pezzo di equipaggiamento in un minigioco a tempo per un potenziamento permanente — o rovinalo. Ogni pezzo ha un solo tentativo, per sempre.'),
  forgeBlock: L('The Forge block', 'Il blocco della Forgia'),
  useForge: L('Using the forge', 'Usare la forgia'),
  grades: L('Grades', 'Voti'),
  buffs: L('What each piece can roll', 'Cosa può uscire per ogni pezzo'),
  buffsNote: L('Okay / Good / Flawless strength. Buffs are normal attribute bonuses — nothing to activate.',
               'Forza Discreto / Buono / Impeccabile. Sono normali bonus d\'attributo — niente da attivare.'),
  coldTech: L('Frost techniques', 'Tecniche del gelo'),
  coldTechNote: L('Okay / Good / Flawless strength. Okay and Good teach one technique; Flawless teaches two — you pick the first at full strength, the second comes at Good.',
                  'Forza Discreto / Buono / Impeccabile. Discreto e Buono insegnano una tecnica; Impeccabile due — scegli la prima al massimo, la seconda arriva a Buono.'),
  runesNote: L('Common / Rare / Epic: the rune\'s own rarity, rolled when it drops.', 'Comune / Rara / Epica: la rarità della runa, decisa quando cade.'),
  coldForge: L('The Cold Forge', 'La Forgia Fredda'),
  runes: L('Runes', 'Rune'),
  forgeRules: L('Good to know', 'Da sapere'),
  // bosses
  bossesLead: L('Named bosses, fought one at a time in an arena of their own, escalating through phases. Some phases need teamwork — smash crystals, break weak points, hit the vulnerability window. A boss bar and a soundtrack that shifts from calm to intense come with them.',
                'Boss con un nome, affrontati uno alla volta nella loro arena, con fasi sempre più dure. Alcune fasi richiedono gioco di squadra — distruggi cristalli, rompi punti deboli, colpisci nella finestra giusta. Con loro arrivano una barra della vita e una colonna sonora che passa dal calmo all\'intenso.'),
  guardians: L('The gem guardians', 'I guardiani delle gemme'),
  guardiansT: L('Thirteen, one at the end of each gem vault. Each fights with the very gem it guards — learn the gem and you know the fight.',
                'Tredici, uno in fondo a ogni caveau. Ognuno combatte con la gemma stessa che custodisce — conosci la gemma e conosci lo scontro.'),
  // pvp
  pvpLead: L('PvP is on — with rules. Teams for your crew, bounties with real items, and a daily hour where nobody can hide.',
             'Il PvP è attivo — con regole. Team per il tuo gruppo, taglie con oggetti veri e un\'ora al giorno in cui nessuno può nascondersi.'),
  teams: L('Teams', 'Team'), teamsT: L('Up to 5 players. No stat boosts — only teamplay tools.', 'Fino a 5 giocatori. Nessun bonus alle statistiche — solo strumenti di squadra.'),
  bounties: L('Bounties', 'Taglie'), bountiesT: L('Put real items on someone\'s head. Whoever kills them next gets every item, instantly.', 'Metti oggetti veri sulla testa di qualcuno. Chi lo uccide per primo prende tutto, all\'istante.'),
  tracking: L('Tracking Hour', 'Tracking Hour'),
  trackingT: L('From one day into the season, every day at 21:00 (Italian time) the Locator Bar — the HUD strip showing the direction of every other online player — switches on for everyone, for 15 minutes. Five minutes before, everyone gets a warning in chat: hide better, get safe, or get ready to hunt.',
               'Da un giorno dopo l\'inizio, ogni giorno alle 21:00 la Locator Bar — la barra che mostra la direzione di ogni altro giocatore online — si accende per tutti, per 15 minuti. Cinque minuti prima arriva un avviso in chat: nasconditi meglio, mettiti al sicuro o preparati a cacciare.'),
  tracker: L('The Tracker', 'Il Tracker'),
  trackerT: L('A staff-given compass that ignores Tracking Hour and works any time. Pick an online player: they\'re warned immediately, a countdown sits on your action bar, and one minute later your compass locks onto their live position for 5 minutes. It can\'t be dropped or stored while running, and it\'s consumed at the end.',
              'Una bussola data dallo staff che ignora la Tracking Hour e funziona sempre. Scegli un giocatore online: viene avvisato subito, un conto alla rovescia appare sulla tua action bar e un minuto dopo la bussola punta la sua posizione in tempo reale per 5 minuti. Non si può buttare né riporre mentre è attiva, e alla fine si consuma.'),
  // items
  itemsLead: L('Custom gear around the server. Much of it is crafted (look in your recipe book); the rest is found in the Rift or won from bosses.',
               'Equipaggiamento personalizzato sul server. Gran parte si crafta (guarda nel ricettario); il resto si trova nella Rift o si vince dai boss.'),
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
  calamity: L('Calamity', 'Calamità'), calamityTitle: L('Calamity nights', 'Notti di calamità'),
  calHow: L('How it works', 'Come funziona'), calNights: L('The three nights', 'Le tre notti'),
  calamityT: L('Now and then a night is not an ordinary night. A Blood Moon, a Starfall or a Thin Veil rises at dusk, and nobody sleeps until dawn.', 'Ogni tanto una notte non è una notte qualunque. Al tramonto sorge una Blood Moon, una Starfall o un Thin Veil, e nessuno dorme fino all\'alba.'),
  calShare: L('Of calamities', 'Delle calamità'), calPortals: L('Portal every', 'Portale ogni'), calLoot: L('Rift loot', 'Bottino rift'),
  calMore: L('Calamity nights open many more.', 'Le notti di calamità ne aprono molti di più.'),
  calStar: L('During a Starfall, star-touched meteors fall too: forging on them is free.', 'Durante una Starfall cadono anche meteore toccate dalle stelle: forgiarci sopra è gratis.'),
  open: L('Open', 'Aperto'), opensIn: L('Opens in', 'Si apre tra'), closed: L('Closed', 'Chiuso'),
  afterStart: L('{t} after the season starts', '{t} dopo l\'inizio della stagione'),
  seasonT: L('The season', 'La stagione'),
  seasonLead: L('Season 3 doesn\'t hand you everything on day one. It opens up a piece at a time — each step arrives with a title on screen, and the in-game guide (/guide) gets its page.',
               'La Stagione 3 non ti dà tutto il primo giorno. Si apre un pezzo alla volta — ogni passo arriva con un titolo a schermo, e la guida in gioco (/guide) riceve la sua pagina.'),
  seasonStart: L('Start', 'Inizio'),
  inCombat: L('While in combat', 'Durante il combattimento'),
  inCombatT: L('These apply only while you\'re flagged as in combat. Outside of combat, vanilla behavior applies.', 'Valgono solo mentre sei segnalato come in combattimento. Fuori dal combattimento vale il comportamento vanilla.'),
  gameRules: L('In-game rules', 'Regole in gioco'),
  discordRules: L('Discord rules', 'Regole del Discord'),
  notFound: L('This page slipped through a rift.', 'Questa pagina è finita in una rift.'),
  back: L('Back home', 'Torna alla home'),
};
const u = k => t(U[k]);

// ── Lookups ──────────────────────────────────────────────────────────────────
const GEM_TIER  = Object.fromEntries(GEM_TIERS.map(g => [g.key, g]));
const GEM_VAULT = Object.fromEntries(GEM_VAULTS.map(v => [v.gem, v]));
const GEM    = Object.fromEntries(GEMS.map(g => [g.key, g]));
const glitchSpan = (text, label) =>
  `<span class="glitch-text" data-text="${esc(text)}" aria-label="${esc(label)}"><span aria-hidden="true">${esc(text)}</span></span>`;
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

// ── Live item status (written by the server's WeaponTracker plugin) ─────────
const fillIn = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
function ago(ms) {
  const min = Math.max(0, Math.round((Date.now() - ms) / 60000));
  if (min < 2) return u('wsJustNow');
  const span = min < 60 ? `${min} min` : min < 48 * 60 ? `${Math.round(min / 60)} h` : `${Math.round(min / 1440)} ${t(L('days', 'giorni'))}`;
  return fillIn(u('wsAgo'), { t: span });
}

function itemStatusHtml(info) {
  // Who has it, never where it is: the file carries no positions, and none are shown.
  const sub = text => `<span class="ws-sub">${text}</span>`;
  const owner = info.owner ? `${u('wsOwnedBy')} <b>${esc(info.owner)}</b>` : '';
  const seen = info.seen ? ' · ' + fillIn(u('wsSeen'), { t: ago(info.seen) }) : '';
  const gem = String(info.id).startsWith('gem:') ? GEMS.find(g => g.id === info.id) : null;
  switch (info.state) {
    case 'held':
      return `<span class="ws-icon" aria-hidden="true">✋</span><span>${owner || u('wsOut')}</span>${sub(u('wsCarried') + seen)}`;
    case 'stashed':
      return owner
        ? `<span class="ws-icon" aria-hidden="true">📦</span><span>${owner}</span>${sub(u('wsStashedT') + seen)}`
        : `<span class="ws-icon" aria-hidden="true">📦</span><span>${u('wsStashed')}</span>${sub(u('wsNoOwner') + seen)}`;
    case 'out':
      return `<span class="ws-icon" aria-hidden="true">✨</span><span>${u('wsOut')}</span>${sub(u('wsOutT'))}`;
    case 'free':
      if (!gem) return `<span class="ws-icon" aria-hidden="true">🔓</span><span>${u('wsFreeOther')}</span>${sub(u('wsFreeOtherT'))}`;
      return gem.tier === 'chromatic'
        ? `<span class="ws-icon" aria-hidden="true">🔒</span><span>${u('wsFreeEvent')}</span>${sub(u('wsFreeEventT'))}`
        : `<span class="ws-icon" aria-hidden="true">🔒</span><span>${u('wsFree')}</span>${sub(u('wsFreeT'))}`;
    default:
      return '';
  }
}

async function loadItemStatus() {
  if (!SITE.itemStatus) return;
  let data;
  try {
    const res = await fetch(SITE.itemStatus, { cache: 'no-cache' });
    if (!res.ok) return;
    data = await res.json();
  } catch { return; } // no file yet, or offline: the page just shows no status
  if (!data || !Array.isArray(data.items)) return;
  const counts = { held: 0, stashed: 0, free: 0 };
  for (const info of data.items) {
    if (!info || !info.id) continue;
    const el = document.querySelector(`[data-item-status="${CSS.escape(info.id)}"]`);
    const html = itemStatusHtml(info);
    if (!el || !html) continue;
    el.innerHTML = html;
    el.className = `w-status ${info.state}`;
    el.hidden = false;
    if (!String(info.id).startsWith('gem:')) continue;
    if (info.state === 'held') counts.held++;
    else if (info.state === 'stashed' || info.state === 'out') counts.stashed++;
    else if (info.state === 'free') counts.free++;
  }
  const live = document.getElementById('gem-live');
  if (live && data.updated) {
    live.innerHTML = `<span><span class="dot"></span><b>${u('wsLive')}</b></span><span>${fillIn(u('wsCounts'), counts)}</span>`
      + `<span class="muted">${fillIn(u('wsUpdated'), { t: ago(data.updated) })}</span>`;
    live.hidden = false;
  }
}

const launchAt = () => SITE.launch ? new Date(SITE.launch).getTime() : null;
const dayNumber = () => Math.max(1, Math.floor((Date.now() - launchAt()) / 86400000) + 1);
// "after 2 hours" / "after 3 days" for a point `h` hours into the season
const afterLabel = h => h < 24
  ? t(L(`after ${h} hour${h === 1 ? '' : 's'}`, `dopo ${h} or${h === 1 ? 'a' : 'e'}`))
  : t(L(`after ${h / 24} day${h === 24 ? '' : 's'}`, `dopo ${h / 24} giorn${h === 24 ? 'o' : 'i'}`));
function seasonLine() {
  const at = launchAt();
  if (at == null) return `<span class="live-dot off"></span><b>${u('seasonName')}</b> · ${u('seasonSoon')}`;
  if (at > Date.now()) return `<span class="live-dot off"></span><b>${u('seasonName')}</b> ${u('seasonIn')} <b data-launch>${countdown(at - Date.now())}</b>`;
  return `<span class="live-dot"></span><b>${u('seasonName')}</b> · ${u('day')} ${dayNumber()}`;
}

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
    <p class="since">${seasonLine()}</p>
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

const gemTierBadge = key => `<span class="rarity" style="--c:${GEM_TIER[key].color};color:${GEM_TIER[key].color}">${esc(t(GEM_TIER[key].name))}</span>`;

PAGES.gems = () => {
  const order = GEM_TIERS.map(g => g.key);
  const sorted = [...GEMS].sort((a, b) => order.indexOf(a.tier) - order.indexOf(b.tier));
  return `
  ${head(u('gems'), u('gemsLead'), '15 · ONE OF EACH')}
  ${section(u('gemRules'), `
    <div class="grid g2 rule-cards">
      <div class="card rule good"><h3>☝️ ${t(L('One at a time', 'Una alla volta'))}</h3><p>${t(L('Only one gem works: the one in your hand (main hand first, then off hand) — or, with none in hand, the first gem on your hotbar. Gems deeper in your bag do nothing. Switching is easy.', 'Funziona una gemma sola: quella in mano (prima la mano principale, poi la secondaria) — oppure, senza gemme in mano, la prima gemma della hotbar. Quelle più in fondo all\'inventario non fanno niente. Cambiarla è facile.'))}</p></div>
      <div class="card rule"><h3>💀 ${t(L('Always dropped', 'Si perde sempre alla morte'))}</h3><p>${t(L('Whoever dies with a gem drops it — always, even with keepInventory. No chest, ender chest, bundle, item frame or pot takes one, and mobs can\'t pick one up: a gem is in someone\'s hands, or on the ground.', 'Chi muore con una gemma la lascia cadere — sempre, anche con keepInventory. Nessuna cassa, ender chest, sacchetto, cornice o vaso la accetta, e i mob non la raccolgono: una gemma è in mano a qualcuno, o per terra.'))}</p></div>
      <div class="card rule"><h3>🕳️ ${t(L('Lost — and back in its vault', 'Persa — e di nuovo nel suo caveau'))}</h3><p>${t(L('A gem is lost if it falls into the void, lies on the ground for 30 minutes, or its holder stops playing for 7 days. Then its vault can be conquered again. Dropped in a rift? When the rift closes, it comes back to you.', 'Una gemma va persa se cade nel vuoto, resta per terra 30 minuti, o chi la tiene smette di giocare per 7 giorni. A quel punto il suo caveau si può conquistare di nuovo. Caduta in una rift? Quando la rift si chiude, torna da te.'))}</p></div>
      <div class="card rule"><h3>🪞 ${t(L('Copies crumble', 'Le copie si sbriciolano'))}</h3><p>${t(L('There is only one of each. Any copy that isn\'t the real one crumbles to dust.', 'Ce n\'è una sola per tipo. Qualsiasi copia che non sia quella vera si sbriciola in polvere.'))}</p></div>
    </div>`)}

  ${section(u('gemTiersT'), `
    <div class="grid g3">
      ${GEM_TIERS.map(tier => `
        <div class="card" style="--c:${tier.color}">
          <h3 style="color:${tier.color}">${esc(t(tier.name))}</h3>
          <p>${GEMS.filter(g => g.tier === tier.key).map(g => `${g.icon} <a href="#/gems/gem-${g.key}">${esc(g.name.replace(' Gem', ''))}</a>`).join(' · ')}</p>
          <p class="muted small">${tier.opensDay ? fillIn(u('gemOpens'), { d: afterLabel(tier.opensDay * 24) }) : u('gemNoVault')}</p>
        </div>`).join('')}
    </div>`)}

  ${section(u('gemList'), `
    <p class="w-live" id="gem-live" hidden></p>
    <div class="grid g2 weapon-grid">
      ${sorted.map(g => {
        const tier = GEM_TIER[g.tier], v = GEM_VAULT[g.key];
        return `
        <article class="card weapon gem" id="gem-${g.key}" style="--c:${tier.color}">
          <div class="weapon-top">
            <div class="race-icon" aria-hidden="true">${g.icon}</div>
            <div><h3>${esc(g.name)}</h3><span class="muted small">${gemTierBadge(g.tier)} · ${esc(t(g.theme))}</span></div>
          </div>
          <div class="w-status" data-item-status="${esc(g.id)}" hidden></div>
          <dl class="abilities">
            <div><dt>${u('gifts')}</dt><dd>${list(g.gifts)}</dd></div>
            <div><dt>${u('power1')} <kbd>F</kbd></dt><dd>${esc(t(g.f))}</dd></div>
            ${g.sf ? `<div class="own"><dt>${u('power2')} <kbd>⇧ + F</kbd></dt><dd>${esc(t(g.sf))}</dd></div>` : ''}
          </dl>
          <p class="muted small">${u('vault')}: ${v ? `<a href="#/rift">${esc(v.dungeon)}</a>` : u('gemNoVault')}</p>
        </article>`;
      }).join('')}
    </div>`)}

  ${section(u('uniquesT'), `
    <p>${u('uniquesLead')}</p>
    <div class="grid g3">
      ${OTHER_UNIQUES.map(o => `
        <div class="card item ${o.redacted ? 'is-glitch' : ''}">
          <div class="item-icon" aria-hidden="true">${o.icon}</div>
          <h3>${esc(o.name)}</h3>
          <p class="muted small">${o.redacted ? `<span class="redact-text">${esc(t(o.note))}</span>` : esc(t(o.note))}</p>
          <div class="w-status" data-item-status="${esc(o.id)}" hidden></div>
        </div>`).join('')}
    </div>
    <p class="muted small"><a href="#/items">${t(L('Everything else on the Items page', 'Tutto il resto nella pagina Oggetti'))} →</a></p>`)}
`;
};

PAGES.rift = () => `
  ${head(u('rift'), u('riftLead'), 'PvE · ENDGAME')}

  ${section(u('gettingIn'), `
    <div class="grid g2">
      <div class="card"><h3>🌀 ${t(L('Random portals', 'Portali casuali'))}</h3>
        <p>${t(L('Rifts are rare. Every 3 hours there\'s an even chance a tear opens, one at a time: 30–70 blocks from a player who has been on for at least 10 minutes, never near spawn. A beam of light marks it, and everyone within 1,200 blocks is told the direction. It stays open 25 minutes. Click it to ready up: everyone who clicks within 20 seconds goes in together, up to 4.',
                 'Le rift sono rare. Ogni 3 ore c\'è una possibilità su due che si apra uno squarcio, uno alla volta: a 30–70 blocchi da un giocatore online da almeno 10 minuti, mai vicino allo spawn. Un fascio di luce lo segna, e chi è entro 1.200 blocchi riceve la direzione. Resta aperto 25 minuti. Cliccalo per prepararti: chi clicca entro 20 secondi entra insieme, fino a 4.'))}
          <a href="#/calamity">${u('calMore')}</a></p></div>
      <div class="card"><h3>🗝️ ${t(L('Rift Key: join to help', 'Rift Key: entra per aiutare'))}</h3>
        <p>${t(L('A Rift Key lets you — and allies within 8 blocks — enter a rift someone else has already started, to help them. It can\'t open a rift on its own. A 60-minute key cooldown applies. Craft: 2 Echo Shards + an Ender Eye + an Amethyst Shard, shapeless.',
                 'Una Rift Key fa entrare te — e gli alleati entro 8 blocchi — in una rift già avviata da altri, per aiutarli. Da sola non apre rift. Si applica un cooldown di 60 minuti. Craft: 2 Frammenti di eco + un Occhio di ender + un Frammento di ametista, senza forma.'))}</p>
        <div class="shapeless" aria-label="Rift Key recipe"><span>🔷</span><span>🔷</span><span>👁️</span><span>💜</span><b>→</b><span>🗝️</span></div></div>
    </div>`)}

  ${section(u('kinds'), `
    <div class="kinds">
      ${RIFT_KINDS.map(k => `
        <article class="card kind ${k.glitch ? 'is-glitch' : ''}" style="--c:${k.color}">
          <h3>${k.glitch ? glitchSpan(t(k.name), 'Redacted rift') : esc(t(k.name))}</h3>
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
          'A killing blow doesn\'t kill you: you\'re <b>downed</b>, and you bleed out in 30 seconds unless a teammate crouches next to you for 3.5 seconds to pick you up. Nothing drops.',
          'Bleeding out costs a life and puts you back at the last room you cleared, with your items and XP.',
          'Out of lives, you spectate — you keep your things and the clear credit if the team wins, but you can\'t loot chests.',
          '<b class="warn">Losing the rift costs everything you carry</b> (everyone out of lives, or time runs out). XP stays. The gem vaults work the same way.',
          'Walking out by the lodestone in an ordinary rift, or winning, is always safe.',
          'Ender chests can\'t be used inside.',
        ], [
          'Un colpo letale non ti uccide: vai <b>a terra</b>, e ti dissangui in 30 secondi se un compagno non si accovaccia accanto a te per 3,5 secondi per rialzarti. Non cade niente.',
          'Dissanguarti costa una vita e ti riporta all\'ultima stanza completata, con oggetti e XP.',
          'Senza vite fai lo spettatore — tieni la tua roba e il credito se il team vince, ma non puoi saccheggiare i forzieri.',
          '<b class="warn">Perdere la rift ti costa tutto ciò che porti</b> (tutti senza vite o tempo scaduto). L\'XP resta. I caveau delle gemme funzionano allo stesso modo.',
          'Uscire dalla calamita in una rift ordinaria, o vincere, è sempre sicuro.',
          'Gli ender chest non si possono usare dentro.',
        ]))}
      </div>
      <div class="card">
        ${list(L([
          'The boss drops 2 to 4 chests, more on the harder tiers — one more in a red rift. You have 3 minutes to loot before the rift closes.',
          'Diamonds, emeralds, XP bottles, golden apples, pearls, enchanted books (Mending, Protection IV, Sharpness V, Fortune III, Efficiency V from tier 3), totems, enchanted golden apples, diamond blocks, shulker shells. Top tier: a Netherite Upgrade template and, rarely, a Nether Star.',
          'Ordinary rifts are the lean ones. <b>Red rifts pay far more</b>, plus a table of their own: Rift Cores, epic runes, netherite, totems and books.',
          'Netherite doesn\'t scale: a few ancient debris, some scrap and the occasional ingot.',
          'Chests sometimes hold a <b>forge rune</b> (the boss\'s chests far more often), and vaults sometimes a <b>Phoenix Feather</b>.',
        ], [
          'Il boss lascia da 2 a 4 forzieri, di più ai livelli difficili — uno in più in una rift rossa. Hai 3 minuti per saccheggiare prima che la rift si chiuda.',
          'Diamanti, smeraldi, bottiglie d\'XP, mele d\'oro, perle, libri incantati (Mending, Protezione IV, Affilatezza V, Fortuna III, Efficienza V dal livello 3), totem, mele d\'oro incantate, blocchi di diamante, gusci di shulker. Al livello massimo: un modello di potenziamento in netherite e, raramente, una Stella del Nether.',
          'Le rift ordinarie sono le più magre. <b>Le rift rosse pagano molto di più</b>, più una tabella tutta loro: Nuclei della Rift, rune epiche, netherite, totem e libri.',
          'La netherite non scala: qualche detrito antico, un po\' di frammenti e ogni tanto un lingotto.',
          'I forzieri a volte hanno una <b>runa della forgia</b> (quelli del boss molto più spesso), e i caveau a volte una <b>Phoenix Feather</b>.',
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

  ${section(u('gemVaults'), `
    <p>${t(L('Thirteen sealed, themed dungeons, one for each gem (the two Chromatic gems have none). At the end of each: a guardian that fights with the very gem it guards, and a ritual that gives that gem\'s one real copy to whoever performs it. Each vault is conquered once — until its gem is lost.',
             'Tredici dungeon sigillati e a tema, uno per gemma (le due Cromatiche non ne hanno). In fondo a ognuno: un guardiano che combatte con la gemma stessa che custodisce, e un rituale che dà l\'unica copia vera di quella gemma a chi lo compie. Ogni caveau si conquista una volta — finché la sua gemma non va persa.'))}</p>
    <p>${t(L('A key is a frame around the gem\'s own item — the rarer the gem, the costlier the frame (Gem Shards and Clusters come from Gem Ore, Rift Cores from red rifts and bosses). Every key is in your recipe book from the start, but the tiers open as the season goes on: Rare after 1 day, Epic after 3, Legendary after 7, Mythic after 14. A key to a gem that\'s already in the world can\'t be made or used. Right-click it to go in — up to 4 nearby go with you.',
             'Una chiave è una cornice intorno all\'oggetto proprio della gemma — più la gemma è rara, più la cornice costa (Frammenti e Grappoli di gemma vengono dal minerale di gemma, i Nuclei della Rift dalle rift rosse e dai boss). Ogni chiave è nel ricettario dall\'inizio, ma le rarità si aprono durante la stagione: Rare dopo 1 giorno, Epiche dopo 3, Leggendarie dopo 7, Mitiche dopo 14. La chiave di una gemma già nel mondo non si può fare né usare. Tasto destro per entrare — fino a 4 vicini vengono con te.'))}</p>
    <p>${t(L('A Mythic key comes out dormant: carry it in the overworld for 20 minutes to attune it, under a beam of light that everyone can see — and come for. Log out and it starts over; die and the key drops. When a Mythic vault opens, its breach stays open behind you: up to 4 others can follow you in, and inside, PvP is on. Whoever finishes the ritual gets the gem.',
             'Una chiave Mitica nasce dormiente: portala nell\'overworld per 20 minuti per attivarla, sotto un fascio di luce che tutti vedono — e possono venire a prendertela. Se esci, si ricomincia; se muori, la chiave cade. Quando un caveau Mitico si apre, la sua breccia resta aperta dietro di te: fino a 4 altri possono seguirti, e dentro il PvP è attivo. Chi completa il rituale prende la gemma.'))}</p>

    <div class="card keyvis">
      <div class="keyvis-grid-wrap">
        <h3>${u('keyVis')}</h3>
        <div class="craft" id="key-grid" aria-live="polite"></div>
        <div class="craft-legend" id="key-legend"></div>
      </div>
      <div class="keyvis-info">
        <div class="key-races" role="group" aria-label="Gem">
          ${GEM_VAULTS.map((v, i) => {
            const g = GEMS.find(x => x.key === v.gem);
            return `<button type="button" class="key-race ${i === 0 ? 'on' : ''}" data-key="${v.gem}" title="${esc(g.name)}" style="--c:${GEM_TIER[g.tier].color}">${g.icon}</button>`;
          }).join('')}
        </div>
        <div id="key-info"></div>
      </div>
    </div>`)}

  ${section(u('riftCmds'), `
    <div class="cmd-table">
      ${COMMANDS.filter(([c]) => c.startsWith('/rift')).map(([c, d]) => `<div><code>${esc(c)}</code><span>${esc(t(d))}</span></div>`).join('')}
    </div>`)}
`;

const craftGrid = (rows, keys, out) => `
  <div class="craft"><div class="craft-3">${rows.flat().map(i => `<div class="slot" title="${esc(t((keys.find(k => k[0] === i) || [, ''])[1]))}">${i}</div>`).join('')}</div>
    <div class="craft-arrow">→</div><div class="slot out">${out}</div></div>
  <div class="craft-legend">${keys.map(([i, n]) => `<span>${i} ${esc(t(n))}</span>`).join('')}</div>`;

const tabGroup = (group, sets) => `
  <div class="tabs" role="tablist" data-group="${group}">
    ${sets.map((b, i) => `<button type="button" role="tab" class="tab ${i === 0 ? 'on' : ''}" data-tab="${i}" aria-selected="${i === 0}">${b.icon} ${esc(t(b.slot))}</button>`).join('')}
  </div>
  <div class="tab-table" id="tab-${group}"></div>`;

PAGES.forge = () => `
  ${head(u('forge'), u('forgeLead'), 'CRAFT · STRIKE · BUFF')}

  ${section(u('forgeBlock'), `
    <div class="grid g2">
      <div class="card">${craftGrid(FORGE.recipe, FORGE.recipeKey, '🔨')}</div>
      <div class="card">
        ${list(L([
          'The recipe unlocks <b>one day into the season</b> — it\'s in your recipe book from then on.',
          'Anyone can craft one and place it anywhere. Breaking it gives it back.',
          'It\'s always at full strength — which is why it\'s dear to make.',
          'Out in the world, <a href="#/calamity">a Starfall</a> drops <b>star-touched meteors</b>: a forge in the open, and forging on one costs nothing.',
        ], [
          'La ricetta si sblocca <b>un giorno dopo l\'inizio della stagione</b> — da lì è nel tuo ricettario.',
          'Chiunque può craftarne una e piazzarla ovunque. Rompendola la riprendi.',
          'È sempre alla massima potenza — ed è per questo che costa cara.',
          'Nel mondo, <a href="#/calamity">una Starfall</a> fa cadere <b>meteore toccate dalle stelle</b>: una forgia all\'aperto, e forgiarci sopra non costa nulla.',
        ]))}
      </div>
    </div>`)}

  ${section(u('useForge'), `
    <div class="grid g2">
      <div class="card">
        ${list(L([
          'Hold a piece of armor — or a sword, axe, pickaxe, shovel or hoe — in your main hand and right-click the Forge.',
          `Each attempt costs <b>${FORGE.cost.en.replace(' a try', '')}</b> (a custom-named item takes 1 Netherite Ingot more). One person at a time.`,
          `A hammer sweeps back and forth along a row of slots. The green slot is the sweet spot, with yellow on either side. <b>${FORGE.strikes} strikes</b>; the hammer speeds up after the first; a strike not made within ${FORGE.timeout} seconds is a miss.`,
          'The finished piece gets an enchant glow, and its tooltip lists the grade, the buffs and who forged it.',
        ], [
          'Tieni in mano un pezzo d\'armatura — o spada, ascia, piccone, pala o zappa — e fai tasto destro sulla Forgia.',
          `Ogni tentativo costa <b>${FORGE.cost.it.replace(' a tentativo', '')}</b> (un oggetto rinominato costa 1 Lingotto di netherite in più). Una persona alla volta.`,
          `Un martello scorre avanti e indietro su una fila di caselle. La casella verde è il punto giusto, con il giallo ai lati. <b>${FORGE.strikes} colpi</b>; il martello accelera dopo il primo; un colpo non dato entro ${FORGE.timeout} secondi è mancato.`,
          'Il pezzo finito brilla come incantato, e la descrizione mostra voto, potenziamenti e chi l\'ha forgiato.',
        ]))}
      </div>
      <div class="card">
        <h3>${u('grades')}</h3>
        <div class="grades">
          ${FORGE.grades.map(g => `
            <div class="grade" style="--c:${g.color}"><div class="grade-pts">${g.min}–${g.max}</div><div><b>${esc(t(g.name))}</b><p>${esc(t(g.text))}</p></div></div>`).join('')}
        </div>
        <p class="muted small">${t(L('The score is how close your strikes land to the green slot.', 'Il punteggio è quanto i tuoi colpi cadono vicino alla casella verde.'))}</p>
      </div>
    </div>`)}

  ${section(u('buffs'), `
    <p class="muted">${u('buffsNote')}</p>
    ${tabGroup('buffs', FORGE.buffs)}
    <p class="muted small">${t(L('Shovels and hoes roll similar tool buffs. A Flawless pickaxe breaks stone and ores essentially instantly.', 'Pale e zappe hanno potenziamenti simili. Un piccone Impeccabile rompe pietra e minerali praticamente all\'istante.'))}</p>`)}

  ${section(u('coldForge'), `
    <div class="grid g2">
      <div class="card cold">${craftGrid(FORGE.coldRecipe, FORGE.coldKey, '❄️')}</div>
      <div class="card cold">
        ${list(L([
          'The recipe unlocks <b>seven days into the season</b>: a Forge, ringed with Netherite Ingots and Blue Ice, and a Nether Star.',
          `Only takes a chestplate, sword or pickaxe already forged <b>Flawless</b>, and costs <b>${FORGE.coldCost.en.replace(' a try', '')}</b>.`,
          'Same hammer, but instead of more stats it teaches the piece a <b>frost technique</b> — something it does in a fight, or at the rock face.',
          'It\'s also the only way to open a <b>rune slot</b>: miss at most one strike on that pass.',
        ], [
          'La ricetta si sblocca <b>sette giorni dopo l\'inizio della stagione</b>: una Forgia, circondata da Lingotti di netherite e Ghiaccio blu, e una Stella del Nether.',
          `Accetta solo corazza, spada o piccone già forgiati <b>Impeccabili</b>, e costa <b>${FORGE.coldCost.it.replace(' a tentativo', '')}</b>.`,
          'Stesso martello, ma invece di altre statistiche insegna al pezzo una <b>tecnica del gelo</b> — qualcosa che fa in combattimento, o in miniera.',
          'È anche l\'unico modo per aprire uno <b>slot per rune</b>: manca al massimo un colpo in quel passaggio.',
        ]))}
      </div>
    </div>
    <h3 class="sub">❄️ ${u('coldTech')}</h3>
    <p class="muted">${u('coldTechNote')}</p>
    ${tabGroup('cold', FORGE.cold)}`)}

  ${section(u('runes'), `
    <div class="card">
      ${list(L([
        'Separate items, found in rift chests (the boss\'s chests most often, epic ones in red rifts) and in the stars that fall during a Starfall.',
        'A rune goes in a <b>rune slot</b> — a weapon, chestplate or pickaxe gets one from a good Cold Forge pass.',
        'Socket: the piece in your main hand, the rune in your off hand, sneak + right-click.',
        'Sneak + right-click with an empty off hand pulls it back out, unbroken.',
      ], [
        'Oggetti a parte, trovati nei forzieri delle rift (soprattutto in quelli del boss, le epiche nelle rift rosse) e nelle stelle che cadono durante una Starfall.',
        'Una runa va in uno <b>slot per rune</b> — arma, corazza o piccone ne ottengono uno da un buon passaggio alla Forgia Fredda.',
        'Incastonare: il pezzo in mano, la runa nella mano secondaria, shift + tasto destro.',
        'Shift + tasto destro con la mano secondaria vuota la toglie, intatta.',
      ]))}
    </div>
    <p class="muted">${u('runesNote')}</p>
    ${tabGroup('runes', FORGE.runes)}`)}

  ${section(u('forgeRules'), `
    <div class="card">
      ${list(L([
        'Each piece can be forged exactly once, ever — plus one Cold Forge pass for a Flawless chestplate, sword or pickaxe.',
        'The forge refuses non-forgeable items, already-forged or ruined pieces and one-of-a-kind items.',
        'Walk away before your first strike and you get everything back. After you\'ve started, remaining strikes count as misses.',
        'If the server restarts mid-attempt, you get everything back.',
        '/forge list shows every buff and technique with its numbers, in game.',
      ], [
        'Ogni pezzo si può forgiare una sola volta, per sempre — più un passaggio alla Forgia Fredda per corazza, spada o piccone Impeccabili.',
        'La forgia rifiuta oggetti non forgiabili, pezzi già forgiati o rovinati e oggetti unici.',
        'Se te ne vai prima del primo colpo riavrai tutto. Dopo aver iniziato, i colpi rimasti contano come mancati.',
        'Se il server si riavvia durante un tentativo, riavrai tutto.',
        '/forge list mostra ogni potenziamento e tecnica con i numeri, in gioco.',
      ]))}
    </div>`)}
`;

PAGES.bosses = () => `
  ${head(u('bosses'), u('bossesLead'), 'BESTIARY')}
  ${section(u('riftBosses'), `
    <div class="grid g2">
      ${RIFT_BOSSES.map(b => `<article class="card boss-card"><p class="eyebrow">${esc(t(b.where))}</p><h3>${esc(b.name)}</h3>${list(b.moves)}</article>`).join('')}
    </div>`)}
  ${section(u('guardians'), `
    <p>${u('guardiansT')}</p>
    <div class="grid g3 bestiary">
      ${GUARDIANS.map(b => {
        const g = GEM[b.gem], tier = GEM_TIER[g.tier], v = GEM_VAULT[b.gem];
        return `
        <article class="card boss" style="--c:${tier.color}">
          <div class="boss-sigil" aria-hidden="true">${g.icon}</div>
          <p class="eyebrow"><a href="#/gems/gem-${g.key}">${esc(g.name)}</a> · ${esc(t(tier.name))}</p>
          <h3>${esc(b.name)}</h3>
          <p class="boss-title">${esc(t(b.title))}</p>
          <p>${esc(t(b.style))}</p>
          <p class="muted small">${esc(v.dungeon)}</p>
        </article>`;
      }).join('')}
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

// When a dimension opens: a fixed date, or hours after the season starts (null while the start isn't set).
const openAt = d => d.opensAt ? new Date(d.opensAt).getTime() : launchAt() == null ? null : launchAt() + d.opensAfterHours * 3600000;
function countdown(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
  return (d ? `${d}d ` : '') + `${h}h ${String(m).padStart(2, '0')}m ${String(sec).padStart(2, '0')}s`;
}
const dimState = d => {
  if (d.closed) return `<span class="dim-closed">● ${u('closed')}</span>`;
  const at = openAt(d);
  if (at == null) return esc(fillIn(u('afterStart'), { t: t(L(`${d.opensAfterHours} h`, `${d.opensAfterHours} ore`)) }));
  const left = at - Date.now();
  return left <= 0 ? `<span class="dim-open">● ${u('open')}</span>` : `${u('opensIn')} <b>${countdown(left)}</b>`;
};
// A season step: when it comes, and whether it already has.
const stepState = s => {
  const at = launchAt();
  if (at == null || at > Date.now()) return s.at ? afterLabel(s.at) : u('seasonStart');
  const when = at + s.at * 3600000;
  return when <= Date.now() ? `<span class="dim-open">● ${u('open')}</span>` : `${u('opensIn')} <b>${countdown(when - Date.now())}</b>`;
};
function tickCountdowns() {
  const tick = () => {
    document.querySelectorAll('[data-dim]').forEach(el => { el.innerHTML = dimState(DIMENSIONS.find(d => d.key === el.dataset.dim)); });
    document.querySelectorAll('[data-step]').forEach(el => { el.innerHTML = stepState(SEASON[+el.dataset.step]); });
    document.querySelectorAll('[data-launch]').forEach(el => {
      const left = launchAt() - Date.now();
      if (left <= 0) el.closest('.since').innerHTML = seasonLine(); else el.textContent = countdown(left);
    });
  };
  tick();
  const id = setInterval(tick, 1000);
  cleanupFns.push(() => clearInterval(id));
}

PAGES.rules = () => `
  ${head(u('rules'), u('rulesLead'))}

  ${section(u('seasonT'), `
    <p>${u('seasonLead')}</p>
    <ol class="season">
      ${SEASON.map((s, i) => `
        <li class="season-step ${s.glitch ? 'is-glitch' : ''}">
          <span class="season-icon" aria-hidden="true">${s.icon}</span>
          <div>
            <p class="season-when" data-step="${i}">${stepState(s)}</p>
            <h3>${s.glitch ? glitchSpan(t(s.name), 'Redacted') : esc(t(s.name))}</h3>
            <p>${esc(t(s.text))}</p>
          </div>
        </li>`).join('')}
    </ol>`, 'season')}

  ${section(u('dimensions'), `
    <div class="grid g2">
      ${DIMENSIONS.map(d => `
        <div class="card dim dim-${d.key}"><div class="dim-top"><span class="item-icon" aria-hidden="true">${d.icon}</span><h3>${esc(t(d.name))}</h3></div>
          <p>${esc(t(d.text))}</p><p class="dim-state" data-dim="${d.key}">${dimState(d)}</p></div>`).join('')}
    </div>`)}

  ${section(u('mechanics'), `
    <div class="grid g3">
      ${MECHANICS.map(m => `<div class="card"><div class="item-icon" aria-hidden="true">${m.icon}</div><h3>${esc(t(m.title))}</h3><p>${esc(t(m.text))}</p></div>`).join('')}
    </div>
    <h3 class="sub">⚔️ ${u('inCombat')}</h3>
    <div class="card combat"><p class="muted">${u('inCombatT')}</p>${list(COMBAT_RULES)}</div>`, 'mechanics')}

  ${section(u('gameRules'), `<ol class="rules-list">${t(RULES_GAME).map(r => `<li>${r}</li>`).join('')}</ol>`, 'game')}
  ${section(u('discordRules'), `<ol class="rules-list">${t(RULES_DISCORD).map(r => `<li>${esc(r)}</li>`).join('')}</ol>`, 'discord')}
`;

PAGES.calamity = () => `
  ${head(u('calamityTitle'), u('calamityT'), 'WORLD EVENTS')}

  ${section(u('calHow'), `<div class="card">${list(CALAMITY.rules)}</div>`)}

  ${section(u('calNights'), `
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
    </div>`)}
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
MOUNT.gems = () => loadItemStatus();

MOUNT.rift = () => {
  const grid = document.getElementById('key-grid');
  const info = document.getElementById('key-info');
  const legend = document.getElementById('key-legend');
  const render = key => {
    const v = GEM_VAULT[key], g = GEMS.find(x => x.key === key), tier = GEM_TIER[g.tier], F = GEM_KEY_FRAMES[g.tier];
    const cells = [F.corner, F.vert, F.corner, F.side, { icon: v.centre[0], name: v.centre[1], centre: true }, F.side, F.corner, F.vert, F.corner];
    grid.innerHTML = `<div class="craft-3">${cells.map(c => `<div class="slot ${c.centre ? 'centre' : ''}" title="${esc(t(c.name))}" style="--c:${tier.color}">${c.icon}</div>`).join('')}</div>`
      + `<div class="craft-arrow">→</div><div class="slot out" style="--c:${tier.color}" title="${esc(g.name.replace(' Gem', ''))} Key">🗝️</div>`;
    legend.innerHTML = [F.corner, F.vert, F.side].map(c => `<span>${c.icon} ${esc(t(c.name))}</span>`).join('');
    info.innerHTML = `
      <p class="eyebrow" style="color:${tier.color}">${esc(g.name)} · ${esc(t(tier.name))}</p>
      <h3>${esc(v.dungeon)}</h3>
      <p><b>${t(L('Centre item', 'Oggetto centrale'))}:</b> ${v.centre[0]} ${esc(t(v.centre[1]))}</p>
      ${v.note ? `<p>${esc(t(v.note))}</p>` : ''}
      <p class="muted small">${t(L('Guardian', 'Guardiano'))}: ${esc(v.guardian)} · <a href="#/gems/gem-${g.key}">${esc(g.name)}</a></p>`;
  };
  document.querySelectorAll('.key-race').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.key-race').forEach(x => x.classList.toggle('on', x === b));
    render(b.dataset.key);
  }));
  render(GEM_VAULTS[0].gem);
};

MOUNT.forge = () => {
  const cols = {
    buffs: [FORGE.grades[2].name, FORGE.grades[1].name, FORGE.grades[0].name],
    cold:  [FORGE.grades[2].name, FORGE.grades[1].name, FORGE.grades[0].name],
    runes: [L('Common', 'Comune'), L('Rare', 'Rara'), L('Epic', 'Epica')],
  };
  const sets = { buffs: FORGE.buffs, cold: FORGE.cold, runes: FORGE.runes };
  document.querySelectorAll('.tabs[data-group]').forEach(bar => {
    const group = bar.dataset.group, table = document.getElementById('tab-' + group);
    const head = group === 'cold' ? L('What it does', 'Cosa fa') : L('Stat', 'Statistica');
    const render = i => {
      const [c1, c2, c3] = cols[group];
      table.innerHTML = `<div class="table-wrap"><table class="table buffs">
        <thead><tr><th>${group === 'runes' ? t(L('Rune', 'Runa')) : group === 'cold' ? t(L('Technique', 'Tecnica')) : 'Buff'}</th><th>${t(head)}</th><th class="c-okay">${t(c1)}</th><th class="c-good">${t(c2)}</th><th class="c-flaw">${t(c3)}</th></tr></thead>
        <tbody>${sets[group][i].rows.map(([n, o, g, f, stat]) => `<tr><td><b>${esc(n)}</b></td><td class="muted">${esc(t(stat))}</td><td>${o}</td><td>${g}</td><td class="flaw">${f}</td></tr>`).join('')}</tbody>
      </table></div>`;
    };
    bar.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
      bar.querySelectorAll('.tab').forEach(x => { x.classList.toggle('on', x === tab); x.setAttribute('aria-selected', x === tab); });
      render(+tab.dataset.tab);
    }));
    render(0);
  });
};

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
const NAV = ['home', 'gems', 'rift', 'forge', 'calamity', 'bosses', 'pvp', 'items', 'rules', 'join'];
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
  const name = raw === 'weapons' ? 'gems' : raw; // the old weapons page is the gems page now
  const page = name === '' ? 'home' : PAGES[name] ? name : 'notfound';
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
