import React from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext();

function getViewportSize() {
  return {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  };
}

export class ViewPortSizeProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = getViewportSize();

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    window.cancelIdleCallback(this.idleCallback);
    this.idleCallback = window.requestIdleCallback(() => {
      this.setState(getViewportSize);
    });
  };

  render() {
    return <Provider value="hallo">{this.props.children}</Provider>;
  }
}

export const ViewPortSizeConsumer = Consumer;
