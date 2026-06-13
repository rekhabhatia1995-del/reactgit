import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About" },
    { to: "/Blog", label: "Blog" },
    { to: "/Contact", label: "Contact Us" },
  ];

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center w-full h-auto p-3 sm:p-2 shadow rounded-bl-[60px] rounded-br-[60px]">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <img
            src="https://img.magnific.com/free-vector/taxi-service-logo-graphic-design_24908-54866.jpg?semt=ais_hybrid&w=740&q=80"
            className="h-14 w-32 sm:h-[70px] sm:w-48 ml-0 sm:ml-10"
            alt="Taxi Service Logo"
          />

          {/* Burger button (mobile only) */}
          <button
            type="button"
            aria-label="Open menu"
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 border border-black"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="block w-6">
              <span className="block h-0.5 w-full bg-black mb-1" />
              <span className="block h-0.5 w-full bg-black mb-1" />
              <span className="block h-0.5 w-full bg-black" />
            </span>
          </button>
        </div>

        {/* Desktop nav (hidden on mobile) */}
        <div className="hidden sm:block w-full sm:w-auto">
          <ul className="flex flex-wrap gap-3 sm:gap-6 text-green-500 font-bold text-sm sm:text-lg cursor-pointer">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-blue-600">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Search */}
        <div className="w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full sm:w-56 md:w-96 p-2 rounded-lg border-2 border-black"
          />
        </div>

        {/* Login */}
        <div className="w-full sm:w-auto flex justify-start sm:justify-end">
          <Link to="/Login">
            <button className="text-white bg-black border-2 border-white rounded-xl px-4 py-2 font-bold shadow w-full sm:w-auto">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Side drawer */}
      <aside
        className={
          "fixed top-0 left-0 z-50 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 " +
          (isMenuOpen ? "translate-x-0" : "-translate-x-full")
        }
        aria-hidden={!isMenuOpen}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <span className="font-bold text-lg text-green-600">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            className="rounded-md border border-black px-3 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav className="p-4">
          <ul className="flex flex-col gap-3 text-green-500 font-bold text-lg">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Link to="/Login" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full text-white bg-black border-2 border-white rounded-xl px-4 py-2 font-bold shadow">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Header;



