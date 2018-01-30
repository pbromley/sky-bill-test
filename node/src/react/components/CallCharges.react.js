import React, { Component } from 'react';
import { displayMoney } from '../utils';

export default class CallCharges extends Component {
  constructor (props) {
    super(props);
  }

  renderCallItem (item) {
    return <div className="call-item">{item}</div>;
  }

  renderCalls () {
    const {calls} = this.props;

    if (calls && calls.length) {
      return (
        <ul>
          {calls.map(({called, duration, cost}, index) =>
            <li key={index}>
              {this.renderCallItem(called)}
              {this.renderCallItem(duration)}
              {this.renderCallItem(displayMoney(cost))}
            </li>)}
        </ul>);
    } else {
      return <div>None</div>;
    }
  }

  render () {
    return (
      <div className="call-charges">
        {this.renderCalls()}
      </div>
    );
  }

}