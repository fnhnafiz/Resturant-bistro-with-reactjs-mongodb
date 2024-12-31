import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu/Menu";
import OrderFoodItems from "../Pages/OrderFoodItems/OrderFoodItems";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order-food-items/:category",
        element: <OrderFoodItems></OrderFoodItems>,
      },
    ],
  },
]);

export default Router;
