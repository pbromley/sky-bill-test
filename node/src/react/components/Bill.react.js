'use strict';
import React, { Component } from 'react';
import { getData } from '../services/data';
import BillContent from './BillContent.react';
import Header from './Header.react';

export default class Bill extends Component {

  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    getData().then(billData => {
      this.setState({data: billData});
    });
  }

  render () {
    return (
      <div className="bill-container">
        <Header />
        <BillContent data={this.state.data} />
      </div>
    );
  }
}