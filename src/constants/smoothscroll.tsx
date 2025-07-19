"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 4.0, // Makes scroll slower
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease out expo
      // smooth: true,
      // direction: "vertical",
      // gestureDirection: "vertical",
      // smoothTouch: false, // Optional for touch devices
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
