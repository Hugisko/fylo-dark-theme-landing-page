import "./cta.css";

const CTA = ({ title, type = "button" }) => {
  return <button type={type} className="cta-btn">{title}</button>;
};

export default CTA;
