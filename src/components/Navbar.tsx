
export default function Navbar() {
  return (
    <nav className="w-full bg-[#4287F5]/80 px-6 py-3 shadow-lg">
      <div className=" relative max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img 
            src="/wacka_character.png" 
            alt="wacka mascot" 
            className="w-12 h-12 object-contain drop-shadow-lg rounded-full"
          />
       <h1 className="text-4xl font-bold tracking-wide bg-clip-text text-transparent 
    bg-gradient-to-r from-[#FF4747] via-[#FFDD33] to-[#fff]">
  WACKA
</h1>
        </div>

        {/* Nav Menu */}
        <ul className=" absolute top-16 hidden  bg-[#4287F5] text-white md:static md:flex items-center gap-8  md:bg-transparent font-medium ">
          <li className="cursor-pointer hover:text-[#FFDD33] transition-all">Home</li>
          <li className="cursor-pointer hover:text-[#FFDD33] transition-all">Tokenomics</li>
          <li className="cursor-pointer hover:text-[#FFDD33] transition-all">How to Buy</li>
        </ul>

        <button className='p-3 font-semibold bg-[#FF4747] text-white rounded-md hover:bg-red-900 transiton-all duration-300'>
         <a href="https://dexscreener.com/solana/8rkcu6779vmexfhxyvzrdmgsvbr9laoapi8nemjr6fh3">Buy Now</a>
           </button>


      </div>
    </nav>
  )
}
