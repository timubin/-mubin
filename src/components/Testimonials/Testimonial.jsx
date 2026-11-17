import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Tariqul architected our multi-outlet Restaurant POS & Ordering Suite with Laravel, React, and Electron. Offline KOT printing and real-time cloud sync transformed our daily operations across 7+ restaurants.",
    },
    {
      img: profilePic2,
      review:
        "Delivered a complete College & Madrasa ERP system covering online student admissions, automated tuition fee receipts, result processing, and role-based dashboards ahead of schedule.",
    },
    {
      img: profilePic3,
      review:
        "Outstanding WordPress & WooCommerce specialist. Built and optimized our US e-commerce storefront with custom payment integration, fast page speeds, and clean responsive design.",
    },
    {
      img: profilePic4,
      review:
        "Reliable full-stack engineer with deep expertise in PHP Laravel, MySQL query optimization, and Linux server administration via CyberPanel, WHM, and Cloudflare.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
