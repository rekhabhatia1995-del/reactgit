function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden mt-4"
      style={{ minHeight: "320px" }}
    >
      <div className="hidden sm:block" style={{ minHeight: "420px" }} />

      {/* small screens: keep a bit more vertical breathing space */}
      <div className="sm:hidden" />
      {/* Background image (public/car-hero.jpg) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.shutterstock.com/shutterstock/videos/4096387/thumb/1.jpg?ip=x480')" }}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full">
          <h2 className="text-white font-extrabold leading-tight text-3xl sm:text-5xl text-center mt-4">
            ABOUT ME
          </h2>


          <p className="mt-4 text-white/90 text-base sm:text-lg max-w-2xl">
          
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;

