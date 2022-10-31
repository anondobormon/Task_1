import avatar from "../assets/avatar.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import care1 from "../assets/care1.png";
import care2 from "../assets/care2.png";
import care3 from "../assets/care3.png";
import care4 from "../assets/care4.png";
import care5 from "../assets/care5.png";
import care6 from "../assets/care6.png";
import circle from "../assets/circle.png";
import circlehalf from "../assets/circlehalf.png";
import dotgray from "../assets/dotgray.png";
import dotlight from "../assets/dotlight.png";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import experts1 from "../assets/experts1.png";
import experts2 from "../assets/experts2.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import logo from "../assets/logo.png";
import logotext from "../assets/logotext.png";
import schedule_img from "../assets/schedule_img.png";
import step_img from "../assets/step_img.png";
import subscribe from "../assets/subscribe.png";

export const images = {
  logo: logo,
  avatar: avatar,
  circle: circle,
  circlehalf: circlehalf,
  event1: event1,
  event2: event2,
  experts1: experts1,
  experts2: experts2,
  hero1: hero1,
  hero2: hero2,
  logotext: logotext,
  bg2: bg2,
  schedule_img: schedule_img,
  bg3: bg3,
  dotlight: dotlight,
  dotgray: dotgray,
  step_img: step_img,
  subscribe: subscribe,
};

export const data = {
  steps: [
    {
      text: "Cras sit sed nec a nunc",
    },
    {
      text: "Tempor mauris mauris in",
    },
    {
      text: "Nibh turpis praesent pretium",
    },
    {
      text: "Cras sit sed nec a nunc",
    },
  ],
  schedule: [
    {
      time: "08:00",
      title: "General Practitioner",
      name: "Dr. Robbert Algazali",
    },
    {
      time: "06:00",
      title: "General Practitioner",
      name: "Dr. Robbert Algazali",
    },
    {
      time: "09:00",
      title: "General Practitioner",
      name: "Dr. Robbert Algazali",
    },
    {
      time: "10:00",
      title: "Pediatric",
      name: "Dr. Robbert Algazali",
    },
    {
      time: "07:00",
      title: "General Practitioner",
      name: "Dr. Robbert Algazali",
    },
    {
      time: "08:00",
      title: "General Practitioner",
      name: "Dr. Robbert Algazali",
    },
    {
      time: "06:00",
      title: "General Practitioner",
      name: "Dr. Robbert Algazali",
    },
    {
      time: "09:00",
      title: "General Practitioner",
      name: "Dr. Robbert Algazali",
    },
    {
      time: "10:00",
      title: "Pediatric",
      name: "Dr. Robbert Algazali",
    },
    {
      time: "07:00",
      title: "General Practitioner",
      name: "Dr. Robbert Algazali",
    },
  ],
  care: [
    {
      title: "Orthopedic Clinic",
      img: care1,
    },
    {
      title: "Cardiac Surgery",
      img: care3,
    },
    {
      title: "Cancer Screening",
      img: care5,
    },
    {
      title: "Neurology",
      img: care1,
    },
    {
      title: "Pediatric & Adult Audiology",
      img: care2,
    },
    {
      title: "Neurology",
      img: care4,
    },
    {
      title: "Hearing Tests & Aids",
      img: care6,
    },
    {
      title: "Orthopedic Clinic",
      img: care1,
    },
  ],
  clients: [
    {
      icon: <i class="fa-solid fa-user-doctor"></i>,
      count: 150,
      title: "Medical Experts",
    },
    {
      icon: <i class="fa-solid fa-bed"></i>,
      count: 500,
      title: "Hospital Rooms",
    },
    {
      icon: <i class="fa-solid fa-trophy"></i>,
      count: 20,
      title: "Awwwards Win",
    },
    {
      icon: <i class="fa-solid fa-face-smile"></i>,
      count: 5000,
      title: "Happy Patients",
    },
  ],
  experts: [
    {
      name: "Dr. Emrul Kayes",
      designation: "MBBS, FCFS, BCS, BSCBS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.",
      img: experts1,
      icon: "save icon",
      button: "button_sky_blue",
    },
    {
      name: "Dr. Emrul Kayes",
      designation: "MBBS, FCFS, BCS, BSCBS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.",
      img: experts2,
      icon: "save icon",
      button: "",
    },
    {
      name: "Dr. Emrul Kayes",
      designation: "MBBS, FCFS, BCS, BSCBS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.",
      img: experts1,
      icon: "save icon",
      button: "",
    },
    {
      name: "Dr. Emrul Kayes",
      designation: "MBBS, FCFS, BCS, BSCBS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.",
      img: experts1,
      icon: "save icon",
      button: "",
    },
  ],
  testimonial: [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "TOM COOPPER ",
      designation: " Managing Director Or Art",
      img: avatar,
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "TOM COOPPER ",
      designation: " Managing Director Or Art",
      img: avatar,
    },
  ],
  events: [
    {
      img: event2,
      date: (
        <div>
          12 <span>DEC, 2022</span>
        </div>
      ),
      title: "How to lead a good healthy life",
      info: [
        {
          icon: <i class="fa-solid fa-calendar-days"></i>,
          title: "15 Oct, 2019",
        },
        {
          icon: <i class="fa-solid fa-clock"></i>,
          title: "8:00 AM - 5:00 PM",
        },
        {
          icon: <i class="fa-sharp fa-solid fa-location-dot"></i>,
          title: "Uttara, TX 70240",
        },
      ],
      description:
        "Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.",
      class: "",
    },
    {
      img: event1,
      date: (
        <div>
          12 <span>DEC, 2022</span>
        </div>
      ),
      title: "How to lead a good healthy life",
      info: [
        {
          icon: <i class="fa-solid fa-calendar-days"></i>,
          title: "15 Oct, 2019",
        },
        {
          icon: <i class="fa-solid fa-clock"></i>,
          title: "8:00 AM - 5:00 PM",
        },
        {
          icon: <i class="fa-sharp fa-solid fa-location-dot"></i>,
          title: "Uttara, TX 70240",
        },
      ],
      description:
        "Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.",
      class: "flex_reverse",
    },
  ],

  footer: [
    {
      title: "Our Services",
      items: [
        {
          item: "Bills & Insurance",
        },
        {
          item: "Cancer Screening",
        },

        {
          item: "Cardiac Surgery",
        },

        {
          item: "Neurology",
        },

        {
          item: "Covid-19 Vaccine",
        },
      ],
      class: "",
    },
    {
      class: "address",
      title: "Contact Us",
      items: [
        {
          item: (
            <div className="flex">
              {" "}
              <span>
                <i class="fa-sharp fa-solid fa-location-dot"></i>
              </span>
              1234 Uttara Khal Pahr, Image Osman Center, Sonargao, Janapath,{" "}
            </div>
          ),
        },
        {
          item: (
            <div className="flex">
              {" "}
              <span>
                <i class="fa-solid fa-phone"></i>
              </span>
              +09876543211{" "}
            </div>
          ),
        },
        {
          item: (
            <div className="flex">
              {" "}
              <span>
                <i class="fa-solid fa-envelope"></i>
              </span>
              doctorguide@example.com{" "}
            </div>
          ),
        },
      ],
    },
  ],
};
