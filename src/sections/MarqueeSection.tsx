import { useEffect, useRef } from 'react'
import { MARQUEE_IMAGES } from '../data'

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  const row1Images = [...MARQUEE_IMAGES.slice(0, 11), ...MARQUEE_IMAGES.slice(0, 11), ...MARQUEE_IMAGES.slice(0, 11)]
  const row2Images = [...MARQUEE_IMAGES.slice(11), ...MARQUEE_IMAGES.slice(11), ...MARQUEE_IMAGES.slice(11)]

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      const row1 = row1Ref.current
      const row2 = row2Ref.current
      if (!section || !row1 || !row2) return

      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3

      row1.style.transform = `translateX(${offset - 200}px)`
      row2.style.transform = `translateX(${-(offset - 200)}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Row 1 — moves right */}
      <div
        ref={row1Ref}
        className="flex gap-3 mb-3"
        style={{ willChange: 'transform' }}
      >
        {row1Images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>

      {/* Row 2 — moves left */}
      <div
        ref={row2Ref}
        className="flex gap-3"
        style={{ willChange: 'transform' }}
      >
        {row2Images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: 420, height: 270 }}
          />
        ))}
      </div>
    </section>
  )
}
