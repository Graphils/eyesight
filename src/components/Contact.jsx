import React, { useState } from 'react';
import { C } from '../constants';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, WhatsAppIcon, CheckIcon, SendIcon } from './Icons';

const CONTACT_ITEMS = [
  {
    Icon: MapPinIcon,
    label: 'Location',
    lines: ['Kasoa Obom Road (Road of Justice), Lamptey', 'Opposite Merkot Pharmacy'],
  },
  {
    Icon: PhoneIcon,
    label: 'Phone',
    lines: ['+233 547 097 213', '+233 208 332 058'],
  },
  {
    Icon: WhatsAppIcon,
    label: 'WhatsApp — International Clients',
    lines: ['+1 509 428 4603', 'WhatsApp only, for foreign clients'],
  },
  {
    Icon: MailIcon,
    label: 'Email',
    lines: ['eyesightoptical2021@gmail.com'],
  },
  {
    Icon: ClockIcon,
    label: 'Opening Hours',
    lines: ['Mon – Fri: 8:00am – 6:00pm', 'Saturday: 9:00am – 4:00pm'],
  },
];

const SERVICES = [
  'Eye Correctness Test',
  'Frame Selection',
  'Prescription Lens Replacement',
  "Children's Eyewear",
  'Sunglasses',
  'General Enquiry',
];

const INP_STYLE = {
  width: '100%',
  padding: '12px 15px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.11)',
  borderRadius: '3px',
  color: 'white',
  fontSize: '0.88rem',
  fontFamily: 'Jost, sans-serif',
  outline: 'none',
};

const LABEL_STYLE = {
  fontSize: '0.7rem',
  color: 'rgba(255,255,255,0.4)',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: '6px',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    if (!form.name || !form.phone || !form.service) {
      alert('Please fill in your name, phone number, and the service needed.');
      return;
    }
    setSending(true);

    const subject = encodeURIComponent('Appointment Request - ' + form.name);
    const bodyLines = [
      'NEW APPOINTMENT REQUEST',
      '',
      'Name: ' + form.name,
      'Phone: ' + form.phone,
      'Email: ' + (form.email || 'Not provided'),
      'Service: ' + form.service,
      'Preferred Date: ' + (form.date || 'Not specified'),
      'Message: ' + (form.message || 'None'),
      '',
      'Sent from Eye-Sight Care and Optical website.',
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = 'mailto:EYESIGHTOPTICAL2021@GMAIL.COM?subject=' + subject + '&body=' + body;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', phone: '', email: '', service: '', date: '', message: '' });
    }, 1200);
  };

  const focusStyle = (e) => { e.target.style.borderColor = 'rgba(200,169,110,0.5)'; };
  const blurStyle = (e) => { e.target.style.borderColor = 'rgba(255,255,255,0.11)'; };

  return (
    <section id="contact" style={{ padding: '100px 5%', background: '#060E1E' }}>
      <div
        className="grid-2"
        style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '70px' }}
      >
        {/* Left — contact info */}
        <div>
          <div style={{ display: 'inline-block', width: '36px', height: '1px', background: C.gold, marginBottom: '14px' }} />
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem,3.5vw,2.8rem)', fontWeight: 600, color: 'white', marginBottom: '14px' }}>
            Get in Touch
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.9rem', lineHeight: 1.85, marginBottom: '36px', fontWeight: 300 }}>
            Book an appointment online, call us, or visit our shop in Kasoa. We will confirm your booking promptly.
          </p>

          {/* Logo card */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '36px', padding: '18px 20px', border: '1px solid rgba(200,169,110,0.18)', borderRadius: '4px' }}>
            <div style={{ width: '50px', height: '50px', background: 'white', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <img src="/images/logo.jpg" alt="Eye-Sight" style={{ width: '88%', objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white', fontSize: '1.05rem', fontWeight: 600 }}>Eye-Sight Care &amp; Optical</div>
              <div style={{ color: C.gold, fontSize: '0.68rem', letterSpacing: '0.14em' }}>KASOA, GHANA · EST. 2021</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {CONTACT_ITEMS.map(({ Icon, label, lines }, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ color: C.gold, flexShrink: 0, marginTop: '2px' }}><Icon s={17} /></div>
                <div>
                  <div style={{ fontSize: '0.67rem', color: 'rgba(255,255,255,0.32)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '3px' }}>{label}</div>
                  {lines.map((ln, j) => (
                    <div key={j} style={{ fontSize: '0.86rem', color: j === 0 ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.42)', fontWeight: j === 0 ? 400 : 300, lineHeight: 1.6 }}>{ln}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — booking form */}
        <div style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px', padding: '44px 38px' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.55rem', fontWeight: 600, color: 'white', marginBottom: '28px' }}>
            Book an Appointment
          </h3>

          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ color: C.gold, marginBottom: '14px' }}><CheckIcon s={40} /></div>
              <div style={{ color: 'white', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600, marginBottom: '8px' }}>
                Request Sent
              </div>
              <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.86rem', lineHeight: 1.7 }}>
                Your email client has opened with all booking details pre-filled and addressed to our inbox. We will confirm your appointment shortly.
              </p>
              <button
                onClick={() => setSent(false)}
                style={{ marginTop: '22px', background: 'none', border: '1px solid rgba(200,169,110,0.38)', color: C.gold, padding: '9px 22px', cursor: 'pointer', borderRadius: '3px', fontSize: '0.75rem', letterSpacing: '0.1em', fontFamily: 'Jost, sans-serif' }}
              >
                New Booking
              </button>
            </div>
          ) : (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={LABEL_STYLE}>Full Name *</label>
                  <input name="name" value={form.name} onChange={change} placeholder="Your name" style={INP_STYLE} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
                <div>
                  <label style={LABEL_STYLE}>Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={change} placeholder="+233..." style={INP_STYLE} onFocus={focusStyle} onBlur={blurStyle} />
                </div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={LABEL_STYLE}>Email Address</label>
                <input name="email" value={form.email} onChange={change} placeholder="your@email.com" type="email" style={INP_STYLE} onFocus={focusStyle} onBlur={blurStyle} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={LABEL_STYLE}>Service Needed *</label>
                  <select name="service" value={form.service} onChange={change} style={{ ...INP_STYLE, appearance: 'none', cursor: 'pointer' }}>
                    <option value="" style={{ background: '#0B1D3A' }}>Select...</option>
                    {SERVICES.map(s => <option key={s} value={s} style={{ background: '#0B1D3A' }}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={LABEL_STYLE}>Preferred Date</label>
                  <input name="date" value={form.date} onChange={change} type="date" style={{ ...INP_STYLE, colorScheme: 'dark' }} />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={LABEL_STYLE}>Additional Notes</label>
                <textarea name="message" value={form.message} onChange={change} rows={3} placeholder="Any notes or questions..." style={{ ...INP_STYLE, resize: 'vertical', minHeight: '78px' }} onFocus={focusStyle} onBlur={blurStyle} />
              </div>

              <button
                onClick={submit}
                disabled={sending}
                style={{
                  width: '100%', padding: '14px',
                  background: sending ? 'rgba(200,169,110,0.5)' : 'linear-gradient(135deg, #C8A96E, #B8935A)',
                  color: C.navy, border: 'none',
                  cursor: sending ? 'default' : 'pointer',
                  borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  fontFamily: 'Jost, sans-serif',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                }}
              >
                {sending ? 'Opening Email...' : <><SendIcon s={14} /> Submit Appointment Request</>}
              </button>

              <p style={{ marginTop: '12px', fontSize: '0.72rem', color: 'rgba(255,255,255,0.28)', textAlign: 'center', lineHeight: 1.6 }}>
                Clicking submit opens your email client with all booking details pre-filled, sent directly to eyesightoptical2021@gmail.com
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
