import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setRevies] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setRevies(data));
  }, []);
  return (
    <div className="my-24">
      <SectionTitle
        subHeading={"what out client say"}
        heading={"Testimonial"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="px-24  text-center  flex flex-col gap-6 items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteRight className="text-7xl" />

              <p className="text-xl font-semibold">{review.details}</p>
              <h2 className="text-3xl text-[#CD9003]">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
