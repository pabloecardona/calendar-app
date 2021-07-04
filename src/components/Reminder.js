const Reminder = ({ reminder, showReminderForm}) => {
  return (
    <li className = "reminder" onClick = {showReminderForm}>
      <span className = "reminderColor" style={{backgroundColor: `${reminder.color}`}}></span>{reminder.time} - {reminder.content}
    </li>
  )
}

export default Reminder