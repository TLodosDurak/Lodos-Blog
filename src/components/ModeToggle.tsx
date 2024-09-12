"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme } = useTheme()

  React.useEffect(() => {
    setTheme('dark')
  }, [setTheme])

  return null
}