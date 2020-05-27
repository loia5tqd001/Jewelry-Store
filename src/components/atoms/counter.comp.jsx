import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from './counter.styled';

function Counter({ value, min, max, onIncrement, onDecrement }) {
  const lowerBoundExceeded = min && value <= min;
  const upperBoundExceeded = max && value >= max;

  return (
    <Container>
      <Button
        disabled={lowerBoundExceeded}
        onClick={(...args) => !lowerBoundExceeded && onDecrement(...args)}
      >
        <ion-icon name="remove" />
      </Button>

      <span>{value}</span>

      <Button
        disabled={upperBoundExceeded}
        onClick={(...args) => !upperBoundExceeded && onIncrement(...args)}
      >
        <ion-icon name="add" />
      </Button>
    </Container>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
};

export default Counter;
