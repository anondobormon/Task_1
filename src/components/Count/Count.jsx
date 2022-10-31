import { data } from "../../utils/demoData";
import "./Count.scss";

export default function Count() {
  return (
    <div>
      <div className="count">
        <div className="container">
          <div className="grid">
            {data.clients.map((item, index) => (
              <div key={index} className="flex">
                <div className="icon_wrapper">{item.icon}</div>
                <div className="client_count">{item.count}</div>

                <div className="title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
