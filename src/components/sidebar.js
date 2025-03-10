import React, { useState } from 'react'
import MessageBox from './messageBox';
import ContactPerson from './contactPerson';

const imageUrl = "	https://secure.gravatar.com/avatar/03dc4f2e26e476958c952505c8d8f563?s=80&d=retro&r=pg"
function Sidebar({setId, add,people}) {
    const [data, setData] = useState(people)
  return (
    <div className='sidebar-container'>
        <header className="sidebar-header">
            <span className='sidebar-chat-text'>Chat</span>
            <span onClick={add}>
                :
            </span>
        </header>
        <section className='sidebar-contact'>
            {people.map((some, index)=>{
                return(
                    <>
                    <ContactPerson setId={setId} id={some.id} image={some.image}  name={some.name} chat={some.message_queue[0].message}/>
                    </>
                )
            })}
        </section>
    </div>
  )
}

export default Sidebar