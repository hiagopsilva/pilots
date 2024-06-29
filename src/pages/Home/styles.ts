import styled from 'styled-components/native'
import {moderateScale} from '../../styles'

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    flexGrow: 1,
  },
})`
  flex: 1;

  background-color: ${(props) => props.theme.colors.background};
`

export const WrapperRace = styled.View`
  background-color: ${(props) => props.theme.colors.base.white};

  width: 100%;
  min-height: ${moderateScale(206)};
  padding: ${moderateScale(20)};
`

export const ContentHome = styled.View`
  flex: 1;
`
