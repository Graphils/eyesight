import React from 'react';
import { C } from '../constants';
import { EyeIcon, GlassesIcon, SearchIcon, DiamondIcon, ShieldIcon, UsersIcon } from './Icons';

const services = [
  { Icon: EyeIcon, title: 'Vision Correctness Testing', desc: 'Precise optical assessment using professional-grade equipment to determine your exact prescription with full accuracy.' },
  { Icon: GlassesIcon, title: 'Premium Frame Selection', desc: 'Curated collection of designer frames — from bold statements to refined classics — for every face and personality.' },
  { Icon: SearchIcon, title: 'Custom Prescription Lenses', desc: 'Single vision, bifocal, anti-glare, blue-light blocking and photochromic lenses cut precisely to your prescription.' },
  { Icon: DiamondIcon, title: 'Frame Fitting and Adjustment', desc: 'Expert fitting consultation ensuring your glasses are perfectly balanced, comfortable and flattering on your face.' },
  { Icon: ShieldIcon, title: 'Lens Coatings and Protection', desc: 'Anti-scratch, UV400, anti-reflective and hydrophobic coatings for maximum lens performance and longevity.' },
  { Icon: UsersIcon, title: "Children's Eyewear", desc: 'Durable, comfortable frames for children with prescriptions — built to withstand active young lives in style.' },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '100px 5%', background: C.off }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-block', width: '36px', height: '1px', background: C.gold, marginBottom: '14px' }} />
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 600, color: C.navy, marginBottom: '12px' }}>
            Our Services
          </h2>
          <p style={{ color: C.muted, fontSize: '0.92rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8, fontWeight: 300 }}>
            Comprehensive eye care and optical solutions under one roof — professional, precise, and personal.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid-3"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: C.border, border: `1px solid ${C.border}` }}
        >
          {services.map(({ Icon, title, desc }, i) => (
            <ServiceCard key={i} Icon={Icon} title={title} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ Icon, title, desc }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#EBF2FA' : 'white',
        padding: '44px 34px',
        cursor: 'default',
        transition: 'background 0.25s',
      }}
    >
      <div style={{ color: '#1A4480', marginBottom: '18px' }}>
        <Icon s={26} />
      </div>
      <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 600, color: '#0B1D3A', marginBottom: '10px' }}>
        {title}
      </h3>
      <p style={{ color: '#8899AA', fontSize: '0.87rem', lineHeight: 1.8, fontWeight: 300 }}>{desc}</p>
    </div>
  );
}
