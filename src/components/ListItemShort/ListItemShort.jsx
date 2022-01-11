import moment from "moment";
import React from "react";

import "./ListItemShort.scss";

export const ListItemShort = ({ data }) => {
  const {
    name,
    main: { temp },
    dt,
  } = data;
  return (
    <div className="weather__content-city">
      <div className="weather__content-city-info">
        <div className="weather__content-city-time">
          {moment(new Date(dt * 1000)).format("HH:mm")}
        </div>
        <div className="weather__content-city-name">{name}</div>
      </div>
      <div className="weater__content-city-temperature">
        {Math.trunc(temp - 273)} °C
      </div>
    </div>
  );
};
