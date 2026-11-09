import { useId, useState, type ReactNode } from 'react';
import Planet from './Planet';

type Props = {
  theme: 'whetstone' | 'manaheart';
  eyebrow: string;
  name: string;
  line: string;
  tags: string[];
  live: string;
  source: string;
  screenshot: string;
  screenshotLabel: string;
  logo?: string;
  showLogoSlot?: boolean;
  planetSize: number;
  children: ReactNode;
};

export default function FeatureCard(p: Props) {
  const [open, setOpen] = useState(false);
  const storyId = useId();
  const nameId = useId();

  return (
    <article id={`card-${p.theme}`} className={`fcard theme-${p.theme}`} aria-labelledby={nameId}>
      <div className="fcard-top">
        <div className="fcard-media">
          {p.screenshot ? (
            <img src={p.screenshot} alt={`${p.name} screenshot`} className="shot" />
          ) : (
            <div className="shot shot--empty">Screenshot: {p.screenshotLabel}</div>
          )}
        </div>

        <div className="fcard-info">
          <div className="fcard-eyebrow">
            <Planet kind={p.theme} size={p.planetSize} spin={p.theme === 'manaheart'} />
            {p.logo ? (
              <img src={p.logo} alt="" width={40} height={40} />
            ) : (
              p.showLogoSlot && <span className="logo-slot">Logo</span>
            )}
            <span className="eyebrow accent">{p.eyebrow}</span>
          </div>
          <h3 id={nameId} className="fcard-name">{p.name}</h3>
          <p className="fcard-line">{p.line}</p>
          <ul aria-label="Stack" className="tags">
            {p.tags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="fcard-actions">
            {p.live && <a href={p.live} className="btn btn--solid" target="_blank" rel="noreferrer">Live ↗</a>}
            {p.source && <a href={p.source} className="btn" target="_blank" rel="noreferrer">Source ↗</a>}
            <button type="button" className="btn btn--ghost" aria-expanded={open} aria-controls={storyId} onClick={() => setOpen(!open)}>
              {open ? 'Show less' : 'Read more'}
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"
                style={{ transform: `rotate(${open ? 180 : 0}deg)`, transition: 'transform 240ms ease' }}>
                <path d="M2 4 L6 8 L10 4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div id={storyId} className="fcard-story">
          <div className="story-wrap">
            {p.children}
            <button type="button" className="btn btn--ghost btn--muted" aria-controls={storyId} onClick={() => setOpen(false)}>
              Close ↑
            </button>
          </div>
        </div>
      )}
    </article>
  );
}
