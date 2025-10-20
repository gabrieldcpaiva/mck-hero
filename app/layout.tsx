import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'McK Hero - Next.js with GSAP',
  description: 'McKinsey-inspired hero section with GSAP animations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
