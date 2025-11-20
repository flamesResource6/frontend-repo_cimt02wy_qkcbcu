import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-black focus:text-white focus:px-3 focus:py-2 focus:rounded">Skip to main content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Features />
        <section id="early" className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight" style={{color:'#EEEEEE'}}>Request early access</h2>
            <p className="mt-2 text-white/70">Be first to try a resilient, security‑first wallet.</p>
            <div className="mt-6">
              <form onSubmit={(e)=>e.preventDefault()} className="flex items-center gap-3 max-w-md mx-auto" aria-label="Early access form">
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
