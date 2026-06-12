function Header() {
    return (
        <>
            <div className=" flex shadow justify-between  h-24 items-center  p-2 rounded-bl-[60px] rounded-br-[60px]">
                <div>
                    <img src="https://img.magnific.com/free-vector/taxi-service-logo-graphic-design_24908-54866.jpg?semt=ais_hybrid&w=740&q=80"  className="h-[70px] w-48 ml-10" alt="Image Description"/>
                </div>
                <div>
                    <ul className="flex gap-6 text-green-500 font-bold text-lg cursor-pointer">
                        <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>

            <li>
              <a href="/About" className="hover:text-blue-600">
                About
              </a>
            </li>
                    
                        <li>
              <a href="/Blog" className="hover:text-blue-600">
                Blog
              </a>
            </li>
                        <li>
              <a href="/Contact" className="hover:text-blue-600">
                Contact Us
              </a>
            </li>
                    
                    </ul>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search here..." className="w-96 p-2 rounded-lg border-2 border-black " />
                </div>
                <p className="mt-4 text-lg">
                 <span className="font-bold"></span>
                </p>

                <div>
                    <button className=" text-white  bg-black border-2 border-white  w-26 rounded-xl p-2 mr-10 font-bold shadow">
                     <a href="/Login">  Login </a>
                    </button>
                </div>
            </div>

        </>
    )
}
export default Header;