'use strict';
import React, { Component } from 'react';
import { capitalise, displayMoney } from '../utils';

export default class BillItem extends Component {
  constructor (props) {
    super(props);
  }

  renderChildren () {
    if (this.props.children) {
      return (
        <div className="details">
          {this.props.children}
        </div>
      );
    }
  }

  renderName (name) {
    if (name) {
      return <span className="smaller-text">({name})</span>;
    }
  }

  renderClassNames ({extraClassName}) {
    return `main-item ${extraClassName ? extraClassName : ''}`.trim();
  }

  render () {
    const {type, name, cost} = this.props.data;
    return (
      <div className={this.renderClassNames(this.props)}>
        <div className="item-title-container">
          <h4 className="item-title">{capitalise(type)} {this.renderName(name)}</h4>
          <div className="cost">{displayMoney(cost)}</div>
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}