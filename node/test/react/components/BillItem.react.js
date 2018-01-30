'use strict';
import React from 'react';
import {findDOMNode} from 'react-dom';
import {renderIntoDocument, findRenderedDOMComponentWithClass} from 'react-dom/test-utils';
import { expect } from 'chai';

import BillItem from '../../../src/react/components/BillItem.react';

describe('BillItem', () => {

    const subscriptionData = {
        type: 'something',
        name: 'a name',
        cost: 1.5
    };

    it('should render', () => {
        const component = renderIntoDocument(<BillItem data={subscriptionData}/>);
        const node = findDOMNode(component);

        expect(node.nodeName).to.equal('DIV');
        expect(node.className).to.equal('main-item');

        const itemTitleContainer = findRenderedDOMComponentWithClass(component, 'item-title-container');
        expect(itemTitleContainer).to.be.ok;
        expect(itemTitleContainer.children).to.have.length(2);

        const itemTitle = itemTitleContainer.children[0];
        expect(itemTitle).to.be.ok;
        expect(itemTitle.nodeName).to.equal('H4');
        expect(itemTitle.className).to.equal('item-title');
        expect(itemTitle.innerHTML).to.equal('Something <span class="smaller-text">(a name)</span>');

        const itemCost = itemTitleContainer.children[1];
        expect(itemCost).to.be.ok;
        expect(itemCost.nodeName).to.equal('DIV');
        expect(itemCost.className).to.equal('cost');
        expect(itemCost.innerHTML).to.equal('£1.50');
    });

    it('should render no name', () => {
        const localData = {...subscriptionData};
        delete localData.name;
        const component = renderIntoDocument(<BillItem data={localData}/>);

        const itemTitleContainer = findRenderedDOMComponentWithClass(component, 'item-title-container');
        expect(itemTitleContainer).to.be.ok;
        expect(itemTitleContainer.children).to.have.length(2);

        const itemTitle = itemTitleContainer.children[0];
        expect(itemTitle).to.be.ok;
        expect(itemTitle.nodeName).to.equal('H4');
        expect(itemTitle.className).to.equal('item-title');
        expect(itemTitle.innerHTML.trim()).to.equal('Something');
    });

    it('should render children', () => {
        const component = renderIntoDocument(
            <BillItem data={subscriptionData}>
                <div className="some-child">some child</div>
            </BillItem>
        );
        const node = findDOMNode(component);

        expect(node.children).to.have.length(2);

        const childWrapper = node.children[1];

        expect(childWrapper).to.be.ok;
        expect(childWrapper.nodeName).to.equal('DIV');
        expect(childWrapper.className).to.equal('details');
        expect(childWrapper.children).to.have.length(1);
        expect(childWrapper.innerHTML).to.equal('<div class="some-child">some child</div>');
    });

    it('should add extraClass parameter to list classNames', () => {
        const component = renderIntoDocument(<BillItem data={subscriptionData} extraClassName="total" />);
        const node = findDOMNode(component);

        expect(node.nodeName).to.equal('DIV');
        expect(node.className).to.equal('main-item total');
    })
});