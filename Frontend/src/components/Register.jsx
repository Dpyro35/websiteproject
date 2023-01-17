import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import context from '../context/context'

const Register = () => {
  const a=useContext(context)

  const registerfun=a.registerfun
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
   const navigate= useNavigate()
  return (
    <div className='grey'>
    <form className='form' >
    <div className='label' >Name:</div>
      <input type="text" className='input' value={name} onChange={(e)=>{
            setname(e.target.value)
          }}/>
      <div className='label' >Email:</div>
      <input type="email" className='input' value={email} onChange={(e)=>{
            setemail(e.target.value)
          }}/>
      <div className='label' >Password:</div>
      <input type="password" className='input' value={password} onChange={(e)=>{
            setpassword(e.target.value)
          }}/>

    </form>
    <div>
      <button className='btn btn-green m-3' onClick={(e)=>{
         e.preventDefault();
         registerfun({name,email,password})
      }}>Register</button>
      
    <button className='btn btn-green m-3' onClick={()=>{navigate('/account')}}>Goto Login</button>
      </div>
    
   </div>
  )
}

export default Register