'use strict';
import React from 'react';
import {findDOMNode} from 'react-dom';
import {renderIntoDocument, findRenderedDOMComponentWithClass} from 'react-dom/test-utils';
import { expect } from 'chai';
import Loading from '../../../src/react/components/Loading.react';

describe('Loading', () => {

    it('should render', () => {
        const component = renderIntoDocument(<Loading message="Loading"/>);
        const node = findDOMNode(component);

        expect(node.className).to.equal('loading-container');
        expect(node.nodeName).to.equal('DIV');

        const textNode = findRenderedDOMComponentWithClass(component, 'loading-text');
        expect(textNode.nodeName).to.equal('DIV');
        expect(textNode.textContent).to.equal('Loading');
    });

});