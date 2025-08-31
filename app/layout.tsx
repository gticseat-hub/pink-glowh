import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pink Glow - Suero Facial Revitalizante',
  description: 'Revela la luz que llevas dentro con Pink Glow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Nunito:wght@400;700&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
