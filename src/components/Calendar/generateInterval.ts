import { addDays, eachDayOfInterval, format } from 'date-fns'
import { DayProps } from '.'
import theme from '../../styles/theme'

export function generateInterval(start: DayProps, end: DayProps) {
  let interval = {}

  eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp) })
  .forEach(item => {
    const date = format(addDays(item, 1), 'yyyy-MM-dd')

    interval = {
      ...interval,
      [date]: {
        color: start.dateString === date || end.dateString === date
          ? theme.colors.main
          : theme.colors.main_light,

        textColor: start.dateString === date || end.dateString === date
          ? theme.colors.main_light : theme.colors.main
      }
    }
  })

  return interval
}