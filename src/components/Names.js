import React from "react";
import "./Names.css";

function Names(props) {
  return (
    <div>
      <li className="list-group-item shadow-sm">
        <div className="row align-items-center">
          <div className="col-2">
            <img
              src={props.avatar}
              alt={props.name}
              className="border rounded-circle shadow-sm"
            />
          </div>
          <div className="col-10">
            <h2>{props.name}</h2>
            <p>
              {props.city} | {props.email}
            </p>
            <small>BirthDay : {props.birthday}</small>
          </div>
        </div>
      </li>
    </div>
  );
}
export default Names;
