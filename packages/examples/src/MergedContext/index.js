import React from 'react';
import Header from './Header';
import Content from './Content';

export default function MergedPropsExample() {
  return (
    <React.Fragment>
      <Header />
      <Content />
    </React.Fragment>
  );
}
