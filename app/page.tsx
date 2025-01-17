"use client";
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50" />
        <div className="container relative flex min-h-[800px] flex-col items-center justify-center gap-4 text-center">
          
          <Image
            src="/Sapand (2).jpg"
            alt="Karabakh Logo"
            width={120}
            height={120}
            className="mb-8"
          />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Innovate.Accelerate.Defend.
          </h1>
          <p className="max-w-[600px] text-muted-foreground sm:text-xl">
            Join Us for reshaping Military Defense Technologies' Future.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/programs/incubation" passHref>
                Apply to Incubation Program
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/programs/acceleration" passHref>
                Apply to Acceleration Program
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Mission
            </h2>
            <p className="max-w-[700px] text-muted-foreground sm:text-xl">
              Our Purpose is supporting to Innovation at Military Defense Technologies.
            </p>
            <Button asChild variant="outline">
              <Link href="/about" passHref>
                Information About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
