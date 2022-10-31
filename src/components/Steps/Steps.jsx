import { data, images } from "../../utils/demoData";
import "./Steps.scss";

export default function Steps() {
  return (
    <>
      <div id="steps" className="steps">
        <div className="container">
          <div className="flex">
            <div className="left">
              <img src={images.step_img} alt="" />
              <div className="dr_card card_left">
                <div className="icon_wrapper purple">
                  <i class="fa-solid fa-user-doctor"></i>
                </div>
                <div className="content">
                  <div className="title">Consult Online</div>
                  <div className="des">Best Solution</div>
                </div>
              </div>
              <div className="dr_card card_right">
                <div className="icon_wrapper sky_blue">
                  <i class="fa-solid fa-user-doctor"></i>
                </div>
                <div className="content">
                  <div className="title">Consult Online</div>
                  <div className="des">Best Solution</div>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="title">
                Sick Kid? How to Deal with a Child's Fever: 4Steps
              </div>

              <div className="space50"></div>
              {data.steps.map((item, index) => (
                <div key={index} className="flex">
                  <div className="icon_wrapper">
                    <i class="fa-solid fa-briefcase-medical"></i>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
