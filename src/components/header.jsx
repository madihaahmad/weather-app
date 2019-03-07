import React, { Component } from "react";
class header extends Component {
  state = { city: "" };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitData = event => {
    event.preventDefault();

    this.props.getCity(this.state.city);
    this.setState({ city: "" });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <span className="navbar-brand">Weather</span>
          <form
            className="form-inline"
            onSubmit={event => {
              this.submitData(event);
            }}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search City"
              aria-label="Search"
              name="city"
              required
              value={this.state.city}
              onChange={event => {
                this.onChange(event);
              }}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default header;
