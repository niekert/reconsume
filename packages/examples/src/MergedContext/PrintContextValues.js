import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  font-size: 16px;
  display: block;
`;

const PrintContextValues = ({ values }) => (
  <Text>Printing merged context values {JSON.stringify(values, null, 2)}</Text>
);

export default PrintContextValues;
