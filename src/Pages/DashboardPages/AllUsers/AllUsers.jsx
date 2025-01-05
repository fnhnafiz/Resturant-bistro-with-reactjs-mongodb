import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  //   console.log(users);

  const handleUpdateUser = (user) => {
    console.log(user._id);
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data.modifiedCount);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `${user.name} Admin Now`,
          icon: "success",
          draggable: true,
        });
      }
    });
  };
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to access this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${user.name} delete it!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          console.log(res.data.deletedCount);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="px-12">
      <div className="flex items-center justify-around border-b-2 py-6">
        <h1 className="font-bold text-3xl text-green-500">All Users</h1>
        <h1 className="font-bold text-3xl text-green-500">
          Total Users Available:{users.length}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full ">
          {/* head */}
          <thead className="bg-yellow-700 text-white rounded-t">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id} className="hover">
                <th className="">{index + 1}</th>
                <td className="text-green-500">{user.name}</td>
                <td className="text-green-500">{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleUpdateUser(user)}
                      className="btn bg-yellow-700"
                    >
                      <FaUsers className="text-3xl text-white"></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <FaTrash className=" text-2xl"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
