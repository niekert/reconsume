import React, { Component } from 'react';
import { ViewPortSizeProvider, withMergedContextValues } from 'reconsume';
import MergedContext from './MergedContext';
import ViewPortSize from './ViewportSize';
import ParentContainerSize from './ParentContainerSize';

const examplesMap = {
  mergedContext: MergedContext,
  viewportSize: ViewPortSize,
  containerSize: ParentContainerSize,
};

class App extends Component {
  state = {
    selectedExample: '',
  };

  render() {
    const { selectedExample } = this.state;
    const ExampleComponent = examplesMap[selectedExample] || MergedContext; // TODO: have intro

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

const enhance = withMergedContextValues({
  location: 'examples',
});

export default enhance(App);
