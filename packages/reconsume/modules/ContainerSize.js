import React from 'react';
import { func, bool } from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';

export default function createContainerSizeContext() {
  const { Consumer, Provider } = React.createContext();

  class ContainerSizeProvider extends React.Component {
    static propTypes = {
      children: func.isRequired,
      includeScrollHeight: bool,
    };

    static defaultProps = {
      includeScrollHeight: false,
    };

    state = {
      bottom: null,
      height: null,
      left: null,
      right: null,
      top: null,
      width: null,
    };

    componentDidMount() {
      this.resizeObserver.observe(this.element);
    }

    componentWillUnmount() {}

    setRef = (el) => {
      this.element = el;
    };

    setScrollState = (targetElement) => {
      const { scrollTop, scrollHeight } = targetElement;
      this.setState({
        scrollTop,
        scrollHeight,
      });
    };

    handleResize = (entries) => {
      const [entry] = entries; // TODO: Support multiple entries.
      const {
        bottom, left, height, right, top, width,
      } = entry.contentRect;

      this.setState({
        bottom,
        left,
        height,
        right,
        top,
        width,
      });

      if (this.props.includeScrollHeight) {
        this.setScrollState(entry.target);
      }
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
