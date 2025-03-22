import React from "react";

const MiniCard = ({ img, title, text, link, alt }) => {
  return (
    <>
      <div className="card text-center mb-5 " style={{ height: "600px" }}>
        <img
          src={img}
          className="card-img-top"
          style={{ height: "200px" }}
          alt={alt}
        />
        <div className="card-body">
          <h5 className="card-title ">{title}</h5>
          <p className="card-text ">{text}</p>
        </div>
        <div className="card-footer">
          <a href={link} target="_blank" className="btn btn-primary">
            Mas detalles
          </a>
        </div>
      </div>
    </>
  );
};

export default MiniCard;
