import React, { Component } from 'react';
import {Link} from "react-router-dom";
import home from "../icons/home.svg";

class Incomplete extends Component {
    render() {
        return (
            <div className="incomplete">
                <Link to="/"> <img src={home} alt="" height="24px" width="24px" /></Link>     
                <h2> Incomplete task </h2>
            </div>
        )
    }
}

export default Incomplete;
