import mockup from "../../assets/illustration-intro.png";
import "./hero.css";
import { CTA } from "../../components";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="hero__img">
        <img src={mockup} alt="mockup" />
      </div>
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <CTA title="Get Started" />
    </section>
  );
};

export default Hero;
