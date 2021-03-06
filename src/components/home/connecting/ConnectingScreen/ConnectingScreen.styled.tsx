import { View, Text } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

export const ConnectingText = styled(Text)`
  color: white;
  margin-top: 10px;
  opacity: 0.7;
  font-size: 14px;
`;
