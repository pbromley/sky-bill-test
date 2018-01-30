import React, { PureComponent } from 'react';
import { displayMoney } from '../utils';

export default class TitledList extends PureComponent {
  constructor (props) {
    super(props);
  }

  renderItem (title, cost) {
    return <li key={title}>{title} <span className="smaller-text">({displayMoney(cost)})</span></li>;
  }

  renderItems () {
    if (this.props.items) {
      return (
        <ul>
          {this.props.items.map(({title, cost}) => this.renderItem(title, cost))}
        </ul>
      );
    } else {
      return <div>None</div>;
    }
  }

  render () {
    return (
      <div className="titled-list">
        <h5>{this.props.title}</h5>
        {this.renderItems()}
      </div>
    );
  }

}