import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function PricingTable(){
  const rows = [
    { name:'Yearly Plan', price:'R 120 / year', note:'Billed annually' },
    { name:'Monthly Distribution', price:'R 10 / month', note:'Transparent split for predictability' },
  ]
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left text-white/90">
        <thead className="bg-white/5">
          <tr>
            <th className="px-6 py-4">Model</th>
            <th className="px-6 py-4">Price</th>
            <th className="px-6 py-4">Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.name} className="odd:bg-white/0 even:bg-white/[0.03]">
              <td className="px-6 py-4 font-medium">{r.name}</td>
              <td className="px-6 py-4">{r.price}</td>
              <td className="px-6 py-4 text-white/70">{r.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Pricing(){
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Transparent Pricing. Zero Confusion.</h1>
          <p className="mt-3 text-white/70">A clean, predictable approach that improves long-term resilience and fairness.</p>
          <PricingTable />
        </div>
      </main>
      <Footer />
    </div>
  )
}
