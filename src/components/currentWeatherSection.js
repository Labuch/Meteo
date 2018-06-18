import React from 'react';
import Icon from './icon';

import styled from 'styled-components';

const CurrentWeatherSection=styled.div`
display:flex; 
flex-direction: column;
align-items: center;
justify-content: center;
width:100%; 
`;

const CityLabel =styled.label`
background:#7e57c2;
width:100%
justify-content: center;
`;

export default (props)=>{
    return (
      <CurrentWeatherSection>
        <CityLabel>{props.cityName.toUpperCase()}</CityLabel>
        <h1><Icon id={props.currentIcon}/></h1>
        <div>{props.temp}°</div>
      </CurrentWeatherSection>
  );
}