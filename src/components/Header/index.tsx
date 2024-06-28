import React from 'react'
import {
  CalendarIcon,
  Container,
  ContainerDatePrimary,
  ContainerInfoRace,
  ContainerNextDates,
  ContainerRace,
  ContentLogoUser,
  IconArrowRight,
  Logo,
  MapImage,
  TextCircuit,
  TextDateRace,
  TextDateSecond,
  TextHello,
  TextInfo,
  TextLocaleRace,
  TextNextDate,
  WrapperDateSecond,
  WrapperInfoRace,
} from './styles'

type Props = {
  name?: string
}

const Header: React.FC<Props> = ({name = 'Ana Paula'}) => {
  return (
    <Container>
      <ContentLogoUser>
        <Logo />
        <TextHello>Olá, {name}</TextHello>
      </ContentLogoUser>

      <ContainerRace>
        <TextInfo>Próxima corrida</TextInfo>

        <MapImage />

        <WrapperInfoRace>
          <TextLocaleRace>GP do Bahrein</TextLocaleRace>

          <TextDateRace>Data Sáb., 2 de Mar., 12:00</TextDateRace>

          <ContainerInfoRace>
            <IconArrowRight />
            <TextCircuit>Circuito Internacional do Bahrein</TextCircuit>
          </ContainerInfoRace>
        </WrapperInfoRace>
      </ContainerRace>

      <ContainerNextDates>
        <ContainerDatePrimary>
          <CalendarIcon />
          <TextNextDate>Próximas dias</TextNextDate>
        </ContainerDatePrimary>

        <WrapperDateSecond>
          <TextDateSecond>Dia 9, 14:00</TextDateSecond>
        </WrapperDateSecond>

        <WrapperDateSecond>
          <TextDateSecond>Dia 24, 14:00</TextDateSecond>
        </WrapperDateSecond>
      </ContainerNextDates>
    </Container>
  )
}

export default Header
