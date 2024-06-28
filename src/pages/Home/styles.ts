import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${(props) => props.theme.colors.background};
`

export const Text = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 24px;
`
