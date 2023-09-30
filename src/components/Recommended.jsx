import React from 'react'
import Buttons from '../buttons/Buttons'

const Recommended = ({ handleClick}) => {
  return (
    <>
      <div className="btns" style={{marginLeft:"13rem"}}>
       <h3>Recommended</h3>
        <Buttons onclck={handleClick} value=""title="All Products"/>
        <Buttons onclck={handleClick} value="Nike"title="Nike"/>
        <Buttons onclck={handleClick} value="Adidas"title="Adidas"/>
        <Buttons onclck={handleClick} value="Puma"title="Puma"/>
        <Buttons onclck={handleClick} value="Vans"title="Vans"/>
      </div>
    </>
  )
}

export default Recommended
