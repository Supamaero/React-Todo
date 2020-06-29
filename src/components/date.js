import React from 'react';
var moment = require('moment');


class Clock extends React.Component {

    constructor(props){
        super(props);
            this.state={ 
                time:new Date()
            }
      }

     
        componentDidMount() {
          this.timerID = setInterval(
            () => this.tick(),
            1000
          );
        }

        componentWillUnmount() {
          clearInterval(this.timerID);
        }
        
        tick() {
          this.setState({
            time: new Date()
          });
        }
     

    render() {

        return (
                <div> 
                    <h2 className="clockStyle">
                        {moment(this.state.time).format("dddd, MMMM DD")}  
                    </h2>  
                </div>
        )
    }
}

export default Clock;

