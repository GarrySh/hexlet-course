import http from 'http';
import url from 'url';
import querystring from 'querystring';

const getSearch = (queryParams, params) => {
  const mergedQuery = { ...queryParams, ...params };
  const keys = Object.keys(mergedQuery);
  const newQueryParams = keys
    .filter(key => mergedQuery[key] !== null && mergedQuery[key] !== undefined)
    .reduce((acc, key) => ({ ...acc, [key]: mergedQuery[key] }), {});

  return keys.length > 0 ? `?${querystring.stringify(newQueryParams)}` : '';
};

// BEGIN (write your solution here)
export default (param) => {
  const urlObject = url.parse(param.url, true);
  const postData = querystring.stringify(param.data);
  console.log(postData);

  const options = {
    hostname: urlObject.hostname,
    method: param.method,
    path: urlObject.pathname + getSearch(urlObject.query, param.params),
  };

  // console.log(options);
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      const response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        data: '',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(postData),
        },
      };

      const data = [];

      res.on('data', (chunk) => {
        data.push(chunk.toString());
      });

      res.on('end', () => {
        response.data = data.join();
        resolve(response);
        // console.log(response);
      });

      res.on('error', (error) => {
        console.error('Ошибка при получении http запроса', error);
        reject(new Error('Ошибка при получении http запроса'));
      });
    });

    req.on('error', (error) => {
      console.error('Ошибка формирования http запроса', error);
      reject(new Error('Ошибка формирования http запроса'));
    });
    req.write(param.data);
    req.end();
  });
};
// END
