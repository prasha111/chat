import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import MessageBox from '../components/messageBox'
import { people, imageUrl } from '../data/Data';


function Home() {
    const [data, setData] = useState(people);
    const [id, setId] = useState(people[0].id)
    const [current, setCurrent] = useState(people[0]?.message_queue)
    const chatupdate = (id, message, media="")=>{
        let each = [];
        setData((prev)=>prev.map((person)=>{
            if(person.id === id){
                return {
                    ...person,
                    message_queue:[
                        ...person.message_queue,
                        {
                         name:"self",
                        message:message,
                        time:Date.now(),
                        media:media

                        }
                    ]
                }
            }
            return person
        }))
        console.log(each, "each")
    }


    useEffect(()=>{
        const some = data?.filter((ele)=>ele.id === id);
        setCurrent((prev)=> some[0])
        console.log(some[0].message_queue, "message")

    },[data, id])
    const handlekey = (event, message) =>{
        if(event.key === 'Enter'){
            console.log("enter")
        }
    }
    const handleDelete = (id, Index) =>{
        setData((prev)=>prev.map((person, index)=>{
            if(person.id === id){
                return{ ...person, message_queue: person.message_queue.filter((_, i) => i !== Index) }

            }
            else{
               return person
            }
        }))
    }

  return (
    <div className='home-mainpage-container'>
        <Sidebar setId={setId} people={data}/>
        <MessageBox handleDelete={handleDelete} handlekey={handlekey} chatupdate={chatupdate} id={id} image={current?.image}  name={current?.name} data={current?.message_queue}/>
    </div>
  )
}

export default Home