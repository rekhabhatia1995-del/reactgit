function AboutMore() {
  return (
    <section className="bg-white py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Car Care + Premium Experience
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Car related clean & comfort details jo aapko book karte hi feel ho—
            aur trip end hone tak smooth rahe.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-gray-100 shadow-sm overflow-hidden bg-gray-50">
            <div className="h-24 bg-sky-600 flex items-center justify-center">
              <span className="text-4xl">🚙</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-gray-900">
                Clean & Ready Car
              </h3>
              <p className="mt-2 text-gray-600">
                Every ride starts with a clean interior and fresh-ready car.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 shadow-sm overflow-hidden bg-gray-50">
            <div className="h-24 bg-black flex items-center justify-center">
              <span className="text-4xl">🧼</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-gray-900">
                Hygiene & Comfort
              </h3>
              <p className="mt-2 text-gray-600">
                Comfortable seating + careful handling for a relaxed journey.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 shadow-sm overflow-hidden bg-gray-50">
            <div className="h-24 bg-sky-600 flex items-center justify-center">
              <span className="text-4xl">🛣️</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-gray-900">
                Smart Routes
              </h3>
              <p className="mt-2 text-gray-600">
                City rides, family trips, and long journeys—plan accordingly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-gray-100 bg-gradient-to-r from-sky-600 to-black text-white overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-7 md:p-10">
            <div className="md:col-span-7">
              <h3 className="text-2xl md:text-3xl font-extrabold">
                Book your ride in minutes
              </h3>
              <p className="mt-3 text-white/90">
                Clear steps, fast support, and a smooth car experience.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                <a
                  href="/Contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-black font-bold hover:opacity-95 duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="/Login"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-black/20 border border-white/30 text-white font-bold hover:bg-black/30 duration-200"
                >
                  Login & Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMore;

