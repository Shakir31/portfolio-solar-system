import { site } from '../content';
import Planet from './Planet';
import ContactLinks from './ContactLinks';

export default function Intro() {
  return (
    <div className="intro">
      <header className="topbar">
        <a href="#top" className="brand">
          <Planet kind="star" size={14} />
          <span>{site.name}</span>
        </a>
        <nav aria-label="Sections" className="topnav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <div id="top" className="intro-body">
        <h1>{site.name}</h1>
        <p className="greeting">{site.greeting}</p>
        <p className="intro-line">{site.introLine}</p>
        <p className="intro-sub">{site.introSub}</p>
        <ContactLinks className="intro-contact" />
      </div>

      <a href="#system" className="scroll-cue">
        Scroll
        <span aria-hidden="true" className="cue-line">
          <span className="cue-dot" />
        </span>
      </a>
    </div>
  );
}
