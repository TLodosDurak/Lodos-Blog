"use client"

import Link from "next/link";
import React from 'react';
import { usePathname } from 'next/navigation';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import AnimatedLogo from "./AnimatedLogo";
import { ModeToggle } from "@/components/ModeToggle";
import blogPosts from '@/data/blogPostsMeta.json';

export default function NavbarCustom() {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith('/blog');
  const pageTitle = isBlogPage ? "Lodos' Blog" : "Lodos' Portfolio";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full backdrop-blur-2xl border-b-2 bg-background/20">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold group" prefetch={false}>
          <AnimatedLogo className="h-12 w-12 text-foreground group-hover:animate-spin" />
          <span className="group-hover:text-primary transition-colors">{pageTitle}</span>
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            {/* <SheetContent side="right" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href={`/blog/${blogPosts[0]["slug"]}`} className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                  <HomeIcon className="h-5 w-5" />
                  Latest
                </Link>
                <Link href="/blog" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                  <LassoIcon className="h-5 w-5" />
                  Blog
                </Link>
              </nav>
            </SheetContent> */}
          </Sheet>
          {/* <nav className="hidden gap-6 text-sm font-medium lg:flex">
            <Link href={`/blog/${blogPosts[0]["slug"]}`} className="text-foreground hover:text-primary transition-colors" prefetch={false}>
              Latest
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors" prefetch={false}>
              Blog
            </Link>
          </nav> */}
        </div>
      </div>
    </header>
  );
}

function BriefcaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    )
  }


  function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  
  function LassoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 22a5 5 0 0 1-2-4" />
        <path d="M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1" />
        <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    )
  }
  
  
  function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  
  
  function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }