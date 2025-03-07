import React, { useState } from 'react'
import MessageBox from './messageBox';
import ContactPerson from './contactPerson';

const imageUrl = "	https://secure.gravatar.com/avatar/03dc4f2e26e476958c952505c8d8f563?s=80&d=retro&r=pg"
const people = [{name:"rohit", image:imageUrl, chat:"hello"},{name:"virat", image:imageUrl, chat:"how you", message_queue:[{
        name:"other",
        message:"Hi Prashant",
        time:"1741257517515",
        media:""
    },{
        name:"self",
        message:"Hi sir",
        time:"1741257517515",
        media:""
    },
    {
        name:"other",
        message:"Practice kaise chal rahi ha olympics ki",
        time:"1741257517515",
        media:""
    },
    {
        name:"self",
        message:"Sir practice roz kr raha hu apne scedule ke hisab se or roz thoda improve ka try kr raha hu dekhte ha olympics me",
        time:"1741257517515",
        media:""
    }

]}
,{name:"prashant", image:imageUrl, chat:"hi"}, ,{name:"rohan", image:imageUrl, chat:"hows cricket going"},{name:"hardik", image:imageUrl, chat:"Hey man"},{name:"shubman", image:imageUrl, chat:"Bhai kaya scene ha"}, {name:"Michel phelps", image:imageUrl, chat:"Hey man hows your swimming practice"},{name:"shubman", image:imageUrl, chat:"Bhai kaya scene ha"},{name:"Modi", image:imageUrl, chat:"You will win gold for india"}];
function Sidebar({setId, people}) {
    const [data, setData] = useState(people)
  return (
    <div className='sidebar-container'>
        <header className="sidebar-header">
            <span className='sidebar-chat-text'>Chat</span>
            <span>
                :
            </span>
        </header>
        <section className='sidebar-contact'>
            {people.map((some, index)=>{
                return(
                    <>
                    <ContactPerson setId={setId} id={some.id} image={some.image}  name={some.name} chat={some.chat}/>
                    </>
                )
            })}
        </section>
    </div>
  )
}

export default Sidebar