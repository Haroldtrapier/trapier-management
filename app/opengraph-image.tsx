import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Trapier Management: AI that pays back, built by an SDVOSB';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 80, background: '#08111F', color: '#F5F2EA', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: '#0F1B2E', border: '2px solid #213558', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D2AA4B', fontSize: 40, fontWeight: 700 }}>T</div>
          <div style={{ fontSize: 32, fontWeight: 600 }}>Trapier Management</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>AI that pays back.</div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1, color: '#D2AA4B' }}>Built, proven and run by your team.</div>
        </div>
        <div style={{ fontSize: 28, color: '#94A8C9' }}>SBA-certified SDVOSB · CAGE 12LN8</div>
      </div>
    ),
    size,
  );
}
