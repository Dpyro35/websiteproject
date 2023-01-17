import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import context from '../context/context'
import './products.css'
const Products = () => {
const navigate=useNavigate()
const a= useContext(context)
const getallbooks=a.getallbooks;
const allbooks=a.allbooks;
const {value}=useParams()
useEffect(() => {
    if(value==='null'){
        getallbooks()
    }else{
        getallbooks(value)
    }
}, [])

    return (
        <div className='main'>
            <div className="green">
                {/*  */}
                {
                    allbooks.map((elem)=>{
                    return  <div className="product">
                    <img className='pointer' onClick={()=>{navigate(`/product/${elem._id}`)}} src={elem.url} alt="" />
                    <div className="info">
                        <div className="title">{elem.title}</div>
                        <div className="author">{elem.Author}</div>
                        <div className="date">{elem.Date_Published}</div>
                        <div className="publisher">{elem.publisher}</div>
                        <div className="isbn">{elem.ISBN}</div>
                    </div>
                </div>
                    })
                }
            </div>
        </div>
    )
}

export default Products