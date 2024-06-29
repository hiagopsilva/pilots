import styled from 'styled-components/native'
import {moderateScale} from '../../styles'

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

export const Text = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 24px;
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
