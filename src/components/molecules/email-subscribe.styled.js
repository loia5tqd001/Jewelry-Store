import styled from 'styled-components';
import ButtonSliding from '../atoms/button-sliding.comp';

export const Input = styled.input`
  padding: 1.5rem 2rem;
  width: 100%;
  border-radius: 0;
  border: 1px solid ${(props) => props.theme.colors.greyLight3};
  outline: none;
`;

export const Button = styled(ButtonSliding)`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const InputGroup = styled.div`
  position: relative;

  ${(props) => props.theme.media.between('regular', 'large')`
    ${Button} {
      right: 0.5rem;
    }
    ${Input} {
      padding: 1.5rem 1rem;
    }
  `}
`;

export const Sentence = styled.p`
  margin-top: 0.5rem;
`;
