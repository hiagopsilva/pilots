/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {Container, ContentHome, WrapperRace} from './styles'
import Header from '../../components/Header'
import RacerInfo from '../../components/RacerInfo'

import Podium from '../../components/Podium'
import Footer from '../../components/Footer'
import ArrowCrookedSVG from '../../assets/svg/ArrowCrookedSVG'

import {PILOTS_CONSTANTS} from '../../utils/constants'
import {formatDate} from '../../utils/helpers'
import {NavigationType} from '../../utils/types/navigation'

type Props = {
  navigation: NavigationType
}

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <Container>
      <ContentHome>
        <Header name="Ana Paula" />

        <WrapperRace>
          <RacerInfo
            isSecond
            textRace="Última corrida"
            textLocalRace="GP de Abu Dhabi"
            labelDate="Data"
            textDateRace={formatDate(new Date('2023-01-02T12:00:00'))}
            textCircuitLabel="Circuito de Yas Marina Circuit"
            imageTraced={require('../../assets/images/car.png')}
            arrowRightCrookedIcon={<ArrowCrookedSVG />}
          />

          <Podium pilots={PILOTS_CONSTANTS} />
        </WrapperRace>

        <Footer onPress={() => navigation.navigate('Details')} />
      </ContentHome>
    </Container>
  )
}

export default Home
