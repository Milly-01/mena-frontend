import React, { useContext, useState } from "react";

import Navbar from "./Navbar";


import { useLocation } from "react-router-dom";

import axios from "axios";
import { useEffect } from "react";

import "./Product.css";
import { MyContext } from "./MyContext";


import User from "./User";

import Swal from "sweetalert2";


function Product(){
    const location = useLocation();
    const [l_p_name, setLPName] = useState("");
    // const [product_details, setPD] = useState({});

    const {sii_name, sii_email } = useContext(MyContext);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const [rate, setRate] = useState(0);
    const [instock, setInstock] = useState(0);
    const [description, setDescription] = useState("");


    useEffect(function(){
        setLPName(location.state.ps_name);
        axios.post('http://localhost:3001/product', {l_p_name})
            .then(function(result){
                setImage(result.data.p_image);
                setName(result.data.p_name);
                setId(result.data.p_id);
                setCategory(result.data.p_category);
                setPrice(result.data.p_price);
                setRate(result.data.p_rate);
                setInstock(result.data.p_instock);
                setDescription(result.data.p_description);
            });
    });


    function addmetoCart(){
        axios.post("http://localhost:3001/addtocart", {sii_name, sii_email, name, price})
            .then(function(response){
                // alert(response.data);
                Swal.fire(
                    'Shopping',
                    response.data+". Keep shoping, and when you are done, review your cart in order to checkout",
                    'success'
                  )

               
            }) 
    }


    function afterLoading(){
        return(
            <div>
                 <div className="row my-row">
                <div className="col-md-6">
                    <img className="view-image" src={image} alt={name+" image"}></img>
                    
                </div>
                <div className="col-md-6">
                    <div>
                        <h1 className="food-name">{name}</h1>
                        <hr></hr>
                        <p className="category">{category}</p>
                        <p className="description">{description}</p>

                        <hr></hr>

                        <p><label className="price">Price</label> : <div className="kota-price">R{price}</div></p>
                        <p><label className="status">Status</label> :<div className="available">Available</div></p>

                        <hr></hr>

                        <button onClick={addmetoCart} className="my-product-btn2">Add to cart</button>


                    </div>
                    

                

                  
                </div>


            </div>
            </div>
        );
    }

    return(

        <div>
            <Navbar/>
            <User initial={sii_name.substring(0,1)}/>
            {image?afterLoading() : <p className="loading-component">Loading...</p>}

        </div>
       
    );
}

export default Product;