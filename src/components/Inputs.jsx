import React from 'react'

const Inputs = ({handleChange,value,title,color,name}) => {
  return (
    <>
       <div className="form-check">
  <input className="form-check-input" type="radio" name={name} id="flexRadioDefault1"onChange={handleChange} value={value} style={{backgroundColor:color}}/>
  <label className="form-check-label text-black" >
    {title}
  </label>
  </div> 
    </>
  )
}

export default Inputs
