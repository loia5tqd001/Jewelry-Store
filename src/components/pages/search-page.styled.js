import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  max-width: 120rem;
  margin: 0 auto 1em;
  padding: 0.2em 3em;
  background: ${(props) => props.theme.colors.blueDarker2};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  ${(props) => props.theme.media.lessThan('smedium')`
    padding: 0.2em 3%;
  `}
`;

export const Logo = styled(Link)`
  font-size: 2.5em;
  margin-right: 1.5em;
  display: inline-block;
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fw.bold};
  text-shadow: 0 1px 2px #0003;
  ${(props) => props.theme.media.lessThan('smedium')`
    margin-right: 0.5em;
    font-size: 2em;
  `}
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 100rem;
  margin: 1em auto;
`;

export const SearchInput = styled.input`
  padding: 0.6em 2em 0.6em 1em;
  outline: none;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.greyLight3};
  width: 100%;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.greyLight3};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.5rem;
  outline: none;
`;

export const CartIcon = styled(Link)`
  margin-left: auto;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.mixins.flexCenter}
  ion-icon {
    font-size: 1.5em;
  }
`;
