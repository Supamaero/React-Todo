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

}

export default AddTodo;