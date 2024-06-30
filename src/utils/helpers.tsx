import {format, parseISO} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import {FORMAT_DATE} from './constants'

export const handleColorTrophy = (position: number) => {
  if (position === 1) {
    return '#EF9120'
  }
  if (position === 2) {
    return '#A8A29E'
  }
  return '#773C17'
}

export const formatDate = (
  date: Date | string,
  formatDate = FORMAT_DATE.LONG_DATE_WITH_YEAR,
) => {
  const dateFormatted = typeof date === 'string' ? parseISO(date) : date

  return format(dateFormatted, formatDate, {locale: ptBR})
}
