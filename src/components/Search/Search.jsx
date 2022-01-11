import React, { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import "./Search.scss";

export const Search = () => {
  const inputRef = useRef(null);
  const { getCityData } = useContext(AppContext);

  const handleClick = () => {
    if (inputRef?.current) {
      getCityData(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex weather__search-wrapper">
      <div className="weather__search">
        <div className="weather__search-icon">
          <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        </div>
        <input
          ref={inputRef}
          type="text"
          className="weather__search-input"
          placeholder="Enter city"
        />
      </div>
      <button onClick={handleClick} className="weather__search-button">
        <i
          style={{ fontSize: 15, opacity: 0.5 }}
          className="fa fa-plus"
          aria-hidden="true"
        ></i>
      </button>
    </div>
  );
};
