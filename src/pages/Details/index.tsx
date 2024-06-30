/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {Container, ContentInfo, Description, Title} from './styles'
import HeaderDetails from '../../components/HeaderDetails'
import ListPilots from '../../components/ListPilots'

type Props = {
  navigation: any
}

const Details: React.FC<Props> = ({navigation}) => {
  const pilots = [
    {
      name: 'Carlo',
      date: '10 de Julho de 1932',
      flag: require('../../assets/images/italy.png'),
    },
    {
      name: 'Walter',
      date: '15 de Dezembro de 1913',
      flag: require('../../assets/images/italy.png'),
    },
    {
      name: 'Kurt',
      date: '05 de Novembro de 1921',
      flag: require('../../assets/images/italy.png'),
    },
    {
      name: 'Fred',
      date: '21 de Agosto de 1913',
      flag: require('../../assets/images/italy.png'),
    },
    {
      name: 'René',
      date: '07 de Abril de 1948',
      flag: require('../../assets/images/italy.png'),
    },
    {
      name: 'Keith',
      date: '15 de Julho de 1920',
      flag: require('../../assets/images/italy.png'),
    },
    {
      name: 'Mario',
      date: '28 de Fevereiro de 1940',
      flag: require('../../assets/images/italy.png'),
    },
    {
      name: 'Chris',
      date: '20 de Junho de 1943',
      flag: require('../../assets/images/italy.png'),
    },
  ]

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <HeaderDetails title="História" onPress={goBack} />

      <ContentInfo>
        <Title>História da F1</Title>
        <Description>
          Conheça os nomes que fizeram história, desde os pioneiros até os
          campeões inesquecíveis.
        </Description>
      </ContentInfo>
      <ListPilots pilots={pilots} />
    </Container>
  )
}

export default Details
