'use strict';
import { expect } from 'chai';
import fetchMock from 'fetch-mock';

describe('Data service', () => {

    const expectedData = {key: "value"};

    beforeEach(() => {
        fetchMock.restore();
    });

    it('should get data via GET call to api', done => {
        fetchMock.get(`/api/data`, expectedData);

        const dataService = require('../../../src/react/services/data');

        dataService.getData().then(data => {
            try {
                expect(data).to.deep.equal(expectedData);
                done();
            } catch (err) {
                done(err);
            }
        }, err => done(err));
    });

    it('should direct error response to error handler', done => {
        const response = {status: 500, body: {message: 'an error'}};

        fetchMock.get(`/api/data`, response);

        const dataService = require('../../../src/react/services/data');

        dataService.getData().then(() => {
            done('Not expecting resolve to be called');
        }, () => {
            done();
        });
    })
});