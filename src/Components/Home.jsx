import React from "react";

import Navbar from "./Navbar";

import { useContext } from "react";
import { MyContext } from "./MyContext";

// import { myproducts } from "./myproducts";

import "./Home.css";

import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import User from "./User";

function Home(){
    const {sii_name, sii_email, settName, settEmail} = useContext(MyContext);
    const [myproducts, setProducts] = useState([]);



  


    useEffect(function(){
        axios.get("http://localhost:3001/home")
            .then(function(response){
                setProducts(response.data);
            });
    });


    const navigate = useNavigate();

    function viewInDetail(product_name){
        navigate("/product",{
            state: {
                ps_name: product_name
            }
        }       
        );
    }




    return(
        <div>
            <Navbar/>
            <User initial={sii_name.substring(0,1)}/>

            <div className="contain-them">
                <h1 className="some-products-heading">Some of our products</h1>
                <div className="my-products">
                    {
                        myproducts.map(product=>(
                            <div key={product.p_id} className="my-product">
                                <img className="products-images-1" src={product.p_image} alt={product.p_name+" image"}></img>
                                <div className="my-details">
                                    <h3 className="product-name">{product.p_name}</h3>
                                    <p className="product-price">R{product.p_price}</p>
                                </div>
                                <button onClick={()=>viewInDetail(product.p_name)} className="my-product-btn">View In Detail</button>
                            </div>
                        ))
                    }

                </div>
            

            </div>
           
        </div>
    );
}

export default Home;