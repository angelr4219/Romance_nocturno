/* ─────────────────────────────────────────────
   DIVIDER DEMO — 8 options, Hispanic/music theme
   Visit /dividers to preview
   ───────────────────────────────────────────── */

/* ── 1. Forma de Onda — audio equaliser bars ── */
function WaveformDivider() {
  const bars = [3,6,10,16,22,28,34,38,42,46,50,46,42,38,34,28,22,16,10,6,3,6,10,16,22,28,34,38,42,46,50,46,42,38,34,28,22,16,10,6,3];
  const h = 56;
  return (
    <div className="dd-divider">
      <svg viewBox={`0 0 ${bars.length * 12} ${h}`} preserveAspectRatio="none" className="dd-svg">
        {bars.map((b, i) => (
          <rect
            key={i}
            x={i * 12 + 3}
            y={(h - b) / 2}
            width={6}
            height={b}
            rx={3}
            fill="var(--red)"
            opacity={0.55 + (b / 50) * 0.45}
          />
        ))}
      </svg>
    </div>
  );
}

/* ── 2. Rosal — rose vine repeating border ── */
function RosalDivider() {
  return (
    <div className="dd-divider dd-rosal">
      <span className="dd-rosal-line" />
      <span className="dd-rosal-center">✿ 🌹 ✿</span>
      <span className="dd-rosal-line" />
    </div>
  );
}

/* ── 3. Papel Picado — triangle cutout banner ── */
function PapelPicadoDivider() {
  const count = 14;
  const colors = ["var(--red)","var(--gold)","var(--navy)","var(--red)","var(--gold)","var(--navy)","var(--red)"];
  return (
    <div className="dd-divider dd-papel">
      <div className="dd-papel-string" />
      <div className="dd-papel-flags">
        {Array.from({length: count}).map((_, i) => (
          <div
            key={i}
            className="dd-papel-flag"
            style={{ borderTopColor: colors[i % colors.length] }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── 4. Cuerdas — guitar strings with center rose ── */
function CuerdasDivider() {
  return (
    <div className="dd-divider dd-cuerdas">
      {[0,1,2,3,4,5].map(i => (
        <div key={i} className="dd-cuerda" style={{ opacity: 0.18 + i * 0.07 }} />
      ))}
      <div className="dd-cuerdas-center">
        <span className="dd-cuerdas-rose">✦ 🌹 ✦</span>
      </div>
    </div>
  );
}

/* ── 5. Sello Nocturno — stamped text banner ── */
function SelloDivider() {
  return (
    <div className="dd-divider dd-sello">
      <div className="dd-sello-line" />
      <div className="dd-sello-text">
        ✦ &nbsp; Romance Nocturno &nbsp; · &nbsp; Boleros &nbsp; · &nbsp; Serenatas &nbsp; · &nbsp; Los Angeles &nbsp; ✦
      </div>
      <div className="dd-sello-line" />
    </div>
  );
}

/* ── 6. Azulejo — Talavera tile row ── */
function AzulejoDivider() {
  const tile = (
    <svg viewBox="0 0 40 40" width="40" height="40">
      <rect width="40" height="40" fill="none"/>
      <rect x="2" y="2" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="20" cy="20" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="2" y1="2" x2="13" y2="13" stroke="currentColor" strokeWidth="1"/>
      <line x1="38" y1="2" x2="27" y2="13" stroke="currentColor" strokeWidth="1"/>
      <line x1="2" y1="38" x2="13" y2="27" stroke="currentColor" strokeWidth="1"/>
      <line x1="38" y1="38" x2="27" y2="27" stroke="currentColor" strokeWidth="1"/>
      <circle cx="20" cy="20" r="2.5" fill="currentColor"/>
    </svg>
  );
  return (
    <div className="dd-divider dd-azulejo">
      {Array.from({length: 20}).map((_, i) => (
        <span key={i} className="dd-azulejo-tile">{tile}</span>
      ))}
    </div>
  );
}

/* ── 7. Noche de Estrellas — stars & moon scatter ── */
function EstrellasDivider() {
  const items = ["✦","☾","✦","★","✦","☽","✦","★","✦","☾","✦","★","✦","☽","✦","★","✦","☾","✦"];
  const sizes = [0.7, 1.2, 0.6, 1.0, 0.8, 1.4, 0.7, 0.9, 1.1, 0.75, 1.3, 0.65, 1.0, 0.8, 1.2, 0.7, 0.9, 1.1, 0.8];
  return (
    <div className="dd-divider dd-estrellas">
      {items.map((sym, i) => (
        <span
          key={i}
          className="dd-estrella"
          style={{ fontSize: `${sizes[i]}rem`, opacity: 0.3 + sizes[i] * 0.3 }}
        >
          {sym}
        </span>
      ))}
    </div>
  );
}

/* ── 8. Ola Musical — sine wave with floating notes ── */
function OlaDivider() {
  const notes = ["♩","♪","♫","♬","♩","♪","♫","♬","♩","♪","♫","♬"];
  return (
    <div className="dd-divider dd-ola">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="dd-svg dd-ola-wave">
        <path
          d="M0,30 C100,5 200,55 300,30 C400,5 500,55 600,30 C700,5 800,55 900,30 C1000,5 1100,55 1200,30"
          fill="none"
          stroke="var(--red)"
          strokeWidth="2"
          opacity="0.4"
        />
        <path
          d="M0,30 C100,55 200,5 300,30 C400,55 500,5 600,30 C700,55 800,5 900,30 C1000,55 1100,5 1200,30"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          opacity="0.3"
        />
      </svg>
      <div className="dd-ola-notes">
        {notes.map((n, i) => (
          <span key={i} className="dd-note" style={{ animationDelay: `${i * 0.18}s` }}>{n}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Demo shell ── */
const dividers = [
  { num: 1, name: "Forma de Onda",    sub: "Audio equaliser bars",              Comp: WaveformDivider  },
  { num: 2, name: "El Rosal",         sub: "Rose vine centre ornament",         Comp: RosalDivider     },
  { num: 3, name: "Papel Picado",     sub: "Triangle flag banner",              Comp: PapelPicadoDivider},
  { num: 4, name: "Las Cuerdas",      sub: "Guitar strings with rose",          Comp: CuerdasDivider   },
  { num: 5, name: "Sello Nocturno",   sub: "Stamped text ribbon",               Comp: SelloDivider     },
  { num: 6, name: "Azulejo",          sub: "Talavera tile row",                 Comp: AzulejoDivider   },
  { num: 7, name: "Noche de Estrellas", sub: "Stars & moon scatter",            Comp: EstrellasDivider },
  { num: 8, name: "Ola Musical",      sub: "Sine wave with floating notes",     Comp: OlaDivider       },
];

export default function DividerDemo() {
  return (
    <div className="dd-page">
      <div className="dd-header">
        <p className="hero-eyebrow">Decorative Dividers · 8 Options</p>
        <h1 className="dd-title">Pick Your Divider</h1>
        <p className="dd-subtitle">Each shown between a dark and a light section, as it would appear on the site.</p>
      </div>

      {dividers.map(({ num, name, sub, Comp }) => (
        <div key={num} className="dd-option">
          <div className="dd-label">
            <span className="dd-num">0{num}</span>
            <span className="dd-name">{name}</span>
            <span className="dd-sub">{sub}</span>
          </div>
          {/* context: dark block → divider → light block */}
          <div className="dd-preview-dark" />
          <Comp />
          <div className="dd-preview-light" />
        </div>
      ))}
    </div>
  );
}
