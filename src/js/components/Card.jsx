const Card = ({ text, title, button, link }) => {
  return (
    <>
      <div className="container principal">
        <div className="card bg-light mt-5 mb-5">
          <div className="card-body pb-5">
            <h1 className="card-title pt-5">{title}</h1>
            <p className="card-text fs-3 pt-3 pb-3">{text}</p>
            <a href={link} target="_blank" className="btn btn-primary ">
              <span>{button}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
