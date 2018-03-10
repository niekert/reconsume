import React, { Component } from 'react';
import { withAnalytics } from 'react-ui-analytics';
import Analytics from './Analytics';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Analytics />
      </div>
    );
  }
}

const enhance = withAnalytics({
  location: 'examples',
});

export default enhance(App);
