'use strict';
import { expect } from 'chai';
import React, { PureComponent } from 'react';
import mock from 'mock-require';

describe('App', () => {

  const appSrc = '../../src/react/app';
  const mockedBillDiv = <div id="mocked-bill">Mocked</div>;

  class MockedBill extends PureComponent {
    constructor (props) {
      super(props);
    }

    render () {
      return mockedBillDiv;
    }
  }

  const billSrc = '../../src/react/components/Bill.react';

  let appDiv;

  before(() => {
    mock(billSrc, MockedBill);
    appDiv = document.createElement('main');
    appDiv.id = 'app';
    document.getElementsByTagName('body')[0].appendChild(appDiv);
  });

  after(() => {
    document.getElementsByTagName('body')[0].removeChild(document.getElementById('app'));
    mock.stop(billSrc);
  });

  it('should render Bill component', () => {
    require(appSrc);
    const billComponent = document.getElementById('mocked-bill');
    expect(billComponent).to.be.ok;
    expect(billComponent.innerHTML).to.equal('Mocked');
  });
});