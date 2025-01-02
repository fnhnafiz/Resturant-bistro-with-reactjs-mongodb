import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { IoCartOutline } from "react-icons/io5";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const [cart] = useCart();

  const handleLogOut = () => {
    logOut().then(() => {
      alert("Log out");
    });
  };
  return (
    <div className="navbar fixed z-10 bg-transparent text-white mx-auto container">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Contact US</Link>
            </li>
            <li>
              <Link>DASHBOARD</Link>
            </li>
            <li>
              <Link to="/our-menu">Our Menu</Link>
            </li>
            <li>
              {/* <HeaderBanner title={`${title}`}></HeaderBanner> */}
              <Link to={`/order-food-items/salad`}>Our Shop</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Contact US</Link>
          </li>
          <li>
            <Link>DASHBOARD</Link>
          </li>
          <li>
            <Link to="/our-menu">Our Menu</Link>
          </li>
          <li>
            <Link to={`/order-food-items/salad`}>Our Shop</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <Link to="/dashboard">
          <button className="btn mr-2">
            <IoCartOutline className="text-3xl" /> <p>Add to Cart</p>
            <div className="badge badge-secondary">{cart.length}+</div>
          </button>
        </Link>
        {user ? (
          <>
            <Link to="/">
              <button
                onClick={handleLogOut}
                className="btn btn-outline border-0 border-b text-white "
              >
                Log Out
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-outline border-0 border-b">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
