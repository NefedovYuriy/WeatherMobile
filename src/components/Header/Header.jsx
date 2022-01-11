import React from "react";

import "./Header.scss";

export const Header = () => {
  return (
    <div className="weather__header">
      <img
        className="weather__header-icon"
        src={`http://openweathermap.org/img/wn/11d@2x.png`}
        alt="weather icon"
      />
      <h3 className="weather__header-title">Weather</h3>
    </div>
  );
};
