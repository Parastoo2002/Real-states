import { FaCity ,FaHome, FaInfoCircle, FaServicestack, FaSignInAlt } from 'react-icons/fa';
const Header = () => {
    return (
      <header className="bg-rose-300/50 text-gray-800 p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center justify-center text-2xl font-bold "> <FaCity className="mr-2" />Real Estate</div>
          <nav>
          <ul className="flex space-x-4">
          <li className="flex items-center">
            <FaHome className="mr-2" />
            <a href="/">Home</a>
          </li>
          <li className="flex items-center">
            <FaInfoCircle className="mr-2" />
            <a href="/about">About</a>
          </li>
          <li className="flex items-center">
            <FaServicestack className="mr-2" />
            <a href="/services">Services</a>
          </li>
          <li className="flex items-center">
            <FaSignInAlt className="mr-2" />
            <a href="/login">Login</a>
          </li>
        </ul>
          </nav>
          <button className="bg-rose-300 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;
  