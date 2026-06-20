import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0F172A',
          borderRadius: 32,
          color: '#3B82F6',
          fontSize: 76,
          fontWeight: 700,
          letterSpacing: -2,
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        MR
      </div>
    ),
    { ...size }
  )
}
