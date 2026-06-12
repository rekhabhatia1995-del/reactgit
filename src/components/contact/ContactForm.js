function ContactForm (){
    return (
        <>


 <div className="min-h-[60vh] bg-gray-100 flex items-center justify-center py-12 px-4 ">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8 md:p-10 ">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <p className="text-center text-gray-600 mt-2">
            We’d love to hear from you. Send us a message.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border-2 border-black rounded-xl p-3 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border-2 border-black rounded-xl p-3 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="phone">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91-xxxxxxxxxx"
                  className="w-full border-2 border-black rounded-xl p-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border-2 border-black rounded-xl p-3 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold rounded-xl p-3 hover:opacity-90 duration-200"
              >
                Send Message
              </button>

              <p className="text-center text-sm text-gray-600">
                By submitting, you agree to our Terms &amp; Privacy policy.
              </p>
            </form>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border-2 border-black/10">
              <h3 className="text-xl font-bold mb-3 px-1">Our Location (Chandigarh)</h3>
              <div className="w-full h-72 md:h-96 bg-gray-100">
                <iframe
                  title="Chandigarh Map"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Chandigarh&output=embed"
                  aria-label="Chandigarh map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        </>
    )
}
export default ContactForm;
