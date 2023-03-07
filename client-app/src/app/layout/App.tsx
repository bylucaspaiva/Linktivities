import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';
import { setupResponseInterceptor } from '../api/agent';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoaded, setIsLoaded] = useState(false)
    if (!isLoaded) {
        setIsLoaded(true)
    setupResponseInterceptor(navigate)
    }

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);
