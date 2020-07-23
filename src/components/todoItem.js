import React from 'react';
import trash from '../icons/trash.svg';



class TodoItem extends React.Component {
    getStyle = () => {
        return {
            padding:"17px 14px",
            borderBottom:"1px solid black",
            color: this.props.todo.completed ? 'green':'#91A5B2',
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            textAlign:"left",
            // backgroundColor:"red",
               }   
    }
    
checkStyle={
    height:"24px",
    width:"24px",  
    backgroundColor:"#91A5B2",   
    border:"none" 
}
    
delStyle = {
    height:"24px",
    width:"24px",
    border:"none",
    borderRadius:"4px",
    color:"#fafafa",
    cursor:"pointer",
}

    render() {
//Deconstructor 
        const{id, task} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                    <button type="checkbox"  style={this.checkStyle} onClick={this.props.markComplete.bind(this, id)}> x </button>
                    <h3 style={this.flexStyle}>  {task}  </h3>
                    <img src={trash} alt="" style={this.delStyle} onClick={this.props.delTodo.bind(this, id)} />
                </div>        
        );
    }
}
export default TodoItem;
