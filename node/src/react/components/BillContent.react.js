import React, { Component, Fragment } from 'react';
import { formatDate } from '../utils';
import Loading from './Loading.react';
import Statement from './Statement.react';
import BillItem from './BillItem.react';
import SkyStore from './SkyStore.react';
import CallCharges from './CallCharges.react';

const TV = 'tv';
const TALK = 'talk';
const BROADBAND = 'broadband';

const DEFAULT_SKY_STORE = {
  type: 'Sky Store'
};

const TOTAL = {
  type: 'Total'
};

const CALL_CHARGES = {
  type: 'Call charges'
};

export default class BillContent extends Component {
  constructor (props) {
    super(props);
  }

  renderLoading () {
    if (!this.props.data) {
      return (
        <Loading message="Generating bill..."/>
      );
    }
  }

  getType (subscriptions, typeToFind) {
    return subscriptions.find(({type}) => typeToFind === type);
  }

  renderItems () {
    if (this.props.data) {
      const {statement, callCharges, skyStore, total} = this.props.data;
      const {subscriptions} = this.props.data.package;
      const generatedCallCharges = {...CALL_CHARGES, cost: callCharges.total};
      const generatedSkyStore = {...DEFAULT_SKY_STORE, cost: skyStore.total};
      const generatedTotal = {...TOTAL, cost: total};

      return (
        <Fragment>
          <Statement data={statement}/>
          <BillItem data={this.getType(subscriptions, TV)}/>
          <BillItem data={this.getType(subscriptions, BROADBAND)}/>
          <BillItem data={this.getType(subscriptions, TALK)} />
          <BillItem data={generatedCallCharges}>
            <CallCharges calls={callCharges.calls}/>
          </BillItem>
          <BillItem data={generatedSkyStore}>
            <SkyStore data={skyStore}/>
          </BillItem>
          <BillItem data={generatedTotal} extraClassName="total">
            Due {formatDate(statement.due)}
          </BillItem>
        </Fragment>
      );
    }
  }

  render () {
    return (
      <div className="content">
        {this.renderLoading()}
        {this.renderItems()}
      </div>
    );
  }

}