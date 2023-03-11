import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
const Login = lazy(() => import('pages/login'))

function App(props) {

  return (
    <Suspense fallback={<LoadingOutlined />}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
