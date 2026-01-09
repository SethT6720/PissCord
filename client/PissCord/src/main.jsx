import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserProvider } from './context/UserContext';
import Landing from './components/Landing';
import Chat from './components/Chat';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
)
