import React from 'react'
import Link from "next/link"
export default function FooterCustom() {
  return (
    <div className="border-t">
        <footer className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
        <p className="text-xs text-muted-foreground">&copy; 2024 Lodos&apos; Blog. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                Terms of Service
                </Link>
                <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                Privacy
                </Link>
            </nav>
        </footer>
    </div>
  )
}