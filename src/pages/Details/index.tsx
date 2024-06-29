import React from 'react'
import {
  BirthPilot,
  Container,
  ContainerItem,
  ContainerList,
  ContentInfo,
  ContentItem,
  ContentList,
  CountryImage,
  Description,
  NamePilot,
  Title,
  TitleList,
} from './styles'
import HeaderDetails from '../../components/HeaderDetails'

const Details: React.FC = () => {
  const pilotos = [
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

  return (
    <Container>
      <HeaderDetails title="História" />

      <ContentInfo>
        <Title>História da F1</Title>
        <Description>
          Conheça os nomes que fizeram história, desde os pioneiros até os
          campeões inesquecíveis.
        </Description>
      </ContentInfo>

      <ContainerList>
        <TitleList>Pilotos</TitleList>

        <ContentList>
          {pilotos.map((piloto, index) => (
            <ContainerItem key={index}>
              <CountryImage source={piloto.flag} />
              <ContentItem>
                <NamePilot>{piloto.name}</NamePilot>
                <BirthPilot>Nascido em {piloto.date}</BirthPilot>
              </ContentItem>
            </ContainerItem>
          ))}
        </ContentList>
      </ContainerList>
    </Container>
  )
}

export default Details
