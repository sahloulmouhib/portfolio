import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

type Props = {};

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Mouhib",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sapiente voluptatum maxime a atque quae quia optio eos modi nobis ducimus in unde natus cupiditate fugit ratione quod assumenda sitLorem ipsum dolor sit amet consectetur adipisicing elit. Quos sapiente voluptatum maxime a atque quae quia optio eos modi nobis ducimus in unde natus cupiditate fugit ratione quod assumenda sit",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Mouhib",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sapiente voluptatum maxime a atque quae quia optio eos modi nobis ducimus in unde natus cupiditate fugit ratione quod assumenda sitLorem ipsum dolor sit amet consectetur adipisicing elit. Quos sapiente voluptatum maxime a atque quae quia optio eos modi nobis ducimus in unde natus cupiditate fugit ratione quod assumenda sit",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Mouhib",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sapiente voluptatum maxime a atque quae quia optio eos modi nobis ducimus in unde natus cupiditate fugit ratione quod assumenda sitLorem ipsum dolor sit amet consectetur adipisicing elit. Quos sapiente voluptatum maxime a atque quae quia optio eos modi nobis ducimus in unde natus cupiditate fugit ratione quod assumenda sit",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Mouhib",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sapiente voluptatum maxime a atque quae quia optio eos modi nobis ducimus in unde natus cupiditate fugit ratione quod assumenda sitLorem ipsum dolor sit amet consectetur adipisicing elit. Quos sapiente voluptatum maxime a atque quae quia optio eos modi nobis ducimus in unde natus cupiditate fugit ratione quod assumenda sit",
  },
];
const Testemonial = (props: Props) => {
  return (
    <section className="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id} className="testimonial">
              <div className="client__avatar">
                <img src={item.avatar} alt="" />
              </div>
              <h5>{item.name}</h5>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testemonial;
