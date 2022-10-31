import React from "react";
import { data } from "../../utils/demoData";

import "./Care.scss";

export default function Care() {
  return (
    <div>
      <div id="care" className="care">
        <div className="container">
          <div className="title">Our Medical Care</div>
          <p>Services We Provide</p>

          <div className="space50"></div>
          <div className="grid">
            {data.care.map((item, index) => (
              <div className="card">
                <div className="img_wrapper">
                  <img src={item.img} alt="" />
                </div>
                <div className=" button button_purple">{item.title}</div>
              </div>
            ))}
          </div>
          <div className="space25"></div>
          <button
            className="button
          load"
          >
            LOAD MORE DEPARTMENTS
          </button>
        </div>
      </div>
    </div>
  );
}
