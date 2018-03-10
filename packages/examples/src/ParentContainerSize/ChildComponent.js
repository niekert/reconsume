import React from 'react';
import { Provider as ParentContainerSizeProvider } from './context';

function ChildComponent() {
  return (
    <ParentContainerSizeProvider>
      {(props) => {
        console.log('props', props);
        return <div>Hi</div>;
      }}
    </ParentContainerSizeProvider>
  );
}
