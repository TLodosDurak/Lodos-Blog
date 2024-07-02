import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { JSX, SVGProps } from "react"
import Link from "next/link"

function BlogGrid() {
  return (
    <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href="#" className="text-lg font-bold" prefetch={false}>
                    Unlocking the Power of Creativity: A Journey of Self-Discovery
                  </Link>
                </CardTitle>
                <CardDescription>
                  Explore the transformative power of creativity and how it can lead to personal growth and fulfillment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Blog Post Image"
                  className="aspect-video rounded-md object-cover"
                />
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDaysIcon className="h-4 w-4" />
                  <span>June 1, 2023</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href="#" className="text-lg font-bold" prefetch={false}>
                    Mastering the Art of Minimalism: Simplify Your Life, Amplify Your Joy
                  </Link>
                </CardTitle>
                <CardDescription>
                  Discover the transformative power of minimalism and how it can lead to a more intentional and
                  fulfilling life.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Blog Post Image"
                  className="aspect-video rounded-md object-cover"
                />
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDaysIcon className="h-4 w-4" />
                  <span>May 15, 2023</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href="#" className="text-lg font-bold" prefetch={false}>
                    Embracing the Digital Nomad Lifestyle: Lessons from the Road
                  </Link>
                </CardTitle>
                <CardDescription>
                  Explore the joys and challenges of the digital nomad lifestyle and how it can transform your
                  perspective on life.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Blog Post Image"
                  className="aspect-video rounded-md object-cover"
                />
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDaysIcon className="h-4 w-4" />
                  <span>April 20, 2023</span>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <Link href="#" className="text-lg font-bold" prefetch={false}>
                    Mindfulness in the Modern World: Finding Calm Amidst the Chaos
                  </Link>
                </CardTitle>
                <CardDescription>
                  Discover practical strategies for incorporating mindfulness into your daily life and achieving a
                  greater sense of inner peace.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Blog Post Image"
                  className="aspect-video rounded-md object-cover"
                />
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDaysIcon className="h-4 w-4" />
                  <span>March 28, 2023</span>
                </div>
              </CardFooter>
            </Card>
          </div>
  )
}
export default BlogGrid


function CalendarDaysIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h.01" />
        <path d="M12 14h.01" />
        <path d="M16 14h.01" />
        <path d="M8 18h.01" />
        <path d="M12 18h.01" />
        <path d="M16 18h.01" />
      </svg>
    )
  }