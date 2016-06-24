import React, { Component } from 'react';

export default class Poll extends Component {
  render() {
    return (
      <div className="asu-widget-poll">
        <label>{this.props.question}</label>
        <ul>{this.renderChoices()}</ul>
      </div>
    );
  }

  renderChoices() {
    let i = 0;
    return this.props.choices.map(choice => {
      return <li
        key={i++} 
        data-value={choice} 
        onClick={this.handleSelection.bind(this)}
      >{choice}</li>
    });
  }

  handleSelection(event) {
    this.props.handleSelection(event, event.target.innerHTML);
  }
}
