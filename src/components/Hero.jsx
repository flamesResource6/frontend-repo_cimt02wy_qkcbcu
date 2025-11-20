import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0B0B12] to-[#0A0A0A]" />
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 20% 10%, rgba(48,1,255,0.35), transparent 40%), radial-gradient(circle at 80% 20%, rgba(187,255,0,0.25), transparent 35%), radial-gradient(circle at 50% 80%, rgba(48,1,255,0.35), transparent 40%)'}} />

      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
            <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1">Resilient • Secure • Modern</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight" style={{color:'#EEEEEE'}}>
              The Future of <span className="bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#3001FF,#BBFF00)'}}>Secure Digital Money.</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Rim Wallet is redefining modern finance with resilience, transparency, and next-generation security.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#philosophy" className="px-5 py-3 rounded-xl text-sm font-semibold text-black" style={{background:'#BBFF00'}}>Learn More</a>
              <a href="#early" className="px-5 py-3 rounded-xl text-sm font-semibold border border-white/20 text-white hover:bg-white/5 transition">Join Early Access</a>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.1}} className="relative h-[400px] lg:h-[520px] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#3001FF33] via-transparent to-[#BBFF0033]" />
          </motion.div>
        </div>
      </div>

      <div className="absolute -z-0 inset-0" aria-hidden>
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20" style={{background:'radial-gradient(circle,#3001FF,transparent 60%)'}} />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-20" style={{background:'radial-gradient(circle,#BBFF00,transparent 60%)'}} />
      </div>
    </section>
  )
}
