'use strict';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { expect } from 'chai';
import CallCharges from '../../../src/react/components/CallCharges.react';

describe('CallCharges', () => {

  const calls = [{
    called: '0987654',
    cost: 1.2,
    duration: '00:01:00'
  }, {
    called: '0987654',
    cost: 16.85,
    duration: '00:20:00'
  }];

  let renderer;

  beforeEach(() => {
    renderer = new ShallowRenderer();
  });

  it('should render', () => {
    renderer.render(<CallCharges calls={calls}/>);
    const node = renderer.getRenderOutput();

    expect(node.type).to.equal('div');
    expect(node.props.className).to.equal('call-charges');
    expect(node.props.children).to.deep.equal(
      <ul>
        <li key={0}>
          <div className="call-item">{'0987654'}</div>
          <div className="call-item">{'00:01:00'}</div>
          <div className="call-item">{'£1.20'}</div>
        </li>
        <li key={1}>
          <div className="call-item">{'0987654'}</div>
          <div className="call-item">{'00:20:00'}</div>
          <div className="call-item">{'£16.85'}</div>
        </li>
      </ul>
    );
  });

  it('should render with no calls parameter', () => {
    renderer.render(<CallCharges/>);
    const node = renderer.getRenderOutput();

    expect(node.type).to.equal('div');
    expect(node.props.className).to.equal('call-charges');
    expect(node.props.children).to.deep.equal(<div>None</div>);
  });

  it('should render with empty calls', () => {
    renderer.render(<CallCharges calls={[]}/>);
    const node = renderer.getRenderOutput();

    expect(node.type).to.equal('div');
    expect(node.props.className).to.equal('call-charges');
    expect(node.props.children).to.deep.equal(<div>None</div>);
  });

});