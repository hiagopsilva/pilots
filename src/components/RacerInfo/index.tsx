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

type Props = {
  textRace: string
  textLocalRace: string
  textDateRace: string
  textCircuitLabel: string

  isSecond?: boolean
}

const RacerInfo: React.FC<Props> = ({
  textRace,
  textLocalRace,
  textDateRace,
  textCircuitLabel,
  isSecond,
}) => {
  return (
    <Container>
      <TextInfo isSecond={isSecond}>{textRace}</TextInfo>

      <MapImage />

      <WrapperInfoRace>
        <TextLocaleRace isSecond={isSecond}>{textLocalRace}</TextLocaleRace>

        <TextDateRace isSecond={isSecond}>{textDateRace}</TextDateRace>

        <ContainerInfoRace isSecond={isSecond}>
          <IconArrowRight />
          <TextCircuit>{textCircuitLabel}</TextCircuit>
        </ContainerInfoRace>
      </WrapperInfoRace>
    </Container>
  )
}

export default RacerInfo
