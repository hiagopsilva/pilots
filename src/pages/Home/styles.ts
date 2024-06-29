import styled from 'styled-components/native'
import {moderateScale} from '../../styles'
import {getBottomSpace} from 'react-native-iphone-screen-helper'

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${(props) => props.theme.colors.background};
`

export const WrapperRace = styled.View`
  background-color: ${(props) => props.theme.colors.base.white};

  width: 100%;
  min-height: ${moderateScale(206)};
  padding: ${moderateScale(20)};
`

export const WrapperPilots = styled.View`
  width: 100%;
  height: ${moderateScale(100)};

  flex-direction: column;

  justify-content: space-between;

  border: 1px solid ${(props) => props.theme.colors.neutro300};
  border-radius: ${moderateScale(12)};
  padding: 12px;
`

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ChampionIcon = styled.View`
  width: 20px;
  height: 20px;
  background-color: red;
`

export const Position = styled.Text`
  margin: 0 ${moderateScale(8)};

  font-size: 14px;
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.neutro950};
`

export const NamePilot = styled.Text`
  font-size: 14px;
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.base.black};
`

export const NameTeam = styled.Text`
  margin-left: ${moderateScale(8)};

  font-size: 14px;
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.neutro400};
  letter-spacing: -5%;
`

export const Footer = styled.View`
  background-color: ${(props) => props.theme.colors.primary50};

  width: 100%;
  height: ${moderateScale(206)};

  bottom: 0;
  margin-top: auto;

  padding: 20px;
  padding-bottom: ${getBottomSpace()}px;
`
export const Title = styled.Text`
  font-size: 12px;
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.textInfo};
`

export const Description = styled.Text`
  margin-top: ${moderateScale(16)};
  font-size: 16px;
  font-family: 'Inter-Bold';
  color: ${(props) => props.theme.colors.primary950};
`

export const ButtonGoPilots = styled.TouchableOpacity`
  margin-top: ${moderateScale(16)};

  background-color: ${(props) => props.theme.colors.neutro900};
  padding: 16px;

  width: 100%;
  height: ${moderateScale(56)};

  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  border-radius: 12px;
`

export const TextButtonGoPilots = styled.Text`
  font-size: 14px;
  font-family: 'Inter-Bold';
  color: ${(props) => props.theme.colors.primary200};
`

export const ArrowRightIcon = styled.View`
  width: 24px;
  height: 24px;
  background-color: red;
`
