import React from 'react'
import {
  BirthPilot,
  ContainerItem,
  ContainerList,
  ContentIsEmpty,
  ContentItem,
  ContentList,
  NamePilot,
  TitleList,
} from './styles'
import ListCountry from '../ListCountry'
import {formatDate} from '../../utils/helpers'
import {FORMAT_DATE} from '../../utils/constants'

type Props = {
  pilots?: PilotsTypes.Driver[]
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
          {pilots.map((pilot, index) => (
            <ContainerItem key={index}>
              <ListCountry nationality={pilot.nationality} />

              <ContentItem>
                <NamePilot>{pilot.givenName}</NamePilot>
                <BirthPilot>
                  Nascido em{' '}
                  {formatDate(pilot.dateOfBirth, FORMAT_DATE.MEDIUM_DATE)}
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
