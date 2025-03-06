import React, { useState } from 'react'


function MessageBox({name, image, data}) {
    const [message,setMessage] = useState("")
    const handleMessage = (id,  message )=>{
        return(
            <>
            </>
        )
    }
  return (
    <div className='messagebox-container'>
         <header className="messagebox-header">
            <div className='messagebox-chat-text'>
                <img/>
                <span>
                    {name}
                </span>
            </div>
            <span>
                :
            </span>
        </header>
        <section className='messagebox-messages'>
            {data.map((some, index)=>{
                return (
                    some.name==="other" ? <span className='messagebox-sender'>{some.message}</span> :<span className='messagebox-receiver '>{some.message}</span>
                )
            })}
        </section>
        <div className='messagebox-writebox'>
            <span className='messagebox-plus'> + </span>
            <input onChange={(e)=>{}} className='messagebox-input'/>
            <button className='messagebox-send'>Send</button>
        </div>
    </div>
  )
}

export default MessageBox