import type { CSSProperties } from 'react';

export type PlanetKind = 'star' | 'whetstone' | 'manaheart' | 'small';

type Props = { kind: PlanetKind; size: number; spin?: boolean };

const fill: CSSProperties = { position: 'absolute', inset: 0, borderRadius: '50%' };

export default function Planet({ kind, size, spin = false }: Props) {
  const k = size / 64;
  const glow = Math.round(kind === 'star' ? size * 0.75 : size * 0.3);
  const line = size >= 200 ? 1.5 : 1;

  return (
    <div aria-hidden="true" style={{ position: 'relative', flex: 'none', width: size, height: size }}>
      {kind === 'star' && (
        <span
          style={{
            ...fill,
            background: 'radial-gradient(circle at 45% 40%, #FFF7E2 0%, #EAD49C 42%, #B9975A 100%)',
            boxShadow: `0 0 ${glow}px rgba(214, 192, 138, 0.28)`,
          }}
        />
      )}

      {kind === 'whetstone' && (
        <>
          <span
            style={{
              ...fill,
              background: 'radial-gradient(circle at 34% 30%, #4B4541 0%, #25211E 46%, #0F0D0C 100%)',
              boxShadow: `inset ${Math.round(-6 * k)}px ${Math.round(-8 * k)}px ${Math.round(14 * k)}px rgba(0,0,0,0.6), 0 0 0 1px rgba(224,112,58,0.4), 0 0 ${glow}px rgba(224,112,58,0.16)`,
            }}
          />
          <span
            style={{
              position: 'absolute',
              inset: '14%',
              borderRadius: '50%',
              border: `${line}px solid transparent`,
              borderBottomColor: 'rgba(224, 112, 58, 0.85)',
              transform: 'rotate(-24deg)',
            }}
          />
        </>
      )}

      {kind === 'manaheart' && (
        <>
          <span className={spin ? 'mh-spin' : undefined} style={{ position: 'absolute', inset: 0 }}>
            <span
              style={{
                position: 'absolute', left: 0, top: '31%', width: '100%', height: '38%', borderRadius: '50%',
                border: `${line}px solid rgba(157, 176, 255, 0.5)`, transform: 'rotate(-18deg)', boxSizing: 'border-box',
              }}
            />
            <span
              style={{
                position: 'absolute', left: '11%', top: '35%', width: '78%', height: '30%', borderRadius: '50%',
                border: `${line}px solid rgba(169, 139, 255, 0.4)`, transform: 'rotate(32deg)', boxSizing: 'border-box',
              }}
            />
          </span>
          <span
            style={{
              position: 'absolute', left: '30%', top: '30%', width: '40%', height: '40%', borderRadius: '50%',
              background: 'radial-gradient(circle at 50% 45%, #F4F6FF 0%, #B4C1FF 34%, #7484EE 72%, #3E4AAE 100%)',
              boxShadow: `0 0 ${glow}px rgba(140, 160, 255, 0.36)`,
            }}
          />
        </>
      )}

      {kind === 'small' && (
        <span
          style={{
            ...fill,
            background: 'radial-gradient(circle at 35% 30%, #6A7695 0%, #3A4560 55%, #222A3D 100%)',
            boxShadow: '0 0 0 1px rgba(201, 211, 230, 0.22)',
          }}
        />
      )}
    </div>
  );
}
