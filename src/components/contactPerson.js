import React from 'react'
import TimeCalculate from '../hooks/timeCalculate'
import timeConvert from '../helper/timeConvert'

function ContactPerson({setId,id, name , image, chat, time}) {
  return (
    <div onClick={()=>{
        console.log(id)
        setId(id)
        }} className='contact-person'>
        <img className='contact-image' src={image}/>
        <section className='contact-section'>
            <span className='contact-name-span'>
               <span>{name.charAt(0).toUpperCase()+name.slice(1)} </span>
              <span className='contact-time'>
                {timeConvert(time)}
              </span>
            </span>
            <span className='contact-chat-span'>
                {chat}
            </span>
        </section>
    </div>
  )
}

export default ContactPerson