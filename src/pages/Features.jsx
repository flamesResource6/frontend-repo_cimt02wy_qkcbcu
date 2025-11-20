import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function FeaturesPage(){
  const mockups = [
    { title:'Secure Digital Wallet', desc:'Create and manage your wallet with clarity and control.'},
    { title:'Instant Transfers', desc:'A roadmap to seamless, real-time transfers.'},
    { title:'Virtual Wallet Convenience', desc:'Connect to modern ecosystems as they evolve.'},
    { title:'Transparent Pricing', desc:'A predictable model designed for fairness and longevity.'},
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Capabilities</h1>
          <p className="mt-3 text-white/70 max-w-3xl">A wallet-first experience that is simple, powerful, and security-led. Built to integrate with the future, not be constrained by the past.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {mockups.map((m,i)=> (
              <motion.div key={m.title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.45, delay:i*0.05}} className="p-6 rounded-2xl border border-white/10 bg-white/[0.04]">
                <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-[#3001FF22] to-[#BBFF0022] border border-white/10 mb-4" />
                <h3 className="font-semibold">{m.title}</h3>
                <p className="text-sm text-white/70 mt-1">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
