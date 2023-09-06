import axios from 'axios'
import React, { useEffect, useState } from 'react'
let i =1;
function Home() {
    const [img,setimg] = useState('')
    function nextfunc(){
        i++
        axios.get("https://dummyjson.com/products/"+i)
    .then((res) => {
        // dispatch(Callapi(res.data.products[i].thumbnail)
        // setbackImg(res.data.products[i].thumbnail)
        
        console.log(res.data.thumbnail)
        console.log(res.data.id)
        setimg(res.data.thumbnail)
    })
    }
    useEffect(()=>
    
nextfunc()
    ,[])
  return (
    <>
    <img src={img}></img>
    <button onClick={nextfunc}>next image</button>
    </>
  )
}

export default Home
