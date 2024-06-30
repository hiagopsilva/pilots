import React from 'react'
import {Line, NamePilot, NameTeam, Position, WrapperPilots} from './styles'

import TrophySVG from '../../assets/svg/TrophySVG'
import {handleColorTrophy} from '../../utils/helpers'

type Props = {
  pilots: PodiumTypes.Item[]
}

const Podium: React.FC<Props> = ({pilots}) => {
  return (
    <WrapperPilots>
      {pilots.map((pilot) => (
        <Line key={pilot.position}>
          <TrophySVG color={handleColorTrophy(pilot.position)} />
          <Position>{pilot.position}º</Position>
          <NamePilot>{pilot.name}</NamePilot>
          <NameTeam>{pilot.team}</NameTeam>
        </Line>
      ))}
    </WrapperPilots>
  )
}

export default Podium
