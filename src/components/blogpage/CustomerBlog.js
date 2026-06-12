import { useMemo, useState } from "react";

const customerBlogsSeed = [
  {
    name: "Aman K.",
    city: "Chandigarh",
    title: "First time booking… smooth ride all the way",
    date: "2026-05-18",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    quote:
      "Car pick-up time bilkul sahi tha. Ride comfortable rahi aur support fast tha."
  },
  {
    name: "Priya S.",
    city: "Delhi NCR",
    title: "Transparent pricing & safe driving",
    date: "2026-04-29",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=80",
    quote:
      "No hidden charges. Driver polite aur safe driving. Family trip ke liye perfect."
  },
  {
    name: "Rahul M.",
    city: "Bangalore",
    title: "Night drive was amazing ✨",
    date: "2026-03-24",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=80",
    quote:
      "Route easy tha aur car clean. Booking ke baad updates milte rahe."
  }
];

function Stars({ value }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= value ? "text-yellow-400" : "text-yellow-200"}>
        ★
      </span>
    );
  }
  return <div className="leading-none">{stars}</div>;
}

function CustomerBlog() {
  const [active, setActive] = useState(0);

  const blogs = useMemo(() => customerBlogsSeed, []);

  return (
    <section className="w-full bg-white py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Customer Stories
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Real feedback—jis tarah customer ne ride feel ki, waise hi yahan likha hai.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: cards list */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {blogs.map((b, idx) => (
                <button
                  key={b.title}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={
                    idx === active
                      ? "w-full text-left rounded-2xl border border-sky-200 bg-sky-50 p-4 shadow-sm"
                      : "w-full text-left rounded-2xl border border-gray-100 bg-white p-4 hover:bg-gray-50"
                  }
                >
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-sky-100 flex items-center justify-center text-2xl">
                      🚘
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-gray-900">{b.name}</p>
                      <p className="text-sm text-gray-500">{b.city}</p>
                      <p className="mt-2 text-sm font-bold text-gray-800 line-clamp-2">
                        {b.title}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Middle column: active story */}
          <div className="lg:col-span-2">
            <article className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
              <div className="relative">
                <img src={blogs[active].image} alt={blogs[active].title} className="w-full h-72 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute left-6 bottom-6 right-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white font-bold text-sm">
                      {blogs[active].city}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white font-bold text-sm">
                      {blogs[active].date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-white text-2xl md:text-3xl font-extrabold leading-tight">
                    {blogs[active].title}
                  </h3>
                  <div className="mt-3 text-white/90">
                    <Stars value={blogs[active].rating} />
                    <p className="mt-2 text-sm font-bold">— {blogs[active].name}</p>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <p className="text-gray-700 text-base leading-relaxed">
                  “{blogs[active].quote}”
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-sky-50 text-sky-700 font-bold text-sm border border-sky-100">
                    Safe
                  </span>
                  <span className="px-4 py-2 rounded-full bg-sky-50 text-sky-700 font-bold text-sm border border-sky-100">
                    Clean cars
                  </span>
                  <span className="px-4 py-2 rounded-full bg-sky-50 text-sky-700 font-bold text-sm border border-sky-100">
                    Quick support
                  </span>
                  <span className="px-4 py-2 rounded-full bg-sky-50 text-sky-700 font-bold text-sm border border-sky-100">
                    Hassle-free
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerBlog;

