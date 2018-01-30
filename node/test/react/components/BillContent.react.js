'use strict';
import React, { Fragment } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { expect } from 'chai';
import Loading from '../../../src/react/components/Loading.react';
import BillContent from '../../../src/react/components/BillContent.react';
import Statement from '../../../src/react/components/Statement.react';
import BillItem from '../../../src/react/components/BillItem.react';
import SkyStore from '../../../src/react/components/SkyStore.react';
import CallCharges from '../../../src/react/components/CallCharges.react';

describe('BillContent', () => {

  let renderer;
  const billData = {
    statement: {
      due: '2018-01-01'
    },
    'package': {
      subscriptions: [
        {type: 'broadband'},
        {type: 'talk'},
        {type: 'tv'}
      ]
    },
    callCharges: {
      calls: []
    },
    skyStore: {
      rentals: [],
      buyAndKeep: [],
      total: 24.97
    },
    total: 139.94
  };

  beforeEach(() => {
    renderer = new ShallowRenderer();
  });

  it('should render', () => {
    renderer.render(<BillContent data={billData}/>);
    const node = renderer.getRenderOutput();

    const {subscriptions} = billData.package;
    const {calls} = billData.callCharges;
    const skyStore = {
      type: 'Sky Store',
      cost: billData.skyStore.total
    };

    const total = {
      type: 'Total',
      cost: billData.total
    };

    const callCharges = {
      type: 'Call charges',
      cost: billData.callCharges.total
    };

    expect(node.type).to.equal('div');
    expect(node.props.className).to.equal('content');
    expect(node.props.children).to.deep.equal([
        undefined,
        <Fragment>
          <Statement data={billData.statement}/>
          <BillItem data={subscriptions.find(({type}) => type === 'tv')}/>
          <BillItem data={subscriptions.find(({type}) => type === 'broadband')}/>
          <BillItem data={subscriptions.find(({type}) => type === 'talk')} />
          <BillItem data={callCharges}>
            <CallCharges calls={calls}/>
          </BillItem>
          <BillItem data={skyStore}>
            <SkyStore data={billData.skyStore}/>
          </BillItem>
          <BillItem data={total} extraClassName="total">
            Due {'01/01/2018'}
          </BillItem>
        </Fragment>
      ]
    );
  });

  it('should render Loading when no data', () => {
    renderer.render(<BillContent/>);
    const node = renderer.getRenderOutput();

    expect(node.type).to.equal('div');
    expect(node.props.className).to.equal('content');
    expect(node.props.children).to.deep.equal([
        <Loading message="Generating bill..."/>,
        undefined
      ]
    );
  });

});