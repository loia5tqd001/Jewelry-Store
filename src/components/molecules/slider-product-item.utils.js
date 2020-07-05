export function getSale(originalPrice, salePrice) {
  return Math.round(100 - (salePrice / originalPrice) * 100);
}