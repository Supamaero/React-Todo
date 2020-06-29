import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Clock from "./date";
import ActiveTask from './activeTask';


class Nav extends Component {
    render() {
        return (
        <div className="main">
            <div className="first">
                <div className="clock">
                    <Clock />
                </div>
              
                <ActiveTask />
            </div>
            <div className="second">
                <Link className="taskLink one" to={'/Incomplete'}>Incomplete Task</Link>
                <Link className="taskLink two" to={'/Complete'}> Completed Task</Link>
            </div>
        </div>   
        );
    }
}

export default Nav;