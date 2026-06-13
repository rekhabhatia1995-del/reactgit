import React from "react";

function ImpSection() {
  return (
    <section className="bg-slate-50 py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Cars you can trust
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Book your ride in minutes. Choose from a reliable fleet with transparent pricing and a comfort-first experience.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-sky-100 p-5 shadow-sm">
                <p className="text-sky-700 font-extrabold text-lg">Instant Booking</p>
                <p className="mt-2 text-gray-600 text-sm">
                  Confirm in seconds and get ready to ride.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-sky-100 p-5 shadow-sm">
                <p className="text-sky-700 font-extrabold text-lg">Verified Fleet</p>
                <p className="mt-2 text-gray-600 text-sm">
                  Quality-checked cars for safer drives.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-sky-100 p-5 shadow-sm">
                <p className="text-sky-700 font-extrabold text-lg">Wide Options</p>
                <p className="mt-2 text-gray-600 text-sm">
                  Hatchbacks to sedans—pick what fits your trip.
                </p>
              </div>
              <div className="rounded-2xl bg-white border border-sky-100 p-5 shadow-sm">
                <p className="text-sky-700 font-extrabold text-lg">Affordable Pricing</p>
                <p className="mt-2 text-gray-600 text-sm">
                  Transparent fares with no surprises.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-green-400 hover:bg-black text-white font-bold py-3 px-7 rounded-xl shadow-lg">
                Book Now
              </button>
              <button className="bg-white hover:bg-sky-50 text-sky-800 border border-sky-200 font-bold py-3 px-7 rounded-xl">
                View Fleet
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-200 to-green-200 rounded-3xl blur-2xl opacity-40" />
            <div className="relative overflow-hidden rounded-3xl bg-white border border-sky-100 shadow-sm">
              {/* Main car image */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYqt_gz5BqAYiF3DeQkaC7y1Idp10o9qhYA&s"
                alt="Car fleet"
                className="w-full h-80 md:h-[420px] object-cover"
              />

              {/* Popular choices (with small car image) */}
              <div className="p-5">
                <div className="flex items-center gap-3">
                  {/* small car image near heading */}
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-sky-100 bg-slate-50">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShX6QtCnk9BjShSHrUqA1VvIjvTCEwqjfW-g&s"
                      alt="Popular car"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-900 font-extrabold text-lg">Popular choices</p>
                </div>

                {/* car feet / bottom small banner image */}
                <div className="mt-4 overflow-hidden rounded-2xl border border-sky-100 bg-white">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gUAhj6G-2dMUE51az1nTg5_JNdF0cyE6yQ&s"
                    alt="Car feet"
                    className="w-full h-28 object-cover"
                  />
                </div>
                <p className="mt-2 text-gray-600 text-sm">
                  Swift, City, Creta, Nexon & more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpSection;

