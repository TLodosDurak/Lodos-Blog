import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogHero() {
  return (
    <div className="container space-y-10 xl:space-y-16">
            <div className="grid gap-4 px-4 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-6xl font-bold tracking-tighter mb-10 sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Welcome to Lodos&apos; Blog
                </h1>
                <p className="max-w-[500px] text-muted-foreground md:text-xl">
                  Explore a world of insights, creativity, and personal growth through the lens of Lodos&apos; Blog.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 md:items-end md:justify-end md:space-y-0 md:space-x-4 md:flex-row">
                <Button asChild className="w-full md:w-auto bg-primary text-primary-foreground">
                  <Link href="#" prefetch={false}>Read the Latest</Link>
                </Button>
                <Button asChild variant="outline" className="w-full md:w-auto">
                  <Link href="#" prefetch={false}>View Portfolio</Link>
                </Button>
              </div>

            </div>
          </div>
  )
}
