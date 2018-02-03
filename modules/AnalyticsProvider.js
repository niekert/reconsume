import React from 'react';
import PropTypes from 'prop-types';
import { Provider, Consumer } from './AnalyticsContext';

function AnalyticsProvider({ children, ...props }) {
  return (
    <Consumer quiet>
      {(analytics) => {
        const mergedAnalytics = {
          ...analytics,
          ...props.analytics,
        };

        return (
          <Provider value={mergedAnalytics}>
            {children({ ...props, analytics: mergedAnalytics })}
          </Provider>
        );
      }}
    </Consumer>
  );
}

AnalyticsProvider.propTypes = {
  children: PropTypes.func.isRequired,
  analytics: PropTypes.object, // eslint-disable-line
};

AnalyticsProvider.defaultProps = {
  analytics: {},
};

export default AnalyticsProvider;
