import { useContext } from 'react';
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import context from '../context/context';
import './oneproduct.css'

const Oneproduct = () => {
  const a=useContext(context)
  const getonebook=a.getonebook;
  const onebook=a.onebook
  const {id}=useParams()
  useEffect(() => {
   getonebook(id)
   console.log(onebook)
  }, [])
  
  
  return (
    <div className='grey overflow'>
       <div className="form  overflow w-80">
        
       <div className="product announce one">
                <img src={onebook.url} alt="" />
                <div className="title">Title:{onebook.title}</div>
                <div className="title">ISBN:{onebook.ISBN}</div>
                <div className="title">Publisher:{onebook.publisher}</div>
                <div className="title">Date Published:{onebook.Date_published}</div>
                <div className="title">Author:{onebook.Author}</div>
                <div className="title"><a href={onebook.link}>Read it...</a></div>
            </div>
       </div>
    </div>
  )
}

export default Oneproduct