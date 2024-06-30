import React from 'react'
import {ImageSourcePropType} from 'react-native'
import {
  BirthPilot,
  ContainerItem,
  ContainerList,
  ContentIsEmpty,
  ContentItem,
  ContentList,
  CountryImage,
  NamePilot,
  TitleList,
} from './styles'

type Props = {
  pilots?: {
    name: string
    date: string
    flag: ImageSourcePropType | undefined
  }[]
  messageNoData?: string
}
const ListPilots: React.FC<Props> = ({
  pilots,
  messageNoData = 'Nenhum piloto encontrado.',
}) => {
  return (
    <ContainerList>
      <TitleList>Pilotos</TitleList>

      {pilots?.length === 0 && (
        <ContentIsEmpty>
          <TitleList>{messageNoData}</TitleList>
        </ContentIsEmpty>
      )}

      {pilots && pilots.length > 0 && (
        <ContentList>
          {pilots.map((piloto, index) => (
            <ContainerItem key={index}>
              <CountryImage source={piloto.flag} />
              <ContentItem>
                <NamePilot>{piloto.name}</NamePilot>
                <BirthPilot>Nascido em {piloto.date}</BirthPilot>
              </ContentItem>
            </ContainerItem>
          ))}
        </ContentList>
      )}
    </ContainerList>
  )
}

export default ListPilots
