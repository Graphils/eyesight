import React from 'react';
import { C } from '../constants';
import { StarIcon } from './Icons';

const REVIEWS = [
  {
    name: 'Abena M.',
    loc: 'Kasoa',
    text: 'The testing was thorough and professional. My glasses fit perfectly and the vision is crystal clear. The staff were incredibly patient helping me choose my frames.',
  },
  {
    name: 'Kwame O.',
    loc: 'Accra',
    text: 'Exceptional service. They understood exactly what I needed and guided me to the right frames. Pricing is fair and quality is outstanding. I recommend Eye-Sight to everyone.',
  },
  {
    name: 'Efua D.',
    loc: 'Kasoa',
    text: 'Brought my daughter for her first glasses. The team was patient, kind and very professional with her. She loves her frames and can now read the board at school!',
  },
];

function ReviewCard({ review }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '36px',
        border: `1px solid ${hovered ? 'rgba(200,169,110,0.4)' : 'rgba(26,68,128,0.09)'}`,
        borderRadius: '3px',
        background: C.off,
        transition: 'border-color 0.3s',
      }}
    >
      <div style={{ display: 'flex', gap: '3px', marginBottom: '22px' }}>
        {[1, 2, 3, 4, 5].map(s => <StarIcon key={s} />)}
      </div>
      <p style={{
        color: '#4A5568',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.05rem', fontWeight: 400,
        lineHeight: 1.8, marginBottom: '24px', fontStyle: 'italic',
      }}>
        &ldquo;{review.text}&rdquo;
      </p>
      <div style={{ borderTop: '1px solid rgba(26,68,128,0.08)', paddingTop: '18px' }}>
        <div style={{ fontWeight: 600, color: C.navy, fontSize: '0.88rem' }}>{review.name}</div>
        <div style={{ fontSize: '0.72rem', color: C.gold, letterSpacing: '0.08em' }}>{review.loc}, Ghana</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section style={{ padding: '100px 5%', background: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-block', width: '36px', height: '1px', background: C.gold, marginBottom: '14px' }} />
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 600, color: C.navy }}>
            Client Testimonials
          </h2>
        </div>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}>
          {REVIEWS.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>
    </section>
  );
}
