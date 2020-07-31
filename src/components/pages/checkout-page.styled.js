import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartContainer = styled.section`
  max-width: 70rem;
  margin: 1em auto 5em;
  box-shadow: 0 0 2rem #0002;
  padding: 1.5em 2em;
  letter-spacing: 1px;
`;

export const StepperContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto 3em;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 70rem;
`;

export const HeaderLink = styled(Link)`
  &,
  &:link,
  &:visited {
    color: ${(props) => props.theme.colors.blueDarker3};
  }

  display: flex;
  align-items: center;
  font-weight: ${(props) => props.theme.fw.normal};

  ion-icon {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const SuccessCheckout = styled.h3`
  text-transform: uppercase;
  text-align: center;
  color: #72c641;
  margin-bottom: 2em;

  ion-icon {
    --ionicon-stroke-width: 10rem;
    font-weight: 700;
  }
`;

export const InfoHeading = styled.p`
  text-transform: uppercase;
  margin: 2em 0 1em;
  background: ${(props) => props.theme.colors.greyLight1};
  padding: 0.5rem 1.5rem;
  font-weight: ${(props) => props.theme.fw.normal};
`;

export const InfoList = styled.ul`
  list-style-type: disc;
  padding-left: 1.3em;
`;

export const TotalMoney = styled.p`
  text-align: right;
`;

export const Red = styled.span`
  color: ${(props) => props.theme.colors.red};
`;

export const Blue = styled.span`
  color: ${(props) => props.theme.colors.blue};
`;

export const NormalLink = styled.span`
  cursor: pointer;
  display: block;
  text-align: center;
  margin: 2em auto;
  color: ${(props) => props.theme.colors.blue};
`;

export const Hr = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.greyLight4};
  margin: 2em;
`;

export const LinkToHome = styled(Link)`
  display: block;
  text-align: center;
  margin: 2em auto 1em;
  padding: 1rem 5rem;
  color: ${(props) => props.theme.colors.blue};
  border: 1px solid currentColor;
  border-radius: 4px;
  font-weight: ${(props) => props.theme.fw.semiBold};
  text-transform: uppercase;
  max-width: 30rem;
`;
