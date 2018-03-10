import React from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext();

function MergedContextConsumer({ children, values }) {
  return (
    <Consumer quiet>
      {(parentContextValues) => {
        const mergedValues = {
          ...parentContextValues,
          ...values,
        };

        return <Provider value={mergedValues}>{children(mergedValues)}</Provider>;
      }}
    </Consumer>
  );
}

MergedContextConsumer.propTypes = {
  children: PropTypes.func.isRequired,
  values: PropTypes.object, // eslint-disable-line
};

MergedContextConsumer.defaultProps = {
  values: {},
};

export default MergedContextConsumer;
