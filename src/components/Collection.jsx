import React, { useState } from 'react';
import { C, FRAMES } from '../constants';

const FILTERS = ['All', 'Unisex', 'Women', 'Men', 'Sunwear'];

export default function Collection() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? FRAMES : FRAMES.filter(f => f.style.includes(filter));

  return (
    <section id="collection" style={{ padding: '100px 5%', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '44px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'inline-block', width: '36px', height: '1px', background: C.gold, marginBottom: '14px' }} />
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 600, color: C.navy, marginBottom: '6px' }}>
              Frame Collection
            </h2>
            <p style={{ color: C.muted, fontSize: '0.88rem', fontWeight: 300 }}>
              Handpicked styles for every taste and occasion
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '8px 18px',
                  border: '1px solid',
                  borderColor: filter === f ? C.blue : 'rgba(26,68,128,0.2)',
                  background: filter === f ? C.blue : 'transparent',
                  color: filter === f ? 'white' : C.blue,
                  cursor: 'pointer', borderRadius: '2px',
                  fontSize: '0.73rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: 'Jost, sans-serif',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Frames grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {shown.map((frame, i) => (
            <FrameCard key={frame.id + i} frame={frame} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FrameCard({ frame }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#F4F7FB', borderRadius: '3px', overflow: 'hidden',
        border: '1px solid rgba(26,68,128,0.07)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 16px 44px rgba(26,68,128,0.11)' : 'none',
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'default',
      }}
    >
      <div style={{ overflow: 'hidden', aspectRatio: '4/3', background: 'white' }}>
        <img
          src={frame.img}
          alt={frame.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.5s',
          }}
        />
      </div>
      <div style={{ padding: '18px 20px' }}>
        <div style={{ fontSize: '0.67rem', color: '#C8A96E', letterSpacing: '0.15em', fontWeight: 500, textTransform: 'uppercase', marginBottom: '4px' }}>
          {frame.id}
        </div>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#0B1D3A', marginBottom: '4px' }}>
          {frame.name}
        </div>
        <div style={{ fontSize: '0.77rem', color: '#8899AA', fontWeight: 300 }}>
          {frame.style}
        </div>
      </div>
    </div>
  );
}
