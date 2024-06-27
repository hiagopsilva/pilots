/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {Container, Text} from './styles'
import {TouchableOpacity} from 'react-native'

type Props = {
  navigation: any
}

const Home: React.FC<Props> = ({navigation}) => {
  return (
    <Container>
      <Text>Hello Pilots</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default Home
