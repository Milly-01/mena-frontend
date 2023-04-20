import React, { useEffect, useState } from "react";


import { useContext } from "react";
import { MyContext } from "./MyContext";

import axios from "axios";

import Navbar from "./Navbar";
import User from "./User";

import "./Cart.css";

import { useNavigate } from "react-router-dom";


import Swal from "sweetalert2";

function Cart(){
    const {sii_email, sii_name} = useContext(MyContext);
    const [my_food, setmyfood] = useState([]);

    const navigate = useNavigate();

    let calc = true;


    useEffect(function(){
        axios.post("http://localhost:3001/getfood", {sii_email})
            .then(function(response){
                setmyfood(response.data);     
            })      
    });

    useEffect(() => {
        const data1 = window.localStorage.getItem('my_food');
        if(data1){
          setmyfood(JSON.parse(data1));
        }
      },[]);
    


    useEffect(() => {
        window.localStorage.setItem('my_food', JSON.stringify(my_food));
      }, [JSON.stringify(my_food)]);




  


 

    function handleCheckOut(){
        axios.post("http://localhost:3001/checkout", {sii_email})
            .then(function(response){{
                Swal.fire(
                    'Payment',
                    "Order received",
                    'success'
                  )
                navigate("/payment");
            }})
    }


    function calcTotal(){
        var t=0;
        for(var i=0; i<my_food.length; ++i){
            t+=my_food[i].ap_product_price;
            // settotalprice(t);
        }
        
        return(
            <div>
                <p className="total-price">Total - {"R"+t}</p>
                <button onClick={handleCheckOut} className="time-to-pay">Proceed to Check Out</button>
            </div>
        );
    }



    function GoodsComponent(){
        return(
            <div>
                {
                    my_food.map(food => (
                        <div className="ap-my-food">
                            <h3 className="ap-product">{food.ap_product_name}</h3>
                            <p className="ap-price">{"- R"+food.ap_product_price}</p>
                            <hr></hr>
                        </div>
                    ))
                }
            
                    {calc ? calcTotal() : null}
                  
                  

    
            </div>
        );
    }

    return(
        <div>
            <Navbar/>
            <User initial={sii_name.substring(0,1)}/>
             {my_food.length === 0? <h3 className="not-began-shopping">You have not began shopping</h3> : GoodsComponent()}
        </div>
        
    );
}

export default Cart;