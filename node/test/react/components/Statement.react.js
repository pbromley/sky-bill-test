'use strict';
import React from 'react';
import { findDOMNode } from 'react-dom';
import { findRenderedDOMComponentWithClass, renderIntoDocument } from 'react-dom/test-utils';
import { expect } from 'chai';
import moment from 'moment';
import Statement from '../../../src/react/components/Statement.react';

describe('Statement', () => {

  const statementData = {
    period: {
      from: moment().format('YYYY-MM-DD'),
      to: moment().add('1', 'month').format('YYYY-MM-DD')
    }
  };

  it('should render', () => {
    const component = renderIntoDocument(<Statement data={statementData}/>);
    const node = findDOMNode(component);
    expect(node.className).to.equal('statement');
    expect(node.tagName).to.equal('DIV');

    const {from, to} = statementData.period;

    const statementFrom = findRenderedDOMComponentWithClass(component, 'statement-from');
    expect(statementFrom).to.be.ok;
    expect(statementFrom.innerHTML).to.equal(`<span class="statement-label">from</span> ${moment(from).format('DD/MM/YYYY')}`);

    expect(findRenderedDOMComponentWithClass(component, 'statement-to')).to.be.ok;
    expect(findRenderedDOMComponentWithClass(component, 'statement-to').innerHTML)
      .to.equal(`<span class="statement-label">to</span> ${moment(to).format('DD/MM/YYYY')}`);
  });

});