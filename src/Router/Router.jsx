import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu/Menu";
import OrderFoodItems from "../Pages/OrderFoodItems/OrderFoodItems";
import Login from "../Components/Login/Login";
import Register from "../Register/Register";
import Dashboard from "../Components/Dashboad/Dashboard";
import MyCart from "../Pages/DashboardPages/MyCart/MyCart";
import PrivateRoutes from "../SecureRoute/PrivateRoutes";
import AllUsers from "../Pages/DashboardPages/AllUsers/AllUsers";
import AdminPrivateRoutes from "../SecureRoute/AdminPrivateRoutes";
import AddItems from "../Pages/DashboardPages/AddItems/AddItems";
import ManageItems from "../Pages/DashboardPages/ManageItems/ManageItems";
import UpdateItems from "../Pages/DashboardPages/UpdateItems/UpdateItems";
import Payment from "../Pages/Payment/Payment";
import PaymentHistory from "../Pages/Payment/PaymentHistory";

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
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // User handle section
      {
        path: "cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      // Admin access
      {
        path: "/dashboard/all-users",
        element: (
          <AdminPrivateRoutes>
            <AllUsers></AllUsers>
          </AdminPrivateRoutes>
        ),
      },
      {
        path: "/dashboard/manage-items",
        element: (
          <AdminPrivateRoutes>
            <ManageItems></ManageItems>
          </AdminPrivateRoutes>
        ),
      },
      {
        path: "/dashboard/add-items",
        element: <AddItems></AddItems>,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateItems></UpdateItems>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
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
