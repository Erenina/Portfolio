export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1C27]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-[#b1b2b3] mb-4">Could not find the requested resource.</p>
        <a
          href="/"
          className="bg-[#7846CF] text-white px-4 py-2 rounded-lg hover:bg-[#6a3db8] transition-colors inline-block"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}
