// https://blog.abelotech.com/posts/number-currency-formatting-javascript/
export function formatVnd(amount) {
  if (!amount) return '';
  return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + 'đ';
}

export function roundVnd(amount, precision = 4) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) return null;
  const divider = 10 ** precision;
  return amount - (amount % divider);
}
