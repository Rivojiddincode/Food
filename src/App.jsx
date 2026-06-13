import { Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import Book from "./pages/Book/Book"
import Sections from "./pages/About/Sections"
import Contact from "./pages/Contact/Contact";
import Header from "./components/Heder"
import Footer from "./components/Footer"
import Page1 from "./pages/Page1/Page1"
import Menu from "./pages/Menu/Menu"
import Blog from "./pages/Blog/Blog"
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<Sections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page" element={<Page1 />} />
        <Route path="/blog" element={<Blog />} />
           <Route path="/menu" element={<Menu/>} />




      </Routes>
      <Footer />
    </div>
  )
}

export default App