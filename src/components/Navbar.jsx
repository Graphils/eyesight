import React, { useState, useEffect } from 'react';
import { C } from '../constants';
import { MenuIcon, XIcon } from './Icons';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'collection', label: 'Collection' },
  { id: 'eyetest', label: 'Eye Test' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    setActive(id);
    scrollTo(id);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(11,29,58,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,169,110,0.12)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 5%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '76px',
      }}>
        {/* Logo */}
        <div
          onClick={() => go('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <div style={{
            width: '50px', height: '50px', borderRadius: '50%',
            background: 'white', overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 16px rgba(200,169,110,0.4)',
            flexShrink: 0, padding: '2px',
          }}>
            <img src="/images/logo.jpg" alt="Eye-Sight logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 700, color: 'white', lineHeight: 1.1, letterSpacing: '0.02em' }}>
              Eye-Sight
            </div>
            <div style={{ fontSize: '0.62rem', color: 'rgba(200,169,110,0.9)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 400 }}>
              Care &amp; Optical
            </div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          {LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: active === id ? C.gold : 'rgba(255,255,255,0.75)',
                fontSize: '0.78rem', fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                fontFamily: 'Jost, sans-serif',
                paddingBottom: '2px',
                borderBottom: active === id ? `1px solid ${C.gold}` : '1px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            style={{
              background: 'linear-gradient(135deg, #C8A96E, #B8935A)',
              color: C.navy, border: 'none', cursor: 'pointer',
              padding: '10px 22px', borderRadius: '3px',
              fontSize: '0.75rem', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: 'Jost, sans-serif',
              boxShadow: '0 4px 14px rgba(200,169,110,0.3)',
            }}
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="show-mobile"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', display: 'none' }}
        >
          {open ? <XIcon s={24} /> : <MenuIcon s={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: '76px', left: 0, right: 0, zIndex: 999,
          background: 'rgba(11,29,58,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(200,169,110,0.12)',
          padding: '20px 5%', display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(255,255,255,0.8)', fontSize: '1rem',
                fontFamily: 'Jost, sans-serif', padding: '12px 0',
                textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.06)',
                letterSpacing: '0.05em',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
