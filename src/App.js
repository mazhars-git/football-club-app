import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Team from './component/Team/Team';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Switch>
                <Route path="/home">
                  <Home/>
                </Route>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/detail/:idTeam">
                  <Team />
                </Route>
                <Route path="*">
                  <h1>404! error!!</h1>
                </Route>
            </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
