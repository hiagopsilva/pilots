import React from 'react'
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
import {format, parseISO} from 'date-fns'
import {ptBR} from 'date-fns/locale'

type Props = {
  pilots?: PilotsTypes.Driver[]
  messageNoData?: string
}
const ListPilots: React.FC<Props> = ({
  pilots,
  messageNoData = 'Nenhum piloto encontrado.',
}) => {
  const formatDate = (dateString) => {
    const date = parseISO(dateString)
    return format(date, "dd 'de' MMMM 'de' yyyy", {locale: ptBR})
  }

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
              {/* <CountryImage source={piloto.flag} /> */}
              <ContentItem>
                <NamePilot>{piloto.givenName}</NamePilot>
                <BirthPilot>
                  Nascido em {formatDate(piloto.dateOfBirth)}
                </BirthPilot>
              </ContentItem>
            </ContainerItem>
          ))}
        </ContentList>
      )}
    </ContainerList>
  )
}

export default ListPilots
