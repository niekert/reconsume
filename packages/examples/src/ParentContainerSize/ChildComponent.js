import React from 'react';
import styled from 'styled-components';
import { Consumer as ParentContainerSizeConsumer } from './context';

const BottomBar = styled.div`
  position: absolute;
  background: #f5f5f5;
  padding: 15px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
`;

function ChildComponent() {
  return (
    <ParentContainerSizeConsumer>
      {props => (
        <BottomBar>
          <div>Hello {JSON.stringify(props)}</div>
        </BottomBar>
      )}
    </ParentContainerSizeConsumer>
  );
}
export default ChildComponent;
