// BEGIN (write your solution here)
export default (gen) => {
  const coroutine = gen();
  const result = coroutine.next();
  coroutine.next(result);
  // console.log(it.next());
};
// END

