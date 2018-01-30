'use strict';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { expect } from 'chai';
import Header from '../../../src/react/components/Header.react';

describe('Header', () => {

  let renderer;

  beforeEach(() => {
    renderer = new ShallowRenderer();
  });

  it('should render', () => {
    renderer.render(<Header/>);
    const node = renderer.getRenderOutput();

    expect(node.type).to.equal('div');
    expect(node.props.className).to.equal('bill-header');
    expect(node.props.children).to.deep.equal([
      <div className="icon-container">
        <img src="/public/img/sky-logo.png"/>
      </div>,
      <div className="title-container">
        <h1>Your Bill</h1>
      </div>
    ]);
  });
});