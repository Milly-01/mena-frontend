import React from "react";


import "./Signin.css";

import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { useContext } from "react";
import { MyContext } from "./MyContext";

import Swal from 'sweetalert2';

function Signin(){
    const [si_name, setName] = useState('');
    const [si_email, setEmail] = useState('');
    const [si_password, setPassword] = useState('');

    const {sii_name, sii_email, settName, settEmail} = useContext(MyContext);

    const navigate = useNavigate();


    function handleChangeName(event){
        setName(event.target.value);
    }

    function handleChangeEmail(event){
        setEmail(event.target.value);
    }

    function handleChangePassword(event){
        setPassword(event.target.value);
    }

    function handleSubmitSignIn(event){
        event.preventDefault();
        axios.post("http://localhost:3001/signin", {si_password, si_email, si_name})
            .then(function(response){
                if(response.data === "Success"){
                    Swal.fire(
                        'Sign In',
                        'Successfully logged in',
                        'success'
                      )
                    settEmail(si_email);
                    settName(si_name);
                    navigate("/home");
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Try logging in again/or sign up!',
                      })
                }
            });

    }



    return(
            <div className="row margin-row-si">
                <div className="col-md-3"></div>
                <div className="col-md-6 center-me-in">

                <div className="card">
                    <div className="card-body">
                    <form className="form-si" onSubmit={handleSubmitSignIn}>  

                        <h1 className="si-heading">Signin</h1>

                        <label className="input-labels">Name</label>
                        <br></br>
                        <input required className="input-su" value={si_name} onChange={handleChangeName}></input>
                        <br></br>




                        <label className="input-labels">Email</label>
                        <br></br>
                        <input required className="input-si"  value={si_email} onChange={handleChangeEmail}></input>
                        <br></br>


                        <label className="input-labels">Password</label>
                        <br></br>
                        <input required className="input-si" value={si_password} onChange={handleChangePassword}></input>
                        <br></br>

                        <button type="submit" className="btn-si">Submit</button>
                        <br></br>
                        <br></br>
                        <Link to={"/signup"} className="signin-link">Don't have an account? Signup</Link>
                        </form>


                    </div>

                </div>

                   
                </div>
                <div className="col-md-3"></div>
            </div>
    );
}

export default Signin;