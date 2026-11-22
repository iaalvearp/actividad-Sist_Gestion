'use client'

import { useEffect, useRef } from 'react'

export function AmbientGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!grid || reducedMotion.matches) return

    let frame = 0
    let pointerX = 0
    let pointerY = 0

    function updateGrid(event: PointerEvent) {
      pointerX = event.clientX
      pointerY = event.clientY

      if (frame) return

      frame = window.requestAnimationFrame(() => {
        frame = 0
        const x = (pointerX / window.innerWidth - 0.5) * 18
        const y = (pointerY / window.innerHeight - 0.5) * 18
        grid?.style.setProperty('--mx', `${x}px`)
        grid?.style.setProperty('--my', `${y}px`)
      })
    }

    window.addEventListener('pointermove', updateGrid, { passive: true })

    return () => {
      window.removeEventListener('pointermove', updateGrid)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={gridRef} className="ambient-grid" aria-hidden="true" />
}
