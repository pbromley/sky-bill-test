'use strict';
import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="bill-header">
        <div className="icon-container">
          <img src="/public/img/sky-logo.png"/>
        </div>
        <div className="title-container">
          <h1>Your Bill</h1>
        </div>
      </div>
    );
  }
}
