import React,{Component, lazy} from "react";
import Hello from "./components/Hello";
import Head from "./components/todoList/Head"
import List from "./components/todoList/List"
import Tail from "./components/todoList/Tail"
import './App.css'

export default class APP extends Component{

    //初始化状态
	state = {todos:[
		{id:'001',name:'吃饭',done:true},
		{id:'002',name:'睡觉',done:true},
		{id:'003',name:'打代码',done:false},
		{id:'004',name:'逛街',done:false}
	]}

    addTodo = (todo)=>{
        const {todos} = this.state
        const newTodos = [todo,...todos]
        this.setState({
            todos:newTodos
        })
    }

    changeChecked = (id,done) => {
        const {todos} = this.state
        const newTodos = todos.map((todo) => {
            return todo.id === id ? {...todo,done} : todo
        })
        this.setState({
            todos:newTodos
        })
    }

    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        })
        this.setState({
            todos:newTodos
        })
    }

    checkAllDone = (done) => {
        const {todos} = this.state
        const newTodos = todos.map((todo) => {
            return {...todo,done}
        })
        this.setState({
            todos:newTodos
        })
    }

    clearDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter((todo) => {
            return !todo.done
        })
        this.setState({
            todos:newTodos
        })
    }

    render() {
        return(
            <div className="todo-container">
		        <div className="todo-wrap">
                    <Hello/>
                    <Head addTodo={this.addTodo}/>
                    <List todos={this.state.todos} changeChecked={this.changeChecked} deleteTodo={this.deleteTodo}/>
                    <Tail todos={this.state.todos} checkAllDone={this.checkAllDone} clearDone={this.clearDone}/>
                </div>
            </div>
        )
    }
}