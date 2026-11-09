import { site } from '../content';

export default function ContactLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="Contact" className={className}>
      {site.github && <a href={site.github}>GitHub</a>}
      {site.email && <a href={`mailto:${site.email}`}>Email</a>}
      {site.cv && <a href={site.cv}>CV</a>}
    </nav>
  );
}
