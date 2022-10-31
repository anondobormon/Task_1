import React from "react";
import { data, images } from "../../utils/demoData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Schedule.scss";

export default function Schedule() {
  return (
    <div>
      <div id="schedule" className="schedule">
        <div className="container">
          <div className="flex schedule_flex">
            <div className="left">
              <div className="title schedule_title">
                Doctor's Schedule Today
              </div>
              <Swiper
                direction={"vertical"}
                slidesPerView={5}
                navigation={true}
                spaceBetween={0}
                // loop={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {data.schedule.map((item, index) => (
                  <SwiperSlide>
                    <div className="schedule_card">
                      <div className="flex">
                        <h2 className="time">{item.time}</h2>

                        <div className="content">
                          <div className="title">{item.title}</div>
                          <div className="name">{item.name}</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="right">
              <div className="dr_card card_right">
                <div className="icon_wrapper deep_yellow">
                  <i class="fa-solid fa-user-doctor"></i>
                </div>
                <div className="content">
                  <div className="title">Consult Online</div>
                  <div className="des">Best Solution</div>
                </div>
              </div>

              <div className="img_wrapper">
                <img src={images.schedule_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
