import {Platform} from 'react-native'
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-screen-helper'
import styled from 'styled-components/native'
import {moderateScale} from '../../styles'

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: Platform.OS === 'ios' ? getBottomSpace() * 4 : 80,
  },
})`
  flex: 1;
  padding: 20px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 20}px;
`

export const ContentInfo = styled.View`
  width: 100%;
  height: ${moderateScale(118)};
  padding: 20px 0;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Inter-Bold';
  color: ${(props) => props.theme.colors.neutro900};
  margin-bottom: ${moderateScale(8)};
`

export const Description = styled.Text`
  font-size: 16px;
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.neutro500};

  line-height: 24px;
`
