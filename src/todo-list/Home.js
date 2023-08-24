import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Printvalue,Deleteval ,edit } from "./Todoslice";

function Home() {

  const [val,setval] = useState('')
  const [thisedit,setedit] = useState(null)
  const  [clear,setclear] = useState(true)
    const dispatch = useDispatch();
    const init = useSelector((state) => {
      return state.list.input;
    });


    function Handleadd(){
     if(thisedit==null){
     dispatch(Printvalue(val))}
     else if(!val){
      alert('write something')
     }
     else{
      dispatch(edit({index:thisedit,value:val}))
      setedit(null)
     }
     setval('')
    }
    function Clearall(){
        setclear(false)
      
    }
    function handleedit(e,item,index){
      setval(item)
      setedit(index)
    }
  return (
    <>     
           <input placeholder='write...'   onChange={(e)=> setval(e.target.value)   } value={val}  ></input>
           <button onClick={Handleadd}>click here</button>
           <button onClick={Clearall}>clear all</button>
           
          
           {
          init.map((res ,index)=>{
            return(
                 (clear)?
            <div  key={index}>

              {console.log(index)}
            <p>{res}</p>
            <button onClick={()=>dispatch(Deleteval(index))}>delete</button>
            <button onClick={(e)=>handleedit(e,res,index)}>edit this</button>
            </div> :''  )
          }) 
          }
          
    </>
  )
}

export default Home
