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

export default WeekDaysHeader
