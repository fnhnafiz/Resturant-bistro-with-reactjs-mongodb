import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign, FaList, FaUser } from "react-icons/fa";
import { FaBookBible } from "react-icons/fa6";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: orderData } = useQuery({
    queryKey: ["admin-dashboard"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-dashboard");
      return res.data;
    },
  });
  // admin-dashboard
  return (
    <div>
      <SectionTitle heading="admin Home"></SectionTitle>
      <h1 className="text-green-500 font-semibold text-3xl px-6">
        <span>
          Hey Welcome{" "}
          {user?.displayName && user?.email ? user.displayName : "Back"}
        </span>
      </h1>
      {/* {orderData.users} */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4">
        {/* <!-- Users Card --> */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            Users <FaUser></FaUser>
          </h3>
          <p className="text-2xl font-bold text-blue-500" id="usersCount">
            {orderData?.users}
          </p>
        </div>

        {/* <!-- Menu Items Card --> */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            Menu Items <FaList></FaList>
          </h3>
          <p className="text-2xl font-bold text-green-500" id="menuItemsCount">
            {orderData?.menuItems}
          </p>
        </div>

        {/* <!-- Order Payments Card --> */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center ">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            Order Payments <FaBookBible></FaBookBible>
          </h3>
          <p
            className="text-2xl font-bold text-red-500"
            id="orderPaymentsCount"
          >
            ${orderData?.orderPayments}
          </p>
        </div>

        {/* <!-- All Revenue Card --> */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            All Revenue <FaDollarSign></FaDollarSign>
          </h3>
          <p
            className="text-2xl font-bold text-purple-500"
            id="allRevenueCount"
          >
            ${orderData?.allRevinue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
