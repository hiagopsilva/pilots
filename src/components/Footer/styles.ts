import styled from 'styled-components/native'
import {moderateScale} from '../../styles'
import {getBottomSpace} from 'react-native-iphone-screen-helper'

import ArrowRightSVG from '../../assets/svg/ArrowRightSVG'

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.primary50};

  width: 100%;
  height: ${moderateScale(206)};

  bottom: 0;
  margin-top: auto;

  padding: ${moderateScale(20)};
  padding-bottom: ${getBottomSpace()}px;
`
export const Title = styled.Text`
  font-size: ${moderateScale(12)};
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.textInfo};
`

export const Description = styled.Text`
  margin-top: ${moderateScale(16)};
  font-size: ${moderateScale(14)};
  font-family: 'Inter-Bold';
  color: ${(props) => props.theme.colors.primary950};
`

export const ButtonGoPilots = styled.Pressable`
  margin-top: ${moderateScale(16)};

  background-color: ${(props) => props.theme.colors.neutro900};
  padding: ${moderateScale(16)};

  width: 100%;
  height: ${moderateScale(56)};

  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  border-radius: ${moderateScale(12)};
`

export const TextButtonGoPilots = styled.Text`
  font-size: ${moderateScale(14)};
  font-family: 'Inter-Bold';
  color: ${(props) => props.theme.colors.primary200};
`

export const ArrowRightIcon = styled(ArrowRightSVG)`
  width: ${moderateScale(24)};
  height: ${moderateScale(24)};
`
