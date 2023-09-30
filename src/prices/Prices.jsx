import React from 'react'
import Inputs from '../components/Inputs'

const Prices = ({handleChnage}) => {
  return (
    <>
    <h5>Prices</h5>
    <div className="form-check">
      <input className="form-check-input" type="radio" name="test2" onChange={handleChnage} />
      <label className="form-check-label text-black" >
        All
      </label>
    </div>
    <Inputs onChange={handleChnage} value={50} title="$0-$50" name="test2"/>
    <Inputs onChange={handleChnage} value={100} title="$50-$100" name="test2"/>
    <Inputs onChange={handleChnage} value={150} title="$100-$150" name="test2"/>
    <Inputs onChange={handleChnage} value={200} title="Over$150" name="test2"/>
    </>
  )
}

export default Prices

