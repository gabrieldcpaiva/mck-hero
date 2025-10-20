'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      })

      // CTA animation
      gsap.from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} style={styles.hero}>
      <div style={styles.container}>
        <h1 ref={titleRef} style={styles.title}>
          Transform Your Business
        </h1>
        <p ref={subtitleRef} style={styles.subtitle}>
          Strategic solutions for lasting impact
        </p>
        <div ref={ctaRef} style={styles.cta}>
          <button style={styles.primaryButton}>Get Started</button>
          <button style={styles.secondaryButton}>Learn More</button>
        </div>
      </div>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #00338D 0%, #001F5F 100%)',
    color: '#F5F5F5',
    padding: '2rem',
  },
  container: {
    maxWidth: '1200px',
    textAlign: 'center',
  },
  title: {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: 600,
    marginBottom: '1.5rem',
    lineHeight: 1.1,
  },
  subtitle: {
    fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
    marginBottom: '3rem',
    opacity: 0.9,
  },
  cta: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '1rem 2.5rem',
    fontSize: '1.1rem',
    fontWeight: 600,
    border: 'none',
    borderRadius: '4px',
    background: '#FF8C00',
    color: '#FFFFFF',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  secondaryButton: {
    padding: '1rem 2.5rem',
    fontSize: '1.1rem',
    fontWeight: 600,
    border: '2px solid #F5F5F5',
    borderRadius: '4px',
    background: 'transparent',
    color: '#F5F5F5',
    cursor: 'pointer',
    transition: 'transform 0.2s, background 0.2s',
  },
}
