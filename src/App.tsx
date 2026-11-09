import { manaheart, whetstone } from './content';
import Intro from './components/Intro';
import SolarSystem from './components/SolarSystem';
import FeatureCard from './components/FeatureCard';
import { StoryManaheart, StoryWhetstone } from './components/Stories';
import SmallGrid from './components/SmallGrid';
import About from './components/About';

export default function App() {
  return (
    <div className="page">
      <Intro />

      <section id="system" aria-label="Solar system. Click a planet to jump to its project." className="system-band">
        <SolarSystem />
      </section>

      <section id="work" aria-labelledby="work-h" className="work">
        <div className="work-head">
          <span className="eyebrow gold">Work</span>
          <h2 id="work-h" className="work-h">My projects</h2>
        </div>

        <FeatureCard
          theme="whetstone"
          eyebrow="Central project · 01"
          name={whetstone.name}
          line={whetstone.line}
          tags={whetstone.tags}
          live={whetstone.live}
          source={whetstone.source}
          screenshot={whetstone.screenshot}
          screenshotLabel="Whetstone"
          planetSize={40}
        >
          <StoryWhetstone />
        </FeatureCard>

        <FeatureCard
          theme="manaheart"
          eyebrow="Central project · 02"
          name={manaheart.name}
          line={manaheart.line}
          tags={manaheart.tags}
          live={manaheart.live}
          source={manaheart.source}
          screenshot={manaheart.screenshot}
          screenshotLabel="Manaheart home"
          logo={manaheart.logo}
          planetSize={52}
        >
          <StoryManaheart />
        </FeatureCard>

        <div className="small-wrap">
          <h2 className="eyebrow faint">Other projects</h2>
          <SmallGrid />
        </div>
      </section>

      <About />
    </div>
  );
}
