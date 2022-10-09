import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Login from '@/pages/Login'
import Layout from '@/pages/Layout'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* 创建路由path和组件对应关系 */}
        <Routes>
          <Route path='/' element={<Layout />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
