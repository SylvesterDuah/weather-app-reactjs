import React, { Component } from 'react';

import SunImg from '../../rescources/images/sun.png';

class Weather extends Component {
    constructor(props) {
        super(props);
    };

    render () {
        const {name, observation_time, temperature, weather_icons, weather_descriptions } = this.props;


        return (
            <div className="weather-container">
                <div className="header">{name}</div>
                <div className="inner-container">
                    <div className="image">
                        <img src={weather_icons} />
                    </div>
                    <div className="current-weather">{temperature}°</div>
                </div>
                <div className="footer">{weather_descriptions}</div>
            </div>
        );
    };
};

export default Weather;