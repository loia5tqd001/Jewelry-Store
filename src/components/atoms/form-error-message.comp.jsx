import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ErrorLabel } from './form-error-message.styled';

function FormErrorMessage({ errors, name }) {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message, messages }) => {
        if (message) {
          return <ErrorLabel htmlFor={name}>{message}</ErrorLabel>;
        }
        if (messages) {
          return Object.entries(messages).map(([type, message]) => (
            <ErrorLabel key={type} htmlFor={name}>{message}</ErrorLabel>
          ));
        }
        return null;
      }}
    />
  );
}

export default FormErrorMessage;
