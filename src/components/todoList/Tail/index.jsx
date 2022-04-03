import React, { Component } from 'react'
import './index.css'

export default class Tail extends Component {

	checkAllDone = (event) => {
		const {checkAllDone} = this.props
		checkAllDone(event.target.checked)
	}
	
	clearDone = () => {
		const {clearDone} = this.props
		clearDone()
	}

	render() {
		const {todos} = this.props
		const newTodos = todos? todos : []
		const success = newTodos.reduce((pre,todo) => pre + (todo.done ? 1 : 0),0)
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" checked={success == newTodos.length && success != 0 ? true : false} onChange={this.checkAllDone}/>
				</label>
				<span>
					<span>已完成{success}</span> / 全部{newTodos.length}
				</span>
				<button className="btn btn-danger" onClick={this.clearDone}>清除已完成任务</button>
			</div>
		)
	}
}
