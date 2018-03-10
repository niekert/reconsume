import React from 'react';
import styled from 'styled-components';
import { ContainerSizeProvider } from './context';

const Wrapper = styled.div`
  margin: 0 auto;
  box-shadow: 3px;
  padding: 16px;
  background: #ecf2fc;
  max-height: 500px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Item = styled.div`
  border-radius: 3px;
  background: #2b3454;
  margin-bottom: 10px;
  min-height: 30px;
  width: 100%;
`;

const Button = styled.button`
  flex-shrink: 0;
`;

class ParentContainerSizeProvider extends React.Component {
  state = {
    shownItems: 1,
  };

  updateItems = (delta) => {
    this.setState(currentState => ({ shownItems: currentState.shownItems + delta }));
  };

  render() {
    return (
      <React.Fragment>
        <
        <div>
          <Button onClick={() => this.updateItems(-1)}>Remove item</Button>
          <Button onClick={() => this.updateItems(1)}>Add Item</Button>
        </div>
        <Wrapper>
          {Array.from({ length: this.state.shownItems }).map((item, index) => <Item key={index} />)}
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default ParentContainerSizeProvider;
