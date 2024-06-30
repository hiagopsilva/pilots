import styled from 'styled-components/native'
import {moderateScale} from '../../styles'

export const ContainerList = styled.View``

export const TitleList = styled.Text`
  font-size: 12px;
  font-family: 'Inter-SemiBold';
  color: ${(props) => props.theme.colors.textInfo};
  margin-bottom: ${moderateScale(8)};
`

export const ContentIsEmpty = styled.View`
  text-align: center;
  flex: 1;

  margin: 0 auto;

  width: ${moderateScale(200)};
  height: ${moderateScale(200)};

  justify-content: flex-end;
  align-items: center;
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
