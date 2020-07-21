import styled from 'styled-components';
import StyledLink from '../../atoms/styled-link.comp';

export const BackLink = styled(StyledLink)`
  margin-top: 1rem;
  
  ion-icon {
    margin-right: 1rem;
    margin-top: 0.4rem;
  }
`

export const RadioInputGroup = styled.div`
  margin-bottom: 1rem;
  
  > * {
    margin-right: 1rem;
  }
`;

export const Label = styled.label`
  --checkbox-size: 1.4rem;
  font-weight: ${(props) => props.theme.fw.light};
  position: relative;
  padding-left: calc(var(--checkbox-size) + 0.5rem);
  ${(props) => props.theme.mixins.hoverColorPrimary}
  transition: color ${(props) => props.theme.styles.transFast1};
  user-select: none;
  font-size: 1.1em;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    top: calc(50% - var(--checkbox-size) * 0.5);
    width: var(--checkbox-size);
    height: var(--checkbox-size);
  }

  &::before {
    border-radius: 2px;
    border: 1px solid ${(props) => props.theme.colors.greyLight4};
    transition: border ${(props) => props.theme.styles.transSlow1};
  }
  &:hover::before {
    border-color: ${(props) => props.theme.colors.greyLight2};
  }

  &::after {
    color: ${(props) => props.theme.colors.blueDarker3};
    width: calc(var(--checkbox-size) * 0.5);
    height: calc(var(--checkbox-size) * 0.7);
    transform: translate(50%, 10%) rotate(45deg);
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    display: none;
    /* How to draw a checkmark css: https://stackoverflow.com/a/60322224/9787887 */
  }
`;

export const RadioInput = styled.input`
  width: 0;
  height: 0;
  
  &:focus + ${Label}::before {
    box-shadow: 0 0 1rem 0 #0003;
  }

  &:checked + ${Label}::after {
    display: block;
  }
  &[type='checkbox']:checked + ${Label}::before {
    border-color: ${(props) => props.theme.colors.greyLight2};
  }
  &[type='radio']:checked + ${Label}::before {
    border-color: ${(props) => props.theme.colors.blueDarker2};
    background: ${(props) => props.theme.colors.blueDarker2};
  }

  &[type='radio'] + ${Label} {
    &::before {
      border-radius: 50%;
    }
    &::after {
      content: none;
    }
  }
`;
