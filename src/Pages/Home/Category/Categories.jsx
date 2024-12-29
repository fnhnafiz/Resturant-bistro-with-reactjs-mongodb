import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import slide6 from "../../../assets/home/";

const Categories = () => {
  return (
    <div className="my-24">
      <section>
        <SectionTitle
          subHeading={"From 11 AM to 10.00 PM"}
          heading={"ORDER ONLINE"}
        ></SectionTitle>
      </section>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full" src={slide1} alt="" />
          <h3 className="uppercase text-3xl text-center -mt-24 text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} alt="" />
          <h3 className="uppercase text-3xl text-center -mt-24 text-white">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} alt="" />
          <h3 className="uppercase text-3xl text-center -mt-24 text-white">
            Shoups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} alt="" />
          <h3 className="uppercase text-3xl text-center -mt-24 text-white">
            Deserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide5} alt="" />
          <h3 className="uppercase text-3xl text-center -mt-24 text-white">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
