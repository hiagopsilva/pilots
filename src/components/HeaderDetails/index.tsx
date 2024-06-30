import React from 'react'

import {Container, ArrowLeftIcon, TitleDetails, ButtonGoBack} from './styles'

type Props = {
  title: string
  onPress: () => void
}
const HeaderDetails: React.FC<Props> = ({title, onPress}) => {
  return (
    <Container>
      <ButtonGoBack onPress={onPress}>
        {/* <ArrowLeftIcon source={require('../../assets/icons/arrow-left.png')} /> */}
        <ArrowLeftIcon />
      </ButtonGoBack>

      <TitleDetails>{title}</TitleDetails>
    </Container>
  )
}

export default HeaderDetails
