export function getSale(comparePrice, salePercent) {
  return comparePrice * (1 - salePercent / 100);
}
