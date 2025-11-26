import Navbar from "./components/Navbar";
import { FiCopy } from "react-icons/fi";


export default function App() {
  const handleCopy = () => {
    navigator.clipboard.writeText("4uFPy4nSBJVKvhSePfhdqN3apodJHVeR8Mv8xvfMpump");
    alert("Copied to clipboard!");
  };

  return (
    <section className="app bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="hero text-white py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="hero-content max-w-xl text-center md:text-left p-8">
          <h1 className="text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-white animate-pulse">
            $WACKA
          </h1>
          <p className="text-2xl mb-8 font-semibold drop-shadow-lg">
            The Next Meme Coin You’ll Wish You Found Early
          </p>

          <div className="coin-info bg-gradient-to-r from-indigo-700 via-purple-900 to-pink-700 p-6 rounded-3xl shadow-2xl text-lg font-mono">
            <p className="flex items-center justify-center gap-3 m-4 text-sm md:text-lg">
              4uFPy4nSBJVKvhSePfhdqN3apodJHVeR8Mv8xvfMpump
              <span
                onClick={handleCopy}
                className="cursor-pointer hover:text-yellow-300 transition-transform duration-200 hover:scale-125"
              >
                <FiCopy size={24} />
              </span>
            </p>
            <button className="mt-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-bold px-8 py-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-200">
              <a href="https://dexscreener.com/solana/8rkcu6779vmexfhxyvzrdmgsvbr9laoapi8nemjr6fh3">Buy Now</a>
             
            </button>
          </div>
        </div>

        {/* Right Video */}
        <div className="video-wrapper w-full max-w-md md:max-w-xl">
          <video 
            src="/wacka_animation.mp4" 
            className="rounded-full border-8 border-yellow-400 shadow-2xl " 
            muted autoPlay loop
          ></video>
        </div>
      </section>

    </section>
  );
}
