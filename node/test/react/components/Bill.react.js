'use strict';
import React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import ShallowRenderer from 'react-test-renderer/shallow';
import { expect } from 'chai';
import mock from 'mock-require';
import { spy } from 'sinon';
import { deleteCache } from '../../utils';
import BillContent from '../../../src/react/components/BillContent.react';
import Header from '../../../src/react/components/Header.react';

describe('Bill', () => {

  const billSrc = '../../../src/react/components/Bill.react';
  const dataServiceSrc = '../../../src/react/services/data';
  let Bill;
  let mockedGetData;
  let renderer;

  beforeEach(() => {
    mockedGetData = () => Promise.resolve();
    mock(dataServiceSrc, {
      getData: () => mockedGetData()
    });
    Bill = require(billSrc).default;
    renderer = new ShallowRenderer();
  });

  afterEach(() => {
    mock.stop(dataServiceSrc);
  });

  it('should load data via data service on mounting', done => {
    mockedGetData = spy(() => Promise.resolve(done()));
    renderIntoDocument(<Bill/>);
  });

  it('should render', () => {
    renderer.render(<Bill/>);
    const node = renderer.getRenderOutput();

    expect(node.type).to.equal('div');
    expect(node.props.className).to.equal('bill-container');
    expect(node.props.children).to.deep.equal([
      <Header />,
      <BillContent data={undefined}/>
    ]);
  });
});