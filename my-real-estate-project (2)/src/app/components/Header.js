import Link from 'next/link';
import { FaCog  ,FaCity ,FaHome, FaInfoCircle, FaServicestack, } from 'react-icons/fa';

const Header = () => {
    return (
      <header className="bg-rose-300/50 text-gray-800 p-6 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center justify-center text-3xl font-bold "> <FaCity className="mr-5" />Real Estate</div>
          <nav>
          <ul className="flex space-x-6">
          <li className="flex items-center hover:text-gray-50 text-lg ">
            <FaHome className="mr-2" />
            <Link href="/">Home</Link>
          </li>
          <li className="flex items-center hover:text-gray-50 text-lg">
            <FaServicestack className="mr-2" />
            <Link href="/services">Services</Link>
          </li>
          <li className="flex items-center hover:text-gray-50 text-lg">
            <FaCog   className="mr-2" />
            <Link href="/setting">Setting</Link>
          </li>
          <li className="flex items-center hover:text-gray-50 text-lg">
            <FaInfoCircle className="mr-2" />
            <Link href="/about">About</Link>
          </li>
        </ul>
          </nav>
          <div>
          <button className="bg-rose-300 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded mr-3">
            Login
          </button>
          <button className="bg-rose-300 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded">
            Sign in
          </button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  