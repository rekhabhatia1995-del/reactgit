function AboutGlad() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Promise: Smooth & Safe Rides
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Yahan har ride clean, comfortable aur transparent hoti hai—
            taaki aapka trip hassle-free rahe.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-sky-100 bg-white shadow-sm p-7">
            <div className="h-12 w-12 rounded-2xl bg-sky-50 flex items-center justify-center text-2xl">
              🛡️
            </div>
            <h3 className="mt-4 text-xl font-extrabold text-gray-900">
              Safe & Verified
            </h3>
            <p className="mt-2 text-gray-600">
              Customer-first policies, experienced drivers & careful service.
            </p>
          </div>

          <div className="rounded-3xl border border-sky-100 bg-white shadow-sm p-7">
            <div className="h-12 w-12 rounded-2xl bg-sky-50 flex items-center justify-center text-2xl">
              💰
            </div>
            <h3 className="mt-4 text-xl font-extrabold text-gray-900">
              Transparent Pricing
            </h3>
            <p className="mt-2 text-gray-600">
              No hidden charges—fees clear before you confirm.
            </p>
          </div>

          <div className="rounded-3xl border border-sky-100 bg-white shadow-sm p-7">
            <div className="h-12 w-12 rounded-2xl bg-sky-50 flex items-center justify-center text-2xl">
              ⚡
            </div>
            <h3 className="mt-4 text-xl font-extrabold text-gray-900">
              On-time Support
            </h3>
            <p className="mt-2 text-gray-600">
              Booking ke baad updates + quick help whenever you need.
            </p>
          </div>
        </div>

        {/* Extra banner */}
        <div className="mt-10 rounded-3xl overflow-hidden border border-sky-100 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 p-8 md:p-10 bg-black">
              <h3 className="text-white text-2xl md:text-3xl font-extrabold">
                Ready for your next drive?
              </h3>
              <p className="mt-3 text-white/90">
                Book now and experience a premium ride with happy easy rides.
              </p>
            </div>
            <div className="md:col-span-7 p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-100 p-5">
                  <p className="text-sm text-gray-500">Pickup Support</p>
                  <p className="mt-2 font-extrabold text-gray-900">24×7 Assistance</p>
                </div>
                <div className="rounded-2xl border border-gray-100 p-5">
                  <p className="text-sm text-gray-500">Trip Types</p>
                  <p className="mt-2 font-extrabold text-gray-900">City / Family / Long</p>
                </div>
                <div className="rounded-2xl border border-gray-100 p-5">
                  <p className="text-sm text-gray-500">Pricing</p>
                  <p className="mt-2 font-extrabold text-gray-900">Clear & Fair</p>
                </div>
                <div className="rounded-2xl border border-gray-100 p-5">
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="mt-2 font-extrabold text-gray-900">Smooth & Comfortable</p>
                </div>
              </div>

              <div className="mt-6 text-center sm:text-right">
                <a
                  href="/Login"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-black text-white font-bold hover:opacity-90 duration-200"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutGlad;

