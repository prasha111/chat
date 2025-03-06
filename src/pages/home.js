import React from 'react'
import Sidebar from '../components/sidebar'
import MessageBox from '../components/messageBox'

function Home() {
  return (
    <div className='home-mainpage-container'>
        <Sidebar/>
        <MessageBox/>
    </div>
  )
}

export default Home