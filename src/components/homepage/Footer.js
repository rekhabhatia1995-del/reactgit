import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <>
      <footer className="bg-black text-white pt-10 pb-6 px-4 sm:px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight uppercase">
              Have A <br />
              <span className="text-cyan-200">Happy</span> <br />
              Easy <br />
              Ride.
            </h1>

            <div className="w-20 sm:w-24 h-1 bg-white mt-4 mb-4"></div>

            <p className="text-base sm:text-lg font-semibold">
              A Unit of <br />
              Shrirara Automotive LLP.
            </p>
          </div>

          {/* Serviceable Cities */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Serviceable Cities
            </h2>

            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
              <li>› Chandigarh</li>
              <li>› Delhi NCR</li>
              <li>› Amritsar</li>
              <li>› Bangalore</li>
              <li>› Rajasthan</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Useful Links
            </h2>

            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg">
              <li>› About us</li>
              <li>› Terms & Conditions</li>
              <li>› Privacy policy</li>
              <li>› Cancellation & Refund policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Contact Us
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full shrink-0">
                  <FaPhoneAlt />
                </div>

                <p className="text-base sm:text-lg">
                  +91-9289044919 <br />
                  +91 9310744723 <br />
                  +91 9667223122
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full shrink-0">
                  <FaEnvelope />
                </div>

                <p className="text-base sm:text-lg">
                  hello@happyeasyrides.com
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 sm:gap-4 pt-4 flex-wrap">
                <a
                  href="https://www.facebook.com/happyeasyrides"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-blue-900 duration-300 cursor-pointer flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://x.com/happyeasyrides"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-blue-900 duration-300 cursor-pointer flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://www.instagram.com/happyeasyrides/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-blue-900 duration-300 cursor-pointer flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.youtube.com/@happyeasyrides"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-blue-900 duration-300 cursor-pointer flex items-center justify-center"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 mt-8 sm:mt-10 pt-4 sm:pt-5 text-center text-base sm:text-lg">
          © happyeasyrides, 2026
        </div>
      </footer>


        </>
    )
}

export default Footer;
