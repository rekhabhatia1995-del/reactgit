import { useState } from "react";
import LoginSection from "./LoginSection";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim()) return setError("Email is required.");
    if (!password.trim()) return setError("Password is required.");

    // No backend in this project yet—show success message only.
    setSuccess(
      `Login successful for ${email}${rememberMe ? " (remembered)" : ""}.`
    );
  };

  return (
    <div className="relative min-h-[60vh] mt-4 mb-6 mx-4">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 h-full"
        style={{
          backgroundImage: `url("https://media.gettyimages.com/id/2166802703/photo/confident-businessman-standing-by-car-with-smartphone-in-city.jpg?s=612x612&w=gi&k=20&c=TnW221sfBTFdAUwVSvCgeOJzWqu6sgnj29-mFxYBM6U=")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/55 -z-10" />

      <div className="max-w-6xl mx-auto pt-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Login form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-white/60"
          >
            <h2 className="text-3xl font-bold text-center">Login</h2>
            <p className="text-center text-gray-700 mt-2">
              Welcome back! Please sign in.
            </p>

            {error ? (
              <div className="mt-5 text-red-600 text-sm font-semibold">
                {error}
              </div>
            ) : null}

            {success ? (
              <div className="mt-5 text-green-600 text-sm font-semibold">
                {success}
              </div>
            ) : null}

            <div className="mt-6 space-y-4">
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border-2 border-black rounded-xl p-3 outline-none"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full border-2 border-black rounded-xl p-3 outline-none"
                />
              </div>

              <label className="flex items-center gap-3 select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="text-sm font-semibold">Remember me</span>
              </label>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold rounded-xl p-3 hover:opacity-90 duration-200"
              >
                Sign in
              </button>

              <div className="text-center text-sm text-gray-600">
                Don’t have an account?{" "}
                <a className="font-bold text-blue-600" href="/">
                  Sign up
                </a>
              </div>
            </div>
          </form>

          {/* USP / benefits section (new) */}
          <LoginSection />

        </div>
      </div>
    </div>
  );
}

export default Login;

