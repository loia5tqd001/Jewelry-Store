// https://blog.abelotech.com/posts/number-currency-formatting-javascript/
export function formatVnd(amount) {
  return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + 'đ';
}

export function roundVnd(amount, precision = 4) {
  console.assert(typeof amount === 'number');
  const divider = 10 ** precision;
  return amount - (amount % divider);
}
