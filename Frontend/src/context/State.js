import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import context from './context.js';
const host="http://localhost:5000"
const State = (props) => {
  const [login, setlogin] = useState()
  
  const [isadmin, setisadmin] = useState(false)
  const [me, setme] = useState()
  const [announce, setannounce] = useState([])
  const [allbooks, setallbooks] = useState([])
  const [loading, setloading] = useState(false)
  const [onebook, setonebook] = useState({})
//add users
const loginfun=async(data)=>{
  const response=await fetch(`${host}/api/user/login`,{
         method:"POST",
         headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Methods": "GET",
                 "Content-Type":"application/json"
 
             },
          body:JSON.stringify(
             data
          )   
         })
    const json =await response.json();
    if(json.success){

      localStorage.setItem('pahina-login',json.token)
      alert('Login Successfully')
    window.location.reload()
      
    }else{
      alert('Wrong credentials')
    }
 
        
  }
const registerfun=async(data)=>{
  const response=await fetch(`${host}/api/user/register`,{
         method:"POST",
         headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Methods": "GET",
                 "Content-Type":"application/json"
 
             },
          body:JSON.stringify(
             data
          )   
         })
    const json =await response.json();
    if(json.success==true){
      localStorage.setItem('pahina-login',json.token)
      alert('Successfully created')
    }else{
      alert(json.message)

    }
        
  }
const addbook=async(data)=>{
  setloading(true)
  console.log(data.image)
  const response=await fetch(`${host}/api/admin/addbook`,{
         method:"POST",
         headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Methods": "GET",
                 "Content-Type":"application/json",
                 "Authentication":localStorage.getItem('pahina-login')

 
             },
          body:JSON.stringify(
             data
          )   
         })
    const json =await response.json();
    if(json.success==true){
      alert('Successfully created')
      setloading(false)
      window.location.reload()
    }else{
      alert(json.message)
      setloading(false)
   
    }
        
  }
const addannouncement=async(data)=>{
  setloading(true)
  const response=await fetch(`${host}/api/admin/addannouncement`,{
         method:"POST",
         headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Methods": "GET",
                 "Content-Type":"application/json",
                 "Authentication":localStorage.getItem('pahina-login')

 
             },
          body:JSON.stringify(
             data
          )   
         })
    const json =await response.json();
    if(json.success==true){
      alert('Successfully created')
      setloading(false)
      window.location.reload()
    }else{
      alert(json.message)
       setloading(false)
    } 
        
  }
  //
const delannouncement=async(id)=>{
  const response=await fetch(`${host}/api/admin/removeannouncement`,{
         method:"POST",
         headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Methods": "GET",
                 "Content-Type":"application/json",
                 "Authentication":localStorage.getItem('pahina-login')

 
             },
          body:JSON.stringify({
            id
          }) 
         })
    const json =await response.json();
    if(json.success==true){
      alert('Successfully deleted')
      window.location.reload()
      
    }else{
      alert(json.message)
    } 
        
  }
  //
  //
const delbook=async(id)=>{
  const response=await fetch(`${host}/api/admin/delbook`,{
         method:"POST",
         headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Methods": "GET",
                 "Content-Type":"application/json",
                 "Authentication":localStorage.getItem('pahina-login')

 
             },
          body:JSON.stringify({
            id
          }) 
         })
    const json =await response.json();
    if(json.success==true){
      alert('Successfully deleted')
      window.location.reload()
      
    }else{
      alert(json.message)
    } 
        
  }
  //
const getme=async()=>{
  const response=await fetch(`${host}/api/user/me`,{
         method:"GET",
         headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Methods": "GET",
                 "Content-Type":"application/json",
                 "Authentication":localStorage.getItem('pahina-login')
 
             }
         })
    const json =await response.json();
    setme(json.me)
    console.log(json.me)
    if(json.me.role==="admin"){
      setisadmin(true)
     }
   
   
  }
const getallannounce=async(search)=>{
  let link=`${host}/api/user/announcements`
  if(search!==undefined){
    link+= `?keyword=${search}`
  }
  const response=await fetch(link,{
         method:"GET",
         headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Methods": "GET",
                 "Content-Type":"application/json",
                 "Authentication":localStorage.getItem('pahina-login')
 
             }
         })
    const json =await response.json();
    setannounce(json.announce)
    
   
   
  }
const getallbooks=async(search)=>{
  let link=`${host}/api/user/books`
  if(search!==undefined){
    link+= `?keyword=${search}`
  }
  const response=await fetch(link,{
         method:"GET",
         headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Methods": "GET",
                 "Content-Type":"application/json",
                 "Authentication":localStorage.getItem('pahina-login')
 
             }
         })
    const json =await response.json();
    setallbooks(json.books)
    
   
   
  }
   
const getonebook=async(id)=>{
  let link=`${host}/api/user/book/${id}`
 
  const response=await fetch(link,{
         method:"GET",
         headers: {
                 "Access-Control-Allow-Origin": "*",
                 "Access-Control-Allow-Methods": "GET",
                 "Content-Type":"application/json",
                 "Authentication":localStorage.getItem('pahina-login')
 
             }
         })
    const json =await response.json();
    setonebook(json.book)
    
   
   
  }
   
 
  return (
    <context.Provider value={{delbook,delannouncement,onebook,getonebook,announce,getallannounce,loading,getallbooks,allbooks,
      loginfun,registerfun,getme,me,isadmin,addbook,addannouncement}}>
    {props.children}
    </context.Provider>
  )
}

export default State