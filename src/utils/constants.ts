import {PodiumTypes} from '../utils/types/podium'

export const PILOTS_CONSTANTS: PodiumTypes.Item[] = [
  {
    position: 1,
    name: 'Max Verstappen',
    team: 'Red Bull Racing',
  },
  {
    position: 2,
    name: 'Charles Leclerc',
    team: 'Ferrari',
  },
  {
    position: 3,
    name: 'Lewis Hamilton',
    team: 'Mercedes',
  },
]

export const FORMAT_DATE = {
  LONG_DATE_WITH_YEAR: "EEEEEE., d 'de' MMM., 'De' yyyy HH:mm",
  LONG_DATE: "EEEEEE., d 'De' MMM., HH:mm",
  SMALL_DATE: 'd, HH:mm',
  MEDIUM_DATE: "dd 'de' MMMM 'de' yyyy",
}
