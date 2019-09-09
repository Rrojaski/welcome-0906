import React, { Fragment, Component } from "react";

import styles from "./Weather.module.scss";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";

// API key
const key = require("../../config/keys.json");
class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "http://www.cityrider.com/fixed/43aspect.png",
      temp: "loading...",
      desc: "loading...",
      loc: "loading...",
      geo: {
        lat: "temp",
        lon: "temp"
      }
    };
    this.showPosition = this.showPosition.bind(this);
    this.weatherFetch = this.weatherFetch.bind(this);
  }

  // Updates state after user allows use of location
  showPosition(position) {
    this.setState(
      {
        geo: {
          lat: Math.floor(position.coords.latitude).toString(),
          lon: Math.floor(position.coords.longitude).toString()
        }
      },
      this.weatherFetch
    );
  }
  weatherFetch() {
    console.log("fetching api..");
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        this.state.geo.lat +
        "&lon=" +
        this.state.geo.lon +
        "&appid=" +
        key["open-weather"] +
        "&units=imperial"
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        const newIcon = json["weather"][0]["icon"];
        console.log(newIcon);
        const fahrenheit = Math.floor(json["main"]["temp"])
          .toString()
          .concat("°");
        console.log(fahrenheit);

        this.setState({
          desc: json["weather"][0]["description"],
          temp: fahrenheit,
          icon: newIcon
        });
        console.log(this.state);
      });
    // convert cord to loc name
    console.log("Fetching loc name");
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        this.state.geo.lat +
        "," +
        this.state.geo.lon +
        "&key=" +
        key["google"]
    )
      .then(res => res.json())
      .then(json => {
        const arr = json["plus_code"]["compound_code"].split(" ");
        // Remove code infront
        arr.shift();
        // Remove USA
        arr.pop();

        // Get state from arr
        // remove extra ','
        const state = arr[1].match(/\w/gi).join("");

        // Get city from arr
        const city = arr[0];
        this.setState({
          loc: city.concat(" " + state)
        });
      });
  }

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert("Gelocation is not supported by this browser.");
    }
  }
  componentDidMount() {
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
          <img
            className={`${styles.weather__icon}`}
            src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
            alt="weather icon"
          />
          {/*

          Commented out to use open weather icon instead

          <i
            className={`${
              styles.weather__icon
            } ${"feature-box__icon icon-basic-cloud"}`}
          ></i>
        */}
          <Paragraph size="md">{this.state.desc}</Paragraph>
          <Paragraph>{this.state.loc}</Paragraph>
          <Paragraph>{this.state.temp}</Paragraph>
        </div>
      </Fragment>
    );
  }
}

export default Weather;
