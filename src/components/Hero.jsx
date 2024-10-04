const Hero = () => {
    return (
      <>
        <main className="hero flex flex-col md:flex-row max-w-screen-sm mx-auto items-center justify-center mt-20">
          <div className="hero-content flex-col text-center md:text-left">
            <h1 className="font-extrabold text-4xl md:text-6xl">YOUR FEET DESERVE THE BEST</h1>
            <p className="font-bold text-gray-500 mt-5">
              YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES
            </p>
            <div className="hero-btn flex flex-col md:flex-row gap-5 mt-5">
              <button className="text-white font-bold rounded-lg bg-red-600 hover:cursor-pointer px-4 py-2">Shop Now</button>
              <button className="bg-transparent border text-black font-bold hover:cursor-pointer shadow-sm border-gray-500 px-4 py-2">Category</button>
            </div>
            <div className="shopping font-semibold mb-2 mt-7 text-xl">
              <p>Also Available On</p>
              <div className="brand-icons flex justify-center md:justify-start gap-4 mt-2">
                <img src="/images/amazon.png" alt="amazon-logo" className="h-8" />
                <img src="/images/flipkart.png" alt="flipkart-logo" className="h-8" />
              </div>
            </div>
          </div>
          <div className="hero-image mt-5 md:mt-0">
            <img src="/images/hero-image.png" alt="hero-image" className="w-full h-auto" />
          </div>
        </main>
      </>
    );
  };
  
  export default Hero;
  