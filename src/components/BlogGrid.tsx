import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import {JSX, SVGProps} from "react";
import blogPosts from '@/data/blogPostsMeta.json';

function BlogGrid() {
  return (
    <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2">
      {blogPosts.map(post => (
        <Card key={post.slug}>
          <CardHeader>
            <CardTitle>
              <Link href={`/blog/${post.slug}`} className="text-lg font-bold" prefetch={false}>
                {post.title}
              </Link>
            </CardTitle>
            <CardDescription>
              {post.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={post.image}
              width={400}
              height={225}
              alt="Blog Post Image"
              className="aspect-video rounded-md object-cover"
            />
          </CardContent>
          <CardFooter>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDaysIcon className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default BlogGrid;

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
  );
}
