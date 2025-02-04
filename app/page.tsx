export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-300 text-transparent bg-clip-text">
          Vacaville is in the Bay Area.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Clearly, it says it here. No arguments.
        </p>
        <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-teal-500">
          <img
            src="/map.png"
            alt="Map showing Vacaville in the Bay Area"
            className="w-full h-auto transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
