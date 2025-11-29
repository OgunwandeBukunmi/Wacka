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
      <section className="hero text-white py-12 px-6 md:py-16 md:px-12 flex flex-col md:flex-row items-center  gap-8 md:gap-12">

        {/* Left Content */}
        <div className="hero-content w-full md:w-1/2 text-center md:text-left p-4 md:p-0">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-white animate-pulse">
            $WACKA
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 font-semibold drop-shadow-lg">
            The Next Meme Coin You’ll Wish You Found Early
          </p>

          <div className="text-white items-center coin-info   rounded-2xl md:rounded-3xl shadow-2xl text-base sm:text-lg font-mono">
            <p className="flex text-sm md:text-lg bg-gradient-to-r from-indigo-700 via-purple-900 to-pink-700  border-2 border-yellow-300   justify-center  gap-2 mb-4 p-4 rounded-lg ">
              <span> 4uFPy4nSBJVKvhSePfhd<br className=" md:hidden" />qN3apodJHVeR8Mv8xvfMpump</span>
             
              <span
                onClick={handleCopy}
                className="cursor-pointer hover:text-yellow-300 transition-transform duration-200 hover:scale-125"
              >
                <FiCopy size={20} className="inline-block" />
              </span>
            </p>
           
          </div>
           <button className="w-full md:w-auto mt-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white mt-8 font-bold px-8 sm:px-8 py-4 sm:py-4 rounded-md shadow-xl hover:scale-105 transition-transform duration-200">
              <a
                href="https://dexscreener.com/solana/8rkcu6779vmexfhxyvzrdmgsvbr9laoapi8nemjr6fh3"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center"
              >
                Buy Now
              </a>
            </button>
        </div>

        {/* Right Video */}
        <div className="video-wrapper w-full md:w-1/2 flex justify-center md:justify-end">
     <video
  src="/wacka_animation.mp4"
  className="rounded-full border-4 sm:border-6 md:border-8 border-yellow-400 shadow-2xl w-full"
  muted
  autoPlay
  loop
  playsInline
  disablePictureInPicture
  controls={false}
></video>
        </div>
      </section>
    </section>
  );
}
