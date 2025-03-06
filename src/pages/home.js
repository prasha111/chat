import React from 'react'
import Sidebar from '../components/sidebar'
import MessageBox from '../components/messageBox'

const imageUrl = ""
const messageData = {
    name:"Rohit",
    image:imageUrl,
    messagequeue :[{
        name:"other",
        message:"Hi Prashant",
        time:"dscvds",
        media:""
    },{
        name:"self",
        message:"Hi sir",
        time:"cece",
        media:""
    },
    {
        name:"other",
        message:"Practice kaise chal rahi ha olympics ki",
        time:"cece",
        media:""
    },
    {
        name:"self",
        message:"Sir practice roz kr raha hu apne scedule ke hisab se or roz thoda improve ka try kr raha hu dekhte ha olympics me",
        time:"cescew",
        media:""
    }

]
}

function Home() {
  return (
    <div className='home-mainpage-container'>
        <Sidebar/>
        <MessageBox name={"Rohit"} image={"https//www.image.com"} data={messageData.messagequeue}/>
    </div>
  )
}

export default Home