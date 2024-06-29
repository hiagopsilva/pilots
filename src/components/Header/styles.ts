import styled from 'styled-components/native'
import {moderateScale, verticalScale} from '../../styles'

import {getStatusBarHeight} from 'react-native-iphone-screen-helper'

import logo from '../../assets/images/logotipo.png'

export const Container = styled.View`
  width: 100%;

  height: ${verticalScale(290)};

  background-color: ${(props) => props.theme.colors.primary950};

  padding: 0 ${moderateScale(20)};
  padding-top: ${getStatusBarHeight()}px;
`

export const ContentLogoUser = styled.View`
  height: ${moderateScale(98)};
  justify-content: center;
`

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: ${moderateScale(37)};
  height: ${moderateScale(28)};
`

export const TextHello = styled.Text`
  font-size: 20px;
  font-family: 'Inter-Bold';
  color: ${(props) => props.theme.colors.primary50};

  margin-top: ${moderateScale(8)};
`

export const ContainerNextDates = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: ${moderateScale(62)};
`

export const ContainerDatePrimary = styled.View`
  background-color: ${(props) => props.theme.colors.neutro950};

  width: ${moderateScale(104)};
  height: ${moderateScale(22)};

  border-radius: ${moderateScale(6)};

  padding: ${moderateScale(2)} ${moderateScale(6)};

  align-items: center;
  flex-direction: row;

  margin-right: ${moderateScale(6)};
`

export const CalendarIcon = styled.View`
  width: 14px;
  height: 14px;
  background-color: #fff;
`

export const TextNextDate = styled.Text`
  font-size: 12px;
  font-family: 'Inter-Medium';
  color: ${(props) => props.theme.colors.base.white};
  letter-spacing: -5%;

  padding: 0 ${moderateScale(6)};

  text-align: center;
`

export const WrapperDateSecond = styled.View`
  background-color: transparent;

  width: ${moderateScale(81)};
  height: ${moderateScale(22)};

  border: 1px solid ${(props) => props.theme.colors.base.white};
  border-radius: ${moderateScale(6)};

  padding: ${moderateScale(2)} ${moderateScale(3)};

  align-items: center;
  justify-content: center;
  flex-direction: row;

  margin-right: ${moderateScale(6)};
`

export const TextDateSecond = styled.Text`
  font-size: 12px;
  font-family: 'Inter-Medium';
  color: ${(props) => props.theme.colors.base.white};
  letter-spacing: -5%;

  padding: 0 ${moderateScale(3)};

  text-align: center;
`
