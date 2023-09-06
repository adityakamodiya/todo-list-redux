import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { setinput } from './Slice'

function Ui() {
  const initialinput = useSelector((state)=>{ return state.capreducer});
  const dispatch = useDispatch();
  return (
    <>
      <p>sjnf4eiodfj</p>
      <input placeholder='copy this hers...' value={initialinput.input} onChange={(e)=>dispatch(setinput(e.target.value))}></input>
      <button>click here</button>
      <button>refresh</button>   
    </>
  )
}

export default Ui
