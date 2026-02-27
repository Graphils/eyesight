import React from 'react';
import { C } from '../constants';
import { CheckIcon } from './Icons';

const POINTS = [
  'Certified professional opticians',
  'Accurate prescription testing',
  'Premium Farenheit and international frames',
  'Serving clients across Kasoa and Accra since 2021',
];

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 5%', background: C.off }}>
      <div
        className="grid-2"
        style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
      >
        {/* Text side */}
        <div>
          <div style={{ display: 'inline-block', width: '36px', height: '1px', background: C.gold, marginBottom: '14px' }} />
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 600, color: C.navy, marginBottom: '20px' }}>
            About Eye-Sight Care &amp; Optical
          </h2>
          <p style={{ color: C.muted, fontSize: '0.93rem', lineHeight: 1.9, marginBottom: '16px', fontWeight: 300 }}>
            Founded in 2021 and based in Kasoa, Eye-Sight Care &amp; Optical was built on a simple conviction — that quality vision care and stylish eyewear should be accessible to everyone.
          </p>
          <p style={{ color: C.muted, fontSize: '0.93rem', lineHeight: 1.9, marginBottom: '16px', fontWeight: 300 }}>
            We combine professional eye correctness testing with a carefully curated collection of premium frames and lenses. Each client receives a personalised experience guided by expertise and genuine care.
          </p>
          <p style={{ color: C.muted, fontSize: '0.93rem', lineHeight: 1.9, marginBottom: '36px', fontWeight: 300 }}>
            Whether you are a first-time glasses wearer, upgrading your prescription, or refreshing your style — we are your trusted optical partner in Greater Accra.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {POINTS.map((pt, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: C.blue, flexShrink: 0 }}><CheckIcon s={15} /></div>
                <span style={{ fontSize: '0.87rem', color: '#4A5568' }}>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div style={{ position: 'relative' }}>
          <div style={{
            borderRadius: '4px', overflow: 'hidden',
            boxShadow: '0 24px 60px rgba(26,68,128,0.12)',
            border: '1px solid rgba(26,68,128,0.07)',
            aspectRatio: '4/5',
          }}>
            <img
              src="/images/doctor.jpg"
              alt="Eye-Sight Optician"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>
          <div style={{
            position: 'absolute', top: '24px', left: '-20px',
            border: '1px solid rgba(200,169,110,0.28)',
            borderRadius: '4px', width: '80%', height: '84%',
            pointerEvents: 'none', zIndex: 0,
          }} />
        </div>
      </div>
    </section>
  );
}
