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
