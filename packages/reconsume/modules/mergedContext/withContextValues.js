import React from 'react';
import MergedContextProvider from './MergedContextProvider';

const withContextValues = input => ComposedComponent => (props) => {
  const childValues = typeof input === 'function' ? input(props) : input;

  return (
    <MergedContextProvider value={childValues}>
      {mergedValues => <ComposedComponent {...props} contextValues={mergedValues} />}
    </MergedContextProvider>
  );
};

export default withContextValues;
