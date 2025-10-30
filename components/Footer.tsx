import Link from 'next/link'
import { Building2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">DUBA1</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Dubai&apos;s Crypto Luxury Lifestyle
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Properties</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/properties?type=villa" className="hover:text-primary transition-colors">Villas</Link></li>
              <li><Link href="/properties?type=apartment" className="hover:text-primary transition-colors">Apartments</Link></li>
              <li><Link href="/properties?type=penthouse" className="hover:text-primary transition-colors">Penthouses</Link></li>
              <li><Link href="/properties?type=townhouse" className="hover:text-primary transition-colors">Townhouses</Link></li>
            </ul>
          </div>

          {/* Lifestyle */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Lifestyle</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/events" className="hover:text-primary transition-colors">Exclusive Events</Link></li>
              <li><Link href="/yachts" className="hover:text-primary transition-colors">Yacht Rentals</Link></li>
              <li><Link href="/supercars" className="hover:text-primary transition-colors">Supercar Rentals</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Golden Visa</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Dubai, UAE</li>
              <li>+971 50 123 4567</li>
              <li>info@duba1.com</li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  ₿ Crypto Accepted
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DUBA1. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
