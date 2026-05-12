// Shared geometric motifs — abstract shapes drawn in SVG using brand palette.
// Used by all three variations to illustrate each lesson.

const MotifSVG = ({ kind, accent }) => {
  const c = {
    charcoal: '#1f1f29',
    parchment: '#f2ece0',
    warm: '#e6dfd3',
    dusk: '#dcd4ee',
    teal: '#62bfc8',
    signal: '#d2ef4a',
  };
  const stroke = c.charcoal;

  if (kind === 'orbit') {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%">
        <circle cx="160" cy="100" r="74" fill="none" stroke={stroke} strokeWidth="1"/>
        <circle cx="160" cy="100" r="50" fill="none" stroke={stroke} strokeWidth="1"/>
        <circle cx="160" cy="100" r="22" fill={c.signal}/>
        <circle cx="234" cy="100" r="6" fill={c.charcoal}/>
        <circle cx="135" cy="50" r="4" fill={c.teal}/>
        <circle cx="100" cy="135" r="3" fill={c.charcoal}/>
      </svg>
    );
  }
  if (kind === 'pattern') {
    // dot grid finding pattern
    const dots = [];
    for (let y = 0; y < 7; y++) for (let x = 0; x < 12; x++) {
      const isHighlight = (x === 3 && y === 2) || (x === 4 && y === 3) || (x === 5 && y === 2) || (x === 6 && y === 3) || (x === 7 && y === 2);
      dots.push(<circle key={`${x}${y}`} cx={30 + x * 22} cy={30 + y * 22} r={isHighlight ? 4 : 2} fill={isHighlight ? c.signal : c.charcoal} opacity={isHighlight ? 1 : 0.4}/>);
    }
    return <svg viewBox="0 0 320 200" width="100%" height="100%">{dots}</svg>;
  }
  if (kind === 'grid') {
    const rows = [];
    for (let y = 0; y < 5; y++) for (let x = 0; x < 8; x++) {
      const filled = (x + y * 3) % 5 < 3;
      rows.push(<rect key={`${x}${y}`} x={20 + x * 36} y={20 + y * 32} width={28} height={24} fill={filled ? c.charcoal : 'none'} stroke={c.charcoal} strokeWidth="1"/>);
    }
    return <svg viewBox="0 0 320 200" width="100%" height="100%">{rows}</svg>;
  }
  if (kind === 'stream') {
    // tokens flowing
    const tokens = ['The', 'cat', 'sat', 'on', 'the'];
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%">
        {tokens.map((t, i) => (
          <g key={i}>
            <rect x={20 + i * 56} y={80} width={48} height={28} fill={i === tokens.length - 1 ? c.signal : c.dusk}/>
            <text x={44 + i * 56} y={99} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill={c.charcoal}>{t}</text>
          </g>
        ))}
        <rect x={300} y={80} width={28} height={28} fill="none" stroke={c.charcoal} strokeDasharray="3 3"/>
        <text x={160} y={150} textAnchor="middle" fontFamily="Inter" fontSize="10" fill={c.charcoal} opacity="0.5" letterSpacing="1.5">PREDICTING NEXT</text>
      </svg>
    );
  }
  if (kind === 'tiles') {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%">
        <rect x="20"  y="30" width="80" height="50" fill={c.dusk}/>
        <rect x="110" y="30" width="80" height="50" fill={c.signal}/>
        <rect x="200" y="30" width="100" height="50" fill={c.charcoal}/>
        <rect x="20"  y="90" width="100" height="50" fill={c.teal}/>
        <rect x="130" y="90" width="70" height="50" fill={c.parchment} stroke={c.charcoal}/>
        <rect x="210" y="90" width="90" height="50" fill={c.dusk}/>
        <rect x="20"  y="150" width="60" height="30" fill={c.signal}/>
        <rect x="90"  y="150" width="120" height="30" fill={c.charcoal}/>
        <rect x="220" y="150" width="80" height="30" fill={c.dusk}/>
      </svg>
    );
  }
  if (kind === 'void') {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%">
        <circle cx="160" cy="100" r="60" fill={c.charcoal}/>
        <circle cx="160" cy="100" r="45" fill={c.warm}/>
        <line x1="100" y1="40" x2="220" y2="160" stroke={c.signal} strokeWidth="2"/>
      </svg>
    );
  }
  if (kind === 'mirror') {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%">
        <rect x="60" y="40" width="90" height="120" fill={c.dusk}/>
        <rect x="170" y="40" width="90" height="120" fill={c.signal}/>
        <text x="105" y="105" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="44" fontWeight="700" fill={c.charcoal}>?</text>
        <text x="215" y="105" textAnchor="middle" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="44" fontWeight="700" fill={c.charcoal}>!</text>
      </svg>
    );
  }
  if (kind === 'frame') {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%">
        <rect x="30" y="30" width="260" height="140" fill="none" stroke={c.charcoal} strokeWidth="1"/>
        <rect x="50" y="50" width="220" height="100" fill="none" stroke={c.charcoal} strokeWidth="1"/>
        <rect x="70" y="70" width="180" height="60" fill={c.signal}/>
        <line x1="30" y1="30" x2="50" y2="50" stroke={c.charcoal}/>
        <line x1="290" y1="30" x2="270" y2="50" stroke={c.charcoal}/>
        <line x1="30" y1="170" x2="50" y2="150" stroke={c.charcoal}/>
        <line x1="290" y1="170" x2="270" y2="150" stroke={c.charcoal}/>
      </svg>
    );
  }
  if (kind === 'dots') {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%">
        {[0,1,2,3,4].map(i => (
          <circle key={i} cx={64 + i * 48} cy={100} r={i === 2 ? 22 : 14} fill={i === 2 ? c.signal : (i < 2 ? c.charcoal : c.dusk)}/>
        ))}
      </svg>
    );
  }
  if (kind === 'sun') {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%">
        <circle cx="160" cy="170" r="120" fill={c.signal}/>
        {[...Array(12)].map((_, i) => {
          const a = (i / 12) * Math.PI;
          return <line key={i} x1={160 + Math.cos(a) * 130} y1={170 - Math.sin(a) * 130} x2={160 + Math.cos(a) * 155} y2={170 - Math.sin(a) * 155} stroke={c.charcoal} strokeWidth="2"/>;
        })}
      </svg>
    );
  }
  return null;
};

// Interactive token-prediction demo
function TokenDemo() {
  const [step, setStep] = React.useState(0);
  const tokens = ['The', 'best', 'way', 'to', 'predict'];
  const future = ['the', 'future', 'is', 'to'];
  return (
    <div style={{ background: '#f2ece0', padding: 16, border: '1px solid #1f1f29' }}>
      <div style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7c7c87', marginBottom: 10 }}>Watch it predict</div>
      <div style={{ marginBottom: 12, lineHeight: 1.9 }}>
        {tokens.slice(0, step + 1).map((t, i) => <span key={i} className="token">{t}</span>)}
        {step < tokens.length + future.length - 1 && <span className="token pending">{(tokens.concat(future))[step + 1]}</span>}
        {[...Array(Math.max(0, future.length - Math.max(0, step + 1 - tokens.length)))].map((_, i) => <span key={'f' + i} className="token future">···</span>)}
      </div>
      <button
        className="cta"
        onClick={() => setStep(s => (s + 1) % (tokens.length + future.length))}
        style={{ background: '#1f1f29', color: '#f2ece0', padding: '12px 16px', fontSize: 11 }}>
        <span>Predict next token</span>
        <span>→</span>
      </button>
    </div>
  );
}

// Interactive prompt demo
function PromptDemo() {
  const [variant, setVariant] = React.useState(0);
  const prompts = [
    { label: 'Vague', text: 'Write me something about dogs.', out: 'Dogs are loyal animals that have been companions to humans for thousands of years. They come in many breeds…' },
    { label: 'With context + format', text: 'Audience: parents of allergic kids.\nRole: a vet.\nFormat: 3 bullet points.\nTopic: hypoallergenic dogs.', out: '• Poodles, Schnauzers, and Bichons shed minimal dander.\n• Bathing weekly reduces allergens significantly.\n• Always trial-meet a breed before adopting.' },
  ];
  const p = prompts[variant];
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      <div style={{ display: 'flex', gap: 6 }}>
        {prompts.map((pp, i) => (
          <button key={i} onClick={() => setVariant(i)} style={{
            flex: 1, padding: '10px 8px', fontSize: 10, letterSpacing: '0.12em',
            fontWeight: 500, textTransform: 'uppercase', cursor: 'pointer',
            background: i === variant ? '#1f1f29' : 'transparent',
            color: i === variant ? '#f2ece0' : '#1f1f29',
            border: '1px solid #1f1f29',
          }}>{pp.label}</button>
        ))}
      </div>
      <div className="prompt-box">{p.text}</div>
      <div style={{ fontFamily: 'Inter', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7c7c87' }}>Output →</div>
      <div className="prompt-out">{p.out}</div>
    </div>
  );
}

window.MotifSVG = MotifSVG;
window.TokenDemo = TokenDemo;
window.PromptDemo = PromptDemo;
