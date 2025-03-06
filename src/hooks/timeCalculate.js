import React from 'react'

const TimeCalculate = ({time = "1741257517515"})=> {
    //const time = "1741257517515"
    const date = new Date(1741257517515)
    console.log(date.getDate())
  return (
    <div className='message-contact-time'>{date.getDate()}</div>
  )
}

export default TimeCalculate