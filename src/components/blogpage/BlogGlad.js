function BlogGlad() {
  return (
    <section className="bg-gradient-to-b from-white to-sky-50 py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Car Blog ke saath <span className="text-sky-600">Best View</span>
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg">
              Yahan location aur experience dono clear milega—jahan view acha ho,
              wahan drive ka mood double ho jata hai.
            </p>

            {/* Location cards */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-sky-100 bg-white shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-sky-50 flex items-center justify-center text-2xl">
                  🏞️
                </div>
                <div>
                  <p className="font-extrabold text-gray-900">City Overlook Points</p>
                  <p className="text-gray-600 mt-1 text-sm">
                    High-rise views + easy parking (perfect for photos & reels).
                  </p>
                  <p className="mt-2 text-sm font-semibold text-sky-700">
                    View level: High
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-sky-100 bg-white shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-sky-50 flex items-center justify-center text-2xl">
                  🌆
                </div>
                <div>
                  <p className="font-extrabold text-gray-900">Sunset Urban Drives</p>
                  <p className="text-gray-600 mt-1 text-sm">
                    Golden hour routes—traffic manageable aur roads smooth.
                  </p>
                  <p className="mt-2 text-sm font-semibold text-sky-700">
                    Best time: 6–8 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-sky-100 bg-white shadow-sm">
                <div className="h-12 w-12 rounded-xl bg-sky-50 flex items-center justify-center text-2xl">
                  🌊
                </div>
                <div>
                  <p className="font-extrabold text-gray-900">Waterfront & Long Roads</p>
                  <p className="text-gray-600 mt-1 text-sm">
                    Calm vibe, wide roads—driving + views both top-notch.
                  </p>
                  <p className="mt-2 text-sm font-semibold text-sky-700">
                    View level: Relaxed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <a
                href="/Blog"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sky-600 text-white font-bold hover:bg-sky-700 duration-200"
              >
                Car Blogs & Locations
              </a>
            </div>
          </div>

          {/* Visual / placeholder image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-sky-100">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
                alt="Scenic car view"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/15 backdrop-blur rounded-2xl border border-white/20 p-5">
                  <p className="text-white/90 text-sm">Featured location</p>
                  <p className="text-white font-extrabold text-xl mt-1">
                    Where view feels premium
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    Same-day drive tips + quick checklist included.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute -top-8 -left-8 h-24 w-24 rounded-3xl bg-sky-600/20 border border-sky-600/30 blur-[0px]" />
            <div className="hidden md:block absolute -bottom-8 -right-6 h-24 w-24 rounded-3xl bg-cyan-200/25 border border-cyan-200/40" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogGlad;

