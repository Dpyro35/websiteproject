import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
const Home = () => {
  const navigate=useNavigate()
  const [search, setsearch] = useState('')
  return (
    <div className='container'>
      <div className="search">
      <input className='search-input' type="text" name="search" value={search} onChange={(e)=>{
      setsearch(e.target.value)
      }}/>
      <button className='btn btn-search' onClick={()=>{
        if(search!==''){
          navigate(`/home/${search}`)
        }else{
          navigate('/home/null')
        }
        }}>Search</button>
      </div>
    </div>
   
  )
}

export default Home