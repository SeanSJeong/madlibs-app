import React, { Component } from "react";

class Content extends Component {
  constructor() {
    super();
    this.count = 1;
  }

  componentWillReceiveProps() {
    this.count = 1;
  }

  renderLabel(data) {
    return [
      <div className="card__content__label">{this.count++}</div>,
      <b>{data}</b>
    ];
  }

  render() {
    const data = this.props.data;

    // this.props.data.map((object, index) => {
    //   console.log(index);
    // });

    //<span>{data.indexOf(data.color)}</span>
    return (
      <div className="card__content">
        <p>
          My top 8 countries for 2018 World Cup are{" "}
          {this.renderLabel(data.country)},
          {this.renderLabel(data.countryTwo)},{" "}
          {this.renderLabel(data.countryThree)},{this.renderLabel(
            data.countryFour
          )},
          {this.renderLabel(data.countryFive)},{" "}
          {this.renderLabel(data.countrySix)},{" "}
          {this.renderLabel(data.countrySeven)}, and
          {this.renderLabel(data.countryEight)}. Your top 3 players are{" "}
          {this.renderLabel(data.player)},
          {this.renderLabel(data.playerTwo)}, and{" "}
          {this.renderLabel(data.playerThree)}. You wish your 2018 World Cup
          Champion would be {this.renderLabel(data.champion)}.
        </p>
      </div>
    );
  }
}
export default Content;
