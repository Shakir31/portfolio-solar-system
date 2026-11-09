import { useState, type CSSProperties } from 'react';
import { manaheart, smallProjects, whetstone } from '../content';
import { useMediaQuery } from '../useMediaQuery';
import Planet, { type PlanetKind } from './Planet';

const WIDE = { W: 1440, H: 640, radii: [140, 200, 255, 300], star: 44, w: 56, m: 80, s: 18 };
const COMPACT = { W: 390, H: 420, radii: [80, 125, 172, 172], star: 32, w: 40, m: 58, s: 14 };

// Faint background stars, as fractions of the band: x, y, radius, opacity.
const STARS = [
  [0.06, 0.1, 0.9, 0.5], [0.18, 0.82, 0.7, 0.4], [0.27, 0.16, 1.1, 0.55], [0.09, 0.56, 0.8, 0.35],
  [0.4, 0.06, 0.6, 0.35], [0.62, 0.1, 0.8, 0.4], [0.78, 0.2, 0.7, 0.35], [0.92, 0.12, 1, 0.5],
  [0.95, 0.6, 1.1, 0.5], [0.84, 0.88, 0.8, 0.4], [0.52, 0.94, 0.7, 0.35], [0.33, 0.9, 1, 0.4],
];

type Body = { id: string; kind: PlanetKind; orbit: number; angle: number; dur: number; name: string; href: string };

export default function SolarSystem() {
  const compact = useMediaQuery('(max-width: 720px)');
  const G = compact ? COMPACT : WIDE;
  const cx = G.W / 2;
  const cy = G.H / 2;
  const [hovered, setHovered] = useState<string | null>(null);

  const smallAngles = compact ? [120, 20, 210, 290] : [120, 20, 165, 60];
  const smallDur = compact ? [420, 420, 420, 420] : [420, 420, 560, 560];

  const bodies: Body[] = [
    { id: 'whetstone', kind: 'whetstone', orbit: 0, angle: 200, dur: 200, name: whetstone.name, href: '#card-whetstone' },
    { id: 'manaheart', kind: 'manaheart', orbit: 1, angle: 330, dur: 300, name: manaheart.name, href: '#card-manaheart' },
    ...smallProjects.slice(0, 4).map((p, i) => ({
      id: `s${i + 1}`, kind: 'small' as const, orbit: i < 2 ? 2 : 3, angle: smallAngles[i], dur: smallDur[i],
      name: p.name, href: `#small-${i + 1}`,
    })),
  ];

  const sizeOf = (k: PlanetKind) => (k === 'whetstone' ? G.w : k === 'manaheart' ? G.m : G.s);
  const litRadius = bodies.find((b) => b.id === hovered);
  const radii = [...new Set(G.radii)];

  return (
    <div className="sys" style={{ height: G.H }}>
      <div className="sys-stage" style={{ width: G.W, height: G.H, marginLeft: -G.W / 2 }}>
        <svg aria-hidden="true" width={G.W} height={G.H} viewBox={`0 0 ${G.W} ${G.H}`} className="sys-svg">
          <g fill="#C9D3E6">
            {STARS.map(([x, y, r, o], i) => (
              <circle key={i} cx={Math.round(x * G.W)} cy={Math.round(y * G.H)} r={r} opacity={o} />
            ))}
          </g>
          <g fill="none" strokeWidth={1}>
            {radii.map((r) => (
              <circle
                key={r}
                cx={cx}
                cy={cy}
                r={r}
                stroke={litRadius && G.radii[litRadius.orbit] === r ? 'rgba(214,192,138,0.5)' : 'rgba(170,185,220,0.14)'}
              />
            ))}
          </g>
        </svg>

        <div style={{ position: 'absolute', left: cx - G.star / 2, top: cy - G.star / 2 }}>
          <Planet kind="star" size={G.star} />
        </div>

        {bodies.map((b) => {
          const vis = sizeOf(b.kind);
          const hit = b.kind === 'small' ? 44 : vis;
          const r = G.radii[b.orbit];
          const arm: CSSProperties = {
            left: cx, top: cy, transform: `rotate(${b.angle}deg)`, animationName: 'orbit', animationDuration: `${b.dur}s`,
          };
          return (
            <div key={b.id} className="spin sys-arm" style={arm}>
              <div style={{ position: 'absolute', left: r, top: 0, width: hit, height: hit, marginLeft: -hit / 2, marginTop: -hit / 2 }}>
                <div
                  className="spin"
                  style={{
                    position: 'relative', width: '100%', height: '100%', transform: `rotate(${-b.angle}deg)`,
                    animationName: 'counter', animationDuration: `${b.dur}s`,
                  }}
                >
                  <a
                    className="orb"
                    href={b.href}
                    aria-label={`${b.name}, jump to project`}
                    onMouseEnter={() => setHovered(b.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(b.id)}
                    onBlur={() => setHovered(null)}
                  >
                    <Planet kind={b.kind} size={vis} />
                  </a>
                  {!compact && hovered === b.id && <span className="orb-label">{b.name}</span>}
                </div>
              </div>
            </div>
          );
        })}

        <span className="sys-hint">{compact ? 'Tap a planet to jump to it' : 'Click a planet to jump to it'}</span>
      </div>
    </div>
  );
}
