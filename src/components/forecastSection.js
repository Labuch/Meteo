import React from 'react';
import Icon from './icon';
import dayOfWeek from '../constantes/day-of-week.json';
import styled from 'styled-components';

const DayLabel =styled.label`
background:#7e57c2;
width:100%
`;

const Forecast =styled.div`
 display: flex;
 flex-direction: column;
`;


export default  (props)=>{
    console.log(dayOfWeek[3]);
   return (
       <Forecast >
            <DayLabel >{dayOfWeek[props.forecast.day]}</DayLabel>
            <div>{props.forecast.tempMin}°</div>
            <div>{props.forecast.tempMax}°</div>
            <h2><Icon id={props.forecast.forecastWeather}/></h2>
        </Forecast>
   )
};