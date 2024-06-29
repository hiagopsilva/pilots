import React from 'react'

import {Container, ArrowLeftIcon, TitleDetails, ButtonGoBack} from './styles'

type Props = {
  title: string
}
const HeaderDetails: React.FC<Props> = ({title}) => {
  return (
    <Container>
      <ButtonGoBack>
        <ArrowLeftIcon source={require('../../assets/icons/arrow-left.png')} />
      </ButtonGoBack>

      <TitleDetails>{title}</TitleDetails>
    </Container>
  )
}

export default HeaderDetails
