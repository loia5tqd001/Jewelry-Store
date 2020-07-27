import styled, { css } from 'styled-components';

export const Button = styled.div`
  cursor: pointer;
  font-weight: ${(props) => props.theme.fw.bold};
  user-select: none;

  ${(props) =>
    props.disabled &&
    css`
      color: ${(props) => props.theme.colors.greyLight3};
    `};
`;

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.greyLight6};
  width: max-content;
  display: flex;
  border-radius: 2px;

  ${Button} {
    background: ${(props) => props.theme.styles.backgroundSecondary};
  }

  > * {
    width: 2.5em;
    height: 2.5em;
    font-size: 1.1em;
    ${(props) => props.theme.mixins.flexCenter}

    &:first-child {
      border-right: 1px solid ${(props) => props.theme.colors.greyLight6};
    }
    &:last-child {
      border-left: 1px solid ${(props) => props.theme.colors.greyLight6};
    }
  }

  > span {
    width: 4em;
  }
`;
