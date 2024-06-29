import styled from 'styled-components/native'

import {moderateScale} from '../../styles/index'

export const Container = styled.View`
  flex-direction: row;

  width: 100%;
  height: ${moderateScale(80)};

  align-items: center;
`

export const ButtonGoBack = styled.TouchableOpacity`
  position: absolute;
  left: 0px;

  width: ${moderateScale(40)};
  height: ${moderateScale(40)};

  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.primary50};
  border-radius: ${moderateScale(8)};
`

export const ArrowLeftIcon = styled.Image``

export const TitleDetails = styled.Text`
  width: 100%;
  text-align: center;

  font-size: 14px;
  font-family: 'Inter-Bold';
  color: ${(props) => props.theme.colors.neutro900};
`
