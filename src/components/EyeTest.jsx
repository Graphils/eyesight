import React from 'react';
import { C } from '../constants';

const STEPS = [
  { n: '01', t: 'Schedule Your Visit', d: 'Call, WhatsApp, or use our online booking form. Walk-ins are also welcome during opening hours.' },
  { n: '02', t: 'Vision Assessment', d: 'Our optician performs a thorough correctness test using professional equipment to determine your exact prescription.' },
  { n: '03', t: 'Frame Consultation', d: 'We guide you in selecting frames that complement your face shape, lifestyle, and personal style.' },
  { n: '04', t: 'Precision Fitting', d: 'Your lenses are custom-cut to your prescription and professionally fitted. Ready to collect promptly.' },
];

export default function EyeTest() {
  const go = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="eyetest" style={{ padding: '100px 5%', background: C.navy }}>
      <div
        className="grid-2"
        style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
      >
        {/* Image side */}
        <div style={{ position: 'relative' }} className="hide-mobile">
          <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}>
            <img
              src="/images/eyetest.jpg"
              alt="Eye correctness testing"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}
            />
          </div>
          <div style={{
            position: 'absolute', top: '24px', right: '-16px',
            border: '1px solid rgba(200,169,110,0.22)',
            borderRadius: '4px', width: '80%', height: '82%',
            pointerEvents: 'none',
          }} />
        </div>

        {/* Content side */}
        <div>
          <div style={{ display: 'inline-block', width: '36px', height: '1px', background: C.gold, marginBottom: '14px' }} />
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 600, color: 'white', marginBottom: '14px' }}>
            Eye Correctness Testing
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: '0.93rem', lineHeight: 1.85, marginBottom: '44px', fontWeight: 300 }}>
            Our professional testing ensures every lens we prescribe is an exact match to your vision needs — no guesswork, no compromise.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
            {STEPS.map(step => (
              <div key={step.n} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, color: C.gold, lineHeight: 1, flexShrink: 0, width: '32px' }}>
                  {step.n}
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.09)', paddingTop: '4px', flex: 1 }}>
                  <div style={{ color: 'white', fontWeight: 500, fontSize: '0.92rem', marginBottom: '5px' }}>{step.t}</div>
                  <div style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.84rem', lineHeight: 1.75, fontWeight: 300 }}>{step.d}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={go}
            style={{
              marginTop: '40px', background: 'transparent',
              border: '1px solid rgba(200,169,110,0.45)',
              color: C.gold, cursor: 'pointer',
              padding: '12px 28px', borderRadius: '3px',
              fontSize: '0.76rem', fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              fontFamily: 'Jost, sans-serif',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,169,110,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            Schedule Your Eye Test
          </button>
        </div>
      </div>
    </section>
  );
}
