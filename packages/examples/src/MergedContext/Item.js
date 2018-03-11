import React from 'react';
import { withMergedContextValues } from 'reconsume';
import PrintContextValues from './PrintContextValues';

const Item = ({ indexInList, contextValues }) => (
  <div className="item">
    Item at index {indexInList}
    <PrintContextValues values={contextValues} />
  </div>
);

const enhance = withMergedContextValues(props => ({
  indexInList: props.indexInList,
}));

export default enhance(Item);
