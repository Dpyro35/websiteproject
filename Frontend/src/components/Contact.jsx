import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='grey'>
        <div className="form w-80 w-100 align-not ">
            <div className="contact m-1">
              <img src="../James.JPG" alt=""  />
             <h3>  Admin name(James)</h3>
             <div className="oneline">
              <h3>Contact Us through email:</h3> <p>jamescruz@mymail.mapua.edu.ph</p>
             </div>
             <div className="oneline">
              <h3>Contact Us through Phone:</h3> <p>090089477425</p>
             </div>
            </div>
            <div className="contact m-1">
            <img src="../Jereco.JPG" alt=""  />
             <h3>  Admin name(Jasario)</h3>
            <div className="oneline">
              <h3>Contact Us through mail:</h3> <p>jasario@mymail.mapua.edu.ph</p>
             </div>
             <div className="oneline">
              <h3>Contact Us through Phone:</h3> <p>09956649589</p>
             </div>
             
            </div>
            <p className='text-center center'>Mapua Univerity, Muralla St., Intramuros, Metro Manila
Philippines</p>
        </div>
    </div>
  )
}

export default Contact