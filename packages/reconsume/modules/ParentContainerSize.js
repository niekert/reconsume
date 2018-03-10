import React from 'react';

export default function createParentContainerProviderSizeProvider() {
  const { Consumer, Provider } = React.createContext();

  class ParentSizeContainerProvider extends React.Component {}

  return { Consumer, Provider: ParentSizeContainerProvider };
}
