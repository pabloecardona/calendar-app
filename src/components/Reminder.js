const Reminder = ({ reminder, handleEditReminder}) => {
  return (
    <li 
      className = "reminder" 
      onClick={(e) => {
        e.stopPropagation() 
        handleEditReminder(reminder)
      }}
    >
      <span className = "reminderColor" style={{backgroundColor: `${reminder.color}`}}></span>{reminder.time} - {reminder.content}
    </li>
  )
}

export default Reminder