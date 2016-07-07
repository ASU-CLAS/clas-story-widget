import React, { Component } from 'react';

export default class Poll extends Component {

  render() {
    return (
      <div className="poll-question">
        <label>{this.props.question}</label>
        <select
          className="form-control form-select"
          onChange={this.handleSelection.bind(this)}
          >
          <option value="-1">Choose...</option>
          {this.renderChoices()}
        </select>
        {this.renderDisclaimer()}
      </div>
    );
  }

  renderDisclaimer() {
    return (this.props.note)
      ? <p className="note">{this.props.note}</p>
      : null;
  }

  renderChoices() {
    let i = 0;
    return this.props.choices.map(choice => {
      return <option
        key={i++} 
        data-value={choice} 
        value={choice}
      >{choice}</option>
    });
  }

  handleSelection(event) {
    if (event.target.value)
    this.props.handleSelection(event, event.target.value);
  }
}
