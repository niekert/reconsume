import AnalayticsProvider from './AnalyticsProvider';

const withAnalytics = analytics => ComposedComponent => props => {
  return (
    <AnalayticsProvider analytics={analytics}>
      {mergedAnalytics => <ComposedComponent {...props} analytics={mergedAnalytics} />}
    </AnalayticsProvider>
  );
};

export default withAnalytics;
