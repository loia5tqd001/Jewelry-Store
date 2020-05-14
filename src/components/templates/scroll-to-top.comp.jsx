import { useHistory } from 'react-router-dom';

// ScrollToTop component: https://github.com/NearHuscarl/nearacademy/blob/bdb7c970443faf3f33896cfec9be124687141eda/src/components/ScrollToTop.jsx
function ScrollToTop() {
  const history = useHistory();

  if (history.action === 'PUSH') {
    window.scrollTo(0, 0);
  }

  return null;
}
export default ScrollToTop;
