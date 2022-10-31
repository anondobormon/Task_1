import {
  Care,
  Count,
  Events,
  Experts,
  Footer,
  Hero,
  Navbar,
  Schedule,
  Steps,
  Subscribe,
  Testimonial,
} from "../components";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <Schedule />
      <Care />
      <Count />
      <Experts />
      <Testimonial />
      <Events />
      <Subscribe />
      <Footer />
    </>
  );
}
