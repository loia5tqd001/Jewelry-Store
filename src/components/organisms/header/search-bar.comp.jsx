import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import routes, { useHistory } from '../../../utils/routes';

import { Form, InputGroup, Input, Button } from './search-bar.styled';

function SearchBar({ isHeaderStuck }) {
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
    <Form isHeaderStuck={isHeaderStuck} onSubmit={onSubmit}>
      <InputGroup>
        <Input ref={inputRef} type="text" placeholder="Tìm kiếm sản phẩm" />
        <Button>
          <ion-icon name="search"/>
        </Button>
      </InputGroup>
    </Form>
  );
}

SearchBar.propTypes = {
  isHeaderStuck: PropTypes.bool.isRequired,
};

export default SearchBar;
