export function searchProduct(products, searchKey, limit = products.length) {
  const trimmedSearchKey = searchKey.trim();
  if (!trimmedSearchKey || trimmedSearchKey === `\\`) return products.slice(0, limit);
  
  return products
    .filter((product) => trimmedSearchKey && new RegExp(trimmedSearchKey, 'i')?.test(product.name))
    .slice(0, limit);
}
