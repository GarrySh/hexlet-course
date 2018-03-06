import axios from 'axios';

const delay = (ms, text) => new Promise((resolve) => {
  const start = new Date();

  setTimeout(() => {
    const end = new Date();
    console.log(`${text}, time in progress ${end.getTime() - start.getTime()} ms`);
    resolve();
  }, ms);
});

const getUrl = (url) => {
  const start = new Date();
  console.log(`start download ${start}`);
  axios.get(url).then(() => {
    const end = new Date();
    console.log(`address ${url} successfully downloaded, time in progress ${end.getTime() - start.getTime()} ms`);
  });
};

const delayRandom = text => delay((Math.random() * 2000), text);
const fructs = ['apple', 'orange', 'banana'];
const urls = ['http://www.7-zip.org/a/7z1801.exe', 'https://habrastorage.org/getpro/habr/post_images/15f/ea2/c21/15fea2c2172fdb5584151e4343c9bbde.png', 'https://github.com/'];

export default () => {
  console.log('start');
  urls.map(getUrl);
  console.log('finish');
};

