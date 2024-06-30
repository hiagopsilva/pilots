/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
  Container,
  ContainerInfoRace,
  LabelDate,
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
  imageTraced?: ImageSourcePropType | React.ReactNode | undefined
  imageTracedSvg?: any
  arrowRightCrookedIcon: React.ReactNode
  labelDate?: string

  isSecond?: boolean
}

const RacerInfo: React.FC<Props> = ({
  textRace,
  textLocalRace,
  textDateRace,
  textCircuitLabel,
  imageTraced,
  imageTracedSvg: ImageTracedSvg,
  arrowRightCrookedIcon,
  labelDate,
  isSecond,
}) => {
  return (
    <Container>
      <TextInfo isSecond={isSecond}>{textRace}</TextInfo>

      {imageTraced && (
        <MapImage
          isSecond={isSecond}
          source={imageTraced as ImageSourcePropType | undefined}
        />
      )}

      {ImageTracedSvg && <>{ImageTracedSvg}</>}

      <WrapperInfoRace>
        <TextLocaleRace isSecond={isSecond}>{textLocalRace}</TextLocaleRace>

        <TextDateRace isSecond={isSecond}>
          {labelDate && <LabelDate>{labelDate} </LabelDate>}
          {textDateRace}
        </TextDateRace>

        <ContainerInfoRace isSecond={isSecond}>
          {arrowRightCrookedIcon}
          <TextCircuit>{textCircuitLabel}</TextCircuit>
        </ContainerInfoRace>
      </WrapperInfoRace>
    </Container>
  )
}

export default RacerInfo
