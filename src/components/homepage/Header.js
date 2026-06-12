import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center h-24 p-2 shadow rounded-bl-[60px] rounded-br-[60px]">

        <div>
          <img
            src="https://img.magnific.com/free-vector/taxi-service-logo-graphic-design_24908-54866.jpg?semt=ais_hybrid&w=740&q=80"
            className="h-[70px] w-48 ml-10"
            alt="Taxi Service Logo"
          />
        </div>

        <div>
          <ul className="flex gap-6 text-green-500 font-bold text-lg cursor-pointer">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>

            <li>
              <Link to="/About" className="hover:text-blue-600">
                About
              </Link>
            </li>

            <li>
              <Link to="/Blog" className="hover:text-blue-600">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/Contact" className="hover:text-blue-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search here..."
            className="w-96 p-2 rounded-lg border-2 border-black"
          />
        </div>

        <div>
          <Link to="/Login">
            <button className="text-white bg-black border-2 border-white w-26 rounded-xl p-2 mr-10 font-bold shadow">
              Login
            </button>
          </Link>
        </div>

      </div>
    </>
  );
}

export default Header;