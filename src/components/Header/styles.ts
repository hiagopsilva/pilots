import styled from 'styled-components/native'
import {moderateScale, verticalScale} from '../../styles'

import LogoImage from '../../assets/images/logotipo.png'
import {getStatusBarHeight} from 'react-native-iphone-screen-helper'

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
  source: {
    uri: require('../../assets/images/logotipo.png'),
  },
})`
  width: ${moderateScale(37)};
  height: ${moderateScale(28)};
  background-color: red;
`

export const TextHello = styled.Text`
  font-size: 20px;
  font-family: 'Inter-Bold';
  color: ${(props) => props.theme.colors.primary50};

  margin-top: ${moderateScale(8)};
`

export const ContainerRace = styled.View`
  width: 100%;
  height: ${moderateScale(130)};

  flex-direction: row;

  justify-content: space-between;
`

export const TextInfo = styled.Text`
  font-size: 12px;
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.textInfoSecond};
`

export const MapImage = styled.Image.attrs({})`
  width: ${moderateScale(141)};
  height: ${moderateScale(105)};
  background-color: red;
`

export const WrapperInfoRace = styled.View`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: ${moderateScale(110)};
`

export const TextLocaleRace = styled.Text`
  font-size: 18px;
  font-family: 'Inter-Bold';
  line-height: 28px;
  color: ${(props) => props.theme.colors.base.white};
  letter-spacing: -2%;

  margin-top: ${moderateScale(8)};
`

export const TextDateRace = styled.Text`
  margin-top: ${moderateScale(18)};
  font-size: 14px;
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.text};
  letter-spacing: -5%;
`

export const ContainerInfoRace = styled.View`
  margin-top: ${moderateScale(8)};
  flex-direction: row;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary200};

  width: ${moderateScale(210)};
  height: ${moderateScale(22)};

  border: none;
  border-radius: 6px;
  padding: 2px 3px;
`

export const IconArrowRight = styled.View`
  width: ${moderateScale(14)};
  height: ${moderateScale(14)};
  background-color: red;
  margin-right: ${moderateScale(6)};
`

export const TextCircuit = styled.Text`
  font-size: 12px;
  font-family: 'Inter-Regular';
  color: ${(props) => props.theme.colors.base.black};
  letter-spacing: -5%;

  padding: 0 ${moderateScale(3)};
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
