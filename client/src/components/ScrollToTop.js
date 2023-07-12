import React from 'react';

const ScrollToTop = ({ children, location }) => {
  // console.log('location', location);
  // React.useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
};

export default ScrollToTop;
