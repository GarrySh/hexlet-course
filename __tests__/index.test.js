import co from '../src';

const getPromise = (val, err) =>
  new Promise((resolve, reject) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(val);
  });

describe('HexletCo', () => {
  it('set 1', (done) => {
    co(function* () {
      const x = yield getPromise(5);
      expect(x).toBe(5);
      done();
    });
  });

  // it('set 2', (done) => {
  //   co(function* () {
  //     const a = yield getPromise(1);
  //     const b = yield getPromise(2);
  //     const c = yield getPromise(3);

  //     expect([a, b, c]).toEqual([1, 2, 3]);
  //     done();
  //   });
  // });

  // it('set 3', (done) => {
  //   let error;

  //   co(function* () {
  //     try {
  //       yield getPromise(1, new Error('boom'));
  //     } catch (err) {
  //       error = err;
  //     }

  //     expect(error.message).toBe('boom');
  //     const ret = yield getPromise(1);
  //     expect(ret).toBe(1);
  //     done();
  //   });
  // });

  // it('set 4', (done) => {
  //   co(function* () {
  //     let error;
  //     try {
  //       yield getPromise(5);
  //       throw new Error('boom');
  //     } catch (err) {
  //       error = err;
  //     }
  //     expect(error.message).toBe('boom');
  //     done();
  //   });
  // });
  // it('set 5', (done) => {
  //   co(function* () {
  //     const a = yield getPromise(1);
  //     return a;
  //   }).then((a) => {
  //     expect(a).toBe(1);
  //     done();
  //   });
  // });

  // it('set 6', (done) => {
  //   co(function* () {
  //     const result = yield getPromise(1, new Error('boom'));
  //     return result;
  //   }).catch((error) => {
  //     expect(error.message).toBe('boom');
  //     done();
  //   });
  // });

  // it('set 7', (done) => {
  //   co(function* () {
  //     const a = yield getPromise(1);
  //     const b = yield getPromise(a * 4);
  //     const c = yield getPromise(b / 2);

  //     expect([a, b, c]).toEqual([1, 4, 2]);
  //     done();
  //   });
  // });
});
