import { useState } from "react"

const ReminderForm = ({handleSetReminder}) => {
  const [content, setContent] = useState('')
  const [time, setTime] = useState(null)
  const [color, setColor] = useState('#f0f0f0')
  const [city, setCity] = useState('')
  // const handleClick = () => {
  //   console.log(newReminder)
  //   handleSetReminder(newReminder)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    const reminderToAdd = {
      content: content,
      time: time,
      color: color,
      city: city
    }

    handleSetReminder(reminderToAdd)
    setContent('')
  }

  const handleCancel = (event) => {
    event.preventDefault()
    handleSetReminder(null)
    setContent('')
  }

  const handleContentChange = ({ target }) => {
    setContent(target.value)
  }

  const handleTimeChange = ({ target }) => {
    setTime(target.value)
    console.log(target.value);
  }

  const handleColorChange = ({ target }) => {
    setColor(target.value)
    console.log(target.value);
  }

  const handleCityChange = ({ target }) => {
    setCity(target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="content"
        placeholder="Reminder"
        maxLength="30"
        onChange={handleContentChange}
        value={content}
      />

      <input type="time" onChange={handleTimeChange} />
      <input type="color" onChange={handleColorChange} value={color} />
      <input value={city} onChange={handleCityChange} placeholder="City" />
      <button type='submit' className="btn-submit">Confirm</button>

      <button
        className="btn-cancel"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </form>
  )
}

// funcionando de prueba
// const ReminderForm = ({handleSetReminder, hideReminderForm}) => {
  
//   const newReminder = {
//     content: 'New Reminder'
//   }

//   const handleClick = () => {
//     console.log(newReminder)
//     handleSetReminder(newReminder)
//     //hideReminderForm()
    
//   }

//   return (
//     <>
//     <p>Reminder Form Here</p>
//     <button onClick = {handleClick}>Aceptar</button>
//     </>
//   )
// }

export default ReminderForm