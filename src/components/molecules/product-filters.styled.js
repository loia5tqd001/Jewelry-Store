import styled from 'styled-components';

export const FilterContainer = styled.div`
  .ReactCollapse--collapse {
    transition: height ${(props) => props.theme.styles.transSlow1};
    margin-bottom: 0.5rem;
  }
`;

export const Heading = styled.h3`
  text-transform: uppercase;
  font-size: 1.2em;
  cursor: pointer;
  margin-top: 0.5rem;
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-weight: ${(props) => props.theme.fw.semiBold};

  ion-icon {
    font-size: 1.1em;
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

export const Input = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;

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
