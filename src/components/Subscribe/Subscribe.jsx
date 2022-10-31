import { images } from "../../utils/demoData";
import "./Subscribe.scss";

export default function Subscribe() {
  return (
    <div>
      <div id="contact" className="subscribe">
        <div className="circle">
          <img src={images.circle} alt="" />
        </div>
        <div className="container">
          <div className="subscribe_bg">
            <div className="flex">
              <div className="img_wrapper">
                <div className="img">
                  <img src={images.subscribe} alt="" />
                </div>
              </div>
              <div className="content">
                <div className="title">Subscribe Now</div>
                <div className="sub_title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet beatae, repudiandae.
                </div>

                <form action="">
                  <input type="email" placeholder="Your email here" />
                  <input type="submit" value="Submit" className="button" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
