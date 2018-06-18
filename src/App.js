import React, { Component } from 'react';
import {Header,Select,WeatherSection, Footer} from './components'
import './index.css';
import * as MeteoAPI from './helpers/meteoAPI';
import styled from 'styled-components';

const SApp=styled.div`
display:flex; 
flex-direction: column;
background: #9575cd;
border-radius: 3px;
padding: 10px;
color: white; 
width: 300px;
font: arial; 
`;




class App extends Component {

    state = {loading:'', cityId:'3038789'};

    onCitySelect(cityId){
            const promises = [MeteoAPI.getCurrentWeather(cityId),MeteoAPI.getForecastWeather(cityId)]
                Promise.all(promises).then((res)=>{
                this.setState({cityId:cityId,weatherData:{...res[0],...res[1]}});
            });
    }

    render() {

    return (
      <SApp>
          <Header cityId={this.state.cityId}/>
          <Select  onChange={event=> {this.onCitySelect(event.target.value)}} value={this.state.cityId} placeholder="choose one city" />
          <WeatherSection weatherData = {this.state.weatherData} />
      </SApp>
    );
  }
}

export default App;
