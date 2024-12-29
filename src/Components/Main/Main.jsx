import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="container mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Main;
