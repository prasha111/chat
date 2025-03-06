import React from 'react'
import MessageBox from './messageBox';
import ContactPerson from './contactPerson';

const imageUrl = "	https://secure.gravatar.com/avatar/03dc4f2e26e476958c952505c8d8f563?s=80&d=retro&r=pg"
const people = [{name:"rohit", image:imageUrl, chat:"hello"},{name:"virat", image:imageUrl, chat:"how you"},{name:"prashant", image:imageUrl, chat:"hi"}, ,{name:"rohan", image:imageUrl, chat:"hows cricket going"},{name:"hardik", image:imageUrl, chat:"Hey man"},{name:"shubman", image:imageUrl, chat:"Bhai kaya scene ha"}];
function Sidebar() {
    
  return (
    <div className='sidebar-container'>
        <header className="sidebar-header">
            <span className='sidebar-chat-text'>Chat</span>
            <span>
                :
            </span>
        </header>
        <section>
            {people.map((some, index)=>{
                return(
                    <>
                    <ContactPerson image={some.image}  name={some.name} chat={some.chat}/>
                    </>
                )
            })}
        </section>
    </div>
  )
}

export default Sidebar