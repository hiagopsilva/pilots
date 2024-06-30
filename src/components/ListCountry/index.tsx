import React from 'react'
import {View} from 'react-native'

import {COUNTRY_DATA_COMPONENT} from '../../utils/selectCountries.tsx'

type Props = {
  nationality: string
}

const ListCountry: React.FC<Props> = ({nationality}) => {
  const selectedCountry = COUNTRY_DATA_COMPONENT.find(
    (country) => country.nationality === nationality,
  )

  const renderCountrySVG = () => {
    if (selectedCountry) {
      return selectedCountry.country
    }

    return null
  }

  return <View>{renderCountrySVG()}</View>
}

export default ListCountry
