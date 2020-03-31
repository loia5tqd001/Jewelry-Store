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

export const stickyHeader = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%)
  }

  100% {
    opacity: 1;
    transform: translateY(0)
  }
`;
