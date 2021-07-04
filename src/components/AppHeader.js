const AppHeader = ({month, handleMonthChange}) => {
  return(
    <div className='appHeader'>
      <button className='btn-prev' onClick={() => handleMonthChange(-1)}>Previous</button>
      <h1>{month}</h1>
      <button className='btn-next' onClick={() => handleMonthChange(1)}>Next</button>
      
    </div>
  )
}

export default AppHeader