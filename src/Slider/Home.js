import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { previousproduct, nextproduct } from './ProductSlice'
import { fetchapi } from './ProductSlice'
import "./slider.css"

function Home() {

  
  const selector = useSelector((state) => { return state.slicered })
  const dispatch = useDispatch();

  // console.log(selector.loader)

  
  let   i =0
  let res
  useEffect(() => { 
   
                    // dispatch(Callapi(res.data.products[i].thumbnail))
                    dispatch(fetchapi())
                    // setbackImg(res.data.products[i].thumbnail)
              
  }, [])

  
  

  // console.log(res)
  return (
    <>
      <div id='wrapper'>
        {selector.arr.map((res,index)=>{
          
          if(selector.currentstat == index)
          
                    {
                      
         return(
         <div className='box'>
           {  (selector.loader)?
          <img src={ selector.arr[selector.currentstat].thumbnail}></img>
          :<p>loading...</p>
        }
    
        </div>)}
})}
      
        { (selector.currentstat != 0)?
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
