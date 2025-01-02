import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu/Menu";
import OrderFoodItems from "../Pages/OrderFoodItems/OrderFoodItems";
import Login from "../Components/Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Components/Dashboad/Dashboard";
import MyCart from "../Pages/DashboardPages/MyCart/MyCart";

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
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        index: true,
        element: <MyCart></MyCart>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default Router;
