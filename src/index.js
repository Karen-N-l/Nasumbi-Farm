import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import About from "./Routes/AboutPage";
import Products from "./Routes/ProductsPage";
import Contact from "./Routes/ContactPage";
import All from "./Routes/Allpage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
    <Route path='/'element={<App/>}/>
     
     <Route path='/about'element={<About/>}/>
     <Route path='/products'element={<Products/>}/>
     <Route path='/contact'element={<Contact/>}/>
     <Route path='/all'element={<All/>}/>


   </Routes>
  </BrowserRouter>
);


