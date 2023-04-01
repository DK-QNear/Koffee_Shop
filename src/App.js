import './App.css';
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import Home from './components/Home';
import Book from './components/Book';
import Menu from './components/Menu';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/Book" element={<Book/>}/>
      </Routes>
    </BrowserRouter>      
  );
}

export default App;
