import React from 'react';
import { withMergedContextValues } from 'reconsume';
import styled from 'styled-components';
import Item from './Item';
import PrintContextValues from './PrintContextValues';

const Page = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
  background: #f5f5f5;
`;

const Content = ({ contextValues }) => (
  <Page className="content">
    <h2>Page content with a list of items</h2>

    <PrintContextValues values={contextValues} />
    {Array.from({ length: 5 }).map((_, index) => <Item key={index} indexInList={index} />)}
  </Page>
);

const enhance = withMergedContextValues({
  layoutLocation: 'content',
});

export default enhance(Content);
