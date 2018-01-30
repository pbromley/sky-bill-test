'use strict';
import {expect} from 'chai';
import {twoDp, formatDate, displayMoney, capitalise} from '../../src/react/utils';
import moment from 'moment';

describe('Utils', () => {

    it('should ensure 2 decimal places in value', () => {
        expect(twoDp(1)).to.equal('1.00');
        expect(twoDp(1.1)).to.equal('1.10');
        expect(twoDp(1.11)).to.equal('1.11');

        expect(twoDp('1')).to.equal('1.00');
        expect(twoDp('1.1')).to.equal('1.10');
        expect(twoDp('1.11')).to.equal('1.11');
    });

    it('should return empty string if error parsing number', () => {
        expect(twoDp(NaN)).to.equal('');
        expect(twoDp('')).to.equal('');
        expect(twoDp('a')).to.equal('');
        expect(twoDp(null)).to.equal('');
        expect(twoDp(undefined)).to.equal('');
    });

    it('should display value with pound sign prefixed and formatted to two decimal places', () => {
        expect(displayMoney(1)).to.equal('£1.00');
        expect(displayMoney(1.12)).to.equal('£1.12');
        expect(displayMoney('2.45')).to.equal('£2.45');
    });

    it('should display nothing if money cannot be formatted', () => {
        expect(displayMoney(true)).to.equal('');
        expect(displayMoney('abc')).to.equal('');
        expect(displayMoney(null)).to.equal('');
        expect(displayMoney(undefined)).to.equal('');
    });

    it('should format date correctly', () => {
        expect(formatDate('2018-01-01')).to.equal('01/01/2018');
    });

    it('should use todays date if date string not specified', () => {
        expect(formatDate()).to.equal(moment().format('DD/MM/YYYY'));
    });

    it('should capitalise word', () => {
        expect(capitalise('word')).to.equal('Word');
        expect(capitalise('Word')).to.equal('Word');
    });

    it('should handle non string when attempting to capitalise and return parameter', () => {
        expect(capitalise(null)).to.equal(null);
        expect(capitalise(undefined)).to.equal(undefined);
        expect(capitalise(true)).to.equal(true);
    });


});