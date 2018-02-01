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
  const { hostname, path } = url.parse(param.url);
  const body = [];
  return new Promise((resolve, reject) => {
    const options = {
      hostname,
      path,
    };
    const req = http.request(options, (res) => {
      resolve(res);
      // res.on('data', (chunk) => {
      //   body.push(chunk.toString());
      // }).on('end', () => {
      //   const html = body.join();
        
      // });
    });
    req.end();
    // console.log(param.url);
  });
};
// END
// http.get(address, (res) => {
//   res.on('data', (chunk) => {
//     body.push(chunk.toString());
//   }).on('end', () => {
//     const data = body.join();
//     const actualTitle = getTitle(data);
//     if (expectedTitle === actualTitle) {
//       callback(null, address);
//       return;
//     }
//     const newLinks = getLinks(data);
//     visited.add(current);
//     search([...newLinks, ...rest], visited);
//   });
// });