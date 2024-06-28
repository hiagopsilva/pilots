/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {Container, Text} from './styles'
import {TouchableOpacity} from 'react-native'
import Header from '../../components/Header'

type Props = {
  navigation: any
}

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <Container>
      <Header name="Ana Paula" />

      <Text>Hello Pilots</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default Home
