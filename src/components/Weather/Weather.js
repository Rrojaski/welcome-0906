import React, { Fragment, Component } from "react";

import styles from "./Weather.module.scss";
import Header from '../../components/Header/Header';
import Paragraph from '../../components/Paragraph/Paragraph';

// API key
const key = require('../../config/keys.json');

class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temp: '45°',
      loc: 'New York, NY',
      desc: 'Clear Sky',
    }
  }

  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=ny,usa&appid=940f18fd1a5021231465a362fa476369')
      .then(res => res.json())
      .then(json => {
        const kelvin = json['main']['temp'];
        console.log(kelvin);
        const fahrenheit = Math.floor(((kelvin - 273.15) * (9 / 5) + 32)).toString().concat('°');

        this.setState({
          desc: json['weather'][0]['description'],
          temp: fahrenheit
        })
      });
    /*
    try {
      const weatherKey = key['open-weather'];
      const request = 'api.openweathermap.org/data/2.5/weather?q=ny,usa&appid='.concat(weatherKey);
      const results = await fetch('https://api.openweathermap.org/data/2.5/weather?q=ny,usa&appid=940f18fd1a5021231465a362fa476369');
      console.log(results);
      const json = await results.text();
      console.log(json);
    } catch (err) {
      console.log(err);
    }
    */
  }
  render(props) {
    return (
      <Fragment>
        <div className={`${styles.Weather}`}>
          <i className={`${styles.weather__icon} ${'feature-box__icon icon-basic-cloud'}`}></i>
          <Paragraph size='md'>{this.state.desc}</Paragraph>
          <Paragraph>{this.state.loc}</Paragraph>
          <Paragraph>{this.state.temp}</Paragraph>
        </div>
      </Fragment>
    );
  }
};

export default Weather;
