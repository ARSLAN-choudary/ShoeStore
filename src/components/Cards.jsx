import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs"

const Cards = ({img,title,reviews,newPrice,prevPrice}) => {
  return (
    <>
      <div className="card" style={{ width: "12rem",height:"auto"} }>
              <img src={img} className="card-img-top" alt={title} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{reviews}</p>
                <p className="card-text">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  
                </p>
                <p>
                  <del className="me-2">{prevPrice}</del>{newPrice}
                  <BsFillBagHeartFill className="ms-5" />
                </p>
              </div>
            </div>
    </>
  )
}

export default Cards
