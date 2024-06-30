import styled from 'styled-components/native'
import {moderateScale, verticalScale} from '../../styles'

import {getStatusBarHeight} from 'react-native-iphone-screen-helper'
import {Platform} from 'react-native'
import LogoSVG from '../../assets/svg/Logo'
import CalendarSVG from '../../assets/svg/CalendarSVG'

export const Container = styled.View`
  width: 100%;

  min-height: ${verticalScale(220)};

  background-color: ${(props) => props.theme.colors.primary950};

  padding: 0 ${moderateScale(20)};
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
`

export const ContentLogoUser = styled.View`
  height: ${moderateScale(98)};
  justify-content: center;

  flex-direction: column;
`

export const Logo = styled(LogoSVG)`
  width: ${moderateScale(37)};
  height: ${moderateScale(28)};
`

export const TextHello = styled.Text`
  font-size: ${moderateScale(20)};
  font-family: 'Inter-Bold';
  color: ${(props) => props.theme.colors.primary50};

  margin-top: ${moderateScale(4)};
`

export const ContainerNextDates = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: ${moderateScale(62)};
`

export const ContainerDatePrimary = styled.View`
  background-color: ${(props) => props.theme.colors.neutro950};

  width: ${moderateScale(106)};
  height: ${moderateScale(22)};

  border-radius: ${moderateScale(6)};

  padding: ${moderateScale(2)} ${moderateScale(6)};

  align-items: center;
  flex-direction: row;

  margin-right: ${moderateScale(6)};
`

export const CalendarIcon = styled(CalendarSVG)`
  width: ${moderateScale(14)};
  height: ${moderateScale(14)};
`

export const TextNextDate = styled.Text`
  font-size: ${moderateScale(12)};
  font-family: 'Inter-Medium';
  color: ${(props) => props.theme.colors.base.white};

  padding: 0 ${moderateScale(3)};

  text-align: center;
`

export const WrapperDateSecond = styled.View`
  background-color: transparent;

  min-width: ${moderateScale(75)};
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
  font-size: ${moderateScale(12)};
  font-family: 'Inter-Medium';
  color: ${(props) => props.theme.colors.base.white};

  padding: 0 ${moderateScale(3)};

  text-align: center;
`
