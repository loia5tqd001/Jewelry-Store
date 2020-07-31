import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Heading = styled.h2`
  margin-bottom: 1rem;
`;

export const SubHeading = styled.p`
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background: currentColor;
    width: 15rem;
    height: 0.3rem;
    left: 50%;
    top: 150%;
    transform: translateX(-50%);
  }
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em auto;
`;

export const HeaderLink = styled(Link)`
  &,
  &:link,
  &:visited {
    color: ${(props) => props.theme.colors.blue};
  }
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.theme.fw.normal};
  ion-icon {
    margin-right: 0.5rem;
  }
`;

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 1.1em;
  border-top: 1px solid ${(props) => props.theme.colors.greyLight1};
  padding: 0.5em 0 1em;
  span {
    color: ${(props) => props.theme.colors.red};
    font-weight: ${(props) => props.theme.fw.semiBold};
  }
`;

export const CartContainer = styled.div`
  padding: 7em 7em;
`;

export const CartProducts = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.greyLight3};
`;

export const EmptyCartContainer = styled(CartContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ToHomeLink = styled(Link)`
  border: 1px solid currentColor;
  border-radius: 2px;
  padding: 1rem 5em;
  margin-top: 1em;
  font-weight: ${(props) => props.theme.fw.semiBold};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.blue};
`;

export const ButtonActions = styled.div`
  margin: 2em 0 2em auto;
  text-align: right;
  
  > * {
    margin-left: 1em;
  }
`;
