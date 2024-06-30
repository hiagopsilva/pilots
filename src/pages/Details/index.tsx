/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect, useState} from 'react'
import {Container, ContentInfo, Description, Title} from './styles'
import HeaderDetails from '../../components/HeaderDetails'
import ListPilots from '../../components/ListPilots'
import Loading from '../../components/Loading'

type Props = {
  navigation: any
}

const Details: React.FC<Props> = ({navigation}) => {
  const [pilots, setPilots] = useState<PilotsTypes.Driver[]>(
    [] as PilotsTypes.Driver[],
  )
  const [loading, setLoading] = useState(false)

  const goBack = () => {
    navigation.goBack()
  }

  const handlePilots = async () => {
    try {
      const response = await fetch('https://ergast.com/api/f1/drivers.json')

      const data = await response.json()

      if (response.status === 200) {
        const filteredDrivers = data.MRData.DriverTable.Drivers.filter(
          (driver: PilotsTypes.Driver) =>
            new Date(driver.dateOfBirth) >= new Date('1960-01-01'),
        )

        setPilots(filteredDrivers)
      }
    } catch (error) {
      alert('Erro ao buscar os pilotos.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    handlePilots()
  }, [])

  return (
    <>
      {loading && <Loading />}

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
    </>
  )
}

export default Details
