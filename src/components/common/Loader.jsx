export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">

      <div className="flex flex-col items-center">

        <div className="relative w-20 h-20">

          <div className="absolute inset-0 rounded-full border-4 border-red-500/20"></div>

          <div className="absolute inset-0 rounded-full border-4 border-red-500 border-t-transparent animate-spin"></div>

        </div>

        <h2 className="text-white text-2xl font-semibold mt-6">

          Loading...

        </h2>

        <p className="text-gray-400 mt-2">

          Please wait a moment

        </p>

      </div>
    </div>
  );
}