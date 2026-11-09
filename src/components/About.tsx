import { about, site } from '../content';
import ContactLinks from './ContactLinks';

const Sparkle = ({ color }: { color: string }) => (
  <svg aria-hidden="true" width="10" height="10" viewBox="0 0 12 12" style={{ flex: 'none' }}>
    <path d="M6 0 L7.1 4.9 L12 6 L7.1 7.1 L6 12 L4.9 7.1 L0 6 L4.9 4.9 Z" fill={color} />
  </svg>
);

export default function About() {
  return (
    <div className="about">
      <section id="about" aria-labelledby="about-h" className="about-inner">
        <div className="about-text">
          <span className="eyebrow gold">About</span>
          <h2 id="about-h" className="about-h">{about.heading}</h2>
          <p>{about.body}</p>
        </div>
        <div className="about-list">
          <span className="eyebrow faint">Things I enjoy</span>
          <ul>
            {about.interests.map((it) => (
              <li key={it.label}>
                <Sparkle color={it.color} />
                <span>
                  {it.label}
                  {it.detail && <span className="muted"> {it.detail}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer className="footer">
        <ContactLinks className="footer-links" />
        <span className="footer-note">{site.footer}</span>
      </footer>
    </div>
  );
}
