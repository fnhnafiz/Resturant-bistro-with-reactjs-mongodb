import React from "react";
import { Helmet } from "react-helmet";
import HeaderBanner from "../../Shared/HeaderBanner/HeaderBanner";
import menuImage from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro Boss || Our Menu</title>
      </Helmet>
      <HeaderBanner
        image={menuImage}
        title={"Our menu"}
        description={"Would you like to try dish"}
      ></HeaderBanner>
      {/* Offer Menu Items */}
      <div className="my-20">
        <SectionTitle
          subHeading={"Don't miss"}
          heading={"Today's offer"}
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
      </div>
      {/* Dessert Items */}
      <div className="my-20">
        <MenuCategory
          items={dessert}
          title="Desserts"
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImage={dessertImg}
        ></MenuCategory>
      </div>
      {/* PIZZA */}
      <div className="my-20">
        <MenuCategory
          items={pizza}
          title="Pizza"
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImage={pizzaImg}
        ></MenuCategory>
      </div>
      {/* Salad */}
      <div className="my-20">
        <MenuCategory
          items={salad}
          title="salad"
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImage={saladImg}
        ></MenuCategory>
      </div>
      {/* SOUP */}
      <div className="my-20">
        <MenuCategory
          items={soup}
          title="soup"
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          coverImage={soupImg}
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
