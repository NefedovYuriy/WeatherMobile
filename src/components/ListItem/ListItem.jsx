import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

import "./ListItem.scss";

export const ListItem = ({ data }) => {
  const {
    name,
    id,
    main: { temp },
  } = data;

  const { deleteCity } = useContext(AppContext);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteCity(id);
  };

  return (
    <Link to={`/detail/${name}`}>
      <div className="card">
        <div className="card__title">{name}</div>
        <i
          className="fa fa-times card__delete"
          aria-hidden="true"
          onClick={(e) => handleDelete(e)}
        />
        <div className="card__temperature">{Math.trunc(temp - 273)} °C</div>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
      </div>
    </Link>
  );
};
