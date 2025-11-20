import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/mission', label: 'Mission' },
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/rim-logo.svg" alt="Rim Wallet" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-white ${isActive ? 'text-white' : 'text-white/70'}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition">
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-2 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
