import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={className} aria-label={text}>
      {chars.map((char, i) => {
        const start = i / chars.length
        const end = (i + 1) / chars.length
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])
        return (
          <span key={i} className="char-wrap">
            <span className="char-placeholder" aria-hidden="true">
              {char === ' ' ? '\u00A0' : char}
            </span>
            <motion.span className="char-animated" style={{ opacity }} aria-hidden="true">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        )
      })}
    </p>
  )
}
