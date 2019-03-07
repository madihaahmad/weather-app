import React, { Component } from "react";

class Card extends Component {
  state = {
    key: "443345588feeb1042d5b388cba938607",
    weather: {}
  };
  componentDidMount = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        this.props.city
      }&appid=${this.state.key}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.cod === "404") {
          console.log("calling not found");
          this.props.notFound(this.props.city);
        } else if (data.cod === 200)
          this.setState({
            weather: {
              city: data.name,
              temperature: (data.main.temp - 273.15).toFixed(2),
              temp_min: (data.main.temp_min - 273.15).toFixed(2),
              temp_max: (data.main.temp_max - 273.15).toFixed(2),
              description: data.weather[0].description,
              main: data.weather[0].main
            }
          });
      })
      .catch(err => {
        console.log(err.toString());
      });
  };
  getPic = () => {
    switch (this.state.weather.main) {
      case "Clear":
        return "/icons/iconfinder_Sunny_47314.png";
      case "Smoke":
        return "/icons/iconfinder_Fog_47303.png";
      case "Hase":
        return "/icons/iconfinder_Fog_47303.png";

      case "Rain":
        return "/icons/iconfinder_Night_Rain_47308.png";

      case "Snow":
        return "/icons/iconfinder_Snow_Occasional_47313.png";

      case "Overcast":
        return "/icons/iconfinder_Overcast_47309.png";
      case "Clouds":
        return "/icons/iconfinder_Overcast_47309.png";
      default:
        return "/icons/iconfinder_Rainbow_47311.png";
    }
  };

  render() {
    const {
      city,
      temperature,
      temp_min,
      temp_max,
      description
    } = this.state.weather;
    return (
      <div className="col-md-4">
        <div className="card mt-3">
          <div className="card-body">
            <span
              className="badge badge-danger float-right"
              onClick={() => {
                this.props.deleteCity(this.props.city);
              }}
            >
              X
            </span>
            <h3 className="card-title text-center">{city}</h3>
            <div className="card-body">
              <p>
                <small>{description}</small>
              </p>
              <img
                className="mw-100 float-left"
                src={this.getPic()}
                height="10%"
                alt="weather"
              />
            </div>
            <div className="d-inline-flex justify-content-around">
              <div className="mr-3">
                <i
                  className="fa fa-thermometer-three-quarters"
                  style={{ fontSize: "40px", color: "green" }}
                />
                <p> {temperature}C</p>
              </div>

              <div className="mr-3">
                <i
                  className="fa fa-temperature-low"
                  style={{ fontSize: "40px", color: "lightblue" }}
                />
                <p> {temp_min}C</p>
              </div>
              <div className="mr-3">
                <i
                  className="fa fa-temperature-high"
                  style={{ fontSize: "40px", color: "red" }}
                />
                <p>{temp_max}C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
