const MenuItems = ({ menuItem }) => {
  //   console.log(menuItem);
  const { image, price, name, recipe } = menuItem;
  return (
    <div className="flex gap-6">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-24 ring-4 ring-red-500"
        src={image}
        alt=""
      />
      <div className="space-y-3">
        <h3 className="uppercase text-xl font-medium ">{name}-------------</h3>
        <p className="text-gray-400 text-xl">{recipe}</p>
      </div>
      <div>
        <p className="text-[#BB8506] text-xl">${price}</p>
      </div>
    </div>
  );
};

export default MenuItems;
