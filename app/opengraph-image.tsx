import { ImageResponse } from 'next/og'
import { PERSON } from '@/lib/data'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#F0F0F0',
          backgroundImage:
            'radial-gradient(ellipse 55% 75% at 0% 110%, rgba(255,62,200,0.95), transparent 70%), radial-gradient(ellipse 50% 65% at 35% 115%, rgba(91,46,255,0.7), transparent 70%)',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#5B2EFF',
              color: '#FFFFFF',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            MR
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, color: '#0D0A0E' }}>{PERSON.name}</div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 56,
            fontWeight: 700,
            color: '#0D0A0E',
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Building Enterprise AI Products That Move the Needle.
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#5C5866',
            marginTop: 28,
          }}
        >
          {PERSON.title}
        </div>
      </div>
    ),
    { ...size }
  )
}
