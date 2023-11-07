import React from "react";
import './App.css';
import Nav from "./nav";
import Home from './home';
import Footer from "./footer";
import ProductPage from './productPage';
import Blog from "./blog";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    <div className="max-w-screen-2xl text-base mx-auto font-Karla">
      <Nav/>
      <Routes>
          <Route >
            <Route path="/" exact element={<Home />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
