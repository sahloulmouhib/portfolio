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
    name: "Farrissa",
    review:
      "Very prompt and easy to work with. Quality of work is great. Understood the requirement well, got started on time, was in regular touch, took feedback well and delivered the output on time and as committed. I would highly recommend Mouhib and his team and I am looking forward to working with him on other porjects.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Mike",
    review:
      "Working with Mouhib and his team has been an absolute pleasure. Mouhib is very easy and cooperative to work with, and has helped develop a highly complex project. Mouhib is very patient, but most importantly communicative, as he holds meetings and ensures I am always happy with the end product. As someone with little knowledge in app development, I feel comfortable and well respected when working with Mouhib and his team.",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Sidney",
    review:
      "It was an incredible experience working with this Seller. They were very attentive and fast with communication. Seeing the app come to life has been amazing. I'm very happy with how everything looks and works. I am looking forward to a long term relationship with Mouhib as my app continues to grow.",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Sidney",
    review:
      "One of the best developers encounters I've had was with Mouhib. In just a few days, he turned my application available on both the Google Play Store and the Apple App Store. He has a control panel set up that makes modifications simple. I'm blown away by not only his service, but also his communication abilities. Throughout the project, he held my hand and answered all of my questions. I'm very happy with the result and can highly recommended Mouhib",
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
