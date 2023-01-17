import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import context from '../context/context'
import './announcement.css'
const Announcement = () => {
  const a = useContext(context)
  const getallannounce=a.getallannounce;
  const announce=a.announce;
  useEffect(() => {
   getallannounce()
  }, [])
  
  return (
    <div className='grey overflow'>
        <div className="form announce-form overflow w-80">
           <h1 className='mt-1'>Announcements</h1>
            {
              announce.map((elem)=>{
             return  <div className="product announce">
             <img src={elem.url} alt="No Image" />
             <div className="title">{elem.title}</div>
             <div className="description"> {elem.description}</div>
         </div>
              })
            }
           
          
        </div>
    </div>
  )
}

export default Announcement