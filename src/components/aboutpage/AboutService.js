import React from "react";

const cities = [
  {
    name: "Delhi NCR",
    address: "Gurugram, Delhi NCR",
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Mumbai",
    address: "Bandra, Mumbai",
    imageUrl:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80",
  },
 
 
  {
    name: "Chennai",
    address: "T Nagar, Chennai",
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Chandigarh",
    address: "Sector 17, Chandigarh",
    imageUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/707216221.jpg?k=f8fc34290a0d9946d619bc4b6b943c11bd73b2a459932c77fe8300f5090d453e&o=",
  },
  
  {
    name: "Amritsar",
    address: "Panaji, Goa",
    imageUrl:
      "https://cdn.bega.com/cdn-cgi/image/w=600,h=900,fit=cover,gravity=0.66x0.54,f=auto/https://images.ctfassets.net/w2xcep4i3dcd/uJw9iRWCVxDGecgB1NFdg/39ccbf8cfaaad6399ed8170f982b13d6/Harmandir_Sahib-HERO.jpg",
  },
];

function AboutService() {
  return (
    <section className="w-full bg-white py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            City-wise Car Service
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Available across your favorite destinations—choose your city and book
            your ride.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <div
              key={city.name}
              className="relative overflow-hidden rounded-3xl shadow-sm border border-gray-100 group"
              style={{ minHeight: "220px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${city.imageUrl}')` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

              <div className="relative z-10 h-full flex items-end p-6">
                <div>
                  <h3 className="text-white font-extrabold text-2xl tracking-wide">
                    {city.name}
                  </h3>
                  <p className="mt-2 text-white/90 font-semibold">
                    {city.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutService;

