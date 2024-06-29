/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
  ArrowRightIcon,
  ButtonGoPilots,
  ChampionIcon,
  Container,
  Description,
  Footer,
  Line,
  NamePilot,
  NameTeam,
  Position,
  TextButtonGoPilots,
  Title,
  WrapperPilots,
  WrapperRace,
} from './styles'
import {Text, TouchableOpacity} from 'react-native'
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

      <Footer>
        <Title>História</Title>
        <Description>
          Conheça os pilotos de formula 1 que fizeram história em 1960
        </Description>

        <ButtonGoPilots onPress={() => navigation.navigate('Details')}>
          <TextButtonGoPilots>Ver pilotos</TextButtonGoPilots>
          <ArrowRightIcon />
        </ButtonGoPilots>
      </Footer>
    </Container>
  )
}

export default Home
