import React from 'react';
import {BrowserRouter as Router, Switch ,  Route} from "react-router-dom";
import Todo from './todo';
import Header from './header.js';
import AddTodo from './addTodo';
import Incomplete from './incomplete';
import Completed from './completed';
import DeleteAll from './deleteAll';
import Error from "./error";
import '../App.css';
import {v4 as uuid} from 'uuid';
import "../style/style.scss";

class Container extends React.Component{
  state ={
    todos: 
    [
      // {
      //   id: uuid(),
      //   task:"Sweep the house",
      //   completed:true
      // },
      // {
      //   id:uuid(),
      //   task:"Wash the dishes",
      //   completed:true
      // },
      // {
      //   id:uuid(),
      //   task:"Mop the floor",
      //   completed:true
      // },
    ]
  };


  //Toogle comeplete

  markComplete =(id)=> {
    this.setState({
      todos:this.state.todos.map(todo =>{
        if(todo.id===id){
          todo.completed = !todo.completed
        }
        return todo;
      })});

}
  

//del todo

delTodo = (id) => {
  this.setState({
    todos:[...this.state.todos.filter(todo => todo.id !== id)]
  });

}


// del all

delAll = (id) => {
    this.setState({
      todos:[]
    });
}

//Add Todo (Input)

AddTodo = (task) =>{
  const newTodos = {
    id:uuid(),
    task:task,
    confirm:false,
  }
  this.setState({
    todos:[...this.state.todos, newTodos]
  });

}

  render(){
    return(

      <Router>
        <Switch>
          <div className="containerStyle">
                  <Route exact path="/" component={Header}/>
                  <Route  path="/Complete" component={Completed} />
                  <Route  path="/Incomplete" component={Incomplete} />
                  <div >
                      <Route exact path="/" render={props =>(
                          <React.Fragment>
                            <AddTodo AddTodo={this.AddTodo} />
                            <DeleteAll delAll={this.delAll} />
                            <Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}  />
                          </React.Fragment> 
                          )} />
                  </div>
          </div>
          <Route component ={Error} />   
      </Switch>
   </Router>
      
    );
  }
}

export default Container;
