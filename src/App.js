import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Parent from "./Parent";
import React from "react";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<div className="">Home page</div>} />
            <Route path="/about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="registration" element={<Form />} />
            <Route path="/question1" element={<Parent />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
