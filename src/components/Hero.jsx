import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A]">
      {/* Ambient neon gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30" style={{background:'radial-gradient(closest-side, #3001FF66, transparent)'}} />
        <div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30" style={{background:'radial-gradient(closest-side, #BBFF0066, transparent)'}} />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_80%_20%,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <div className="relative pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border border-white/10 bg-white/5 text-white/80 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{background:'#BBFF00'}} />
              Quantum‑grade security • Real‑time resilience
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight" style={{color:'#EEEEEE'}}>
              Money, engineered for a <span className="bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#BBFF00,#3001FF)'}}>futuristic</span> life.
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Rim Wallet blends cryptographic safety with seamless everyday flows. Adaptive controls, instant transfers, and clarity at every step.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-3">
              <a href="#early" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-black shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_0_#BBFF0044] transition focus:outline-none focus:ring-2" style={{background:'#BBFF00', // neon lime
                boxShadow:'0 0 0 0 rgba(0,0,0,0)'}}>
                Request early access
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold border border-white/15 text-white/90 bg-white/5 hover:bg-white/10 transition focus:outline-none focus:ring-2" style={{// outline accent
                // @ts-ignore
                '--tw-ring-color':'#3001FF'}}>
                Explore features
              </a>
            </div>

            {/* Social proof / stats */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full" style={{background:'#3001FF'}} />
                99.99% uptime architecture
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full" style={{background:'#BBFF00'}} />
                End‑to‑end encryption
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-white/40" />
                Audited by independent researchers
              </div>
            </div>
          </motion.div>

          {/* Right: 3D visual in a glass card */}
          <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{duration:0.65, delay:0.05}} className="relative h-[380px] sm:h-[440px] lg:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur">
            {/* scanlines / grid overlay */}
            <div aria-hidden className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-20 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.2)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.2)_95%)] bg-[length:24px_24px]" />
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* glow ring */}
            <div aria-hidden className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-24 w-56 rounded-full blur-2xl opacity-60" style={{background:'radial-gradient(closest-side,#3001FF55,transparent)'}} />
          </motion.div>
        </div>
      </div>

      {/* Partner strip */}
      <div className="relative border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center text-white/50 text-xs">
            <span>ISO 27001 Ready</span>
            <span>Zero‑Knowledge Controls</span>
            <span>PCI DSS A‑Level</span>
            <span>Multi‑Region Failover</span>
          </div>
        </div>
      </div>
    </section>
  )
}
