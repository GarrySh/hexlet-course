import url from 'url';
import querystring from 'querystring';
import nock from 'nock';

import { get, post } from '../src';

nock.disableNetConnect();

describe('HttpRequestPromise', () => {
  it('#get', (done) => {
    const host = 'http://ru.hexlet.io';
    const status = 301;
    nock(host).get('/').reply(status);

    get(host).then((response) => {
      console.log(response);
      expect(response.status).toBe(status);
      done();
    }).catch(done);
  });

  it('#get with params', (done) => {
    const params = { a: 'v', d: 'k' };
    const host = 'http://ru.hexlet.io';
    const body = 'hello, world';
    nock(host)
      .get(`/?${querystring.stringify(params)}`)
      .reply(200, body);

    get(host, { params }).then((response) => {
      expect(response.data).toBe(body);
      done();
    });
  });

  // it('#get with params and query', (done) => {
  //   const params = { a: 'v', d: 'k' };
  //   const q = 'index';
  //   const host = 'http://ru.hexlet.io';
  //   const hostWithQuery = url.resolve(host, `/?q=${q}`);
  //   const body = 'hello, world';
  //   const query = querystring.stringify({ q, ...params });
  //   nock(host)
  //     .get(`/?${query}`)
  //     .reply(200, body);

  //   get(hostWithQuery, { params })
  //     .then((response) => {
  //       expect(response.data).toBe(body);
  //       done();
  //     }).catch(() => {});
  // });

  // it('#get 2', (done) => {
  //   const host = 'http://ru.hexlet.io';
  //   const pathname = '/users/new';
  //   const body = 'hello, world';
  //   nock(host).get(pathname).reply(200, body);

  //   get(`${host}${pathname}`).then((response) => {
  //     expect(response.data).toBe(body);
  //     done();
  //   }).catch(done.fail);
  // });

  // it('#get 3', (done) => {
  //   const host = 'http://ru.hexlet.io';
  //   const pathname = '/users/new';
  //   nock(host).get(pathname).replyWithError('timeout error');

  //   get(`${host}${pathname}`).then(() => {
  //     fail('Must be timed out');
  //   }).catch((err) => {
  //     expect(err).not.toBeNull();
  //     done();
  //   });
  // });

  // it('#post', (done) => {
  //   const host = 'http://ru.hexlet.io';
  //   const pathname = '/users';
  //   const data = { nickname: 'scooter' };
  //   const preparedData = querystring.stringify(data);
  //   const status = 302;
  //   nock(host, {
  //     reqheaders: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Content-Length': preparedData.length.toString(),
  //     },
  //   }).post(pathname, data).reply(status, data);

  //   post(`${host}${pathname}`, data).then((response) => {
  //     expect(response.status).toBe(status);
  //     expect(response).toHaveProperty('data', JSON.stringify(data));
  //     done();
  //   }).catch(done.fail);
  // });
});
