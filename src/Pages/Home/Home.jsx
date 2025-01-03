import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import BistroBoss from "./BistroBoss/BistroBoss";
import Categories from "./Category/Categories";
import CheifRecomdes from "./CheifRecomdes/CheifRecomdes";
import ContactUs from "./ContactUS/ContactUs";
import Fetured from "./Fetured/Fetured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bistro Boss || HOME</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <ContactUs></ContactUs>
      <CheifRecomdes></CheifRecomdes>
      <Fetured></Fetured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
