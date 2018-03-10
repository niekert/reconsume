import React from 'react';
import { withAnalytics } from 'react-ui-analytics';
import Item from './Item';
import PrintAnalytics from './PrintAnalytics';

const Content = ({ analytics }) => (
  <div className="content">
    <h2>Page content rendering some children:</h2>

    <PrintAnalytics analytics={analytics} />
    {Array.from({ length: 5 }).map((_, index) => (
      <Item key={index} indexInList={index} />
    ))}
  </div>
);

const enhance = withAnalytics({
  layoutLocation: 'content',
});

export default enhance(Content);
