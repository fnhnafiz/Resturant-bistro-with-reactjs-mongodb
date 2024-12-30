import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu] = useMenu();
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("Menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  const popularItmes = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-24">
      {/* <div>Menu{menu.length}</div> */}
      <SectionTitle
        // isColored="white"
        subHeading={"Popular Item"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {popularItmes?.map((item) => (
          <MenuItems key={item._id} menuItem={item}></MenuItems>
        ))}
      </div>
      <button className="btn border-0 border-b-2 btn-outline block mx-auto mt-12 uppercase">
        view full menu
      </button>
    </div>
  );
};

export default PopularMenu;
