import React from "react";
import "./User.css";


function User(props){
    return(
            <div className="user-initial">
                {props.initial}
            </div>
     
    );
}

export default User;