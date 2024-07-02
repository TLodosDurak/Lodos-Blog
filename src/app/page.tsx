import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { JSX, SVGProps } from "react"
import NavbarCustom from "@/components/NavbarCustom"
import HeroCustom from "@/components/HeroCustom"
import BlogGrid from "@/components/BlogGrid"
import FooterCustom from "@/components/FooterCustom"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <NavbarCustom/>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <HeroCustom/>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <BlogGrid/>
        </section>
      </main>
      <FooterCustom/>
    </div>
  )
}


