import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from './selectors';

export const useSelectProductById = (id) => {
  const allProducts = useSelector(selectAllProducts);
  return useMemo(() => {
    return allProducts.find((product) => product.id === id);
  }, [allProducts, id]);
}
