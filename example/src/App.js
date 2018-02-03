import React, { Component } from 'react';
import { withAnalytics } from 'react-ui-analytics';
import Header from './Header';
import Content from './Content';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content />
      </div>
    );
  }
}

const enhance = withAnalytics({
  location: 'homepage',
});

export default enhance(App);
