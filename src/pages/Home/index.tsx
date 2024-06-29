/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {Container, ContentHome, WrapperRace} from './styles'
import Header from '../../components/Header'
import RacerInfo from '../../components/RacerInfo'

import Podium from '../../components/Podium'
import Footer from '../../components/Footer'

type Props = {
  navigation: any
}

const Home: React.FC<Props> = ({navigation}) => {
  const pilots: PodiumTypes.Item[] = [
    {
      position: 1,
      name: 'Max Verstappen',
      team: 'Red Bull Racing',
    },
    {
      position: 2,
      name: 'Charles Leclerc',
      team: 'Ferrari',
    },
    {
      position: 3,
      name: 'Lewis Hamilton',
      team: 'Mercedes',
    },
  ]

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
            arrowRightCrookedIcon={require('../../assets/icons/arrow-croocked-icon.png')}
          />

          <Podium pilots={pilots} />
        </WrapperRace>

        <Footer onPress={() => navigation.navigate('Details')} />
      </ContentHome>
    </Container>
  )
}

export default Home
