import { smallProjects } from '../content';
import Planet from './Planet';

export default function SmallGrid() {
  return (
    <div className="sgrid">
      {smallProjects.map((p, i) => (
        <article key={i} id={`small-${i + 1}`} className="scard">
          <Planet kind="small" size={18} />
          <h3 className="scard-name">{p.name}</h3>
          <p className="scard-line">{p.line}</p>
          <ul aria-label="Stack" className="tags tags--sm">
            {p.tags.map((t, j) => <li key={j}>{t}</li>)}
          </ul>
          {(p.live || p.source) && (
            <div className="scard-links">
              {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
              {p.source && <a href={p.source} target="_blank" rel="noreferrer">Source ↗</a>}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
