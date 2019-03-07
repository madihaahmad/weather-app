import React, { Component } from "react";
import Modal from "react-responsive-modal";
import logo from "./logo.svg";
import "./App.css";
import CityCards from "./components/cityCards";
import Header from "./components/header";

class App extends Component {
  state = {
    cities: ["london", "berlin"],
    openModal: false
  };

  getCity = city => {
    console.log("get city ", city);
    if (!this.state.cities.includes(city.trim()))
      this.setState({
        cities: this.state.cities.concat(city.trim())
      });
  };

  deleteCity = city => {
    this.setState({
      cities: this.state.cities.filter(c => c !== city)
    });
  };
  notFound = city => {
    console.log("city not found", city);
    this.setState({
      cities: this.state.cities.filter(c => c !== city),
      openModal: true
    });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    return (
      <div className="App">
        <Modal open={this.state.openModal} onClose={this.onCloseModal} center>
          <h4>City not Found</h4>
        </Modal>

        <Header getCity={this.getCity} />
        <CityCards
          cities={this.state.cities}
          deleteCity={this.deleteCity}
          notFound={this.notFound}
        />
      </div>
    );
  }
}

export default App;
