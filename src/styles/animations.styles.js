import { keyframes } from 'styled-components';

/**
 * Sample Usage:
 * 
 
 const fadeIn = keyframes`
   0% {
     opacity: 0;
   }
   100% {
     opacity: 1;
   }
 `

 const FadeInButton = styled.button`
   animation: 1s ${fadeIn} ease-out;
 `

 * 
 */

export const pulse = keyframes`
  0%, 10% {
    opacity: 0.05;
    transform: scaleX(1.1) scaleY(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(.9);
  }
`;
