import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import context from '../context/context'
import './login.css'
const Login = () => {
  const a=useContext(context)
  const isadmin=a.isadmin
  const loginfun=a.loginfun
  const addanounce=a.addannouncement
  const addbook=a.addbook
  const loading=a.loading
  const getme=a.getme
  const me=a.me
  const announce=a.announce
  const allbooks=a.allbooks
  const getallannounce=a.getallannounce
  const getallbooks=a.getallbooks
  const delbook=a.delbook
  const delannouncement=a.delannouncement
  const [login, setlogin] = useState(false)
  const [books, setbooks] = useState(true)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [image, setimage] = useState('')
  const [desc, setdesc] = useState('')
  const [title, settitle] = useState('')
  const [search, setsearch] = useState('')
  //books
  const [author, setauthor] = useState('')
  const [link, setlink] = useState('')
  const [isbn, setisbn] = useState('')
  const [publisher, setpublisher] = useState('')
  const [date_published, setdate_published] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    getallannounce()
    getallbooks()
    if (localStorage.getItem('pahina-login')!=='null') {
      getme()
      
      setlogin(true)

      
      
    }
    
  }, [])

  const logout=()=>{
    localStorage.setItem('pahina-login',null)
    setlogin(false)
  }
  return (
    login ? <>
      {
        isadmin ?
          <div className="grey h-100 grid-admin align-center">
            <div className="form admin-form">
              <div className="header">
                <h3>Manage :</h3>
                <button className='btn btn-green m-1' onClick={()=>{
                  setbooks(true)
                  }}>Books</button>
                <button className='btn btn-green m-1' onClick={()=>{setbooks(false)}}>Announcements</button>
              </div>
              <div className="search-admin">
                <div className="search">
                  <input className='search-input' type="text" name="search" value={search} onChange={(e)=>{
                    setsearch(e.target.value)
                  }}/>
                  <button className='btn btn-green m-1' onClick={()=>{
                    if(books){
                      getallbooks(search)
                    }else{
                      getallannounce(search)
                    }
                  }}>Search</button>
                </div>
              </div>
              <div className="allbooks mb-1">
             {
              !books? 
              <>
                {
                  announce.map((elem)=>{
                 return  <div className="book mb-1">
                 <img className='m-1' src={elem.url} alt="" />
                 <div className="info mt-1">
                   <h3 className='mb-1'>{elem.title}</h3>
                   <p className='mt-1 max-height'>{elem.description}</p>
 
                 </div>
                 <button className='btn btn-rm' onClick={()=>{delannouncement(elem._id)}}>Remove</button>
 
               </div>
                  })
                }
              </>
           : <>
         {
          allbooks.map((elem)=>{
            return  <div className="book mb-1">
            <img className='m-1' src={elem.url} alt="" />
            <div className="info mt-1">
              <h3>{elem.title}</h3>
              <h3>{elem.publisher}</h3>
              <h3>{elem.Date_published}</h3>
              <h3>{elem.ISBN}</h3>
              <h3>{elem.Author}</h3>

            </div>
            <button className='btn btn-rm ' onClick={()=>{delbook(elem._id)}}>Remove</button>
          </div>
          })
         }
           </>
             }
             </div>
            </div>
            <div className="admin-form">
              <div className="form w-100 h-20 mb-1">
                <h3 className='mb-1'>You are logged in As (Admin)</h3>
                <button className='btn btn-green ' onClick={()=>logout()}>Sign Out</button>
              </div>
              <div className="form w-100 h-91 mt-1 ">
               {
                books? <form className='input-form'>
                <label >Title</label>
                <input type="text" value={title} onChange={
                  (e)=>{settitle(e.target.value)}
                } />
                <label >Author</label>
                <input type="text" value={author} onChange={
                  (e)=>{setauthor(e.target.value)}
                } />
                <label >ISBN</label>
                <input type="text" value={isbn} onChange={
                  (e)=>{setisbn(e.target.value)}
                } />
                <label >Date_published</label>
                <input type="date" value={date_published} onChange={
                  (e)=>{setdate_published(e.target.value)}
                } />
                <label >link</label>
                <input type="text" value={link} onChange={
                  (e)=>{setlink(e.target.value)}
                } />
                <label >publisher</label>
                <input type="text" value={publisher} onChange={
                  (e)=>{setpublisher(e.target.value)}
                } />
                <label >Add Image</label>
                <div>
                  <input type="file" onChange={(e)=>{
                    const file=e.target.files[0]
                    const reader=new FileReader()
                    reader.readAsDataURL(file)
                    reader.onloadend=()=>{
                      console.log('load')
                      if(reader.readyState===2){
                        console.log('init')
                        setimage(reader.result)
                      }
                    }
                    
                      
                  }}/>
                  <button className='btn btn-green ' onClick={(e)=>{
                    e.preventDefault()
                    addbook({title,link:link,image,Author:author,ISBN:isbn,publisher,link,Date_published:date_published})
                    
                  }}>{loading?'Loading...':'Upload'}</button>
                </div>
              </form>: <form className='input-form'>
                  <label >Title</label>
                  <input type="text" value={title} onChange={
                    (e)=>{settitle(e.target.value)}
                  } />
                  <label >Description</label>
                  <textarea name="desc" cols="80" rows="10" value={desc} onChange={
                    (e)=>{setdesc(e.target.value)}
                  }></textarea>
                  <label >Add Image</label>
                  <div>
                    <input type="file" onChange={(e)=>{
                      const file=e.target.files[0]
                      const reader=new FileReader()
                      reader.readAsDataURL(file)
                      reader.onloadend=()=>{
                        console.log('load')
                        if(reader.readyState===2){
                          console.log('init')
                          setimage(reader.result)
                        }
                      }
                      
                        
                    }}/>
                    <button className='btn btn-green ' onClick={(e)=>{
                      e.preventDefault()
                      addanounce({title,description:desc,image})
                      
                    }}>{loading?'Loading...':'Upload'}</button>
                  </div>
                </form>
               }
              </div>
            </div>

          </div>
          : <div className='grey'>
             <div className="form">
             <h3 className='mb-1' onClick={()=>console.log(me)}>You are logged in As {me?.name}</h3>
                <button className='btn btn-green ' onClick={()=>logout()}>Sign Out</button>
             </div>
          </div>
      }
    </> :
      <div className='grey'>
        <form className='form' >
          <div className='label' >Email:</div>
          <input type="email" className='input' value={email} onChange={(e)=>{
            setemail(e.target.value)
          }} />
          <div className='label' >Password:</div>
          <input type="password" className='input' value={password} onChange={(e)=>{
            setpassword(e.target.value)
          }}/>

        </form>
        <div>
          <button className='btn btn-green m-3' onClick={
            (e)=>{e.preventDefault() 
              loginfun({email,password})
            }
          }>Login</button>

          <button className='btn btn-green m-3' onClick={() => { navigate('/register') }}>Goto Register</button>
        </div>

      </div>



  )
}

export default Login