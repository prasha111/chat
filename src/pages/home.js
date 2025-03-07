import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import MessageBox from '../components/messageBox'

const imageUrl = "	https://secure.gravatar.com/avatar/03dc4f2e26e476958c952505c8d8f563?s=80&d=retro&r=pg"
const rohitUrl = "https://timesofindia.indiatimes.com/photo/69257289.cms"
const viraturl = "https://documents.bcci.tv/resizedimageskirti/164_compress.png"
const modijiurl = "https://www.udayavani.com/wp-content/uploads/2025/03/pm-modi-5-598x465.jpg"
const prashanturl = ""
const michelurl = "https://steelsupplements.com/cdn/shop/articles/shutterstock_549938767_1600x.jpg?v=1620743830"
const shubmanurl = "https://documents.iplt20.com/ipl/IPLHeadshot2024/62.png"
const messageData = {
    name:"Rohit",
    image:imageUrl,
    messagequeue :[{
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

]
}
const people = [{id:1,name:"rohit", image:imageUrl, chat:"hello", message_queue:[{
    name:"other",
    message:"Hello",
    time:"1741257517515",
    media:""
}]},{id:2,name:"virat", image:imageUrl, chat:"how you", message_queue:[{
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
,{id:3,name:"prashant", image:imageUrl, chat:"hi",message_queue:[{
    name:"other",
    message:"Hi",
    time:"1741257517515",
    media:""
}]},{id:4,name:"rohan", image:imageUrl, chat:"hows cricket going", message_queue:[{
    name:"other",
    message:"Hows cricket going",
    time:"1741257517515",
    media:""
}]},{id:5,name:"hardik", image:imageUrl, chat:"Hey man", message_queue:[{
    name:"other",
    message:"Hey man",
    time:"1741257517515",
    media:""
}]},{id:5,name:"shubman", image:imageUrl, chat:"Bhai kaya scene ha", message_queue:[{
    name:"other",
    message:"Bhai kaya scene ha",
    time:"1741257517515",
    media:""
}]}, {id:6,name:"Michel phelps", image:imageUrl, chat:"Hey man hows your swimming practice", message_queue:[{
    name:"other",
    message:"Hey man hows your swimming practice",
    time:"1741257517515",
    media:""
}]},{id:7,name:"shubman", image:imageUrl, chat:"Bhai kaya scene ha", message_queue:[{
    name:"other",
    message:"Bhai kaya scene ha",
    time:"1741257517515",
    media:""
}]},{id:8,name:"Modi", image:imageUrl, chat:"You will win gold for india", message_queue:[
    {
        name:"other",
        message:"You will win gold for india",
        time:"1741257517515",
        media:""
    }
]}];

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
        const messagequeue = messageData.messagequeue;
        messagequeue.push( {
            name:"self",
            message:message,
            time:Date.now(),
            media:media
        })
        messageData.messagequeue = messagequeue
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