import {useState} from 'react'
import Reminder from './Reminder'
import ReminderForm from './ReminderForm'

const Date = ({date}) =>{
  const[reminders, setReminders] = useState([])
  const[editReminder, setEditReminder] = useState(false)

  const dayNumber = date.fullDate.toLocaleString({day: 'numeric'})

  const handleSetReminder = (newReminder) => {
    if(newReminder !== null){
      setReminders(prevReminders => [...prevReminders, newReminder])
      console.log('reminder saved')
      console.log(newReminder)
    }
    hideReminderForm()
    
  } 

  
  const showReminderForm = () => {
    setEditReminder(true)
  }

  const hideReminderForm = () => {
    console.log('esconder form');
    
    setEditReminder(false)

  }

  return (
    <li className={`day ${date.isWeekend ? 'day--weekend' : ''}`}>
      {editReminder ? (
        <ReminderForm handleSetReminder = {handleSetReminder} hideReminderForm = {hideReminderForm}/>
      ) : (
      <>
        <div className={date.isOtherMonth ? 'day--otherMonth' : '' }>
          {dayNumber}
        </div>
      
        <ul className='remindersList'>
        {reminders.map((reminder, i) => {
          return (
            <Reminder key={i} reminder = {reminder} showReminderForm={showReminderForm} />
          )})}
        </ul>

        <button className='btn-addReminder' onClick = {()=>showReminderForm()}>New Reminder</button>
      </>
      )
      }
    </li>
  )
}

export default Date