import React from 'react';
import { func } from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';

export default function createContainerSizeContext() {
  const { Consumer, Provider } = React.createContext();

  class ContainerSizeProvider extends React.Component {
    static propTypes = {
      children: func.isRequired,
    };

    state = {
      width: null,
      height: null,
    };

    componentDidMount() {
      this.resizeObserver.observe(this.element);
    }

    componentWillUnmount() {}

    setRef = (el) => {
      this.element = el;
    };

    handleResize = (entries) => {
      console.log('entries is', entries);
      this.setState(width => width + 1);
    };

    resizeObserver = new ResizeObserver(this.handleResize);

    render() {
      return (
        <Provider value={this.state}>
          {this.props.children({ setElementRef: this.setRef })}
        </Provider>
      );
    }
  }

  return { Consumer, Provider: ContainerSizeProvider };
}
