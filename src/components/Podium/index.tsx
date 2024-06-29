import React from 'react'
import {
  ChampionIcon,
  Line,
  NamePilot,
  NameTeam,
  Position,
  WrapperPilots,
} from './styles'
import {handleIconTrophy} from '../../utils/helpers'

type Props = {
  pilots: PodiumTypes.Item[]
}

const Podium: React.FC<Props> = ({pilots}) => {
  return (
    <WrapperPilots>
      {pilots.map((pilot) => (
        <Line key={pilot.position}>
          <ChampionIcon source={handleIconTrophy(pilot.position)} />
          <Position>{pilot.position}º</Position>
          <NamePilot>{pilot.name}</NamePilot>
          <NameTeam>{pilot.team}</NameTeam>
        </Line>
      ))}
    </WrapperPilots>
  )
}

export default Podium
