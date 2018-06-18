import React, { Component } from "react";

import Input from "./input";
import Content from "./content";

const INITIAL_STATE = {
  country: "",
  countryTwo: "",
  countryThree: "",
  countryFour: "",
  countryFive: "",
  countrySix: "",
  countrySeven: "",
  countryEight: "",
  player: "",
  playerTwo: "",
  playerThree: "",
  champion: "",
  contentVisible: false
};

class Card extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    if (this.state.contentVisible) {
      this.setState(INITIAL_STATE);
    } else {
      this.setState({ contentVisible: true });
    }
  }

  render() {
    const inputData = [
      { title: "Country", state: this.state.country, name: "country" },
      { title: "Country", state: this.state.countryTwo, name: "countryTwo" },
      {
        title: "Country",
        state: this.state.countryThree,
        name: "countryThree"
      },
      { title: "Country", state: this.state.countryFour, name: "countryFour" },

      { title: "Country", state: this.state.countryFive, name: "countryFive" },
      { title: "Country", state: this.state.countrySix, name: "countrySix" },
      {
        title: "Country",
        state: this.state.countrySeven,
        name: "countrySeven"
      },
      {
        title: "Country",
        state: this.state.countryEight,
        name: "countryEight"
      },

      { title: "Player", state: this.state.player, name: "player" },
      { title: "Player", state: this.state.playerTwo, name: "playerTwo" },
      { title: "Player", state: this.state.playerThree, name: "playerThree" },
      { title: "Champion", state: this.state.champion, name: "champion" }
    ];
    return (
      <form onSubmit={this.handleFormSubmit} className="card">
        <div className="card__inputs">
          {inputData.map((data, index) => {
            return Input(data, this.handleInputChange, index);
          })}
        </div>

        <button
          className={`card__${
            !this.state.contentVisible ? "generate" : "clear"
          }`}
          type="submit"
        >
          {!this.state.contentVisible ? "Click the button" : "World Cup 2018"}
        </button>
        {this.state.contentVisible ? <Content data={this.state} /> : ""}
      </form>
    );
  }
}

export default Card;
