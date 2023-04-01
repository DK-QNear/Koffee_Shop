import './App.css';
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import { Fragment } from 'react';
import Header from './components/Header.js'
import Section from './components/Section.js'
import Home from './components/Home';
import Book from './components/Book';
import Menu from './components/Menu';
import BookingHome from './components/BookingHome'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/Book" element={<Book/>}/>
      </Routes>
    </BrowserRouter>      
    // <BookingHome/>
  );
}

export default App;
