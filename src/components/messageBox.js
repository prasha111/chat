import React, { useState } from 'react'
import timeConvert from '../helper/timeConvert'

function MessageBox({chatupdate,id,name, image, data}) {
    const [message,setMessage] = useState("")
    const handleMessage = (e)=>{
        chatupdate(id, message, "" )
    }
    const handlekey = (event) =>{

    }
    
  return (
    <div className='messagebox-container'>
         <header className="messagebox-header">
            <div className='messagebox-chat-text'>
            <img className='contact-image' src={image}/>
                <span>
                    {name}
                </span>
            </div>
            <span className='messagebox-chat-symbol'>
                :
            </span>
        </header>
        <section className='messagebox-messages'>
            {data?.map((some, index)=>{
                return ( some.name==="other" ? <span className='messagebox-sender'>{some.message}
                    <span className='messagebox-time'>
                       
                        { timeConvert(some.time)}
                    </span>
                    </span>  :<span className='messagebox-receiver '>{some.message}
                    <span className='messagebox-time'>
                       
                       { timeConvert(some.time)}
                   </span>
                    </span>
                )
            })}
        </section>
        <div className='messagebox-writebox'>
            <span className='messagebox-plus'> + </span>
            <input value={message} onKeyDown={handlekey} onChange={(e)=>{setMessage(e.target.value)}} className='messagebox-input'/>
            <button onClick={handleMessage} className='messagebox-send'>Send</button>
        </div>
    </div>
  )
}

export default MessageBox