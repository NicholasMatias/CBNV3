import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when route changes
    window.gtag('config', 'G-9Z34MPX4LK', {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

export default GoogleAnalytics; 