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
          background: '#0B1120',
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
              background: '#3B82F6',
              color: '#0B1120',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            MR
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, color: '#F1F5F9' }}>{PERSON.name}</div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 56,
            fontWeight: 700,
            color: '#F1F5F9',
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
            color: '#94A3B8',
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
