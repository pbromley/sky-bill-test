import React, { Component } from 'react';
import TitledList from './TitledList.react';

export default class SkyStore extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="sky-store">
        <TitledList title="Buy and Keep" items={this.props.data.buyAndKeep}/>
        <TitledList title="Rentals" items={this.props.data.rentals}/>
      </div>
    );
  }

}