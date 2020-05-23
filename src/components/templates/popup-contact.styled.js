import styled from 'styled-components';
import ButtonSliding from '../atoms/button-sliding.comp';

export const modalStyles = {
  overlay: {
    background: '#03111bbb',
    zIndex: 19,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'reset',
    bottom: 'reset',
    padding: 'reset',
    minWidth: '35rem',
    zIndex: 20,
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 2rem 5rem #0004',
    borderRadius: '0.5em',
  },
};

export const Container = styled.div`
  z-index: 20;
  background: url('https://file.hstatic.net/1000327411/file/banner-bkgje_ce05031246804efc985960ef7455a403.jpg')
    no-repeat center/cover;
  display: grid;
  grid-template-columns: 2fr 3fr;

  ${(props) => props.theme.media.lessThan('regular')`
    grid-template-columns: 1fr;
  `}
`;

export const ContentWrapper = styled.div`
  grid-column: -2/-1;
  --bg-overlay: ${(props) => props.theme.colors.greyLight5};
  background: linear-gradient(var(--bg-overlay), var(--bg-overlay));
  padding: 7rem 3rem;
  font-weight: ${(props) => props.theme.fw.light};
`;

export const CloseButton = styled.button`
  background: #0005;
  color: ${(props) => props.theme.colors.white};
  outline: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: 3rem;
  cursor: pointer;
  border: none;
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

export const Heading = styled.h3`
  font-weight: ${(props) => props.theme.fw.normal};
  font-size: 1.8em;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  list-style: disc;
  padding-left: 3rem;
  margin-top: 0.5rem;
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1.5rem;
  margin: 3rem auto;

  > * {
    border-radius: 1px;
    border: none;
  }
`;

export const Input = styled.input`
  outline: none;
  padding: 1.5rem 2rem;
`;

export const Button = styled(ButtonSliding)`
  &::before,
  &::after {
    content: none;
  }

  border: 1px solid ${(props) => props.theme.colors.blueDarker2};
`;
