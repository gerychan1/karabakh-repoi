"use client";
import { FormEvent, JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { FooterLink } from '@/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const companyLinks: FooterLink[] = [
  { title: 'About Us', href: '/about' },
  { title: 'News', href: '/news' },
  { title: 'Contact', href: '/contact' },
]

const programLinks: FooterLink[] = [
  { title: 'Incubation Program', href: '/programs/incubation' },
  { title: 'Acceleration Program', href: '/programs/acceleration' },
]

export function Footer(): JSX.Element {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Newsletter abone olma işlemi
    console.log('Subscribed')
  }

  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/Sapand (2).jpg" alt="Karabakh Logo" width={32} height={32} />
            <span className="text-xl font-bold">Karabakh</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Our Mountains, Our Identities
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-sm font-medium">Programlar</h3>
          <nav className="grid gap-2">
            {programLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:underline"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="text-sm font-medium">Şirket</h3>
          <nav className="grid gap-2">
            {companyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:underline"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="grid gap-2">
          <h3 className="text-sm font-medium">Bülten</h3>
          <p className="text-sm text-muted-foreground">
            Subscribe for Updates
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="E-Mail Adress"
              className="max-w-[220px]"
              required
            />
            <Button type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col gap-4 py-6 text-sm text-muted-foreground md:flex-row md:gap-6">
          <p>© {new Date().getFullYear()} Karabakh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
