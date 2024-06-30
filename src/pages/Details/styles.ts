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
  padding: ${moderateScale(20)};
  padding-top: ${Platform.OS === 'ios'
    ? getStatusBarHeight()
    : moderateScale(20)};
`

export const ContentInfo = styled.View`
  width: 100%;
  height: ${moderateScale(130)};
  padding: ${moderateScale(20)} 0;

  margin-bottom: ${moderateScale(32)};
`

export const Title = styled.Text`
  font-size: ${moderateScale(20)};
  font-family: 'Inter-Bold';
  color: ${(props) => props.theme.colors.neutro900};
  margin-bottom: ${moderateScale(8)};
`

export const Description = styled.Text`
  font-size: ${moderateScale(16)};
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.neutro500};

  line-height: ${moderateScale(24)};
`
