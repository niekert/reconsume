import React from 'react';
import { ViewPortSizeConsumer } from 'reconsume';
import styled from 'styled-components';

const Box = styled.div`
  background: #e5edf3;
  border-radius: 3px;
  height: 200px;
  width: 200px;
  margin: 0 auto;
`;

const SizeLogger = styled.div`
  margin: 0 auto;
`;

export const DesktopBox = styled.div`
  width: 500px;
  background: green;
  margin: 0 auto;
  height: 500px;
`;

export const Size = styled.h1``;

function ViewportSize() {
  return (
    <ViewPortSizeConsumer>
      {({ innerWidth, innerHeight }) => (
        <React.Fragment>
          <Size>
            Width: {innerWidth} - Height: {innerHeight}
          </Size>
          {innerWidth <= 500 && <Box>Only visible on mobile</Box>}
          {innerWidth > 500 && <DesktopBox>Only visible on Destop </DesktopBox>}
        </React.Fragment>
      )}
    </ViewPortSizeConsumer>
  );
}

export default ViewportSize;
