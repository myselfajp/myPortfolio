'use client'

import { Suspense, lazy, useEffect, useRef } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Forward global pointer movement to the Spline canvas so it reacts
  // even when the cursor is over the left column.
  useEffect(() => {
    let cleanup: (() => void) | undefined

    const attachListeners = (canvas: HTMLCanvasElement) => {
      const forwardPointerMove = (event: PointerEvent) => {
        const rect = canvas.getBoundingClientRect()
        const insideRect =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom

        // Skip forwarding if the canvas is already handling the event
        if (insideRect && event.target && canvas.contains(event.target as Node)) {
          return
        }

        const clientX = Math.min(Math.max(event.clientX, rect.left), rect.right - 1)
        const clientY = Math.min(Math.max(event.clientY, rect.top), rect.bottom - 1)

        canvas.dispatchEvent(
          new PointerEvent('pointermove', {
            bubbles: true,
            clientX,
            clientY,
            pointerId: event.pointerId,
            pointerType: event.pointerType,
            buttons: event.buttons,
          }),
        )
      }

      const forwardPointerLeave = (event: PointerEvent) => {
        canvas.dispatchEvent(
          new PointerEvent('pointerleave', {
            bubbles: true,
            pointerId: event.pointerId,
            pointerType: event.pointerType,
          }),
        )
      }

      window.addEventListener('pointermove', forwardPointerMove)
      window.addEventListener('pointerleave', forwardPointerLeave)

      cleanup = () => {
        window.removeEventListener('pointermove', forwardPointerMove)
        window.removeEventListener('pointerleave', forwardPointerLeave)
      }
    }

    const pollForCanvas = () => {
      const canvas = containerRef.current?.querySelector('canvas')
      if (!canvas) return
      attachListeners(canvas)
      return true
    }

    // Spline mounts the canvas asynchronously, so poll briefly until it's ready.
    const intervalId = window.setInterval(() => {
      if (pollForCanvas()) {
        window.clearInterval(intervalId)
      }
    }, 100)

    return () => {
      window.clearInterval(intervalId)
      cleanup?.()
    }
  }, [])

  return (
    <Suspense
      fallback={
        <div className={`w-full h-full flex items-center justify-center ${className ?? ''}`}>
          <span className="loader"></span>
        </div>
      }
    >
      <div ref={containerRef} className={className}>
        <Spline scene={scene} className="w-full h-full" />
      </div>
    </Suspense>
  )
}
