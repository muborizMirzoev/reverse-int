module.exports = function reverse (n) {
  let arr = n.toString().split('');

  if (arr.includes('-')) {
    return arr.slice(1, arr.legth).reverse().join('')
  }
  return arr.reverse().join('')
}
