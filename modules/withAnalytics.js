import React from 'react';
import AnalayticsProvider from './AnalyticsProvider';

const withAnalytics = analytics => ComposedComponent => props => (
  <AnalayticsProvider analytics={analytics}>
    {mergedAnalytics => <ComposedComponent {...props} analytics={mergedAnalytics} />}
  </AnalayticsProvider>
);

export default withAnalytics;
