'use strict';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { expect } from 'chai';
import SkyStore from '../../../src/react/components/SkyStore.react';
import TitledList from '../../../src/react/components/TitledList.react';

describe('SkyStore', () => {

  const skyStore = {
    rentals: [],
    buyAndKeep: []
  };

  let renderer;

  beforeEach(() => {
    renderer = new ShallowRenderer();
  });

  it('should render', () => {
    renderer.render(<SkyStore data={skyStore}/>);
    const node = renderer.getRenderOutput();

    expect(node.type).to.equal('div');
    expect(node.props.className).to.equal('sky-store');
    expect(node.props.children).to.deep.equal([
        <TitledList title="Buy and Keep" items={skyStore.buyAndKeep}/>,
        <TitledList title="Rentals" items={skyStore.rentals}/>,
      ]
    );
  });

});