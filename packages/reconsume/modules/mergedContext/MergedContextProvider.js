import React from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext();

function MergedContextConsumer({ children, value }) {
  return (
    <Consumer quiet>
      {(parentContextValues = {}) => {
        const mergedValues = {
          ...parentContextValues,
          ...value,
        };

        return <Provider value={mergedValues}>{children(mergedValues)}</Provider>;
      }}
    </Consumer>
  );
}

MergedContextConsumer.propTypes = {
  children: PropTypes.func.isRequired,
  value: PropTypes.object, // eslint-disable-line
};

MergedContextConsumer.defaultProps = {
  value: {},
};

export default MergedContextConsumer;
