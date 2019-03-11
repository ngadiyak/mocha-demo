const request = require('sync-request');
const soapRequest = require('easy-soap-request');
const assert = require('assert');

describe('Example tests', async function () {

    it('example test REST api GET', async function () {
        const response = request('GET', 'https://example.com', {
            headers: {
                'user-agent': 'example-user-agent',
            },
        });

        assert.equal(response.statusCode, 200);
    });

    it('example test REST api POST', async function () {
        const response = request('POST', 'https://example.com/create-user', {
            json: {username: 'ForbesLindesay'},
        });

        assert.equal(response.statusCode, 201);
    });

    it('example test SOAP api', async function () {
        const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
        const headers = {
            'user-agent': 'sampleTest',
            'Content-Type': 'text/xml;charset=UTF-8',
            'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
        };
        const response = await soapRequest(url, headers, '<xml></xml>', 1000);

        assert.equal(response.statusCode, 201);
    });
});
