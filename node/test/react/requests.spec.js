'use strict';
import { expect } from 'chai';
import { spy } from 'sinon';
import { GET, parseJson, rejectNonOKStatus } from '../../src/react/requests';

describe('Requests', () => {

    it('should have JSON config for GET request', () => {
        expect(GET.method).to.equal('GET');
        expect(GET.headers).to.deep.equal({
            'Accept': 'application/json'
        });
    });

    it('should parse response to json', () => {
        const response = {
            json: spy()
        };
        parseJson(response);
        expect(response.json.called).to.equal(true);
    });

    it('rejectNonOKStatus should pass through response if status ok', () => {
        const response = {
            status: 200
        };
        expect(rejectNonOKStatus(response)).to.equal(response);
    });

    it('should create error on non OK response', () => {
        const response = {
            status: 500,
            responseText: 'an expected error'
        };

        try {
            rejectNonOKStatus(response);
        } catch (err) {
            expect(err.message).to.equal(response.responseText);
        }
    });
});

