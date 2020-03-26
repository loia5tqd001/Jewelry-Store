import React, { useRef, useCallback } from 'react';
import routes, { useHistory } from '../../../routes';

import { Form, InputGroup, Input, Button } from './search-bar.styled';

function SearchBar() {
  const history = useHistory();
  const inputRef = useRef(null);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      history.push(routes.search.path);
      inputRef.current.value = '';
    },
    [history],
  );

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup>
        <Input ref={inputRef} type="text" placeholder="Tìm kiếm sản phẩm" />
        <Button>
          <ion-icon name="search"></ion-icon>
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
