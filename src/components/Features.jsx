import { Lock, Zap, Wallet, BadgeCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    { icon: Zap, title: 'Instant payments', desc: 'Fast, seamless transfers designed for everyday life.' },
    { icon: BadgeCheck, title: 'Transparent pricing', desc: 'Clear, predictable costs. No hidden fees.' },
    { icon: Wallet, title: 'Wallet-first approach', desc: 'Built around your wallet, not a card dependency.' },
    { icon: Lock, title: 'Security-driven design', desc: 'Privacy-first, with controls that put you in charge.' },
  ]

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Features</h2>
            <p className="mt-3 text-white/70 max-w-2xl">A modern wallet experience focused on speed, clarity, and everyday utility.</p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon:Icon,title,desc}, i) => (
            <motion.div key={title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}} className="p-6 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06]">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background:'#BBFF0022', color:'#3001FF'}}>
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
