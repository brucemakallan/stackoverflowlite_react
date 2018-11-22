import React from "react";
import "../index.css";

const Service = props => {
  return (
    <div className="row text-center">
      <div className="col col-12 p-3 icon">
        <i className={props.service.icon} />
      </div>
      <div className="col col-12">{props.service.heading}</div>
      <div className="col col-12 p-1 grey">
        <small>{props.service.description}</small>
      </div>
    </div>
  );
};

export default Service;
