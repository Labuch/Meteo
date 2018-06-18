import axios from 'axios';

const url = 'http://api.openweathermap.org/data/2.5';
const apiKey = '8cb06d969eebcc6158bc1efb030f4150';

const groupByDay = (list, ele) => {
  const day = new Date(ele.dt * 1000);
  (list[day.getDay()] = list[day.getDay()] || []).push(ele);
  return list;
};

const getMinMaxTemp = (acc, forecastTimeSlot, index) => {
  acc.tempMin = acc.tempMin < forecastTimeSlot.main.temp_min ? acc.tempMin : forecastTimeSlot.main.temp_min;
  acc.tempMax = forecastTimeSlot.main.temp_max > acc.tempMax ? forecastTimeSlot.main.temp_max : acc.tempMax;
  if (index == 4) {
    acc.forecastWeather = forecastTimeSlot.weather[0].id;
  }
  return acc;
};

const convertTemperatureInCelsius = (day) => {
  day.tempMax = Math.floor(day.tempMax - 273.15);
  day.tempMin = Math.floor(day.tempMin - 273.15);
  return day;
};

const getinfo = day => ({ day: day.day, ...day.forecastTimeSlots.reduce(getMinMaxTemp, { tempMin: 1000, tempMax: '', forecastWeather: '' }) });


export function getCurrentWeather(cityId) {
  return axios(`${url}/weather?appid=${apiKey}&id=${cityId}`)
    .then(res => ({ currentTemp: Math.floor(res.data.main.temp - 273.15), currentIcon: res.data.weather[0].id, cityName: res.data.name }))
    .catch((err) => {
      console.log('failed', err);
      return err;
    });
}
export function getForecastWeather(cityId) {
  return axios(`${url}/forecast?appid=${apiKey}&id=${cityId}`)
    .then((res) => {
      const forecasts = Object.entries(res.data.list.reduce(groupByDay, {})).map(ele => ({ day: ele[0], forecastTimeSlots: ele[1] }))
        .filter(day => day.forecastTimeSlots.length == 8).slice(0, 3)
        .map(getinfo)
        .map(convertTemperatureInCelsius);
      return ({ forecasts });
    })
    .catch((err) => {
      console.log('failed', err);
      return err;
    });
}
