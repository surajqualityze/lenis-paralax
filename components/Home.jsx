export default function Home() {
  return (
    <div className="font-sans">
      {/* Section 1 */}
      <section className="h-screen sticky top-0  flex items-center justify-center  overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4">Section 1</h1>
          <p className="text-xl">Parallax Effect with Motion</p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="h-screen sticky top-0  flex items-center justify-center  overflow-hidden bg-gradient-to-br from-green-700 to-teal-800">
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4">Section 2</h1>
          <p className="text-xl">Faster Parallax Movement</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="h-screen sticky top-0  flex items-center justify-center  overflow-hidden bg-gradient-to-br from-red-800 to-pink-900">
        <div>
          <h1 className="text-6xl font-bold mb-4">Section 3</h1>
          <p className="text-xl">Even Faster Parallax</p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="h-screen sticky top-0  flex items-center justify-center  overflow-hidden bg-gradient-to-br from-indigo-900 to-gray-900">
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4">Section 4</h1>
          <p className="text-xl">Maximum Parallax Speed</p>
        </div>
      </section>
    </div>
  );
}
