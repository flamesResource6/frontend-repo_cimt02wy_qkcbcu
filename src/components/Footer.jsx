export default function Footer(){
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/rim-logo.svg" alt="Rim" className="h-6"/>
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Rim Wallet. All rights reserved.</p>
        </div>
        <div className="text-xs text-white/50">Transparent • Resilient • Modern</div>
      </div>
    </footer>
  )
}
