import './styles.css'
import React from 'react'
import { DateTime, Interval } from 'luxon'

const AppHeader = ({month}) => {
  return(
    <div className='appHeader'>
      <h1>{month}</h1>
    </div>
  )
}

const WeekDaysHeader = () => {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return(
    <div className='weekDaysHeader'>
      {weekDays.map((weekDay) => {
        return(
          <h3 key={weekDay}>{weekDay}</h3>
        )
      })}
    </div>
  )
}

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
        number: date.toLocaleString({day: 'numeric'}),
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

const Date = ({date}) =>{
  return (
    <li className={`day ${date.isWeekend ? 'day--weekend' : ''}`}>
      <div className={date.isOtherMonth ? 'day--otherMonth' : '' }>
        {date.number}
      </div>
      
      <ul className='remindersList'>

      </ul>
    </li>
  )
}
function App() { 
  const date = DateTime.now()
  
  return (
    <div className="App">
     <AppHeader month={date.toFormat("LLLL '-' yyyy")}/>
     <WeekDaysHeader />
     <DaysGrid date={date}/>
    </div>
  );
}

export default App;
