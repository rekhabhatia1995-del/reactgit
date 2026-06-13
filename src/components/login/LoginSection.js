function LoginSection() {
  return (
    <div className="text-white px-0 md:px-2">
      <div className="rounded-2xl border border-white/20 bg-black/20 backdrop-blur p-5 sm:p-7">
        <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
          Why choose <span className="text-cyan-200">Happy Easy Rides</span>?
        </h3>
        <p className="mt-3 text-white/90 text-sm md:text-base">
          Smooth rides, transparent pricing, and support whenever you need.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center font-bold">
              ⚡
            </div>
            <div>
              <p className="font-bold">Fast & on-time</p>
              <p className="text-white/80 text-sm">Quick pickups and reliable service.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center font-bold">
              🛡️
            </div>
            <div>
              <p className="font-bold">Safe rides</p>
              <p className="text-white/80 text-sm">Verified drivers & customer-first policies.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center font-bold">
              💬
            </div>
            <div>
              <p className="font-bold">24×7 support</p>
              <p className="text-white/80 text-sm">Need help? We’re here to assist.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center font-bold">
              ✅
            </div>
            <div>
              <p className="font-bold">Transparent pricing</p>
              <p className="text-white/80 text-sm">Clear fares before you confirm.</p>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <div className="text-white/90 text-sm">
            Tip: Use your email & password to continue.
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;


