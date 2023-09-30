import React from 'react'

const Buttons = ({onClickHandler,value,title}) => {
  return (
    <>
     <button type="button" className="btn btn-outline-info mx-1"onClick={onClickHandler}value={value}>{title}</button> 
    </>
  )
}

export default Buttons
