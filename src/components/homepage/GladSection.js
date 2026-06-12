import React, { useEffect, useMemo, useState } from "react";

const cards = [
  {
    title: "Toyota Camry",
    desc: "Comfortable ride with smooth handling.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Honda City",
    desc: "Reliable performance for daily commutes.",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Hyundai Creta",
    desc: "Spacious interiors for a comfortable trip.",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Maruti Suzuki Dzire",
    desc: "Great mileage with easy city navigation.",
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tata Nexon",
    desc: "Strong build and confident driving.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kia Seltos",
    desc: "Premium feel with modern design.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
  },
];

function getCardsPerView(width) {
  if (width >= 1024) return 3; // lg
  if (width >= 640) return 2; // sm/md
  return 1; // mobile
}

function GladSection() {
  const [cardsPerView, setCardsPerView] = useState(() =>
    typeof window === "undefined" ? 1 : getCardsPerView(window.innerWidth)
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onResize = () => {
      setCardsPerView(getCardsPerView(window.innerWidth));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, cards.length - cardsPerView),
    [cardsPerView]
  );

  useEffect(() => {
    setActiveIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < maxIndex;
  const slideWidthPercent = 100 / cardsPerView;

  // Auto-loop
  useEffect(() => {
    if (maxIndex === 0) return;
    const t = setInterval(() => {
      setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 3500);
    return () => clearInterval(t);
  }, [maxIndex]);

  return (
    <section className="bg-gradient-to-b from-white to-sky-50 py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Choose Us
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Quick, safe and comfortable cab service with a focus on your journey.
          </p>
        </div>

        <div className="mt-10 relative">
          <div className="flex items-center justify-between gap-4 mb-4">
            <button
              type="button"
              onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
              disabled={!canPrev}
              className={`rounded-xl border px-4 py-2 text-sm font-bold transition ${
                canPrev
                  ? "border-sky-200 bg-white text-sky-700 hover:bg-sky-50"
                  : "border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed"
              }`}
              aria-label="Previous"
            >
              Prev
            </button>

            <div className="text-sm text-gray-500 font-semibold">
              {activeIndex + 1} / {maxIndex + 1}
            </div>

            <button
              type="button"
              onClick={() => setActiveIndex((i) => Math.min(maxIndex, i + 1))}
              disabled={!canNext}
              className={`rounded-xl border px-4 py-2 text-sm font-bold transition ${
                canNext
                  ? "border-sky-200 bg-white text-sky-700 hover:bg-sky-50"
                  : "border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed"
              }`}
              aria-label="Next"
            >
              Next
            </button>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * slideWidthPercent}%)`,
              }}
              aria-label="Cars slider"
            >
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="flex-none"
                  style={{ width: `${slideWidthPercent}%` }}
                >
                  <div className="group bg-white rounded-2xl shadow-sm border border-sky-100 overflow-hidden">
                    <div className="relative h-44">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                      <div className="absolute left-4 bottom-4">
                        <h3 className="text-white font-extrabold text-xl">
                          {c.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-gray-600 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GladSection;

