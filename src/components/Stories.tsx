import type { ReactNode } from 'react';
import { manaheart, whetstone } from '../content';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="story-sec">
      <h4 className="story-h">{title}</h4>
      {children}
    </section>
  );
}

function Built({ stack, text }: { stack: string[]; text: string }) {
  return (
    <Section title="How it was built">
      <ul aria-label="Stack" className="tags tags--lg">
        {stack.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <p className="story-p">{text}</p>
    </Section>
  );
}

function Callout({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <aside className="callout">
      <span className="eyebrow accent">{label}</span>
      <p className="callout-title">{title}</p>
      <p className="callout-body">{body}</p>
    </aside>
  );
}

const Diamond = () => (
  <svg aria-hidden="true" width="8" height="8" viewBox="0 0 8 8" className="bullet">
    <path d="M4 0 L8 4 L4 8 L0 4 Z" fill="var(--c-accent)" />
  </svg>
);
const Ring = () => <span aria-hidden="true" className="bullet bullet--ring" />;

export function StoryWhetstone() {
  const w = whetstone;
  return (
    <>
      <Section title="What it is"><p className="story-p">{w.whatItIs}</p></Section>
      <Section title="Where the idea came from">
        <p className="story-quote">{w.idea}</p>
        <p className="story-p story-p--muted">{w.ideaMore}</p>
      </Section>
      <Section title="Key features">
        <ul className="story-list">
          {w.features.map((f) => <li key={f}><Diamond /><span>{f}</span></li>)}
        </ul>
      </Section>
      <Built stack={w.stack} text={w.built} />
      <Callout {...w.callout} />
    </>
  );
}

const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

export function StoryManaheart() {
  const m = manaheart;
  return (
    <>
      <Section title="What it is"><p className="story-p">{m.whatItIs}</p></Section>
      <Section title="Where the idea came from"><p className="story-quote">{m.idea}</p></Section>
      <Section title="How it works">
        <ol className="story-steps">
          {m.steps.map((s, i) => (
            <li key={s}><span className="step-n">{ROMAN[i]}</span><span>{s}</span></li>
          ))}
        </ol>
        <div role="img" aria-label={`Ranks: ${m.ranks.join(', ')}`} className="ranks">
          {m.ranks.map((r, i) => {
            const size = 14 + i * 4;
            const glow = [0.15, 0.25, 0.35, 0.5, 0.7][i];
            return (
              <div key={r} aria-hidden="true" className="rank">
                <span
                  style={{
                    width: size, height: size, borderRadius: '50%', border: '1px solid rgba(157,176,255,0.55)',
                    background: `radial-gradient(circle, rgba(180,193,255,${glow}) 0%, rgba(116,132,238,0) 70%)`,
                  }}
                />
                <span className="rank-name">{r}</span>
              </div>
            );
          })}
        </div>
      </Section>
      <Section title="Key features">
        <ul className="story-list">
          {m.features.map((f) => <li key={f}><Ring /><span>{f}</span></li>)}
        </ul>
      </Section>
      <Built stack={m.stack} text={m.built} />
      <Callout {...m.callout} />
    </>
  );
}
