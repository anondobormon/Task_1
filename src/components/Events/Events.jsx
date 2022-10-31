import { data } from "../../utils/demoData";
import "./Events.scss";

export default function Events() {
  return (
    <div>
      <div id="event" className="events">
        <div className="container">
          <div className="title">Upcoming Events</div>
          <div className="sub_title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum augue quis augue ornare, eget faucibus felis pharetra.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>

          <div className="event_items">
            {data.events.map((item, index) => (
              <div className={`card ${item.class}`}>
                <div className="img_wrapper">
                  <img src={item.img} alt="" />

                  <div className="date">{item.date}</div>
                </div>
                <div className="content">
                  <div className="sub_title">{item.title}</div>

                  <div className="details">
                    {item.info.map((i, ind) => (
                      <div className="wrapper">
                        <div className="icon_wrapper">{i.icon}</div>
                        <div className="time">{i.title}</div>
                      </div>
                    ))}
                  </div>
                  <p className="description">{item.description}</p>

                  <div className="btn_area">
                    <button className="button">Book Now</button>
                    <button className="button button_outline">
                      10 Available
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
