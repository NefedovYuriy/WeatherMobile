import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GetAllCitiesAPI, GetCityDataAPI } from "./api";

import "./App.scss";
import { Header, Navbar } from "./components";
import { Menu, Home, CityDetail } from "./containers";
import { AppContext } from "./context/AppContext";

const App = () => {
  const [cities, setCities] = useState([]);

  const createData = (cities) => {
    return {
      cities: cities,
      getCityData: getCityData,
      deleteCity: deleteCity,
    };
  };

  const deleteCity = (cityId) => {
    setCities(cities.filter(({ id }) => id !== cityId));
  };

  const getCityData = async (name) => {
    const response = await GetCityDataAPI(name);
    const json = await response.json();
    if (json.cod >= 400) {
      alert("Server error. Please check your city or try later.");
      return;
    }
    const existNewCity = !!cities.find(({ id }) => id === json.id);
    if (existNewCity) {
      return;
    }
    setCities((cities) => [...cities, json]);
  };

  useEffect(async () => {
    const response = await GetAllCitiesAPI();
    const json = await response.json();
    if (json.cod >= 400) {
      alert("Server error.");
      return;
    }
    setCities(json.list);
  }, []);

  return (
    <AppContext.Provider value={createData(cities)}>
      <Router>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/detail/:city" element={<CityDetail />} />
            </Routes>
          </div>
          <Navbar />
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
