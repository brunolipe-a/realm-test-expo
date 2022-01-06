import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 16px;
  position: relative;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text.attrs({ numberOfLines: 2 })`
  color: #666;
  margin-top: 4px;
  line-height: 20px;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`;

export const StatCount = styled.Text`
  margin-left: 4px;
  color: #666;
`;

export const DeleteButton = styled.TouchableOpacity`
  padding: 16px;
  right: 0;
  position: absolute;
`;
