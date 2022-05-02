import logo from './logo.svg';
import React from 'react';
import { ReactDOM } from 'react';
import { Navbar } from './components/Navbar';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { NewOrder } from './components/NewOrder';
import { Orders } from './components/Order';
function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/login' element={<Login/>}>Login</Route>

      <Route path='/logout' element={<Logout/>}>Logout</Route>

      <Route path='/neworder' element={<NewOrder/>}>NewOrder</Route>

      <Route path='/order' element={<Orders/>}>Order</Route>

    </Routes>
    </div>
  );
}

export default App;
