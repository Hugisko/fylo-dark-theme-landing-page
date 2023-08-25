import quote from "../../assets/bg-quotes.png";
import img1 from "../../assets/profile-1.jpg";
import img2 from "../../assets/profile-2.jpg";
import img3 from "../../assets/profile-3.jpg";
import { Testimony } from "../../components";
import './testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials__section">
      <img src={quote} alt="quote" />
      <Testimony
        info="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        name="Satish Patel"
        job="Founder & CEO, Huddle"
        img={img1}
      />
      <Testimony
        info="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        name="Bruce McKenzie"
        job="Founder & CEO, Huddle"
        img={img2}
      />
      <Testimony
        info="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        name="Iva Boyd"
        job="Founder & CEO, Huddle"
        img={img3}
      />
    </section>
  );
};

export default Testimonials;
