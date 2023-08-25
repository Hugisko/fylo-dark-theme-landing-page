import "./testimony.css";

const Testimony = ({ name, job, info, img }) => {
  return (
    <article className="testimony">
      <p>{info}</p>
      <div className="author">
        <div className="author-img">
          <img src={img} alt={name} />
        </div>
        <div className="author-desc">
          <p>{name}</p>
          <span>{job}</span>
        </div>
      </div>
    </article>
  );
};

export default Testimony;
