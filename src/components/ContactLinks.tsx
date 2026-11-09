import { site } from '../content';

export default function ContactLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="Contact" className={className}>
      {site.github && <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>}
      {site.email && <a href={`mailto:${site.email}`} target="_blank" rel="noreferrer">Email</a>}
      {site.cv && <a href={site.cv} target="_blank" rel="noreferrer">CV</a>}
    </nav>
  );
}
