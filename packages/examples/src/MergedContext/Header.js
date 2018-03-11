import React from 'react';
import { withMergedContextValues } from 'reconsume';
import PrintContextValues from './PrintContextValues';

const Header = ({ contextValues }) => (
  <header className="header">
    <h1>Merged context props examples</h1>
    <PrintContextValues analytics={contextValues} />
  </header>
);

const enhance = withMergedContextValues({
  layoutLocation: 'header',
});

export default enhance(Header);
