/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
  ChampionIcon,
  Container,
  Line,
  NamePilot,
  NameTeam,
  Position,
  Text,
  WrapperPilots,
  WrapperRace,
} from './styles'
import {TouchableOpacity} from 'react-native'
import Header from '../../components/Header'
import RacerInfo from '../../components/RacerInfo'

type Props = {
  navigation: any
}

const Home: React.FC<Props> = ({navigation}) => {
  const pilots = [
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
      <Header name="Ana Paula" />

      <WrapperRace>
        <RacerInfo
          isSecond
          textRace="Última corrida"
          textLocalRace="GP de Abu Dhabi"
          textDateRace="Data Sáb., 2 de Jan., De 2023 12:00"
          textCircuitLabel="Circuito de Yas Marina Circuit"
        />

        <WrapperPilots>
          {pilots.map((pilot) => (
            <Line key={pilot.position}>
              <ChampionIcon />
              <Position>{pilot.position}º</Position>
              <NamePilot>{pilot.name}</NamePilot>
              <NameTeam>{pilot.team}</NameTeam>
            </Line>
          ))}
        </WrapperPilots>
      </WrapperRace>

      <Text>Hello Pilots</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default Home
