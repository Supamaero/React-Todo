import React from 'react';


class AddTodo extends React.Component {

    state={
        title:""
    }

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({title:"" });
    }


    onChange =(event) =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    render() {

        
        return (
            <form onSubmit={this.onSubmit} style={this.formStyle}>
                <div className="input_together">
                    <input type="text" name="title" className="inputStyle" value={this.state.title} onChange={this.onChange}  />
                    <input type="submit"  className="submmitButton" value="Add Task" />
                </div>
            </form>           
        );
    }


    // inputStyle={
        // marginTop:"27px",
        // width:"308px",
        // border:"1px solid #000000",
        // borderRadius:"2px",
        // backgroundColor:"transparent",
        // padding:"10px 0px",
        // fontSize:"12px",
        // fontStyle:"normal",
        // fontWeight:"normal",
        // paddingLeft: "32px",
    // }

   
    // submitStyle ={
    //     background:"#050505",
    //     borderRadius:"2px",
    //     color:"#fafafa",
    //     marginLeft:"12px",
    //     border:"none",
    //     padding:"8px 10px",
    //     fontSize:"12px",
    //     fontStyle:"normal",
    //     fontWeight:"normal"
    // }

}

export default AddTodo;