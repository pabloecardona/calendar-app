import { useState, useEffect } from 'react'

const ReminderForm = ({handleSetReminder, reminderToEdit}) => {
  const [content, setContent] = useState('')
  const [time, setTime] = useState('')
  const [color, setColor] = useState('#55a4ab')
  const [city, setCity] = useState('')
  const [id, setId] = useState()

  useEffect(()=>{
    if(reminderToEdit !== null){
      setContent(reminderToEdit.content)
      setTime(reminderToEdit.time)
      setColor(reminderToEdit.color)
      setCity(reminderToEdit.city)
      setId(reminderToEdit.id)
    }
  },[reminderToEdit])
  // const handleClick = () => {
  //   console.log(newReminder)
  //   handleSetReminder(newReminder)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const reminderToAdd = {
      id: id,
      content: content,
      time: time,
      color: color,
      city: city
    }
    if(reminderToAdd.content === '' || reminderToAdd.time === ''){
      handleSetReminder(null)
    }else{
      handleSetReminder(reminderToAdd)
    }
  }

  const handleCancel = (event) => {
    event.preventDefault()
    handleSetReminder(null)
  }

  const handleContentChange = ({ target }) => {
    setContent(target.value)
  }

  const handleTimeChange = ({ target }) => {
    setTime(target.value)
  }

  const handleColorChange = ({ target }) => {
    setColor(target.value)
  }

  const handleCityChange = ({ target }) => {
    setCity(target.value)
  }

  return (
    <form className='reminderForm' onSubmit={handleSubmit}>
      <textarea
        className="content"
        placeholder="Reminder"
        maxLength="30"
        onChange={handleContentChange}
        value={content}
      />

      <input type="time" onChange={handleTimeChange} value={time} />
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