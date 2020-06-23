import React, { Component } from 'react';
import './App.css';

import './sass/app.scss';

import TopSection from './components/top/index';
import BottomSection from './components/bottom';

import axios from 'axios';

const WEATHER_KEY = "414afdbe26de0a2be66956e0acb0b07d";


class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      cityName: "New York",
      forcastDays: 7,
      isLoading: true,
    };
  };

  componentDidMount() {
    const { name, forcastDays } = this.state;

    const URL = `http://api.weatherstack.com/forecast.json?key=${WEATHER_KEY} &q=${name} &days=${forcastDays}`;
    axios
    .get(URL)
    .then(res => {
      return res.data;
    })
    .then((data) => {
      this.setState({
        isLoading: false,
        temperature: data.current.temperature, 
        observation_time: data.current.observation_time, 
        weather_descriptions: data.current.weather_descriptions, 
        weather_icons:data.current.weather_icons
      });
    })
    .catch(err => {

    });
  };

  render () {

    const { isLoading, name, observation_time, temperature, weather_icons, weather_descriptions } = this.state;

    return (
    <div className="app-container">
      <div className="main-container">
        {isLoading && <h3>Loading Weather...</h3>}
        {!isLoading &&
        <div className="top-section">
          <TopSection 
            location={name} 
            observation_time = {observation_time}
            temperature={temperature} 
            weather_icons = {weather_icons}
            weather_descriptions={weather_descriptions} 
          />
        </div>}
        <div className="bottom-section">
          <BottomSection />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
