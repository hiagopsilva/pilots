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

import ArrowCrookedSVG from '../../assets/svg/ArrowCrookedSVG'
import TracedSVG from '../../assets/svg/TracedSVG'

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
        imageTracedSvg={<TracedSVG />}
        arrowRightCrookedIcon={<ArrowCrookedSVG />}
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
