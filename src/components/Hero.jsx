import React from 'react';
import { C } from '../constants';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(155deg, #060E1E 0%, #0B1D3A 45%, #122B52 100%)',
        display: 'flex', alignItems: 'center',
        padding: '100px 5% 80px',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Decorative rings */}
      <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: '600px', height: '600px', borderRadius: '50%', border: '1px solid rgba(200,169,110,0.07)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '5%', right: '8%', width: '380px', height: '380px', borderRadius: '50%', border: '1px solid rgba(200,169,110,0.05)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '350px', height: '350px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

      <div
        className="grid-2"
        style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}
      >
        {/* Left */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(200,169,110,0.35)', borderRadius: '2px', padding: '7px 16px', marginBottom: '28px' }}>
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: C.gold }} />
            <span style={{ fontSize: '0.68rem', color: C.gold, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>
              Kasoa&apos;s Premier Optical Centre
            </span>
          </div>

          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', fontWeight: 300, color: 'white', lineHeight: 1.1, marginBottom: '10px' }}>
            Precision Vision.
          </h1>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', fontWeight: 700, color: C.gold, lineHeight: 1.1, marginBottom: '28px', fontStyle: 'italic' }}>
            Refined Style.
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.97rem', lineHeight: 1.85, maxWidth: '460px', marginBottom: '40px', fontWeight: 300 }}>
            Professional eye correctness testing paired with an exclusive selection of premium frames and precision lenses. Where clarity meets elegance.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '52px' }}>
            <button
              onClick={() => scrollTo('contact')}
              style={{
                background: 'linear-gradient(135deg, #C8A96E, #B8935A)',
                color: C.navy, border: 'none', cursor: 'pointer',
                padding: '13px 30px', borderRadius: '3px',
                fontSize: '0.78rem', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                fontFamily: 'Jost, sans-serif',
                boxShadow: '0 8px 28px rgba(200,169,110,0.38)',
              }}
            >
              Book Eye Test
            </button>
            <button
              onClick={() => scrollTo('collection')}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.22)',
                color: 'white', cursor: 'pointer',
                padding: '13px 30px', borderRadius: '3px',
                fontSize: '0.78rem', fontWeight: 400,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                fontFamily: 'Jost, sans-serif',
              }}
            >
              View Frames
            </button>
          </div>

          <div style={{ display: 'flex', gap: '36px' }}>
            {[['500+', 'Clients Served'], ['100+', 'Frame Styles'], ['3+', 'Years Est.']].map(([num, lbl]) => (
              <div key={lbl}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.9rem', fontWeight: 700, color: C.gold, lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div style={{ position: 'relative' }} className="hide-mobile">
          <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.55)', border: '1px solid rgba(200,169,110,0.12)', aspectRatio: '4/5' }}>
            <img src="/images/child.jpg" alt="Eye care service" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          {/* Floating card */}
          <div style={{
            position: 'absolute', bottom: '-20px', left: '-30px',
            background: 'rgba(6,14,30,0.92)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(200,169,110,0.18)',
            borderRadius: '4px', padding: '18px 22px',
            boxShadow: '0 16px 50px rgba(0,0,0,0.4)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', overflow: 'hidden', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src="/images/logo.jpg" alt="" style={{ width: '90%', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 600, fontSize: '0.88rem', marginBottom: '2px' }}>Professional Testing</div>
                <div style={{ color: C.gold, fontSize: '0.7rem', letterSpacing: '0.08em' }}>Accurate · Trusted · Fast</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
