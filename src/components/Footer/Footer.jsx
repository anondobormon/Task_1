import { data, images } from "../../utils/demoData";
import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="flex">
            <div className="left">
              <div className="logo">
                <img src={images.logo} alt="" />
                <span>Doctor Guide</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ut cras velit senectus id tellus aliquam enim felis. Sed commodo
                cursus tellus sapien, viverra imperdiet morbi dignissim.
                Consequat in metus arcu eget.
              </p>

              <ul className="icon">
                <li>
                  <i class="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i class="fa-brands fa-linkedin-in"></i>
                </li>
                <li>
                  <i class="fa-brands fa-facebook-f"></i>
                </li>
              </ul>
            </div>

            <div className="middle">
              {data.footer.map((item, index) => (
                <div className={`items ${item.class}`}>
                  <div className="f_title">{item.title}</div>
                  <ul>
                    {item.items.map((i, ind) => (
                      <li>{i.item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="right">
              <div className="f_title">Doctors Schedule</div>
              <p>
                At vero eos et accusam et justou dolores et ea rebum tet clita
                kasd gubergren no sea takimata.
              </p>
              <button className="button">
                <span>
                  <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </span>{" "}
                View Schedule
              </button>
            </div>
          </div>
        </div>
        <div className="copy_write">
          <div className="container">
            <div className="flex">
              <div className="sub_title">
                Copyright © 2022. All Rights Reserved. Made with by Solutya.
              </div>

              <ul>
                <li>Latest News</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <a href="#hero" className="top_button">
          <i class="fa-solid fa-chevron-up"></i>
        </a>
      </div>
    </>
  );
}
