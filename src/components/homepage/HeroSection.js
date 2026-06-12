function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden mt-4"
      style={{
        minHeight: "520px",
      }}
    >
    
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full">
          <p className="inline-flex items-center gap-2 text-white/90 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold">
            Happy Easy Rides
          </p>

          <h1 className="mt-5 text-white font-extrabold leading-tight text-4xl sm:text-5xl">
            Ride Comfortably. <br /> Reach Faster.
          </h1>

          <p className="mt-5 text-white/90 text-base sm:text-lg max-w-2xl">
            Book your cab in seconds with safe, affordable and reliable rides.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-green-400 hover:bg-black p-2 text-white font-bold py-3 px-7 rounded-xl shadow-lg">
              Book a Ride
            </button>
            <button className="bg-white/10 hover:bg-white/15 text-white border border-white/30 font-bold py-3 px-7 rounded-xl">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

