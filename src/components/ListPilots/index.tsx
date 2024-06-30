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
import CountryFlag from 'react-native-country-flags'
import ListCountry from '../ListCountry'

type Props = {
  pilots?: PilotsTypes.Driver[]
  messageNoData?: string
}

const countryCodes = {
  British: 'GB',
  American: 'US',
  Brazilian: 'BR',
  Dutch: 'NL',
  Thai: 'TH',
  Italian: 'IT',
  'New Zealander': 'NZ',
  French: 'FR',
  German: 'DE',
  Spanish: 'ES',
  Swedish: 'SE',
  Australian: 'AU',
  Canadian: 'CA',
  Finnish: 'FI',
  Japanese: 'JP',
  Austrian: 'AT',
  Danish: 'DK',
  Belgian: 'BE',
  Russian: 'RU',
  Chinese: 'CN',
  Indian: 'IN',
  Mexican: 'MX',
  Portuguese: 'PT',
  SouthAfrican: 'ZA',
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
          {pilots.map((pilot, index) => (
            <ContainerItem key={index}>
              <ListCountry nationality={pilot.nationality} />

              {/* <CountryImage source={pilot.flag} /> */}
              <ContentItem>
                <NamePilot>{pilot.givenName}</NamePilot>
                <BirthPilot>
                  Nascido em {formatDate(pilot.dateOfBirth)}
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
