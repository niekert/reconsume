import React from 'react';
import { withContextValues } from 'reconsume';
import PrintAnalytics from './PrintAnalytics';

const Header = ({ analytics }) => (
  <header className="header">
    <h1>React analytics</h1>
    I'm the page header
    <PrintAnalytics analytics={analytics} />
  </header>
);

const enhance = withContextValues({
  layoutLocation: 'header',
});

export default enhance(Header);
