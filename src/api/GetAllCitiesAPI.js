export const GetAllCitiesAPI = async () => {
  return await fetch(
    "http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=5&appid=be7fe4a4d0a80959e769aaaf8437512a"
  );
};
