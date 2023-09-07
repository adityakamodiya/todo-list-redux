import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { previousproduct, nextproduct } from './ProductSlice'
import { fetchapi } from './ProductSlice'
import "./slider.css"

function Home() {
  
  const selector = useSelector((state) => { return state.slicered })
  const dispatch = useDispatch();


  
  useEffect(() => { 
   
                    dispatch(fetchapi(selector.currentstat))
              
                    console.log(selector.arr.id)
                  }, [selector.currentstat])

  return(
    
    <>
    <div id='wrapper'>
     <div className='box'>
          {(selector.loader)?<div><h2>Loading...</h2></div>:<img src={ selector.arr.thumbnail}></img>}
          
          
          
        
         <h3>{selector.arr.title}</h3>
    
         </div>
         { (selector.currentstat != 1)?
        <button className='previous'onClick={(e)=>dispatch(previousproduct())} >previous</button>:
        <button disabled >previous</button>
      }
      {(selector.currentstat !=29)?
        <button className='next' onClick={(e)=>dispatch(nextproduct())}>next</button>:
        <button disabled>next</button>
      }
</div>
    </>
  )
  

  
  
}

export default Home
