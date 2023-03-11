import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
const Login = lazy(() => import('pages/login'))

function App(props) {
  useEffect(() => {
    let currentUser = sessionStorage.getItem('current_user');
    if (currentUser) {
      props.init_current_user(JSON.parse(currentUser))
    }
  }, [])

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
