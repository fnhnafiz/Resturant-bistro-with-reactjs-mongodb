import { useState } from "react";
import orderCoverImage from "../../../src/assets/shop/banner2.jpg";
import HeaderBanner from "../Shared/HeaderBanner/HeaderBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";

const OrderFoodItems = () => {
  const categories = [
    "salad",
    "pizza",
    "soup",
    "desserts",
    "drinks",
    "offered",
  ];
  const { category } = useParams();
  // console.log(category);

  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  // console.log(initialIndex);
  const [menu] = useMenu();
  // console.log(category);
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");
  // useEffect(() => {
  //   setTabIndex(0);
  // }, []);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Order Foods</title>
      </Helmet>
      <HeaderBanner
        title={"our shop foods"}
        description={"Would you like a dish from us"}
        image={orderCoverImage}
      ></HeaderBanner>
      <div className="py-12">
        <Tabs
          className="text-center"
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="border-0">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
            {/* <Tab>Offered</Tab> */}
          </TabList>
          <TabPanel>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8">
              {salad?.map((card) => (
                <FoodCard key={card._id} card={card}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8">
              {pizza?.map((card) => (
                <FoodCard key={card._id} card={card}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8">
              {soup?.map((card) => (
                <FoodCard key={card._id} card={card}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8">
              {dessert?.map((card) => (
                <FoodCard key={card._id} card={card}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8">
              {drinks?.map((card) => (
                <FoodCard key={card._id} card={card}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8">
              {offered?.map((card) => (
                <FoodCard key={card._id} card={card}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFoodItems;
