import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header.js'
import Section from './components/Section.js'
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Help from './components/Help';

function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <Section />
        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/about" exact>
              <About />
            </Route>

            <Route path="/menu" exact>
              <Menu />
            </Route>

            <Route path="/help" exact>
              <Help />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
