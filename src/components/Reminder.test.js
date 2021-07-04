import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Reminder from './Reminder'

test('a new reminder is added', () => {

  const reminder = {
      content: 'This is a test reminder',
      time: '12:34',
      color: '#55a4ab',
      city: 'New York City'
  }
  
  const component = render(<Reminder reminder={reminder} />)
  
  expect(component.container).toHaveTextContent(reminder.content)
  expect(component.container).toHaveTextContent(reminder.time)

  const reminderColorElement = component.container.querySelector('.reminderColor')
  expect(reminderColorElement).toHaveStyle(`background-color: ${reminder.color}`)
})