import { FaApple, FaGooglePlay } from "react-icons/fa";



function IconSection () {
    return (
        <>
        <section className="w-[1100px] bg-pink-100 py-16 px-6 h-96 rounded-lg items-center flex ml-50 mb-8 ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <div>
          
          {/* QR Codes */}
          <div className="flex gap-6 mb-2">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=AppStore"
              alt="QR Code"
              className="w-24 h-24 border rounded-lg"
            />

            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=GooglePlay"
              alt="QR Code"
              className="w-24 h-24 border rounded-lg"
            />
          </div>

          <div>
          <h1 className="text-2xl font-bold leading-snug text-gray-800 mb-2">
            On Google Play <br />
            Store & App Store
          </h1>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mb-2">
            
            {/* Apple Store */}
            <button className="flex items-center gap-4 bg-slate-700 hover:bg-slate-800 text-white px-6 py-4 rounded-2xl transition duration-300">
              <FaApple className="text-4xl" />
              <div className="text-left">
                <p className="text-sm">Download on the</p>
                <h2 className="text-xl font-semibold">Apple Store</h2>
              </div>
            </button>

            {/* Google Play */}
            <button className="flex items-center gap-4 bg-slate-700 hover:bg-slate-800 text-white px-6 py-4 rounded-2xl transition duration-300">
              <FaGooglePlay className="text-4xl" />
              <div className="text-left">
                <p className="text-sm">Get it on</p>
                <h2 className="text-xl font-semibold">Google Play</h2>
              </div>
            </button>
          </div>

          {/* Bottom Text */}
          <h2 className="text-xl font-semibold text-gray-700">
            Happyeasy Rides{" "}
            <span className="font-normal">
              on Google Play Store & App Store
            </span>
          </h2>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src="https://happyeasyrides.com/assets/v2/images/mainplaystore.png"
            alt="Mobile App"
            className="w-full  max-w-md rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
        
        </>
    )
}
export default IconSection;