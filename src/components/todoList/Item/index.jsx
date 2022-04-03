import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {
    mouse:false
  }

  handleMouse = (flag) => {
    return ()=>{
      this.setState({
        mouse:flag
      })
    }
  }

  changeChecked = (id) => {
    return (event) => {
      const {changeChecked} = this.props
      changeChecked(id,event.target.checked)
    }
  }

  deleteTodo = (id) => {
    const {deleteTodo} = this.props
    deleteTodo(id)
  }

  render() {
    const {todo} = this.props
    const {id,name,done} = todo
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
				<label>
					<input type="checkbox" checked={done} onChange={this.changeChecked(id)}/>
					<span>{name}</span>
				</label>
				<button onClick={() => this.deleteTodo(id)} className="btn btn-danger" style={{display:mouse ? "block" : "none"}}>删除</button>
			</li>
    )
  }
}
