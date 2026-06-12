function ContactGlad() {
  return (
    <section className="bg-gradient-to-b from-white to-sky-50 py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              We’ve got your message!
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl">
              Thanks for reaching out. Our team will review your request and get back to you shortly.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-xl bg-black text-white flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-bold text-gray-900">Quick response</p>
                  <p className="text-gray-600">Typically within 1 business day.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-xl bg-black text-white flex items-center justify-center font-bold">
                  ⏱
                </div>
                <div>
                  <p className="font-bold text-gray-900">Clear updates</p>
                  <p className="text-gray-600">You’ll receive a confirmation on email.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-xl bg-black text-white flex items-center justify-center font-bold">
                  ★
                </div>
                <div>
                  <p className="font-bold text-gray-900">Support, always</p>
                  <p className="text-gray-600">We’re here for bookings, queries & help.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="/Contact"
                className="inline-flex items-center justify-center bg-black text-white font-bold rounded-xl px-5 py-3 hover:opacity-90 duration-200"
              >
                Go to Contact Form
              </a>
              <p className="mt-3 text-sm text-gray-600">
                Prefer to send another message? Use the form again.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-black/10 p-7 md:p-8">
              <h3 className="text-2xl font-extrabold text-gray-900">Contact Details</h3>
              <p className="mt-2 text-gray-600">Reach us anytime—our team will assist you.</p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-xl border border-black/10 p-4">
                  <p className="text-sm font-bold text-gray-500">Phone</p>
                  <p className="mt-2 text-lg font-extrabold text-gray-900">+91 9289044919</p>
                  <p className="text-gray-600">+91 9310744723</p>
                </div>

                <div className="rounded-xl border border-black/10 p-4">
                  <p className="text-sm font-bold text-gray-500">Email</p>
                  <p className="mt-2 text-lg font-extrabold text-gray-900">hello@happyeasyrides.com</p>
                  <p className="text-gray-600">We reply with updates.</p>
                </div>

                <div className="rounded-xl border border-black/10 p-4 sm:col-span-2">
                  <p className="text-sm font-bold text-gray-500">Support Hours</p>
                  <p className="mt-2 text-lg font-extrabold text-gray-900">24/7</p>
                  <p className="text-gray-600">Bookings & general queries supported.</p>
                </div>
              </div>

              <div className="mt-7 rounded-xl bg-sky-50 border border-sky-100 p-5">
                <p className="font-bold text-gray-900">Tip</p>
                <p className="mt-2 text-gray-700">
                  If you’re contacting us about a ride, include your pickup location and preferred time.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              By contacting us, you agree to our Terms & Privacy policy.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactGlad;
