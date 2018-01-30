'use strict';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { expect } from 'chai';
import TitledList from '../../../src/react/components/TitledList.react';

describe('TitledList', () => {

  const items = [{
    title: 'All mine',
    cost: 9.99
  }, {
    title: 'another film',
    cost: 5.3
  }];

  let renderer;

  beforeEach(() => {
    renderer = new ShallowRenderer();
  });

  it('should render', () => {
    renderer.render(<TitledList title="Some title" items={items}/>);
    const node = renderer.getRenderOutput();

    expect(node.type).to.equal('div');
    expect(node.props.className).to.equal('titled-list');
    expect(node.props.children).to.deep.equal([
        <h5>Some title</h5>,
        <ul>
          <li key={'All mine'}>{'All mine'} <span className="smaller-text">({'£9.99'})</span></li>
          <li key={'another film'}>{'another film'} <span className="smaller-text">({'£5.30'})</span></li>
        </ul>
      ]
    );
  });

  it('should render with no items', () => {
    renderer.render(<TitledList title="Some title"/>);
    const node = renderer.getRenderOutput();

    expect(node.type).to.equal('div');
    expect(node.props.className).to.equal('titled-list');
    expect(node.props.children).to.deep.equal([
        <h5>Some title</h5>,
        <div>None</div>
      ]
    );
  });

});