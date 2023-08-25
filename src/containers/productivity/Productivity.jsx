import "./productivity.css";
import productImg from "../../assets/illustration-stay-productive.png";
import arrowImg from "../../assets/icon-arrow.svg";

const Productivity = () => {
  return (
    <section className="productivity__section">
      <div className="productivity__img">
        <img src={productImg} alt="productivity image" />
      </div>
      <div className="productivity__content">
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues for
          live collaboration. No email attachments required.
        </p>
        <a href="#" className="highlight">
          See how Fylo works
          <span>
            <img src={arrowImg} alt="arrow image" />
          </span>
        </a>
      </div>  
    </section>
  );
};

export default Productivity;
