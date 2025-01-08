import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItems = (item) => {
    console.log(item);
    // TODO:
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `Your ${item.name} has been deleted.`,
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading="manage items"
        subHeading="what's new"
      ></SectionTitle>
      <div className="px-6 md:px-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] py-4 text-white">
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
                <tr key={item._id} className="hover">
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-end">${item.price}</td>
                  <td>
                    <Link to={`/dashboard/update/${item._id}`}>
                      <button className="btn btn-ghost btn-xs bg-green-500 hover:text-black text-white">
                        Update <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItems(item)}
                      className="btn btn-ghost btn-xs bg-red-500 text-white"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
