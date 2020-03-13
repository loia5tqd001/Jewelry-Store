export function getSale(compare, salePercent) {
  return compare * (1 - salePercent / 100);
}
