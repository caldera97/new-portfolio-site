import {useState} from 'react'
import Logo from "../assets/DC logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-600 text-gray-50">
      <img src={Logo} alt="Logo" style={{width: '70px'}}/>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

      {/* hamburger icon */}
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      <ul className={nav ? "absolute top-0 left-0 w-full h-screen bg-slate-600 flex flex-col justify-center items-center" : "hidden"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
