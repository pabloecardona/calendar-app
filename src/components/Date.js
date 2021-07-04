import {useState} from 'react'
import Reminder from './Reminder'
import ReminderForm from './ReminderForm'

const Date = ({date}) =>{
  const[reminders, setReminders] = useState([])
  const[editReminder, setEditReminder] = useState(false)
  const[reminderToEdit, setReminderToEdit] = useState(null)
  const dayNumber = date.fullDate.toLocaleString({day: 'numeric'})

  const handleSetReminder = (newReminder) => {
    if(newReminder !== null){
      
      setReminders(prevReminders => {
        let updated = false
        let updatedReminders = prevReminders.map((reminder) => {
          if(reminder.id === newReminder.id){
              updated = true
              return newReminder
            }
          return reminder  
          }) 
        if(updated === false){
          updatedReminders = [...prevReminders, newReminder]
        }
        const sortedReminders = updatedReminders.sort((a, b) => {
          if (b.time < a.time){return 1;}
          if (b.time > a.time){return -1;} 
          return 0;
        })

        sortedReminders.map((reminder, i) => reminder.id = i)
        
        return sortedReminders
      })
      console.log('reminder saved')
    }
    setReminderToEdit(null)
    hideReminderForm()
  } 

  
  const showReminderForm = () => {
    setEditReminder(true)
  }

  const hideReminderForm = () => {
    setEditReminder(false)
  }

  const handleEditReminder = (reminder) => {
    setReminderToEdit(reminder)
    showReminderForm()
  }

  return (
    <li className={`day ${date.isWeekend ? 'day--weekend' : ''}`}>
      {editReminder ? (
        <ReminderForm handleSetReminder = {handleSetReminder} reminderToEdit={reminderToEdit}/>
      ) : (
      <>
        <div className={date.isOtherMonth ? 'day--otherMonth' : '' }>
          {dayNumber}
        </div>
      
        <ul className='remindersList'>
        {reminders.map((reminder, i) => {
          return (
            <Reminder 
              key={i} 
              reminder = {reminder} 
              showReminderForm={showReminderForm} 
              handleEditReminder={handleEditReminder}
              />
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