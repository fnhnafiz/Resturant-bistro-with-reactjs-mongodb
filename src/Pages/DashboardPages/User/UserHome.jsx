import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <SectionTitle heading="User Home"></SectionTitle>
      <h1 className="text-green-500 font-semibold text-3xl px-6">
        <span>
          Hey Welcome{" "}
          {user?.displayName && user?.email ? user.displayName : "Back"}
        </span>
      </h1>
    </div>
  );
};

export default UserHome;
