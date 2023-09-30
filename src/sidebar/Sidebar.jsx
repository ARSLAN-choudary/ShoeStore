import React from "react";

import Prices from "../prices/Prices";
import Colors from "../Colors/Colors";
import Category from "../category/Category";
import { BsCart4 } from "react-icons/bs";

const Sidebar = ({handleChange}) => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary position-fixed"
        style={{ width: " 200px" }}>
        <a href="/"className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <BsCart4 style={{ width: "25", height: "25", marginLeft: "4rem",marginTop:"-5px" }} />
        </a>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link" aria-current="page">
              <Category handleChange={handleChange} />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis"style={{marginTop:"-12px"}}>
              <Prices handleChange={handleChange} />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis"style={{marginTop:"-12px"}}>
              <Colors handleChange={handleChange}/>
            </a>
          </li>
        </ul>
        <hr />
        <div />
      </div>
    </>
  );
};

export default Sidebar;
