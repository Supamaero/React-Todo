import React from 'react';
import TodoItem from './todoItem.js';

class Todo extends React.Component{
    render(){
        
        return this.props.todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
                 delTodo={this.props.delTodo} delAll={this.props.delAll}/>
            ));    
    }
}
export default Todo;
