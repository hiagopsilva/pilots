import {format, parseISO} from 'date-fns'
import {ptBR} from 'date-fns/locale'

export const handleColorTrophy = (position: number) => {
  if (position === 1) {
    return '#EF9120'
  }
  if (position === 2) {
    return '#A8A29E'
  }
  return '#773C17'
}

export const formatDate = (dateString: string) => {
  return format(parseISO(dateString), "dd 'de' MMMM 'de' yyyy", {locale: ptBR})
}
