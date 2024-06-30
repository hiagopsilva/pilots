import React from 'react'
import {View} from 'react-native'

import BritishSVG from '../../assets/svg/BritishSVG.tsx'
import ItalySVG from '../../assets/svg/ItalySVG.tsx'
import BelgiumSVG from '../../assets/svg/BelgiumSVG.tsx'
import UnitedStatesSVG from '../../assets/svg/UnitedStatesSVG.tsx'
import GermanySVG from '../../assets/svg/GermanySVG.tsx'
import DutchSVG from '../../assets/svg/DutchSVG.tsx'
import ThailandSVG from '../../assets/svg/ThailandSVG.tsx'
import FranceSVG from '../../assets/svg/FranceSVG.tsx'
import SpainSVG from '../../assets/svg/SpainSVG.tsx'
import NewZeelandSVG from '../../assets/svg/NewZeelandSVG.tsx'
import SwedenSVG from '../../assets/svg/SwedenSVG.tsx'

type Props = {
  nationality: string
}

const ListCountry: React.FC<Props> = ({nationality}) => {
  const countryData = [
    {
      nationality: 'Italian',
      country: <ItalySVG />,
    },
    {
      nationality: 'British',
      country: <BritishSVG />,
    },
    {
      nationality: 'Belgian',
      country: <BelgiumSVG />,
    },
    {
      nationality: 'American',
      country: <UnitedStatesSVG />,
    },
    {
      nationality: 'German',
      country: <GermanySVG />,
    },
    {
      nationality: 'Dutch',
      country: <DutchSVG />,
    },
    {
      nationality: 'Thai',
      country: <ThailandSVG />,
    },
    {
      nationality: 'French',
      country: <FranceSVG />,
    },
    {
      nationality: 'Spanish',
      country: <SpainSVG />,
    },
    {
      nationality: 'New Zealander',
      country: <NewZeelandSVG />,
    },
    {
      nationality: 'Swedish',
      country: <SwedenSVG />,
    },
  ]

  const selectedCountry = countryData.find(
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
