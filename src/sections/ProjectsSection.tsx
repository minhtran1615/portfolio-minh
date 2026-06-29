import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'
import { PROJECTS } from '../data'

interface ProjectCardProps {
  project: (typeof PROJECTS)[0]
  index: number
  total: number
}

function ProjectCard({ project, index, total }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={cardRef}
      className="h-[85vh] flex items-start sticky"
      style={{ top: '6rem' }}
    >
      <motion.div
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
        style={{
          background: '#0C0C0C',
          scale,
          marginTop: index * 28,
          transformOrigin: 'top center',
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-3">
          <div className="flex items-baseline gap-4">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 80px)', opacity: 0.4 }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span
                className="uppercase tracking-widest text-[#D7E2EA]"
                style={{ fontSize: '0.72rem', opacity: 0.5 }}
              >
                {project.category}
              </span>
              <span
                className="font-bold text-[#D7E2EA] uppercase"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.liveUrl} />
        </div>

        {/* Images */}
        <div className="grid gap-3" style={{ gridTemplateColumns: '2fr 3fr' }}>
          {/* Left column — 2 stacked */}
          <div className="flex flex-col gap-3">
            <img
              src={project.images.col1[0]}
              alt={`${project.name} screenshot 1`}
              className="w-full object-cover rounded-[32px] sm:rounded-[40px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              loading="lazy"
            />
            <img
              src={project.images.col1[1]}
              alt={`${project.name} screenshot 2`}
              className="w-full object-cover rounded-[32px] sm:rounded-[40px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              loading="lazy"
            />
          </div>

          {/* Right column — 1 tall */}
          <div>
            <img
              src={project.images.col2}
              alt={`${project.name} screenshot 3`}
              className="w-full h-full object-cover rounded-[32px] sm:rounded-[40px]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 relative z-20
        px-5 sm:px-8 md:px-10 pt-20 pb-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase tracking-tight leading-none text-center mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  )
}
