export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1C27]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7846CF] mx-auto mb-4"></div>
        <p className="text-[#b1b2b3]">Loading...</p>
      </div>
    </div>
  )
}
