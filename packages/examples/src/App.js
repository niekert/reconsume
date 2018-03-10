import React, { Component } from 'react';
import { ViewPortSizeProvider, withContextValues } from 'reconsume';
import Analytics from './Analytics';
import ViewPortSize from './ViewportSize';
import ParentContainerSize from './ParentContainerSize';

const examplesMap = {
  analytics: Analytics,
  viewportSize: ViewPortSize,
  containerSize: ParentContainerSize,
};

class App extends Component {
  state = {
    selectedExample: '',
  };

  render() {
    const { selectedExample } = this.state;
    const ExampleComponent = examplesMap[selectedExample] || Analytics; // TODO: have intro

    return (
      <ViewPortSizeProvider>
        <div className="app">
          {Object.keys(examplesMap).map(exampleName => (
            <button
              key={exampleName}
              onClick={() => this.setState({ selectedExample: exampleName })}
            >
              {exampleName}
            </button>
          ))}
          <ExampleComponent />
        </div>
      </ViewPortSizeProvider>
    );
  }
}

const enhance = withContextValues({
  location: 'examples',
});

export default enhance(App);
