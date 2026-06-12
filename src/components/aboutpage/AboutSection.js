function AboutSection() {
  return (
    <>
      <section className="w-full py-16 px-6 bg-[#fdfdfb]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              About Happyeasy Rides
            </h1>

            <p className="text-gray-600 text-lg  mt-4">
              Welcome to Happy Easy Rides, a premier unit of Shriara
              Automotive LLP. Founded in 2021, we are a leading provider
              of self-drive car rental services in Delhi NCR,
              Chandigarh, and Goa.
            </p>

            <p className="text-gray-600 text-lg  mt-2">
              At Happy Easy Rides, we believe that convenience,
              affordability, and exceptional customer service are the
              pillars of a truly enjoyable travel experience.
            </p>

            <p className="text-gray-600 text-lg  mt-2">
              Our mission is to empower travelers by offering them the
              freedom to explore their destinations at their own pace.
              We provide a wide range of vehicles for city rides,
              family trips, and long journeys.
            </p>

            <p className="text-gray-600 text-lg mt-2 ">
              We ensure transparent pricing, no hidden fees, and 24/7
              customer support to make your travel smooth and
              comfortable.
            </p>
            <p className="text-gray-600 text-lg mt-2 ">
              We ensure transparent pricing, no hidden fees, and 24/7
              customer support to make your travel smooth and
              comfortable.
            </p>
            
          </div>

          {/* Right Images */}
          <div className="relative flex justify-center items-center">
            
            {/* Main Image */}
            <div className="w-[380px] h-[500px] rounded-t-full overflow-hidden shadow-2xl">
              <img
                src="https://happyeasyrides.com/assets/v2/images/Groups-rights.png"
                alt="Car"
                className="w-full h-full object-cover"
              />
            </div>

           

            {/* Decorations */}
            <div className="absolute top-8 left-10 text-5xl">🎈</div>
            <div className="absolute top-16 right-8 text-4xl">🎈</div>
            <div className="absolute bottom-0 right-10 text-6xl">
              🚕
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;