const assert = require('assert');

const server = require('../../../../src/server');

const url = '/1.0/diff';
const method = 'POST';

describe(`api: ${method} ${url}`, () => {

  beforeAll(async () => {
    await server.init;
  });

  it('should return error 400 when payload object is missed', async () => {
    const res = await server.inject({method, url});
    assert.equal(res.statusCode, 400, 'Payload object is missed');
  });

  it('should return error 400 when property of payload is empty', async () => {
    const res = await server.inject({method, url, payload: {}});
    assert.equal(res.statusCode, 400, 'Payload object is empty');
  });

  it('should return error 400 when property of payload is not allowed', async () => {
    const payload = {field: false};
    const res = await server.inject({method, url, payload});
    assert.equal(res.statusCode, 400, 'One of the payload property is not allowed');
  });

  it('should return correct diff', async () => {
    const payload = {a: 10, b: 2};
    const res = await server.inject({method, url, payload});
    assert.equal(res.statusCode, 200);
    assert.equal(res.result, 8);
  });

});
