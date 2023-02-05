import logo from './logo.svg';
import Food  from './Components/Food'
import Menu from './Components/Menu'
import Navbar from './Components/Navbar'
import { useState } from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Order from './Components/Order';

function App() {
  const [count,setCount]=useState(0);
  return (
   <>
  <BrowserRouter>
      <Navbar count={count} setCount={setCount}/>
      <Routes>
      <Route
          path="/"
          element={
            <>
            <Food/>
            </>
          }
        />
        <Route
          path="/:foodId"
          element={
            <>
             <Menu count={count} setCount={setCount}/>
            </>
          }
        />
         <Route
          path="/order"
          element={
            <>
             <Order/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
