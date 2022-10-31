// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { data } from "../../utils/demoData";
import "./Testimonial.scss";

export default function Testimonial() {
  return (
    <div>
      <div className="testimonial">
        <div className="container">
          <div className="slider">
            <div className="title">Patient Feedback</div>

            <Swiper
              slidesPerView={1}
              navigation={true}
              spaceBetween={40}
              loop={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {data.testimonial.map((item, index) => (
                <SwiperSlide>
                  <div className="card">
                    <div className="img_wrapper">
                      <img src={item.img} alt="" />
                    </div>

                    <div className="content">
                      <p className="description">{item.description}</p>

                      <div className="name">{item.name}</div>

                      <div className="designation">{item.designation}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
