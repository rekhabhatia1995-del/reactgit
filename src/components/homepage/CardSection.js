import React, { useEffect, useMemo, useState } from "react";

const cards = [
  {
    title: "Maruti Suzuki Swift",
    desc: "City-friendly hatchback with great mileage.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyjCteJPVyARpNprPvQ3PcITiLXrG133yGg&s",
  },
  {
    title: "Toyota Camry",
    desc: "Comfortable ride with smooth handling.",
    image:
      "https://m.media-amazon.com/images/I/61Qwqn75xsL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Honda City",
    desc: "Reliable performance for daily commutes.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFba5pDsoIOcOI9k7uW3LSIZli5YZADlwBQ&s",
  },
  {
    title: "Hyundai Creta",
    desc: "Spacious interiors for a comfortable trip.",
    image:
      "https://cdn2.shopclues.com/images1/thumbnails/96888/640/1/143643142-96888796-1550168184.jpg",
  },
  {
    title: "Tata Nexon",
    desc: "Strong build and confident driving.",
    image:
      "https://m.media-amazon.com/images/I/71b96uzXO0L.jpg",
  },
  {
    title: "Kia Seltos",
    desc: "Premium feel with modern design.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6APhYQyxiQ3Q_renUg84auoxETsjXGaezyA&s",
  },
];

function getCardsPerView(width) {
  if (width >= 1024) return 3; // lg
  if (width >= 640) return 2; // sm/md
  return 1; // mobile
}

function CardSection() {
  const [cardsPerView, setCardsPerView] = useState(() =>
    typeof window === "undefined" ? 1 : getCardsPerView(window.innerWidth)
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setCardsPerView(getCardsPerView(window.innerWidth));
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
    <section className="bg-white  py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
           Featured In
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            A glimpse of how we are changing the Indian Car Rental Industry, one car at a timey
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
              aria-label="Fleet slider"
            >
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="flex-none"
                  style={{ width: `${slideWidthPercent}%` }}
                >
                  <div className="group bg-white rounded-2xl shadow-sm border border-sky-100 overflow-hidden">
                    {c.image ? (
                      <div className="relative h-44">
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-32 h-32 ml-4 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                        <div className="absolute left-4 bottom-4">
                          <h3 className="text-balck  font-extrabold text-xl">
                            {c.title}
                          </h3>
                        </div>
                      </div>
                    ) : (
                      <div className="p-6">
                        <h3 className="text-gray-900 font-extrabold text-xl">
                          {c.title}
                        </h3>
                      </div>
                    )}

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

export default CardSection;

