import React from 'react';
import { withAnalytics } from 'react-ui-analytics';
import PrintAnalytics from './PrintAnalytics';

const Item = ({ indexInList, analytics }) => (
  <div className="item">
    I'm an item in index {indexInList}
    <PrintAnalytics analytics={analytics} />
  </div>
);

const enhance = withAnalytics(props => ({
  indexInList: props.indexInList,
}));

export default enhance(Item);
