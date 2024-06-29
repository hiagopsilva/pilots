import React from 'react'
import {
  CalendarIcon,
  Container,
  ContainerDatePrimary,
  ContainerNextDates,
  ContentLogoUser,
  Logo,
  TextDateSecond,
  TextHello,
  TextNextDate,
  WrapperDateSecond,
} from './styles'
import RacerInfo from '../RacerInfo'

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

      <RacerInfo
        textRace="Proxima corrida"
        textLocalRace="GP do Bahrein"
        textDateRace="Data Sáb., 2 de Mar., 12:00"
        textCircuitLabel="Circuito Internacional do Bahrein"
        imageTraced={require('../../assets/images/traced.png')}
        arrowRightCrookedIcon={require('../../assets/icons/arrow-croocked-icon.png')}
      />

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
