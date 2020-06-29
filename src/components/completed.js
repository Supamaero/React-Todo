import React, { Component } from 'react';
import {Link} from "react-router-dom";
import home from "../icons/home.svg"

class Completed extends Component {
    render() {
        return (
            <div className="complete">
               <Link to="/"> <img src={home} alt="" height="24px" width="24px" /> </Link> 
               <h2> Complete task </h2>
            </div>
        )
    }
}

export default Completed;
