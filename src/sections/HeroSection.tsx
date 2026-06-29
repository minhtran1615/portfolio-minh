import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import { NAV_LINKS, PERSONAL, PORTRAIT_URL } from '../data'

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col overflow-x-clip relative"
      style={{ background: '#0C0C0C' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider
                text-sm md:text-lg lg:text-[1.4rem]
                hover:opacity-70 transition-opacity duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full
              text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
              mt-6 sm:mt-4 md:-mt-5 px-4"
          >
            Hi, i&apos;m {PERSONAL.name}
          </h1>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 flex-1 relative">
        {/* Left description */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
              max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {PERSONAL.heroDesc}
          </p>
        </FadeIn>

        {/* Portrait — centered absolutely */}
        <FadeIn
          delay={0.6}
          y={30}
          className="absolute left-1/2 -translate-x-1/2 z-10
            w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]
            top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
        >
          <Magnet padding={150} strength={3}>
            <img
              src={PORTRAIT_URL}
              alt={`${PERSONAL.name} portrait`}
              className="w-full"
              draggable={false}
            />
          </Magnet>
        </FadeIn>

        {/* Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
