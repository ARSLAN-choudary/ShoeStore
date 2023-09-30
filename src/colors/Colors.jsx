import React from 'react'
import Inputs from '../components/Inputs'

const Colors = ({handleChnage}) => {
  return (
    <>
      <h5>Colors</h5>
      <div className="form-check">
      <input className="form-check-input" type="radio" name="test3" onChange={handleChnage} />
      <label className="form-check-label text-black" >
        All
      </label>
       </div>
       <Inputs onChange={handleChnage} value="black" title="Black" name="test3" color="black"/>
       <Inputs onChange={handleChnage} value="blue" title="Blue" name="test3" color="blue"/>
       <Inputs onChange={handleChnage} value="green" title="Green" name="test3" color="green"/>
       <Inputs onChange={handleChnage} value="red" title="Red" name="test3" color="red"/>
       <Inputs onChange={handleChnage} value="white" title="White" name="test3" color="white"/>
    </>
  )
}

export default Colors
