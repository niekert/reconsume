import React from 'react';
import { Provider, Consumer } from './AnalyticsContext';

class AnalyticsProvider extends React.Component {
  render() {
    const { children, ...props } = this.props;

    return (
      <Consumer>
        {(analytics) => {
          const mergedAnalytics = {
            ...analytics,
            ...this.props.analytics,
          };
          return (
            <Provider value={mergedAnalytics}>
              {children({ analytics: mergedAnalytics, ...props })}
            </Provider>
          );
        }}
      </Consumer>
    );
  }
}

export default AnalyticsProvider;
