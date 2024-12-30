import HeaderBanner from "../../Shared/HeaderBanner/HeaderBanner";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, coverImage, title, description }) => {
  return (
    <div>
      {title && (
        <HeaderBanner
          image={coverImage}
          title={title}
          description={description}
        ></HeaderBanner>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
        {items?.map((item) => (
          <MenuItems key={item._id} menuItem={item}></MenuItems>
        ))}
      </div>
      <button className="btn border-0 border-b-2 btn-outline block mx-auto mt-12 uppercase">
        ORDER YOUR FAVOURITE FOOD
      </button>
    </div>
  );
};

export default MenuCategory;
