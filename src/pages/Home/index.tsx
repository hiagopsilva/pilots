/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {Container, ContentHome, WrapperRace} from './styles'
import Header from '../../components/Header'
import RacerInfo from '../../components/RacerInfo'

import Podium from '../../components/Podium'
import Footer from '../../components/Footer'
import ArrowCrookedSVG from '../../assets/svg/ArrowCrookedSVG'

import {PILOTS_CONSTANTS} from '../../utils/constants'

type Props = {
  navigation: any
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
            textDateRace="Data Sáb., 2 de Jan., De 2023 12:00"
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
