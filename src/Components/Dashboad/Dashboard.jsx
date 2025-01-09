import {
  FaHome,
  FaCalendarAlt,
  FaHistory,
  FaShoppingCart,
  FaStar,
  FaClipboardList,
  FaStore,
  FaEnvelope,
  FaUtensils,
  FaList,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useCart from "../../Hooks/useCart";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  return (
    <div className="flex">
      {/* left sidebar */}
      <div className="w-72 min-h-screen bg-yellow-700 space-y-12 px-6 py-4">
        {/* Logo */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">BISTRO BOSS</h1>
          <p className="text-sm mt-1 text-white">RESTAURANT</p>
        </div>

        {isAdmin ? (
          <>
            {" "}
            {/* User Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-white">Admin Home</h2>
              <ul className="flex flex-col gap-6 text-white">
                <Link to="/dashboard/admin-home">
                  <li className="flex items-center space-x-2">
                    <FaHome />
                    <span>Admin Home</span>
                  </li>
                </Link>
                <Link to="/dashboard/add-items">
                  <li className="flex items-center space-x-2">
                    <FaUtensils></FaUtensils>
                    <span>Add Items</span>
                  </li>
                </Link>
                <Link to="/dashboard/manage-items">
                  <li className="flex items-center space-x-2">
                    <FaList></FaList>
                    <span>Manage Items</span>
                  </li>
                </Link>
                <Link to="/dashboard/manage-bookings">
                  <li className="flex items-center space-x-2">
                    <FaBook></FaBook>
                    <span>Manage Bookings</span>
                  </li>
                </Link>
                <Link to="/dashboard/all-users">
                  <li className="flex items-center space-x-2">
                    <FaUsers></FaUsers>
                    <span>All User</span>
                  </li>
                </Link>
              </ul>
            </div>
          </>
        ) : (
          <>
            {" "}
            {/* User Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-white">User Home</h2>
              <ul className="flex flex-col gap-6 text-white">
                <Link to="/dashboard/user-home">
                  <li className="flex items-center space-x-2">
                    <FaHome />
                    <span>User Home</span>
                  </li>
                </Link>
                <Link to="/dashboard/reservation">
                  <li className="flex items-center space-x-2">
                    <FaCalendarAlt />
                    <span>Reservation</span>
                  </li>
                </Link>
                <Link to="/dashboard/payment-history">
                  <li className="flex items-center space-x-2">
                    <FaHistory />
                    <span>Payment History</span>
                  </li>
                </Link>
                <Link to="/dashboard/cart">
                  <li className="flex items-center space-x-2">
                    <FaShoppingCart />
                    <span>My Cart ({cart.length})</span>
                  </li>
                </Link>
                <Link to="/dashboard/review">
                  <li className="flex items-center space-x-2">
                    <FaStar />
                    <span>Add Review</span>
                  </li>
                </Link>
                <Link to="/dashboard/booking">
                  <li className="flex items-center space-x-2">
                    <FaClipboardList />
                    <span>My Booking</span>
                  </li>
                </Link>
              </ul>
            </div>
          </>
        )}

        <hr className="border-t border-gray-400" />

        {/* Main Navigation */}
        <div className="space-y-8">
          <ul className="space-y-3 text-white">
            <li className="flex items-center space-x-2">
              <Link to="/" className="flex gap-2 items-center">
                <FaHome />
                <span>Home</span>
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaClipboardList />
              <span>Menu</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaStore />
              <span>Shop</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope />
              <span>Contact</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Content area for dashboard */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
