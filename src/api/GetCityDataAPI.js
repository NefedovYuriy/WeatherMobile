export const GetCityDataAPI = async (city) => {
  return await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be7fe4a4d0a80959e769aaaf8437512a`
  );
};
