import {Platform} from 'react-native'
import {getStatusBarHeight} from 'react-native-iphone-screen-helper'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 20}px;
`

export const Text = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 24px;
`
