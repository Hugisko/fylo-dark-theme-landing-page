import "./feature.css";

const Feature = ({ title, info, img }) => {
  return (
    <article className="feature">
      <div className="feature__img">
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{info}</p>
    </article>
  );
};

export default Feature;
