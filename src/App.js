import './styles.css'
import React, { useState, useEffect } from 'react'
import { DateTime } from 'luxon'
import AppHeader from './components/AppHeader'
import WeekDaysHeader from './components/WeekDaysHeader'
import DaysGrid from './components/DaysGrid'

function App() { 
  //const date = DateTime.now().plus({months: 1})
  const [date, setDate] = useState(DateTime.now())

  const handleMonthChange = (change) => {
    setDate(prevDate => prevDate.plus({months: change}))
  }

  //const date = DateTime.now()
  return (
    <div className="App">
      
      <AppHeader month={date.toFormat("LLLL '-' yyyy")} handleMonthChange={handleMonthChange}/>
      <WeekDaysHeader />
      <DaysGrid date={date}/>
    </div>
  );
}

export default App;
