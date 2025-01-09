import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments } = useQuery({
    queryKey: ["peyments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment-history/${user.email}`);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div>
      <SectionTitle
        heading="My Payment History"
        subHeading="Food Cart Payment"
      ></SectionTitle>
      <div className="px-6 md:px-12">
        <h1 className="text-5xl font-bold text-center py-3">
          Total Payments {payments.length}
        </h1>
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] py-4 text-white">
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Price</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((item, index) => (
              <tr key={item._id} className="hover">
                <td>{index + 1}</td>
                <td>{item.email}</td>
                <td>${item.price}</td>
                <td className="text-green-500">${item.transactionId}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
