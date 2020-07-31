import styled, { css } from 'styled-components';

// how to style react-modal http://reactcommunity.org/react-modal/styles/
export const modalStyles = {
  overlay: {
    background: '#0008',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'reset',
    bottom: 'reset',
    transform: 'translate(-50%, -50%)',
    maxWidth: '50rem',
    boxShadow: '0 2rem 5rem #0004',
  },
};

export const ModalHeading = styled.h4`
  text-transform: uppercase;
  text-align: center;
  font-weight: ${(props) => props.theme.semiBold};
  font-size: 1.2em;
`;

export const ModalContent = styled.div`
  margin: 1rem auto 2rem;
`;

const OutlineButton = css`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.blue};
`;

const ContainedButton = css`
  background: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

export const ModalButton = styled.button`
  ${(props) => (props.type === 'outline' ? OutlineButton : ContainedButton)}

  text-transform: uppercase;
  border: 1px solid ${(props) => props.theme.colors.blue};
  border-radius: 4px;
  padding: 1rem;
  margin: auto;
  min-width: 10em;
  cursor: pointer;
  outline: none;
`;

export const ExpireSentence = styled.p`
  color: ${(props) => props.theme.colors.red};
  text-align: center;
  margin-top: 1rem;

  span {
    font-weight: ${(props) => props.theme.fw.semiBold};
  }
`;
