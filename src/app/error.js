'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1C27]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
        <p className="text-[#b1b2b3] mb-4">An error occurred while loading this page.</p>
        <button
          className="bg-[#7846CF] text-white px-4 py-2 rounded-lg hover:bg-[#6a3db8] transition-colors"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
