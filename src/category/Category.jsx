import React from 'react'
import Inputs from '../components/Inputs'

const Category = ({handleChnage}) => {
  return (
    <>
    <h5 className='text-black'>Categories</h5>
    <div className="form-check">
  <input className="form-check-input" type="radio" name="test" onChange={handleChnage} />
  <label className="form-check-label text-black" >
    All
  </label>
</div>
    <Inputs onChange={handleChnage}value="sneakers"title="Sneakers"name="test"/>
    <Inputs onChange={handleChnage}value="flats"title="Flats"name="test"/>
    <Inputs onChange={handleChnage}value="sandals"title="Sandals"name="test"/>
    <Inputs onChange={handleChnage}value="heels"title="Heels"name="test"/>
    </>
  )
}

export default Category
