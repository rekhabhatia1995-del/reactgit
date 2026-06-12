


const blogs = [
  {
    title: "How to Choose the Right Car for City Travel",
    date: "2026-06-01",
    desc: "Learn quick tips to pick the perfect car for comfort, mileage, and budget.",
    imageUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  
  {
    title: "Top Safety Checklist Before Your Trip",
    date: "2026-04-30",
    desc: "A simple checklist to ensure a smooth and safe journey every time.",
    imageUrl:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Best Road Trip Snacks (That Won’t Mess Up Your Car)",
    date: "2026-04-12",
    desc: "Pack smart snacks for a cleaner ride—no spills, no stress.",
    imageUrl:
      "https://cdn-s3.autocarindia.com/Mercedes/cla-electric/Mercedes-Benz_CLA_EV_Front_Quarter_Tracking.jpg?w=640&q=75",
  },
  
  {
    title: "Car Cleaning Routine: 15 Minutes a Day",
    date: "2026-03-08",
    desc: "Keep your car fresh with a quick daily routine and easy products.",
    imageUrl:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "What to Check Before Booking a Rental",
    date: "2026-02-18",
    desc: "Avoid surprises by confirming key details like insurance and mileage.",
    imageUrl:
      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Night Driving Tips: Stay Safe and Visible",
    date: "2026-01-29",
    desc: "Improve visibility and reduce risk with practical night driving tips.",
    imageUrl:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=80",
  },
];

function BlogSection() {
  return (
    <section className="w-full bg-white py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Blog
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Tips, updates, and guides for your next car ride.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <article
              key={b.title}
              className="group overflow-hidden rounded-3xl border border-gray-100 shadow-sm bg-white"
            >
              <div className="relative h-48">
                <img
                  src={b.imageUrl}
                  alt={b.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </div>

              <div className="p-6">
                <div className="text-sm text-gray-500 font-semibold">
                  {b.date}
                </div>
                <h3 className="mt-2 text-xl font-extrabold text-gray-900">
                  {b.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;

