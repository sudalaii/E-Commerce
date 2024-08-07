

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Addtocart from './Addtocart';
import Admin from './Admin';
import FormData from './FormData';
import UserDetails from './UserDetails';
import HomeNav from './HomeNav';
import AdminNav from './AdminNav';
import NotFound from './NotFound';
import Home2 from './Home2';
import Product from './Product';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FormData />} />
        <Route path="*" element={<NotFound/>} />

        <Route element={<HomeNav />}>
          <Route path='/home' element={<Home />} />
          <Route path='/home2' element={<Home2/>}/>
          <Route path='addtocart' element={<Addtocart />} />
          <Route path='/data' element={<FormData />} />
        </Route>
        <Route element={<AdminNav />}>
          <Route path='/admin' element={< Admin/>} />

          
          <Route path='/details' element={<UserDetails />} />
          <Route path='/product' element={<Product/>} />
        </Route>
      </Routes>


    </BrowserRouter>
  );
};

export default App;
