import { Shield, Clock, Infinity as InfinityIcon } from 'lucide-react'

export default function Philosophy() {
  const items = [
    { icon: Shield, title: 'Built for safety', desc: 'Bank-grade security principles, continuous verification, and a culture of protection from the ground up.' },
    { icon: Clock, title: 'Designed for longevity', desc: 'Systems that endure. Thoughtful choices that prioritise durability over hype.' },
    { icon: InfinityIcon, title: 'Resilient by design', desc: 'Architected to withstand stress and maintain trust under all conditions.' },
  ]

  return (
    <section id="philosophy" className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Rim Philosophy</h2>
        <p className="mt-3 text-white/70 max-w-3xl">Resilience, trust, and long-term thinking. We build conservative, transparent systems focused on people and stability.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon,title,desc}) => (
            <div key={title} className="p-6 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background:'#3001FF22', color:'#BBFF00'}}>
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
