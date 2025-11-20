import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Features />
        <section id="early" className="py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold">Join Early Access</h3>
            <p className="mt-2 text-white/70">Be the first to experience a resilient, security-first wallet.</p>
            <div className="mt-6 max-w-md mx-auto">
              <form onSubmit={(e)=>e.preventDefault()} className="flex gap-3" aria-label="Early access form">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': '#3001FF' }}
                />
                <button type="submit" className="px-5 py-3 rounded-xl font-semibold text-black" style={{background:'#BBFF00'}}>Request</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
