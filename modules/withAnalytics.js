import React from 'react';
import AnalayticsProvider from './AnalyticsProvider';

const withAnalytics = input => ComposedComponent => (props) => {
  const analytics = typeof input === 'function' ? input(props) : input;

  return (
    <AnalayticsProvider analytics={analytics}>
      {mergedAnalytics => <ComposedComponent {...props} analytics={mergedAnalytics} />}
    </AnalayticsProvider>
  );
};

export default withAnalytics;
