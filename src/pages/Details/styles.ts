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

export const ContainerList = styled.View``

export const TitleList = styled.Text`
  font-size: 12px;
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.textInfo};
  margin-bottom: ${moderateScale(8)};
`

export const ContentList = styled.View`
  flex: 1;
`

export const ContainerItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${moderateScale(8)};

  width: 100%;
  height: ${moderateScale(68)};

  border-radius: ${moderateScale(12)};
  border: 1px solid ${(props) => props.theme.colors.neutro200};
  padding: 12px;
`

export const CountryImage = styled.Image`
  background-color: red;
  width: ${moderateScale(28)};
  height: ${moderateScale(28)};
  border-radius: 50px;
`

export const ContentItem = styled.View`
  margin-left: 16px;
`

export const NamePilot = styled.Text`
  font-size: 16px;
  font-family: 'Inter-Bold';
  color: ${(props) => props.theme.colors.neutro950};
  margin-bottom: ${moderateScale(4)};
`

export const BirthPilot = styled.Text`
  font-size: 14px;
  font-family: 'Inter-Medium';
  color: ${(props) => props.theme.colors.neutro500};
`
