import { data } from "../../utils/demoData";
import "./Experts.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Experts() {
  return (
    <div>
      <div className="experts">
        <div className="container">
          <div className="title">Our Medical Experts</div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
            hic quae explicabo et consequuntur ratione!
          </p>

          <div className="view_all_btn">View All</div>

          <Swiper
            navigation={true}
            spaceBetween={40}
            pagination={{ clickable: true }}
            // loop={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              720: {
                slidesPerView: 1,
                spaceBetween: 40,
              },

              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },

              1400: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {data.experts.map((item, index) => (
              <SwiperSlide>
                <div className="card">
                  <div className="img_wrapper">
                    <img src={item.img} alt="" />
                  </div>

                  <div className="content">
                    <div className="flex">
                      <div className="name">{item.name}</div>
                      <div className="icon_wrapper">
                        <i class="fa-solid fa-bookmark"></i>
                      </div>
                    </div>
                    <div className="designation">{item.designation}</div>

                    <div className="flex">
                      <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </div>
                      <button className={`button ${item.button}`}>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
