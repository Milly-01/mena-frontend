import React from "react";

import Navbar from "./Navbar";
import User from "./User";

import { useContext } from "react";
import { MyContext } from "./MyContext";

import { useState } from "react";


import "./Payment.css";

function Payment(){

    const {sii_name} = useContext(MyContext);

   

    return(
        <div>
            <Navbar/>
            <User initial={sii_name.substring(0,1)}/>
            <h1 className="payment-method">Your order has been taken and it is being prepared.</h1>
            <h4 className="payment-method">An email will be sent to you when your food is ready.</h4>
            <h6 className="payment-method">You will have to pay when you collect</h6>

            
           
        </div>
    );
}

export default Payment;