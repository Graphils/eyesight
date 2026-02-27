import React from 'react';
import { C } from '../constants';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const NAV = [
  ['home', 'Home'], ['services', 'Services'], ['collection', 'Collection'],
  ['eyetest', 'Eye Test'], ['about', 'About'], ['contact', 'Contact'],
];

const CONTACT_LINES = [
  '+233 547 097 213',
  '+233 208 332 058',
  'WA: +1 509 428 4603',
  'eyesightoptical2021@gmail.com',
  'Kasoa Obom Road, Lamptey',
];

export default function Footer() {
  return (
    <footer style={{ background: '#040B16', color: 'rgba(255,255,255,0.42)', padding: '56px 5% 28px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="grid-3"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '50px', paddingBottom: '44px', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '28px' }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div style={{ width: '46px', height: '46px', background: 'white', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <img src="/images/logo.jpg" alt="Eye-Sight" style={{ width: '88%', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontWeight: 600, fontSize: '1.05rem' }}>Eye-Sight Care &amp; Optical</div>
                <div style={{ fontSize: '0.62rem', color: C.gold, letterSpacing: '0.15em' }}>KASOA, GHANA</div>
              </div>
            </div>
            <p style={{ fontSize: '0.83rem', lineHeight: 1.8, maxWidth: '280px' }}>
              Professional eye correctness testing and premium eyewear in Kasoa. Serving Ghana with clarity and style since 2021.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ color: 'white', fontSize: '0.73rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '18px', fontWeight: 500 }}>Navigate</div>
            {NAV.map(([id, label]) => (
              <div key={id} style={{ marginBottom: '9px' }}>
                <button
                  onClick={() => scrollTo(id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.42)', fontSize: '0.84rem', fontFamily: 'Jost, sans-serif', padding: 0 }}
                  onMouseEnter={e => { e.currentTarget.style.color = C.gold; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.42)'; }}
                >
                  {label}
                </button>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: 'white', fontSize: '0.73rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '18px', fontWeight: 500 }}>Contact</div>
            {CONTACT_LINES.map((line, i) => (
              <div key={i} style={{ fontSize: '0.81rem', marginBottom: '9px', lineHeight: 1.5 }}>{line}</div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontSize: '0.76rem' }}>
          <span>&copy; {new Date().getFullYear()} Eye-Sight Care &amp; Optical. All rights reserved.</span>
          <span>Kasoa, Greater Accra, Ghana</span>
        </div>
      </div>
    </footer>
  );
}
