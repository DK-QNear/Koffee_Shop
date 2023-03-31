import './App.css';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Header from './components/Header.js'
import Section from './components/Section.js'
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';


function App() {
  return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/menu' element={<Menu/>}/>
              <Route path='/about' element={<About/>}/>
            </Routes>
          </BrowserRouter>
        <Header />
        <Section />
        </div>
      </div>
  );
}

export default App;
