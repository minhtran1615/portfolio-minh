import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import AnimatedText from '../components/AnimatedText'
import { PERSONAL, DECO_IMAGES } from '../data'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center
        px-5 sm:px-8 md:px-10 py-20 relative text-center"
      style={{ background: '#0C0C0C' }}
    >
      {/* Top-left moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]
          w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img src={DECO_IMAGES.moonTopLeft} alt="" className="w-full" />
      </FadeIn>

      {/* Bottom-left object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]
          w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
      >
        <img src={DECO_IMAGES.objBottomLeft} alt="" className="w-full" />
      </FadeIn>

      {/* Top-right lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]
          w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img src={DECO_IMAGES.legoTopRight} alt="" className="w-full" />
      </FadeIn>

      {/* Bottom-right group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]
          w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
      >
        <img src={DECO_IMAGES.groupBottomRight} alt="" className="w-full" />
      </FadeIn>

      {/* Center content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={PERSONAL.aboutText}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' } as React.CSSProperties}
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24 z-10">
        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
