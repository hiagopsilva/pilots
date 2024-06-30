import styled from 'styled-components/native'
import {moderateScale} from '../../styles'

type PropsIsSecond = {
  isSecond?: boolean
}

export const Container = styled.View`
  width: 100%;
  height: ${moderateScale(130)};

  flex-direction: row;

  justify-content: space-between;
`

export const TextInfo = styled.Text<PropsIsSecond>`
  font-size: ${moderateScale(12)};
  font-family: 'Inter-SemiBold';
  color: ${(props) =>
    props.isSecond
      ? props.theme.colors.textInfo
      : props.theme.colors.textInfoSecond};
`

export const MapImage = styled.Image.attrs({
  resizeMode: 'cover',
})<PropsIsSecond>`
  width: ${(props) =>
    props.isSecond ? moderateScale(175) : moderateScale(141)};

  height: ${(props) =>
    props.isSecond ? moderateScale(60) : moderateScale(105)};

  margin-top: ${(props) => (props.isSecond ? moderateScale(12) : 0)};
`

export const WrapperInfoRace = styled.View`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: ${moderateScale(110)};
`

export const TextLocaleRace = styled.Text<PropsIsSecond>`
  font-size: ${moderateScale(18)};
  font-family: 'Inter-Bold';
  line-height: ${moderateScale(28)};
  color: ${(props) =>
    props.isSecond
      ? props.theme.colors.base.black
      : props.theme.colors.base.white};

  margin-top: ${moderateScale(8)};
`

export const TextDateRace = styled.Text<PropsIsSecond>`
  margin-top: ${moderateScale(18)};
  font-size: ${moderateScale(14)};
  font-family: 'Inter-SemiBold';
  color: ${(props) =>
    props.isSecond ? props.theme.colors.textInfo : props.theme.colors.text};
`

export const ContainerInfoRace = styled.View<PropsIsSecond>`
  margin-top: ${moderateScale(8)};
  flex-direction: row;
  align-items: center;

  background-color: ${(props) =>
    props.isSecond ? props.theme.colors.button : props.theme.colors.primary200};

  width: ${moderateScale(210)};
  height: ${moderateScale(22)};

  border: none;
  border-radius: ${moderateScale(6)};
  padding: ${moderateScale(2)} ${moderateScale(3)};
`

export const IconArrowRight = styled.Image`
  width: ${moderateScale(14)};
  height: ${moderateScale(14)};
  margin-right: ${moderateScale(6)};
`

export const TextCircuit = styled.Text`
  font-size: ${moderateScale(12)};
  font-family: 'Inter-Regular';
  color: ${(props) => props.theme.colors.base.black};

  padding: 0 ${moderateScale(3)};
`
