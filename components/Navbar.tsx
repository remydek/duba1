'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { useTheme } from '@/components/ThemeProvider'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme } = useTheme()

  const navLinks = [
    { href: '/events', label: 'Events' },
    { href: '/experiences', label: 'Experiences' },
    // { href: '/properties', label: 'Properties' },
    // { href: '/supercars', label: 'Supercars' },
    // { href: '/yachts', label: 'Yachts' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[0_0_30px_-5px_rgba(212,175,55,0.3)]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative">
            <Image
              src={theme === 'dark' ? '/dark-theme-logo.svg' : '/light-theme-logo.svg'}
              alt="DUBA1"
              height={40}
              width={120}
              className="h-10 w-auto transition-all group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <ThemeSwitcher />
            <Button asChild variant="default" size="sm">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary px-2 py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-2 py-2">
                <ThemeSwitcher />
              </div>
              <Button asChild variant="default" size="sm" className="mt-2">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
