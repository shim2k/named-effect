const useNamedEffect = (dependecies = [], evaluator) => {
  const namedEffect = function (cb) {
    try {
      this(() => {
        if (!evaluator) {
          cb && cb(...dependecies); return;
        }
        if (evaluator && evaluator()) {
          cb(...dependecies);
        }
      }, dependecies)
    } catch (e) {
      throw new Error('Make sure to bind useEffect in-order to use namedEffect.');
    }
  };
  return namedEffect;
}

export default useNamedEffect;