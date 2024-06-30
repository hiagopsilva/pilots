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
import {formatDate} from '../../utils/helpers'
import {FORMAT_DATE} from '../../utils/constants'

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
        textDateRace={`Data ${formatDate(
          new Date('2023-03-02T12:00:00'),
          FORMAT_DATE.LONG_DATE,
        )}`}
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
          <TextDateSecond>
            Dia{' '}
            {formatDate(
              new Date('2023-03-09T14:00:00'),
              FORMAT_DATE.SMALL_DATE,
            )}
          </TextDateSecond>
        </WrapperDateSecond>

        <WrapperDateSecond>
          <TextDateSecond>
            Dia{' '}
            {formatDate(
              new Date('2023-03-24T14:00:00'),
              FORMAT_DATE.SMALL_DATE,
            )}
          </TextDateSecond>
        </WrapperDateSecond>
      </ContainerNextDates>
    </Container>
  )
}

export default Header
