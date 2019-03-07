import React, { Component } from "react";
import Card from "./card";
import "../App.css";

class CityCards extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.cities.map(card => {
            return (
              <Card
                city={card}
                deleteCity={this.props.deleteCity}
                notFound={this.props.notFound}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CityCards;
