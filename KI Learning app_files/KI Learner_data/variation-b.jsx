// Variation B — Geometric Lab
// Every screen leads with a big abstract motif (SVG geometry) in a dusk/parchment band.
// Tighter type, more visual rhythm.

function VarBScreen({ lesson, idx, total, onNext, onBack, onRestart }) {
  const isLast = lesson.n === 10;
  const isFirst = lesson.n === 1;

  // alternate motif background tone per screen for rhythm
  const bgs = ['warm', 'parchment', 'warm', 'parchment', 'warm', 'parchment', 'warm', 'parchment', 'warm', 'parchment'];
  const motifBg = bgs[idx];

  return (
    <div className="phone-screen" style={{ background: '#f2ece0' }}>
      {/* compact progress + index */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '56px 24px 12px',
      }}>
        <span className="eb">KI LEARNER</span>
        <span className="eb">{String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      </div>

      {/* hairline progress */}
      <div style={{ height: 1, background: '#dcd4ee', position: 'relative', margin: '0 24px' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, height: 1,
          width: `${((idx + 1) / total) * 100}%`, background: '#1f1f29',
        }} />
      </div>

      <div className="screen-body fade-in" key={lesson.n} style={{ paddingTop: 22 }}>
        {/* big motif up top */}
        <div className={`motif ${motifBg}`} style={{ marginBottom: 20 }}>
          <MotifSVG kind={lesson.motif} />
        </div>

        <div className="eb" style={{ marginBottom: 10 }}>{lesson.eyebrow}</div>
        <h1 className="disp" style={{ fontSize: 32 }} dangerouslySetInnerHTML={{ __html: lesson.title }} />

        {lesson.kicker && (
          <p className="kicker" style={{ marginTop: 14, fontSize: 15 }}>{lesson.kicker}</p>
        )}

        {lesson.body && (
          <p className="body-text" style={{ marginTop: 16 }}>{lesson.body}</p>
        )}

        {lesson.pull && (
          <div className="pull" style={{ marginTop: 18 }}>"{lesson.pull}"</div>
        )}

        {lesson.list && (
          <ul className="arrow-list" style={{ marginTop: 18 }}>
            {lesson.list.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        )}

        {lesson.grid && (
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: '#dcd4ee', border: '1px solid #dcd4ee' }}>
            {lesson.grid.map(([k, v], i) => (
              <div key={i} style={{
                background: '#f2ece0', padding: '14px 12px',
                display: 'flex', flexDirection: 'column', gap: 4,
              }}>
                <span style={{ fontFamily: 'Fraunces', fontWeight: 700, fontSize: 14 }}>{k}</span>
                <span style={{ color: '#7c7c87', fontSize: 11.5, lineHeight: 1.4 }}>{v}</span>
              </div>
            ))}
          </div>
        )}

        {lesson.demo === 'tokens' && <div style={{ marginTop: 18 }}><TokenDemo/></div>}
        {lesson.demo === 'prompt' && <div style={{ marginTop: 18 }}><PromptDemo/></div>}

        {lesson.quiz && <VarBQuiz quiz={lesson.quiz}/>}

        {isFirst && (
          <div style={{ marginTop: 28 }}>
            <button className="cta" onClick={onNext}>
              <span>Begin the course</span><span>→</span>
            </button>
          </div>
        )}

        {isLast && (
          <div style={{ marginTop: 24 }}>
            <button className="cta" onClick={onRestart}>
              <span>{lesson.cta}</span><span>↻</span>
            </button>
          </div>
        )}
      </div>

      {!isFirst && !isLast && (
        <div className="bot-nav">
          <button className="cta ghost" onClick={onBack} style={{ flex: '0 0 64px' }}>
            <span>←</span><span/>
          </button>
          <button className="cta" onClick={onNext} style={{ flex: 1 }}>
            <span>Continue</span><span>→</span>
          </button>
        </div>
      )}
    </div>
  );
}

function VarBQuiz({ quiz }) {
  const [qi, setQi] = React.useState(0);
  const [picked, setPicked] = React.useState(null);
  const q = quiz[qi];
  const advance = () => { setPicked(null); setQi(i => (i + 1) % quiz.length); };
  return (
    <div style={{ marginTop: 18 }}>
      <div style={{ display: 'flex', gap: 4, marginBottom: 14 }}>
        {quiz.map((_, i) => (
          <div key={i} style={{ flex: 1, height: 3, background: i < qi ? '#1f1f29' : i === qi ? '#d2ef4a' : '#dcd4ee' }} />
        ))}
      </div>
      <p className="kicker" style={{ marginBottom: 14 }}>{q.q}</p>
      <div style={{ display: 'grid', gap: 8 }}>
        {q.a.map((opt, i) => {
          const isCorrect = picked !== null && i === q.correct;
          const isWrong = picked === i && i !== q.correct;
          return (
            <button key={i} className={`quiz-opt ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
                    onClick={() => picked === null && setPicked(i)}>
              <span className="dot">{String.fromCharCode(65 + i)}</span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <button className="cta" style={{ marginTop: 12 }} onClick={advance}>
          <span>{qi === quiz.length - 1 ? 'Finish' : 'Next'}</span><span>→</span>
        </button>
      )}
    </div>
  );
}

function VariationB() {
  const [idx, setIdx] = React.useState(0);
  const total = window.LESSONS.length;
  const lesson = window.LESSONS[idx];
  return (
    <IOSDevice width={390} height={844}>
      <VarBScreen
        lesson={lesson} idx={idx} total={total}
        onNext={() => setIdx(i => Math.min(total - 1, i + 1))}
        onBack={() => setIdx(i => Math.max(0, i - 1))}
        onRestart={() => setIdx(0)}
      />
    </IOSDevice>
  );
}

window.VariationB = VariationB;
