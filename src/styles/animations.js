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

export const loader = keyframes`
  0% {
    top: var(--base-size);
    height: calc(var(--base-size) * 8);
  }
  50%,
  100% {
    top: calc(var(--base-size) * 3);
    height: calc(var(--base-size) * 4);
  }
`;

export const blurIn = keyframes`
  0% {
    filter: blur(15px);
  }
  100% {
    filter: blur(0);
  }
`;
