import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import { Routes} from './Routes';

import './App.css';

function App(){
  const [user, setUser] = useState(null);

  if(user === null){
    return (
      <Login />
    )
    };
  return (
    <BrowserRouter>

    <Routes/>
   
    </BrowserRouter>
  );
}
export default App;