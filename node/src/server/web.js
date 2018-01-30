const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const PROXY_ERROR = {message: "Failed to get get bill data from proxy"};

const initialiseApp = () => {
    const app = express();
    const srcDir = path.join(__dirname, '../../public/');

    app.use(bodyParser.json());
    app.set('srcDir', srcDir);
    app.use('/public', express.static(srcDir));

    const DATA_URL = process.env.DATA_URL || 'http://safe-plains-5453.herokuapp.com/bill.json';

    app.get('/api/data', (req, res) => {
        console.log(`proxying data request to [${DATA_URL}]`);

        const proxyFailure = (req, res) => {
            res.status(500).json(PROXY_ERROR);
        };

        http.get(DATA_URL, response => {
            if (response.statusCode == 200) {
                let json = '';

                response.on('data', chunk => {
                    json += chunk;
                }).on('end', () => {
                    res.status(200).json(JSON.parse(json));
                });
            } else {
                proxyFailure(req, res);
            }
        }).on('error', error => {
            console.log('Error proxying call', error);
            proxyFailure(req, res);
        });
    });

    app.get('*', (req, res) => {
        res.sendFile(`${srcDir}/index.html`);
    });

    return app;
};
module.exports = initialiseApp;


