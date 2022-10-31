import { images } from "../../utils/demoData";
import "./Hero.scss";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <img className="circlehalf" src={images.circlehalf} alt="" />
      <div className="container">
        <img className="dotgray" src={images.dotgray} alt="" />

        <div className="flex">
          <div className="left">
            <h2 className="hero_title">
              Find The Care <br /> You Need
            </h2>
            <div className="space25"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              cum aliquam eum. Harum magnam, esse, et deleniti sit molestiae.
            </p>
            <div className="space25"></div>

            <button className="button">Make Appointment</button>
          </div>
          <div className="right">
            <div className="flex">
              <div className="img_wrapper">
                <img src={images.hero1} alt="" />
              </div>
              <div className="img_wrapper">
                <img src={images.hero2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
