import styled from 'styled-components/native'
import {moderateScale} from '../../styles'

export const WrapperPilots = styled.View`
  height: ${moderateScale(100)};

  flex-direction: column;

  justify-content: space-between;

  border: 1px solid ${(props) => props.theme.colors.neutro300};
  border-radius: ${moderateScale(12)};
  padding: ${moderateScale(12)};
`

export const Line = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Position = styled.Text`
  margin: 0 ${moderateScale(8)};

  font-size: ${moderateScale(14)};
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.neutro950};
`

export const NamePilot = styled.Text`
  font-size: ${moderateScale(14)};
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.base.black};
`

export const NameTeam = styled.Text`
  margin-left: ${moderateScale(8)};

  font-size: ${moderateScale(14)};
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.neutro400};
`
