import React from 'react'
import {Container, Text} from './styles'
import HeaderDetails from '../../components/HeaderDetails'

const Details: React.FC = () => {
  return (
    <Container>
      <HeaderDetails title="História" />
      <Text>Details page</Text>
    </Container>
  )
}

export default Details
