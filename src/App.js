import React from "react";

import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import "./App.css";

const API_KEY = "8257fbd0bbf494d7b90d2463bb3420f7";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    error: undefined,
    wind_speed: undefined,
    precip: undefined,
    time: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city) {
      const api_url = await
          fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`);
      const data = await api_url.json();

      this.setState({
        temperature: data.current.temperature,
        city: data.location.name,
        country: data.location.country,
        sunrise: data.current.pressure,
        time: data.current.observation_time,
        wind_speed: data.current.wind_speed,
        precip: data.current.precip,
        error: undefined
      });
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        time: undefined,
        wind_speed: undefined,
        precip: undefined,
        error: "Введите название города"
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
          <div className="card mt-3 md-3">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h6 className="card-title">
                    <Info />
                  </h6>
                </div>
                <div className="col-sm-7 form">
                  <Form weatherMethod={this.gettingWeather}/>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
          <div className="col">
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              sunrise={this.state.sunrise}
              time={this.state.time}
              wind_speed={this.state.wind_speed}
              precip={this.state.precip}
              error={this.state.error}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
