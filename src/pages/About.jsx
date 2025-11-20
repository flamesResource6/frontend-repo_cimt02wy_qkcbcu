import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">About Rim</h1>
          <p className="mt-4 text-white/70">Rim Wallet was founded with a clear purpose: build resilient, ethical, and transparent financial systems that stand the test of time. We believe security is a culture, not a feature. Our approach is grounded in responsibility, clarity, and long-term value for people and institutions.</p>

          <div className="mt-10 grid gap-8">
            <div>
              <h2 className="text-2xl font-semibold">Origin</h2>
              <p className="mt-2 text-white/70">Born from a vision to strengthen digital finance in Africa and beyond, Rim embraces rigorous standards and thoughtful design. We prioritise reliability over hype and real-world utility over noise.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Why resilience matters</h2>
              <p className="mt-2 text-white/70">Financial systems serve society. They must be dependable, transparent, and built to withstand uncertainty. Rim is committed to building mechanisms that protect users and uphold trust under all conditions.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Commitment to ethics</h2>
              <p className="mt-2 text-white/70">We align incentives with users and partners. We avoid dark patterns and believe in clarity, consent, and fairness. Our north star is integrity.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Founder vision</h2>
              <p className="mt-2 text-white/70">Rim is a long-term project aimed at stability and wide accessibility. We measure success by trust earned over time, not short-term metrics.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
