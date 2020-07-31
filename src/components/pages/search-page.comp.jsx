import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../redux/products/selectors';
import { SearchButton, Form, SearchInput } from './search-page.styled';
import { searchProduct } from './search-page.utils';
import ProductsGrid from '../organisms/search-page/products-grid.comp';

function SearchPage(props) {
  const allProducts = useSelector(selectAllProducts);
  const [searchKey, setSearchKey] = useState('');
  const preventCb = useCallback((e) => e.preventDefault(), []);
  
  return (
    <div>
      <Form onSubmit={preventCb}>
        <SearchInput
          type="text"
          placeholder="Bạn tìm gì..."
          ariaLabel="Bạn tìm gì..."
          maxLength={40}
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <SearchButton>
          <ion-icon name="search" />
        </SearchButton>
      </Form>
      
      <ProductsGrid items={searchProduct(allProducts, searchKey)} />
    </div>
  );
}

export default SearchPage;
