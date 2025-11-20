import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail, Linkedin, Twitter } from 'lucide-react'

export default function Contact(){
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Partnerships & Enquiries</h1>
          <p className="mt-3 text-white/70">For partnership and collaboration enquiries.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <form onSubmit={(e)=>e.preventDefault()} className="space-y-4">
              <input className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2" placeholder="Full Name" />
              <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2" placeholder="Business Email" />
              <textarea rows="5" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2" placeholder="Your message" />
              <button className="px-5 py-3 rounded-xl font-semibold text-black" style={{background:'#BBFF00'}}>Send</button>
            </form>

            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white"><Mail size={18}/> business@rimwallet.com</a>
              <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white"><Linkedin size={18}/> LinkedIn</a>
              <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white"><Twitter size={18}/> Twitter/X</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
