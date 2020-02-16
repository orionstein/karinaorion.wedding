const softCompareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i< arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}
export const memo = (f) => {
  let memoArgs = null
  let memoRes = null

  // if (typeof f !== 'function') {
  //   return throw new Error('not a function')
  // }
  //
  return (...args) => {
    if (!memoArgs || !softCompareArrays(args, memoArgs)) {
      const result = f(args)
      memoArgs = args
      memoRes = result
    }
    return memoRes
  }
}
