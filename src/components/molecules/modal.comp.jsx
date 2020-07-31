import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import { useAutoClose } from './modal.hooks';

import {
  ModalHeading,
  modalStyles,
  ButtonsContainer,
  ModalButton,
  ModalContent,
  ExpireSentence,
} from './modal.styled';

function Modal({ heading, children, buttons, autoClose, ...otherProps }) {
  const { hasAutoClose, time } = useAutoClose(otherProps.isOpen, autoClose);

  return (
    // ariaHideApp={false} is to disable warnings
    <ReactModal {...otherProps} ariaHideApp={false} style={modalStyles}>
      <ModalHeading>{heading}</ModalHeading>
      <ModalContent>{children}</ModalContent>
      <ButtonsContainer>
        {buttons.map((btn, i) => (
          <ModalButton key={i} type={btn.type} onClick={btn.callback}>
            {btn.content}
          </ModalButton>
        ))}
      </ButtonsContainer>
      {hasAutoClose && (
        <ExpireSentence>
          Tự động đóng trong <span>{time}</span> giây
        </ExpireSentence>
      )}
    </ReactModal>
  );
}

Modal.propTypes = {
  heading: PropTypes.node,
  children: PropTypes.node,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['outline', 'contained']),
      content: PropTypes.string.isRequired,
      callback: PropTypes.func.isRequired,
    }),
  ),
  autoClose: PropTypes.shape({
    time: PropTypes.number.isRequired,
    callback: PropTypes.func.isRequired,
  }),
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
