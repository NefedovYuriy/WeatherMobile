import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { GetCityDataAPI } from "../../api";
import "./CityDetail.scss";

export const CityDetail = () => {
  const [cityData, setSityData] = useState();
  const { city } = useParams();
  const renderDetail = useMemo(() => {
    if (cityData) {
      return (
        <div className="city-detail">
          <div className="city-detail__name">{city}</div>
          <div className="city-detail__weather">
            {cityData.weather[0].description}
          </div>
          <div className="city-detail__temperature">
            {Math.trunc(cityData.main.temp - 273)} °C
          </div>
          <div className="city-detail__icon-weather">
            <img
              src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`}
            />
          </div>
          <div className="city-detail__pressure">
            {Math.trunc(cityData.main.pressure * 0.750064)} мм рт.ст.
          </div>
          <div className="city-detail__sunset">
            Закат в{" "}
            {moment(new Date(cityData.sys.sunset * 1000)).format("HH:mm")}
          </div>
        </div>
      );
    }
  }, [cityData]);

  useEffect(async () => {
    if (city) {
      const response = await GetCityDataAPI(city);
      const json = await response.json();
      setSityData(json);
    }
  }, [city]);

  return <>{renderDetail}</>;
};
