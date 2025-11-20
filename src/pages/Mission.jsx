import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Mission(){
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Mission & Ideology</h1>
          <p className="mt-6 text-xl text-white/90 font-medium">“To emphasise the need for secured financial systems in South Africa and abroad, and to help governments, companies, and individuals realise the potential of futuristic resilient financial systems.”</p>

          <div className="mt-10 grid gap-8">
            <div>
              <h2 className="text-2xl font-semibold">Resilience</h2>
              <p className="mt-2 text-white/70">Systems must be robust, predictable, and trustworthy. We prioritise clarity, redundancy, and discipline to guard against failure modes.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Integrity</h2>
              <p className="mt-2 text-white/70">We champion transparency and ethics. Our communication is direct and honest. Our decisions are guided by fairness and responsibility.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Modernisation</h2>
              <p className="mt-2 text-white/70">We adopt useful, forward-looking methods that improve people’s financial lives—without unnecessary complexity.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
