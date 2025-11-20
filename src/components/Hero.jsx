import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-[#0A0A0A]">
      <div className="relative pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{color:'#EEEEEE'}}>
              Money, built to <span className="bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#3001FF,#BBFF00)'}}>last</span>.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              A resilient, security‑first wallet for modern life. Minimal by design. Powerful when it matters.
            </p>
            <div className="mt-8">
              <a href="#early" className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold text-black hover:opacity-90 transition" style={{background:'#BBFF00'}}>Request early access</a>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.05}} className="relative h-[360px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04]">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
