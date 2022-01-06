import { LinearGradient } from "expo-linear-gradient";

import styled from "styled-components/native";

type InputProps = {
  hasError: boolean;
};

export const Background = styled(LinearGradient).attrs({
  colors: ["#7159c1", "#ab59c1"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
`;

export const Container = styled.View`
  padding-top: 32px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  padding: 0 24px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin: 12px 0 16px;
  padding: 0 24px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999",
})<InputProps>`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #fff;
  border-color: ${({ hasError }) => (hasError ? "#dc2626" : "#fff")};
  border-width: 2px;
`;

export const Submit = styled.TouchableOpacity`
  background: #6bd4c1;
  margin-left: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0 16px;
`;
