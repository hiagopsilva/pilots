import React from 'react'
import {
  Container,
  ContainerInfoRace,
  IconArrowRight,
  MapImage,
  TextCircuit,
  TextDateRace,
  TextInfo,
  TextLocaleRace,
  WrapperInfoRace,
} from './styles'
import {ImageSourcePropType} from 'react-native'

type Props = {
  textRace: string
  textLocalRace: string
  textDateRace: string
  textCircuitLabel: string
  imageTraced: ImageSourcePropType | undefined
  arrowRightCrookedIcon: ImageSourcePropType | undefined

  isSecond?: boolean
}

const RacerInfo: React.FC<Props> = ({
  textRace,
  textLocalRace,
  textDateRace,
  textCircuitLabel,
  imageTraced,
  arrowRightCrookedIcon,
  isSecond,
}) => {
  return (
    <Container>
      <TextInfo isSecond={isSecond}>{textRace}</TextInfo>

      <MapImage isSecond={isSecond} source={imageTraced} />

      <WrapperInfoRace>
        <TextLocaleRace isSecond={isSecond}>{textLocalRace}</TextLocaleRace>

        <TextDateRace isSecond={isSecond}>{textDateRace}</TextDateRace>

        <ContainerInfoRace isSecond={isSecond}>
          <IconArrowRight source={arrowRightCrookedIcon} />
          <TextCircuit>{textCircuitLabel}</TextCircuit>
        </ContainerInfoRace>
      </WrapperInfoRace>
    </Container>
  )
}

export default RacerInfo
