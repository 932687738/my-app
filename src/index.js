//引入react核心库
import React from 'react'
//引入ReactDOM
import {createRoot} from 'react-dom/client'
//引入App
import App from './App'

import store from "./redux/store"


const root = createRoot(document.getElementById('root'))
root.render(<App/>)

store.subscribe(() => {
	root.render(<App/>)
})