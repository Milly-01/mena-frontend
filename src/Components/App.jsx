import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";


import Navbar from "./Navbar";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";
import Payment from "./Payment";

import { MyContext } from "./MyContext";
import { useState } from "react";

import { useEffect } from "react";

function App(){
    const [sii_name, settName] = useState('');
    const [sii_email, settEmail] = useState('');


    useEffect(() => {
      const data = window.localStorage.getItem('sii_name');
      if(data){
        settName(data);
      }
    },[]);

    useEffect(() => {
      const data1 = window.localStorage.getItem('sii_email');
      if(data1){
        settEmail(data1);
      }
    },[]);
  
    useEffect(() => {
      window.localStorage.setItem('sii_name', sii_name);
    }, [sii_name]);

    useEffect(() => {
      window.localStorage.setItem('sii_email', sii_email);
    }, [sii_email]);

    return(
        <div>

          <BrowserRouter>

            <MyContext.Provider value={{sii_name, sii_email, settName, settEmail}}>
             <Routes>
                  <Route path={"/"} element={<Signup/>}/>
                  <Route path={"/signup"} element={<Signup/>}/>
                  <Route path={"/signin"} element={<Signin/>}/>
                  <Route path={"/home"} element={<Home/>}/>
                  <Route path={"/product"} element={<Product/>}/>
                  <Route path={"/cart"} element={<Cart/>}/>
                  <Route path={"/payment"} element={<Payment/>}/>
              </Routes>
            </MyContext.Provider>
             
          </BrowserRouter>
        </div>
    );
}


export default App;