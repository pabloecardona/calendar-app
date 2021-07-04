import { Interval } from 'luxon'
import Date from './Date'

const DaysGrid = ({date}) => {
  const month = date
  // const monthInterval = Interval.fromDateTimes(
  //   month.startOf('month'),
  //   month.endOf('month')
  // );
  const firstDay = date.startOf('month').startOf('week').plus({days: -1})
  const lastDay = date.endOf('month').endOf('week').plus({days: -1})
  const calendarInterval = Interval.fromDateTimes(firstDay, lastDay)
  const totalDays = calendarInterval.count('days')
  console.log(firstDay);
  console.log(lastDay);
  console.log(totalDays);
  const daysToShow = Array(totalDays)
    .fill(null)
    .map((_, startOffset) => {
      const date = firstDay.plus({days: startOffset})
      return {
        key: date.toFormat('yyyy-MM-dd'),
        fullDate: date,
        isOtherMonth: !month.hasSame(date, 'month'),
        isWeekend: date.weekday > 5 
      }
    })
   console.log(daysToShow); 
  return(
    <ul className='daysGrid'>
      {daysToShow.map((date) => {
        return(
          <Date key={date.key} date={date} />
        )
      })}
    </ul>
  )
}

export default DaysGrid