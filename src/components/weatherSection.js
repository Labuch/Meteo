import React from 'react';
import CurrentWeatherSection from './currentWeatherSection';
import ForecastSection from './forecastSection';
import ForecastContainer from './forecastContainer';

export const WeatherSection = props => (
  <div>
    {props.weatherData && <CurrentWeatherSection cityName={props.weatherData.cityName} temp={props.weatherData.currentTemp} currentIcon={props.weatherData.currentIcon} />}
    {props.weatherData && <ForecastContainer>{props.weatherData.forecasts.map(ele => <ForecastSection forecast={ele} key={ele.day} />)} </ForecastContainer>}
  </div>);
