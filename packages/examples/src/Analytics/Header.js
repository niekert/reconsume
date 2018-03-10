import React from 'react';
import PrintAnalytics from './PrintAnalytics';
import { withAnalytics } from 'react-ui-analytics';

const Header = ({ analytics }) => (
  <header className="header">
    <h1>React analytics</h1>
    I'm the page header
    <PrintAnalytics analytics={analytics} />
  </header>
);

const enhance = withAnalytics({
  layoutLocation: 'header',
});

export default enhance(Header);
