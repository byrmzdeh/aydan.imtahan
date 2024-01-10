import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import './sass/style.scss'
import Navbar from './layouts/Navbar';
import Basket from './components/Basket';
import AddPage from './components/AddPage';
import Detail from './components/Detail';
import MainLayout from './MainLayout';
import Wishlist from './components/Wishlist';


const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Detail />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/add" element={<AddPage />}></Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App