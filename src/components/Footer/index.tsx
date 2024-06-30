import React from 'react'

import {
  ArrowRightIcon,
  ButtonGoPilots,
  Container,
  Description,
  TextButtonGoPilots,
  Title,
} from './styles'

type Props = {
  onPress: () => void
}
const Footer: React.FC<Props> = ({onPress}) => {
  return (
    <Container>
      <Title>História</Title>
      <Description>
        Conheça os pilotos de formula 1 que fizeram história em 1960
      </Description>

      <ButtonGoPilots onPress={onPress}>
        <TextButtonGoPilots>Ver pilotos</TextButtonGoPilots>
        <ArrowRightIcon />
      </ButtonGoPilots>
    </Container>
  )
}

export default Footer
