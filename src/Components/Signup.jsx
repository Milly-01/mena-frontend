import React from "react";


import "./Signup.css";

import { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';

function Signup(){
    const [su_name, setName] = useState('');
    const [su_surname, setSurname] = useState('');
    const [su_email, setEmail] = useState('');
    const [su_password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleChangeName(event){
        setName(event.target.value);
    }

    function handleChangeSurname(event){
        setSurname(event.target.value);
    }

    function handleChangeEmail(event){
        setEmail(event.target.value);
    }

    function handleChangePassword(event){
        setPassword(event.target.value);
    }

    function handleSubmitSignUp(event){
        event.preventDefault();
        axios.post("http://localhost:3001/signup", {su_name, su_surname, su_email, su_password})
            .then(function(response){
                if(response.data === "Success"){
                    Swal.fire(
                        'Sign Up!',
                        'User successfully created',
                        'success'
                      )
                    navigate("/signin");
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Try signing up again/log in',
                      })
                }
               
              
            });


    }


    return(
            <div className="row margin-row-su">
                <div className="col-md-3"></div>
                <div className="col-md-6 center-me-su">

                <div className="card">
                    <div className="card-body">
                    <form className="form-su" onSubmit={handleSubmitSignUp}>

                        <h1 className="su-heading">Signup</h1>

                        <label className="input-labels">Name</label>
                        <br></br>
                        <input required className="input-su" value={su_name} onChange={handleChangeName}></input>
                        <br></br>


                        <label className="input-labels">Surname</label>
                        <br></br>
                        <input required className="input-su" value={su_surname} onChange={handleChangeSurname}></input>
                        <br></br>


                        <label className="input-labels">Email</label>
                        <br></br>
                        <input required className="input-su" value={su_email} onChange={handleChangeEmail}></input>
                        <br></br>


                        <label className="input-labels">Password</label>
                        <br></br>
                        <input required className="input-su" value={su_password} onChange={handleChangePassword}></input>
                        <br></br>

                        <button type="submit" className="btn-su" >Submit</button>
                        <br></br>
                        <br></br>
                        <Link to={"/signin"} className="signin-link">Already have an account? Login</Link>
                        </form>

                    </div>

                </div>
                   

                </div>
                <div className="col-md-3"></div>
            </div>
    );
}

export default Signup;