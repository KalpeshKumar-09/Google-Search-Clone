import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b bg-gray-300">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded">
            Google
          </p>
        </Link>
      </div>
      <Search />
    </nav>
  );
};

export default Navbar;
